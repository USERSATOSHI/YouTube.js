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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _FilterableFeed_chips;
Object.defineProperty(exports, "__esModule", { value: true });
const ChipCloudChip_1 = __importDefault(require("../parser/classes/ChipCloudChip"));
const FeedFilterChipBar_1 = __importDefault(require("../parser/classes/FeedFilterChipBar"));
const Utils_1 = require("../utils/Utils");
const Feed_1 = __importDefault(require("./Feed"));
class FilterableFeed extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        _FilterableFeed_chips.set(this, void 0);
    }
    /**
     * Returns the filter chips.
     */
    get filter_chips() {
        var _a, _b;
        if (__classPrivateFieldGet(this, _FilterableFeed_chips, "f"))
            return __classPrivateFieldGet(this, _FilterableFeed_chips, "f") || [];
        if (((_a = this.memo.getType(FeedFilterChipBar_1.default)) === null || _a === void 0 ? void 0 : _a.length) > 1)
            throw new Utils_1.InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');
        if (((_b = this.memo.getType(FeedFilterChipBar_1.default)) === null || _b === void 0 ? void 0 : _b.length) === 0)
            throw new Utils_1.InnertubeError('There are no feed filter chipbars');
        __classPrivateFieldSet(this, _FilterableFeed_chips, this.memo.getType(ChipCloudChip_1.default), "f");
        return __classPrivateFieldGet(this, _FilterableFeed_chips, "f") || [];
    }
    /**
     * Returns available filters.
     */
    get filters() {
        return this.filter_chips.map((chip) => chip.text.toString()) || [];
    }
    /**
     * Applies given filter and returns a new {@link Feed} object.
     */
    getFilteredFeed(filter) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let target_filter;
            if (typeof filter === 'string') {
                if (!this.filters.includes(filter))
                    throw new Utils_1.InnertubeError('Filter not found', { available_filters: this.filters });
                target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
            }
            else if (filter.type === 'ChipCloudChip') {
                target_filter = filter;
            }
            else {
                throw new Utils_1.InnertubeError('Invalid filter');
            }
            if (!target_filter)
                throw new Utils_1.InnertubeError('Filter not found');
            if (target_filter.is_selected)
                return this;
            const response = yield ((_a = target_filter.endpoint) === null || _a === void 0 ? void 0 : _a.call(this.actions, { parse: true }));
            return new Feed_1.default(this.actions, response, true);
        });
    }
}
_FilterableFeed_chips = new WeakMap();
exports.default = FilterableFeed;
//# sourceMappingURL=FilterableFeed.js.map