"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Text_1 = __importDefault(require("./misc/Text"));
const Button_1 = __importDefault(require("./Button"));
const helpers_1 = require("../helpers");
class ConfirmDialog extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.confirm_button = __1.default.parseItem(data.confirmButton, Button_1.default);
        this.cancel_button = __1.default.parseItem(data.cancelButton, Button_1.default);
        this.dialog_messages = data.dialogMessages.map((txt) => new Text_1.default(txt));
    }
}
ConfirmDialog.type = 'ConfirmDialog';
exports.default = ConfirmDialog;
//# sourceMappingURL=ConfirmDialog.js.map