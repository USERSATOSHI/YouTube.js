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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Playlist_instances, _Playlist_getStat;
Object.defineProperty(exports, "__esModule", { value: true });
const Feed_1 = __importDefault(require("../../core/Feed"));
const VideoOwner_1 = __importDefault(require("../classes/VideoOwner"));
const PlaylistMetadata_1 = __importDefault(require("../classes/PlaylistMetadata"));
const PlaylistSidebarPrimaryInfo_1 = __importDefault(require("../classes/PlaylistSidebarPrimaryInfo"));
const PlaylistSidebarSecondaryInfo_1 = __importDefault(require("../classes/PlaylistSidebarSecondaryInfo"));
const PlaylistVideoThumbnail_1 = __importDefault(require("../classes/PlaylistVideoThumbnail"));
const PlaylistHeader_1 = __importDefault(require("../classes/PlaylistHeader"));
const Utils_1 = require("../../utils/Utils");
class Playlist extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c;
        super(actions, data, already_parsed);
        _Playlist_instances.add(this);
        const header = (_a = this.memo.getType(PlaylistHeader_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        const primary_info = (_b = this.memo.getType(PlaylistSidebarPrimaryInfo_1.default)) === null || _b === void 0 ? void 0 : _b[0];
        const secondary_info = (_c = this.memo.getType(PlaylistSidebarSecondaryInfo_1.default)) === null || _c === void 0 ? void 0 : _c[0];
        if (!primary_info && !secondary_info)
            throw new Utils_1.InnertubeError('This playlist does not exist');
        this.info = Object.assign(Object.assign({}, this.page.metadata.item().as(PlaylistMetadata_1.default)), {
            author: secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner.item().as(VideoOwner_1.default).author,
            thumbnails: primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer.item().as(PlaylistVideoThumbnail_1.default).thumbnail,
            total_items: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 0, primary_info),
            views: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 1, primary_info),
            last_updated: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 2, primary_info),
            can_share: header === null || header === void 0 ? void 0 : header.can_share,
            can_delete: header === null || header === void 0 ? void 0 : header.can_delete,
            is_editable: header === null || header === void 0 ? void 0 : header.is_editable,
            privacy: header === null || header === void 0 ? void 0 : header.privacy
        });
        this.menu = primary_info === null || primary_info === void 0 ? void 0 : primary_info.menu.item();
        this.endpoint = primary_info === null || primary_info === void 0 ? void 0 : primary_info.endpoint;
    }
    get items() {
        return this.videos;
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getContinuationData();
            return new Playlist(this.actions, response);
        });
    }
}
_Playlist_instances = new WeakSet(), _Playlist_getStat = function _Playlist_getStat(index, primary_info) {
    var _a;
    if (!primary_info || !primary_info.stats)
        return 'N/A';
    return ((_a = primary_info.stats[index]) === null || _a === void 0 ? void 0 : _a.toString()) || 'N/A';
};
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map