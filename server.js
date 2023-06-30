const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");
const path = require("path");
const figlet = require("figlet");

dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Swagger
fastify.register(require("@fastify/swagger"));

fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
});

// Routes
fastify.register(require("./src/routes/items.routes"), {
  prefix: "/api/v1/items",
});

const connectDB = require("./src/configs/db");
connectDB();

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
  } catch (e) {
    console.log("error", e);
    process.exit(1);
  }
};

start();

figlet("FASTIFY BOILERPLATE", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
