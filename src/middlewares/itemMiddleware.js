exports.itemMiddleware = async (req, res, next) => {
  console.log("inside middleware");
  next();
};
