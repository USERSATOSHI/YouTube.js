"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
class RemoveChatItemByAuthorAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.external_channel_id = data.externalChannelId;
    }
}
RemoveChatItemByAuthorAction.type = 'RemoveChatItemByAuthorAction';
exports.default = RemoveChatItemByAuthorAction;
//# sourceMappingURL=RemoveChatItemByAuthorAction.js.map