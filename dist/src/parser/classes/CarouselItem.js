"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
class CarouselItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.items = __1.default.parseArray(data.carouselItems);
        this.background_color = data.backgroundColor;
        this.layout_style = data.layoutStyle;
        this.pagination_thumbnails = Thumbnail_1.default.fromResponse(data.paginationThumbnails);
        this.paginator_alignment = data.paginatorAlignment;
    }
}
exports.default = CarouselItem;
CarouselItem.type = 'CarouselItem';
//# sourceMappingURL=CarouselItem.js.map