"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
class RemoveChatItemAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
    }
}
RemoveChatItemAction.type = 'RemoveChatItemAction';
exports.default = RemoveChatItemAction;
//# sourceMappingURL=RemoveChatItemAction.js.map