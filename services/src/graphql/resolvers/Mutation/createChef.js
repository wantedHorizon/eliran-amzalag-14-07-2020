"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("#root/db/models");
const createChefResolver = (context, { name }) => {
    return models_1.Chef.create({ name });
};
exports.default = createChefResolver;
