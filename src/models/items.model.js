const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const uuid = require("uuid");
const { SUCCESS, FAILURE, ERROR } = require("../constants/stringConstant");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
const RevenueTransactions = require("./RevenueTransactions");

const ItemsSchema = Schema({
  id: {
    type: Number,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});
autoIncrement.initialize(mongoose.connection);
ItemsSchema.plugin(autoIncrement.plugin, "id");

ItemsSchema.pre("save", function (next) {
  this.modified_at = new Date();
  next();
});

let Items = (module.exports = mongoose.model("Items", ItemsSchema));

// CREATE Item
module.exports.createItem = async (itemData) => {
  try {
    const item = await Items.create(itemData);
    console.log("create item DB response", item);
    if (item)
      return {
        data: item,
        status: SUCCESS,
        msg: "Item Created Succesfully",
      };
    else return { data: "", status: FAILURE, msg: "Something went wrong!" };
  } catch (error) {
    console.log("error in creating item", error);
    if (error.code === 11000) error = "Duplicate value.";
    return { data: "", status: ERROR, msg: error.toString() };
  }
};

// UPDATE Item
module.exports.updateItem = async (itemId, updateData) => {
  console.log("itemIdupdateData", itemId, updateData);

  try {
    const item = await Items.findOneAndUpdate({ id: itemId }, updateData);

    console.log("update item by id DB response", item);
    if (item)
      return {
        data: item,
        status: SUCCESS,
        msg: "Item detials updated succesfully",
      };
    else return { data: "", status: FAILURE, msg: "Something went wrong!" };
  } catch (error) {
    console.log("error in updating item details", error);
    if (error.code === 11000) error = "Duplicate value.";
    return { data: "", status: ERROR, msg: error.toString() };
  }
};

// GET ALL Items
module.exports.getAllItems = async (page, size, dateRange) => {
  let pageNo = parseInt(page) || 1;
  let pageLimit = parseInt(size) || 10;
  const skip = (pageNo - 1) * pageLimit;

  let condition = {};

  if (dateRange) {
    let range = dateRange.split("-");
    let startDate = new Date(dateFormatting(range[0]));
    let endDate = new Date(dateFormatting(range[1]));
    condition.createdAt = {
      $gte: startDate,
      $lte: endDate,
    };
  }

  try {
    const [allItems, count] = await Promise.all([
      await Items.find(condition)
        .read("secondaryPreferred")
        .readConcern("local")
        .select({
          _id: 0,
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
        })
        .limit(pageLimit)
        .skip(skip),
      Items.countDocuments(condition),
    ]);

    console.log("get all item DB response", allItems);
    if (allItems) {
      let totalPages = Math.ceil(count / pageLimit);
      let prevPage = pageNo - 1;
      let nextPage = Number(pageNo) + 1;
      return {
        items: allItems,
        totalRecords: count,
        perPage: pageLimit,
        totalPages: totalPages,
        currentPageNo: pageNo,
        prevPage: prevPage,
        nextPage: nextPage,
        status: SUCCESS,
        msg: "Item list featched succesfully",
      };
    } else return { data: "", status: FAILURE, msg: "Something went wrong!" };
  } catch (error) {
    console.log("error in featching item", error);
    if (error.code === 11000) error = "Duplicate value.";
    return { data: "", status: ERROR, msg: error.toString() };
  }
};

// GET ITEM BY ID
module.exports.getItemById = async (itemId) => {
  try {
    const item = await Items.findOne({ id: itemId })
      .read("secondaryPreferred")
      .readConcern("local");
    console.log("get item by id DB response", item);
    if (item)
      return {
        data: item,
        status: SUCCESS,
        msg: "Item detials featched succesfully",
      };
    else return { data: "", status: FAILURE, msg: "Something went wrong!" };
  } catch (error) {
    console.log("error in featching item details", error);
    if (error.code === 11000) error = "Duplicate value.";
    return { data: "", status: ERROR, msg: error.toString() };
  }
};
