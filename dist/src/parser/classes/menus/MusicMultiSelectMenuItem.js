"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const Text_1 = __importDefault(require("../misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class MusicMultiSelectMenuItem extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text_1.default(data.title).text;
        this.form_item_entity_key = data.formItemEntityKey;
        this.selected_icon_type = ((_a = data.selectedIcon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
        this.endpoint = data.selectedCommand ? new NavigationEndpoint_1.default(data.selectedCommand) : null;
        this.selected = !!this.endpoint;
    }
}
MusicMultiSelectMenuItem.type = 'MusicMultiSelectMenuItem';
exports.default = MusicMultiSelectMenuItem;
//# sourceMappingURL=MusicMultiSelectMenuItem.js.map