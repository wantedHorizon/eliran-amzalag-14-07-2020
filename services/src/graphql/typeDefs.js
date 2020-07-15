"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Mutation {
    createChef(name: String!): Chef!
    createRestaurant(chefId: ID!, name: String!): Restaurant!
  }

  type Query {
    chefs: [Chef!]!
  }
`;
exports.default = typeDefs;
