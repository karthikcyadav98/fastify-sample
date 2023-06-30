const {
  getItemsSvc,
  createItemsSvc,
  getItemsByIdSvc,
} = require("../services/items.service");

exports.createItem = async (req, reply) => {
  console.log("inside controller", req?.body);

  // GOING TO SERVICE LAYER FOR BUSINESS LOGIC
  const response = await createItemsSvc(req);

  return response;
};

exports.getItems = async (req, reply) => {
  console.log("inside controller", req?.query);

  // GOING TO SERVICE LAYER FOR BUSINESS LOGIC
  const response = await getItemsSvc(req);

  return response;
};

exports.getItemsById = async (req, reply) => {
  console.log("inside controller", req?.query);

  // GOING TO SERVICE LAYER FOR BUSINESS LOGIC
  const response = await getItemsByIdSvc(req);

  return response;
};
