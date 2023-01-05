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
const FilterableFeed_1 = __importDefault(require("../../core/FilterableFeed"));
const FeedTabbedHeader_1 = __importDefault(require("../classes/FeedTabbedHeader"));
const RichGrid_1 = __importDefault(require("../classes/RichGrid"));
class HomeFeed extends FilterableFeed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c;
        super(actions, data, already_parsed);
        this.header = (_a = this.memo.getType(FeedTabbedHeader_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        this.contents =
            ((_b = this.memo.getType(RichGrid_1.default)) === null || _b === void 0 ? void 0 : _b[0]) ||
                ((_c = this.page.on_response_received_actions) === null || _c === void 0 ? void 0 : _c[0]);
    }
    /**
     * Applies given filter to the feed.
     * @param filter - Filter to apply.
     */
    applyFilter(filter) {
        const _super = Object.create(null, {
            getFilteredFeed: { get: () => super.getFilteredFeed }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield _super.getFilteredFeed.call(this, filter);
            return new HomeFeed(this.actions, feed.page, true);
        });
    }
    /**
     * Retrieves next batch of contents.
     */
    getContinuation() {
        const _super = Object.create(null, {
            getContinuation: { get: () => super.getContinuation }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield _super.getContinuation.call(this);
            // Keep the page header
            feed.page.header = this.page.header;
            feed.page.header_memo.set(this.header.type, [this.header]);
            return new HomeFeed(this.actions, feed.page, true);
        });
    }
}
exports.default = HomeFeed;
//# sourceMappingURL=HomeFeed.js.map