"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const CreatePlaylistDialog_1 = __importDefault(require("./CreatePlaylistDialog"));
class NavigationEndpoint extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super();
        // This is only present in Android nav endpoints
        if (Reflect.has(data || {}, 'innertubeCommand'))
            data = data.innertubeCommand;
        const name = Object.keys(data || {})
            .find((item) => item.endsWith('Endpoint') ||
            item.endsWith('Command'));
        this.payload = name ? Reflect.get(data, name) : {};
        if (Reflect.has(this.payload, 'dialog')) {
            this.dialog = index_1.default.parse(this.payload.dialog);
        }
        if (data === null || data === void 0 ? void 0 : data.serviceEndpoint) {
            data = data.serviceEndpoint;
        }
        this.metadata = {};
        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _a === void 0 ? void 0 : _a.webCommandMetadata) === null || _b === void 0 ? void 0 : _b.url) {
            this.metadata.url = data.commandMetadata.webCommandMetadata.url;
        }
        if ((_d = (_c = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _c === void 0 ? void 0 : _c.webCommandMetadata) === null || _d === void 0 ? void 0 : _d.webPageType) {
            this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
        }
        if ((_f = (_e = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _e === void 0 ? void 0 : _e.webCommandMetadata) === null || _f === void 0 ? void 0 : _f.apiUrl) {
            this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace('/youtubei/v1/', '');
        }
        else if (name) {
            this.metadata.api_url = this.getEndpoint(name);
        }
        if ((_h = (_g = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _g === void 0 ? void 0 : _g.webCommandMetadata) === null || _h === void 0 ? void 0 : _h.sendPost) {
            this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
        }
        if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint) {
            if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog) {
                this.dialog = index_1.default.parseItem(data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog_1.default);
            }
        }
    }
    /**
     * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
     */
    getEndpoint(name) {
        switch (name) {
            case 'browseEndpoint':
                return '/browse';
            case 'watchEndpoint':
                return '/player';
            case 'searchEndpoint':
                return '/search';
            case 'watchPlaylistEndpoint':
                return '/next';
            case 'liveChatItemContextMenuEndpoint':
                return 'live_chat/get_item_context_menu';
        }
    }
    call(actions, args) {
        if (!actions)
            throw new Error('An active caller must be provided');
        if (!this.metadata.api_url)
            throw new Error('Expected an api_url, but none was found, this is a bug.');
        return actions.execute(this.metadata.api_url, Object.assign(Object.assign({}, this.payload), args));
    }
}
NavigationEndpoint.type = 'NavigationEndpoint';
exports.default = NavigationEndpoint;
//# sourceMappingURL=NavigationEndpoint.js.map