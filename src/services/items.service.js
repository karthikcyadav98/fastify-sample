const Items = require("../models/items.model");
const { SUCCESS } = require("../constants/stringConstant");
const {
  createErrorResponse,
  createSuccessResponse,
} = require("../configs/responses");
const {
  GET_ITEMS_SUCCESS_MESSAGE,
  ERROR_MSG_SOMETHING_WENT_WRONG,
} = require("../constants/responseMessages");

exports.createItemsSvc = (req) => {
  try {
    const newItem = {
      name: req?.body?.name,
      type: req?.body?.type,
    };

    const item = Items.createItem(newItem);

    if (item?.status === SUCCESS) {
      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        item?.data
      );
    } else {
      return createErrorResponse(STATUS_CODES.internalServerError, item?.msg);
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};

exports.getItemsSvc = (req) => {
  try {
    const item = Items.getAllItems(
      req?.body?.page,
      req?.body?.size,
      req?.body?.dateRange
    );

    if (item?.status === SUCCESS) {
      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        item?.data
      );
    } else {
      return createErrorResponse(STATUS_CODES.internalServerError, item?.msg);
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};

exports.getItemsByIdSvc = (req) => {
  try {
    const item = Items.getItemById(req?.body?.id);

    if (item?.status === SUCCESS) {
      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        item?.data
      );
    } else {
      return createErrorResponse(STATUS_CODES.internalServerError, item?.msg);
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};
