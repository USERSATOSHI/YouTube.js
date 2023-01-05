"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const Button_1 = __importDefault(require("./Button"));
const helpers_1 = require("../helpers");
class PlayerErrorMessage extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.subreason = new Text_1.default(data.subreason);
        this.reason = new Text_1.default(data.reason);
        this.proceed_button = index_1.default.parseItem(data.proceedButton, Button_1.default);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.icon_type = ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
    }
}
PlayerErrorMessage.type = 'PlayerErrorMessage';
exports.default = PlayerErrorMessage;
//# sourceMappingURL=PlayerErrorMessage.js.map