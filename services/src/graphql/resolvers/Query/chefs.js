"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("#root/db/models");
const chefsResolver = () => {
    return models_1.Chef.findAll();
};
exports.default = chefsResolver;
