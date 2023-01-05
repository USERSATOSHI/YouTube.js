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
var _Library_instances, _Library_actions, _Library_page, _Library_getAll;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Utils_1 = require("../../utils/Utils");
const Feed_1 = __importDefault(require("../../core/Feed"));
const History_1 = __importDefault(require("./History"));
const Playlist_1 = __importDefault(require("./Playlist"));
const Menu_1 = __importDefault(require("../classes/menus/Menu"));
const Shelf_1 = __importDefault(require("../classes/Shelf"));
const Button_1 = __importDefault(require("../classes/Button"));
const ProfileColumnStats_1 = __importDefault(require("../classes/ProfileColumnStats"));
const ProfileColumnUserInfo_1 = __importDefault(require("../classes/ProfileColumnUserInfo"));
class Library {
    constructor(response, actions) {
        var _a, _b;
        _Library_instances.add(this);
        _Library_actions.set(this, void 0);
        _Library_page.set(this, void 0);
        __classPrivateFieldSet(this, _Library_actions, actions, "f");
        __classPrivateFieldSet(this, _Library_page, __1.default.parseResponse(response), "f");
        const stats = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(ProfileColumnStats_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        const user_info = (_b = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(ProfileColumnUserInfo_1.default)) === null || _b === void 0 ? void 0 : _b[0];
        this.profile = { stats, user_info };
        const shelves = __classPrivateFieldGet(this, _Library_page, "f").contents_memo.getType(Shelf_1.default);
        this.sections = shelves.map((shelf) => {
            var _a;
            return ({
                type: shelf.icon_type,
                title: shelf.title,
                contents: ((_a = shelf.content) === null || _a === void 0 ? void 0 : _a.item().items) || [],
                getAll: () => __classPrivateFieldGet(this, _Library_instances, "m", _Library_getAll).call(this, shelf)
            });
        });
    }
    get history() {
        return this.sections.find((section) => section.type === 'WATCH_HISTORY');
    }
    get watch_later() {
        return this.sections.find((section) => section.type === 'WATCH_LATER');
    }
    get liked_videos() {
        return this.sections.find((section) => section.type === 'LIKE');
    }
    get playlists() {
        return this.sections.find((section) => section.type === 'PLAYLISTS');
    }
    get clips() {
        return this.sections.find((section) => section.type === 'CONTENT_CUT');
    }
    get page() {
        return __classPrivateFieldGet(this, _Library_page, "f");
    }
}
_Library_actions = new WeakMap(), _Library_page = new WeakMap(), _Library_instances = new WeakSet(), _Library_getAll = function _Library_getAll(shelf) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!((_a = shelf.menu) === null || _a === void 0 ? void 0 : _a.item().as(Menu_1.default).hasKey('top_level_buttons')))
            throw new Utils_1.InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);
        const button = shelf.menu.item().as(Menu_1.default).top_level_buttons.get({ text: 'See all' });
        if (!button)
            throw new Utils_1.InnertubeError('Did not find target button.');
        const page = yield button.as(Button_1.default).endpoint.call(__classPrivateFieldGet(this, _Library_actions, "f"), { parse: true });
        switch (shelf.icon_type) {
            case 'LIKE':
            case 'WATCH_LATER':
                return new Playlist_1.default(__classPrivateFieldGet(this, _Library_actions, "f"), page, true);
            case 'WATCH_HISTORY':
                return new History_1.default(__classPrivateFieldGet(this, _Library_actions, "f"), page, true);
            case 'CONTENT_CUT':
                return new Feed_1.default(__classPrivateFieldGet(this, _Library_actions, "f"), page, true);
            default:
                throw new Utils_1.InnertubeError('Target shelf not implemented.');
        }
    });
};
exports.default = Library;
//# sourceMappingURL=Library.js.map