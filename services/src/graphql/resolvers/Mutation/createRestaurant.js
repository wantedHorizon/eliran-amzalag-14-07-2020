"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("#root/db/models");
const createRestaurantResolver = (context, { chefId, name }) => {
    return models_1.Restaurant.create({ chefId, name });
};
exports.default = createRestaurantResolver;
