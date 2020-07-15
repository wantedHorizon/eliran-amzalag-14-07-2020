"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chef_1 = require("./Chef");
const Mutation = require("./Mutation");
const Query = require("./Query");
const resolvers = {
    Chef: Chef_1.default,
    Mutation,
    Query
};
exports.default = resolvers;
