"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
class PlaylistCustomThumbnail extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
    }
}
exports.default = PlaylistCustomThumbnail;
PlaylistCustomThumbnail.type = 'PlaylistCustomThumbnail';
//# sourceMappingURL=PlaylistCustomThumbnail.js.map