"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const SubscribeButton_1 = __importDefault(require("./SubscribeButton"));
class TopicChannelDetails extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.avatar = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.subtitle = new Text_1.default(data.title);
        this.subscribe_button = __1.default.parseItem(data.subscribeButton, SubscribeButton_1.default);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
exports.default = TopicChannelDetails;
TopicChannelDetails.type = 'TopicChannelDetails';
//# sourceMappingURL=TopicChannelDetails.js.map