import environment from "./environment.json";

const NODE_ENV = process.env.NODE_ENV || "local";

const env_config = {
  BFF_BASE_URL: process.env.BFF_BASE_URL || environment.BFF_BASE_URL[NODE_ENV],
  API_BASE_URL: process.env.API_BASE_URL || environment.API_BASE_URL[NODE_ENV],
};

export default { ...env_config, NODE_ENV };
