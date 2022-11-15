exports.middleware2 = async (req, res, next) => {
  console.log("middleware2");
  next();
};
