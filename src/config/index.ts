import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const dev = "dev";
const env = process.env.NODE_ENV || dev;
const rootPath = process.cwd();

dotenvConfig({ path: resolve(__dirname, "env", `${env}.env`) });

export const app = {
    ENV: env,
    IS_DEV: env === dev,
    LOGS_PATH: `${rootPath}/${process.env.APP_LOGS_PATH || "logs"}`,
    LOG_LEVEL: process.env.APP_LOGS_LEVEL || "info"
};

export const services = {
    NOTIFICATIONS: {
        PATH: process.env.NOTIFICATIONS_PATH || "empty",
    }
};

export const mailer = {
    HOST: process.env.MAILER_HOST || "empty",
    PORT: Number(process.env.MAILER_PORT),
    USER: process.env.MAILER_USER  || "empty",
    PASSWORD: process.env.MAILER_PASSWORD  || "empty",
    FROM: process.env.MAILER_FROM  || "empty",
};