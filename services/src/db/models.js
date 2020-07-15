"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Chef = class Chef extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    __metadata("design:type", String)
], Chef.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Chef.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Restaurant),
    __metadata("design:type", Array)
], Chef.prototype, "restaurants", void 0);
Chef = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] }
        },
        paranoid: true,
        tableName: "chefs"
    })
], Chef);
exports.Chef = Chef;
let Restaurant = class Restaurant extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    __metadata("design:type", String)
], Restaurant.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    sequelize_typescript_1.ForeignKey(() => Chef),
    __metadata("design:type", String)
], Restaurant.prototype, "chefId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Chef),
    __metadata("design:type", Chef)
], Restaurant.prototype, "chef", void 0);
Restaurant = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] }
        },
        paranoid: true,
        tableName: "restaurants"
    })
], Restaurant);
exports.Restaurant = Restaurant;
exports.default = [Chef, Restaurant];
