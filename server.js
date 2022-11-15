const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Routes
// const Items = require("./src/routes/items");
fastify.register(require("./src/routes/itemsRoutes"), {
  prefix: "/api/v1/items",
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
  } catch (e) {
    console.log("error", e);
    process.exit(1);
  }
};

start();
