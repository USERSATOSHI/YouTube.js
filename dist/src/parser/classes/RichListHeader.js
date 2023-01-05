"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class RichListHeader extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text_1.default(data.title);
        this.subtitle = new Text_1.default(data.subtitle);
        this.title_style = (_a = data === null || data === void 0 ? void 0 : data.titleStyle) === null || _a === void 0 ? void 0 : _a.style;
        this.icon_type = (_b = data === null || data === void 0 ? void 0 : data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
    }
}
RichListHeader.type = 'RichListHeader';
exports.default = RichListHeader;
//# sourceMappingURL=RichListHeader.js.map