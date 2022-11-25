"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilteredChannelList = exports.ChannelListContinuation = void 0;
const TabbedFeed_1 = __importDefault(require("../../core/TabbedFeed"));
const C4TabbedHeader_1 = __importDefault(require("../classes/C4TabbedHeader"));
const CarouselHeader_1 = __importDefault(require("../classes/CarouselHeader"));
const InteractiveTabbedHeader_1 = __importDefault(require("../classes/InteractiveTabbedHeader"));
const ChannelAboutFullMetadata_1 = __importDefault(require("../classes/ChannelAboutFullMetadata"));
const ChannelMetadata_1 = __importDefault(require("../classes/ChannelMetadata"));
const MicroformatData_1 = __importDefault(require("../classes/MicroformatData"));
const SubscribeButton_1 = __importDefault(require("../classes/SubscribeButton"));
const Tab_1 = __importDefault(require("../classes/Tab"));
const Utils_1 = require("../../utils/Utils");
const FeedFilterChipBar_1 = __importDefault(require("../classes/FeedFilterChipBar"));
const ChipCloudChip_1 = __importDefault(require("../classes/ChipCloudChip"));
const FilterableFeed_1 = __importDefault(require("../../core/FilterableFeed"));
const Feed_1 = __importDefault(require("../../core/Feed"));
class Channel extends TabbedFeed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c, _d, _e;
        super(actions, data, already_parsed);
        this.header = (_b = (_a = this.page.header) === null || _a === void 0 ? void 0 : _a.item()) === null || _b === void 0 ? void 0 : _b.as(C4TabbedHeader_1.default, CarouselHeader_1.default, InteractiveTabbedHeader_1.default);
        const metadata = (_c = this.page.metadata) === null || _c === void 0 ? void 0 : _c.item().as(ChannelMetadata_1.default);
        const microformat = (_d = this.page.microformat) === null || _d === void 0 ? void 0 : _d.as(MicroformatData_1.default);
        if (!metadata && !this.page.contents)
            throw new Utils_1.InnertubeError('Invalid channel', this);
        this.metadata = Object.assign(Object.assign({}, metadata), (microformat || {}));
        this.subscribe_button = (_e = this.page.header_memo.getType(SubscribeButton_1.default)) === null || _e === void 0 ? void 0 : _e[0];
        const tab = this.page.contents.item().key('tabs').parsed().array().filterType(Tab_1.default).get({ selected: true });
        this.current_tab = tab;
    }
    /**
     * Applies given filter to the list.
     * @param filter - The filter to apply
     */
    applyFilter(filter) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let target_filter;
            const filter_chipbar = (_a = this.memo.getType(FeedFilterChipBar_1.default)) === null || _a === void 0 ? void 0 : _a[0];
            if (typeof filter === 'string') {
                target_filter = filter_chipbar === null || filter_chipbar === void 0 ? void 0 : filter_chipbar.contents.get({ text: filter });
                if (!target_filter)
                    throw new Utils_1.InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
            }
            else if (filter instanceof ChipCloudChip_1.default) {
                target_filter = filter;
            }
            if (!target_filter)
                throw new Utils_1.InnertubeError('Invalid filter', filter);
            const page = yield ((_b = target_filter.endpoint) === null || _b === void 0 ? void 0 : _b.call(this.actions, { parse: true }));
            return new FilteredChannelList(this.actions, page, true);
        });
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.memo.getType(FeedFilterChipBar_1.default)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.contents.filterType(ChipCloudChip_1.default).map((chip) => chip.text)) || [];
    }
    getHome() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Home');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Videos');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getShorts() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Shorts');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getLiveStreams() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Live');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getPlaylists() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Playlists');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getCommunity() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Community');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Channels');
            return new Channel(this.actions, tab.page, true);
        });
    }
    /**
     * Retrieves the channel about page.
     * Note that this does not return a new {@link Channel} object.
     */
    getAbout() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('About');
            return (_a = tab.memo.getType(ChannelAboutFullMetadata_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        });
    }
    /**
     * Retrives list continuation.
     */
    getContinuation() {
        const _super = Object.create(null, {
            getContinuationData: { get: () => super.getContinuationData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield _super.getContinuationData.call(this);
            return new ChannelListContinuation(this.actions, page, true);
        });
    }
}
exports.default = Channel;
class ChannelListContinuation extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b;
        super(actions, data, already_parsed);
        this.contents =
            ((_a = this.page.on_response_received_actions) === null || _a === void 0 ? void 0 : _a[0]) ||
                ((_b = this.page.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b[0]);
    }
    /**
     * Retrieves list continuation.
     */
    getContinuation() {
        const _super = Object.create(null, {
            getContinuationData: { get: () => super.getContinuationData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield _super.getContinuationData.call(this);
            return new ChannelListContinuation(this.actions, page, true);
        });
    }
}
exports.ChannelListContinuation = ChannelListContinuation;
class FilteredChannelList extends FilterableFeed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a;
        super(actions, data, already_parsed);
        this.applied_filter = this.memo.getType(ChipCloudChip_1.default).get({ is_selected: true });
        // Removes the filter chipbar from the actions list
        if (this.page.on_response_received_actions &&
            this.page.on_response_received_actions.length > 1) {
            this.page.on_response_received_actions.shift();
        }
        this.contents = (_a = this.page.on_response_received_actions) === null || _a === void 0 ? void 0 : _a[0];
    }
    /**
     * Applies given filter to the list.
     * @param filter - The filter to apply
     */
    applyFilter(filter) {
        const _super = Object.create(null, {
            getFilteredFeed: { get: () => super.getFilteredFeed }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield _super.getFilteredFeed.call(this, filter);
            return new FilteredChannelList(this.actions, feed.page, true);
        });
    }
    /**
     * Retrieves list continuation.
     */
    getContinuation() {
        const _super = Object.create(null, {
            getContinuationData: { get: () => super.getContinuationData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield _super.getContinuationData.call(this);
            // Keep the filters
            page === null || page === void 0 ? void 0 : page.on_response_received_actions_memo.set('FeedFilterChipBar', this.memo.getType(FeedFilterChipBar_1.default));
            page === null || page === void 0 ? void 0 : page.on_response_received_actions_memo.set('ChipCloudChip', this.memo.getType(ChipCloudChip_1.default));
            return new FilteredChannelList(this.actions, page, true);
        });
    }
}
exports.FilteredChannelList = FilteredChannelList;
//# sourceMappingURL=Channel.js.map