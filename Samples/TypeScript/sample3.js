"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("./base");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, qty) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.qty = qty;
        return _this;
    }
    Product.prototype.getInfo = function () {
        var info = ["Electronics", "Mad in India"];
        return info;
    };
    Product.getType = function () {
        console.log("getType called");
    };
    return Product;
}(base_1["default"]));
var p1 = new Product("Mobile", 20000);
console.log(p1);
console.log(p1.getInfo());
Product.getType();
console.log(p1.serialize());
console.log(p1.clone());
