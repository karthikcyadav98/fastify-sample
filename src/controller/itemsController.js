const { STATUS_CODES } = require("../utils/responseCodes");

exports.getItems = async (request, reply) => {
  console.log("inside controller", request?.query);

  try {
    if (request?.query?.success === "true") {
      return {
        code: STATUS_CODES.ok.code,
        message: "API success",
        data: {
          name: "karthik",
        },
      };
    } else {
      return {
        code: STATUS_CODES.internalServerError.code,
        message: "Internal Server Error",
      };
    }
  } catch (e) {
    console.log("error", e);
  }
};

exports.getItemsByUserId = async (request, reply) => {
  console.log("inside controller", request?.params);

  try {
    if (request?.params?.success === "true") {
      return {
        code: STATUS_CODES.ok.code,
        message: "API success",
        data: {
          name: "karthik",
        },
      };
    } else {
      return {
        code: STATUS_CODES.internalServerError.code,
        message: "Internal Server Error",
      };
    }
  } catch (e) {
    console.log("error", e);
  }
};

exports.createItem = async (request, reply) => {
  console.log("inside controller", request?.body);

  try {
    if (request?.body?.success) {
      return {
        code: STATUS_CODES.ok.code,
        message: "API success",
        data: {
          name: "karthik",
        },
      };
    } else {
      return {
        code: STATUS_CODES.internalServerError.code,
        message: "Internal Server Error",
      };
    }
  } catch (e) {
    console.log("error", e);
  }
};
