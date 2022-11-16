const {
  createSuccessResponse,
  createErrorResponse,
} = require("../configs/responses");
const { STATUS_CODES } = require("../constants/responseCodes");
const {
  GET_ITEMS_SUCCESS_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  ERROR_MSG_SOMETHING_WENT_WRONG,
} = require("../constants/responseMessages");

exports.getItems = async (req, reply) => {
  console.log("inside controller", req?.query);

  try {
    if (req?.query?.success === "true") {
      const sampleResponseData = {
        name: "karthik",
        email: "karthik@neokred.tech",
      };

      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        sampleResponseData
      );
    } else {
      return createErrorResponse(
        STATUS_CODES.internalServerError,
        INTERNAL_SERVER_ERROR_MESSAGE
      );
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};

exports.getItemsByUserId = async (req, reply) => {
  console.log("inside controller", req?.params);

  try {
    if (req?.params?.success === "true") {
      const sampleResponseData = {
        name: "karthik",
        email: "karthik@neokred.tech",
      };

      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        sampleResponseData
      );
    } else {
      return createErrorResponse(
        STATUS_CODES.internalServerError,
        INTERNAL_SERVER_ERROR_MESSAGE
      );
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};

exports.createItem = async (req, reply) => {
  console.log("inside controller", req?.body);

  try {
    if (req?.body?.success) {
      const sampleResponseData = {
        name: "karthik",
        email: "karthik@neokred.tech",
      };

      return createSuccessResponse(
        STATUS_CODES.ok,
        GET_ITEMS_SUCCESS_MESSAGE,
        sampleResponseData
      );
    } else {
      return createErrorResponse(
        STATUS_CODES.internalServerError,
        INTERNAL_SERVER_ERROR_MESSAGE
      );
    }
  } catch (e) {
    console.log("error", e);
    return createErrorResponse(
      STATUS_CODES.internalServerError,
      ERROR_MSG_SOMETHING_WENT_WRONG
    );
  }
};
