"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
class MetadataScreen extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.section_list = __1.default.parseItem(data);
    }
}
MetadataScreen.type = 'MetadataScreen';
exports.default = MetadataScreen;
//# sourceMappingURL=MetadataScreen.js.map