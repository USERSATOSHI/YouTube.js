"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class CompactStation extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.video_count = new Text_1.default(data.videoCountText);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
    }
}
exports.default = CompactStation;
CompactStation.type = 'CompactStation';
//# sourceMappingURL=CompactStation.js.map