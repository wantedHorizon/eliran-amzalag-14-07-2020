"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("#root/db/models");
const resolvers = {
    restaurants: (chef) => {
        return models_1.Restaurant.findAll({
            include: [
                {
                    model: models_1.Chef,
                    where: { id: chef.id }
                }
            ],
            order: [["name", "ASC"]]
        });
    }
};
exports.default = resolvers;
