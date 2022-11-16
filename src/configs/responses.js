exports.createSuccessResponse = (statusCodeObject, message, data) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject.code || 200,
    status: statusCodeObject.name || "OK",
    message: message || "Success",
    success: true,
    data: data || {},
  };
};

exports.createErrorResponse = (statusCodeObject, message) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject.code || 500,
    status: statusCodeObject.name || "Internal Server Error",
    message: message || "Error",
    success: false,
  };
};
