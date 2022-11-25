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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Library_page, _Library_actions, _Library_continuation, _LibraryContinuation_page, _LibraryContinuation_actions, _LibraryContinuation_continuation;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryContinuation = void 0;
const __1 = __importDefault(require(".."));
const Grid_1 = __importDefault(require("../classes/Grid"));
const MusicShelf_1 = __importDefault(require("../classes/MusicShelf"));
const MusicSideAlignedItem_1 = __importDefault(require("../classes/MusicSideAlignedItem"));
const NavigationEndpoint_1 = __importDefault(require("../classes/NavigationEndpoint"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const ChipCloud_1 = __importDefault(require("../classes/ChipCloud"));
const ChipCloudChip_1 = __importDefault(require("../classes/ChipCloudChip"));
const MusicMultiSelectMenuItem_1 = __importDefault(require("../classes/menus/MusicMultiSelectMenuItem"));
const MusicSortFilterButton_1 = __importDefault(require("../classes/MusicSortFilterButton"));
const Utils_1 = require("../../utils/Utils");
class Library {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e;
        _Library_page.set(this, void 0);
        _Library_actions.set(this, void 0);
        _Library_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Library_page, __1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Library_actions, actions, "f");
        const section_list = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(SectionList_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        this.header = (_b = section_list === null || section_list === void 0 ? void 0 : section_list.header) === null || _b === void 0 ? void 0 : _b.item().as(MusicSideAlignedItem_1.default);
        this.contents = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.array().as(Grid_1.default, MusicShelf_1.default);
        __classPrivateFieldSet(this, _Library_continuation, (_e = (_d = this.contents) === null || _d === void 0 ? void 0 : _d.find((list) => list.continuation)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
    }
    /**
     * Applies given sort filter to the library items.
     */
    applySortFilter(sort_by) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            let target_item;
            if (typeof sort_by === 'string') {
                const button = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(MusicSortFilterButton_1.default)) === null || _a === void 0 ? void 0 : _a[0];
                const options = (_b = button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_1.default);
                target_item = options === null || options === void 0 ? void 0 : options.find((item) => item.title === sort_by);
                if (!target_item)
                    throw new Utils_1.InnertubeError(`Sort filter "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
            }
            else if (sort_by instanceof MusicMultiSelectMenuItem_1.default) {
                target_item = sort_by;
            }
            if (!target_item)
                throw new Utils_1.InnertubeError('Invalid sort filter');
            if (target_item.selected)
                return this;
            const cmd = (_f = (_e = (_d = (_c = target_item.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commands) === null || _e === void 0 ? void 0 : _e.find((cmd) => cmd.browseSectionListReloadEndpoint)) === null || _f === void 0 ? void 0 : _f.browseSectionListReloadEndpoint;
            if (!cmd)
                throw new Utils_1.InnertubeError('Failed to find sort filter command');
            const response = yield __classPrivateFieldGet(this, _Library_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: cmd.continuation.reloadContinuationData.continuation
            });
            return new Library(response, __classPrivateFieldGet(this, _Library_actions, "f"));
        });
    }
    /**
     * Applies given filter to the library.
     */
    applyFilter(filter) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            let target_chip;
            const chip_cloud = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(ChipCloud_1.default)) === null || _a === void 0 ? void 0 : _a[0];
            if (typeof filter === 'string') {
                target_chip = chip_cloud.chips.get({ text: filter });
                if (!target_chip)
                    throw new Utils_1.InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
            }
            else if (filter instanceof ChipCloudChip_1.default) {
                target_chip = filter;
            }
            if (!target_chip)
                throw new Utils_1.InnertubeError('Invalid filter', filter);
            const target_cmd = new NavigationEndpoint_1.default((_d = (_c = (_b = target_chip.endpoint) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d[0]);
            const response = yield target_cmd.call(__classPrivateFieldGet(this, _Library_actions, "f"), { client: 'YTMUSIC' });
            return new Library(response, __classPrivateFieldGet(this, _Library_actions, "f"));
        });
    }
    /**
     * Retrieves continuation of the library items.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Library_continuation, "f"))
                throw new Utils_1.InnertubeError('No continuation available');
            const page = yield __classPrivateFieldGet(this, _Library_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _Library_continuation, "f")
            });
            return new LibraryContinuation(page, __classPrivateFieldGet(this, _Library_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Library_continuation, "f");
    }
    get sort_filters() {
        var _a, _b;
        const button = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(MusicSortFilterButton_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        const options = (_b = button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_1.default);
        return options.map((item) => item.title);
    }
    get filters() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(ChipCloud_1.default)) === null || _a === void 0 ? void 0 : _a[0].chips.map((chip) => chip.text);
    }
    get page() {
        return __classPrivateFieldGet(this, _Library_page, "f");
    }
}
_Library_page = new WeakMap(), _Library_actions = new WeakMap(), _Library_continuation = new WeakMap();
class LibraryContinuation {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e;
        _LibraryContinuation_page.set(this, void 0);
        _LibraryContinuation_actions.set(this, void 0);
        _LibraryContinuation_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _LibraryContinuation_page, __1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _LibraryContinuation_actions, actions, "f");
        this.contents = ((_a = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _a === void 0 ? void 0 : _a.hasKey('contents'))
            ? (_b = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.key('contents').array() :
            (_c = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _c === void 0 ? void 0 : _c.key('items').array();
        __classPrivateFieldSet(this, _LibraryContinuation_continuation, ((_d = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _d === void 0 ? void 0 : _d.key('continuation').isNull())
            ? null : (_e = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _e === void 0 ? void 0 : _e.key('continuation').string(), "f");
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f"))
                throw new Utils_1.InnertubeError('No continuation available');
            const page = yield __classPrivateFieldGet(this, _LibraryContinuation_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _LibraryContinuation_continuation, "f")
            });
            return new LibraryContinuation(page, __classPrivateFieldGet(this, _LibraryContinuation_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _LibraryContinuation_page, "f");
    }
}
exports.LibraryContinuation = LibraryContinuation;
_LibraryContinuation_page = new WeakMap(), _LibraryContinuation_actions = new WeakMap(), _LibraryContinuation_continuation = new WeakMap();
exports.default = Library;
//# sourceMappingURL=Library.js.map