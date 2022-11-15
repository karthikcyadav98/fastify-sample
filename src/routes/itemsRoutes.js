const {
  createItem,
  getItems,
  getItemsByUserId,
} = require("../controller/itemsController");
const { itemMiddleware } = require("../middlewares/itemMiddleware");
const { middleware1 } = require("../middlewares/middleware1");
const { middleware2 } = require("../middlewares/middleware2");

module.exports = function (fastify, opts, done) {
  const routes = [
    {
      method: "GET",
      url: "/get",
      handler: getItems,
    },
    {
      method: "GET",
      url: "/get/:userId/:success",
      preHandler: itemMiddleware,
      handler: getItemsByUserId,
    },
    {
      method: "POST",
      url: "/create",
      preHandler: [middleware1, middleware2],
      handler: createItem,
    },
  ];

  routes.forEach((route) => fastify.route(route));

  done();
};
