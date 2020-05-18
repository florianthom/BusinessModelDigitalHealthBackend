"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_PORT = void 0;
const env = require("env-var");
const SERVER_PORT = env.get('SERVER_PORT').asPortNumber();
exports.SERVER_PORT = SERVER_PORT;
//# sourceMappingURL=env.config.js.map