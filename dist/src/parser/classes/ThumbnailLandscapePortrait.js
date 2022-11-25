"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
class ThumbnailLandscapePortrait extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.landscape = Thumbnail_1.default.fromResponse(data.landscape);
        this.portrait = Thumbnail_1.default.fromResponse(data.portrait);
    }
}
exports.default = ThumbnailLandscapePortrait;
ThumbnailLandscapePortrait.type = 'ThumbnailLandscapePortrait';
//# sourceMappingURL=ThumbnailLandscapePortrait.js.map