"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
class CarouselHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = __1.default.parseArray(data.contents);
    }
}
exports.default = CarouselHeader;
CarouselHeader.type = 'CarouselHeader';
//# sourceMappingURL=CarouselHeader.js.map