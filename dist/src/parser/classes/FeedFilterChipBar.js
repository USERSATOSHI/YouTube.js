"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const ChipCloudChip_1 = __importDefault(require("./ChipCloudChip"));
class FeedFilterChipBar extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = index_1.default.parseArray(data.contents, ChipCloudChip_1.default);
    }
}
exports.default = FeedFilterChipBar;
FeedFilterChipBar.type = 'FeedFilterChipBar';
//# sourceMappingURL=FeedFilterChipBar.js.map