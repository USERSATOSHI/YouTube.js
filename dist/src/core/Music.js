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
var _Music_instances, _Music_session, _Music_actions, _Music_fetchInfoFromVideoId, _Music_fetchInfoFromListItem;
Object.defineProperty(exports, "__esModule", { value: true });
const TrackInfo_1 = __importDefault(require("../parser/ytmusic/TrackInfo"));
const Search_1 = __importDefault(require("../parser/ytmusic/Search"));
const HomeFeed_1 = __importDefault(require("../parser/ytmusic/HomeFeed"));
const Explore_1 = __importDefault(require("../parser/ytmusic/Explore"));
const Library_1 = __importDefault(require("../parser/ytmusic/Library"));
const Artist_1 = __importDefault(require("../parser/ytmusic/Artist"));
const Album_1 = __importDefault(require("../parser/ytmusic/Album"));
const Playlist_1 = __importDefault(require("../parser/ytmusic/Playlist"));
const Recap_1 = __importDefault(require("../parser/ytmusic/Recap"));
const Tab_1 = __importDefault(require("../parser/classes/Tab"));
const Tabbed_1 = __importDefault(require("../parser/classes/Tabbed"));
const SingleColumnMusicWatchNextResults_1 = __importDefault(require("../parser/classes/SingleColumnMusicWatchNextResults"));
const WatchNextTabbedResults_1 = __importDefault(require("../parser/classes/WatchNextTabbedResults"));
const SectionList_1 = __importDefault(require("../parser/classes/SectionList"));
const Message_1 = __importDefault(require("../parser/classes/Message"));
const MusicQueue_1 = __importDefault(require("../parser/classes/MusicQueue"));
const PlaylistPanel_1 = __importDefault(require("../parser/classes/PlaylistPanel"));
const MusicDescriptionShelf_1 = __importDefault(require("../parser/classes/MusicDescriptionShelf"));
const MusicCarouselShelf_1 = __importDefault(require("../parser/classes/MusicCarouselShelf"));
const SearchSuggestionsSection_1 = __importDefault(require("../parser/classes/SearchSuggestionsSection"));
const AutomixPreviewVideo_1 = __importDefault(require("../parser/classes/AutomixPreviewVideo"));
const MusicTwoRowItem_1 = __importDefault(require("../parser/classes/MusicTwoRowItem"));
const helpers_1 = require("../parser/helpers");
const Utils_1 = require("../utils/Utils");
const proto_1 = __importDefault(require("../proto"));
class Music {
    constructor(session) {
        _Music_instances.add(this);
        _Music_session.set(this, void 0);
        _Music_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Music_session, session, "f");
        __classPrivateFieldSet(this, _Music_actions, session.actions, "f");
    }
    /**
     * Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
     * @param target - Video id or a list item.
     */
    getInfo(target) {
        if (target instanceof MusicTwoRowItem_1.default) {
            return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromListItem).call(this, target);
        }
        else if (typeof target === 'string') {
            return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromVideoId).call(this, target);
        }
        throw new Utils_1.InnertubeError('Invalid target, expected either a video id or a valid MusicTwoRowItem', target);
    }
    /**
     * Searches on YouTube Music.
     * @param query - Search query.
     * @param filters - Search filters.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ query });
            const payload = { query, client: 'YTMUSIC' };
            if (filters.type && filters.type !== 'all') {
                payload.params = proto_1.default.encodeMusicSearchFilters(filters);
            }
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/search', payload);
            return new Search_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"), { is_filtered: Reflect.has(filters, 'type') && filters.type !== 'all' });
        });
    }
    /**
     * Retrieves the home feed.
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_home'
            });
            return new HomeFeed_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves the Explore feed.
     */
    getExplore() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_explore'
            });
            return new Explore_1.default(response);
            // TODO: return new Explore(response, this.#actions);
        });
    }
    /**
     * Retrieves the library.
     */
    getLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_library_landing'
            });
            return new Library_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves artist's info & content.
     * @param artist_id - The artist id.
     */
    getArtist(artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ artist_id });
            if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
                throw new Utils_1.InnertubeError('Invalid artist id', artist_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: artist_id
            });
            return new Artist_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves album.
     * @param album_id - The album id.
     */
    getAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ album_id });
            if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
                throw new Utils_1.InnertubeError('Invalid album id', album_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: album_id
            });
            return new Album_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves playlist.
     * @param playlist_id - The playlist id.
     */
    getPlaylist(playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id });
            if (!playlist_id.startsWith('VL')) {
                playlist_id = `VL${playlist_id}`;
            }
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: playlist_id
            });
            return new Playlist_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves up next.
     * @param video_id - The video id.
     * @param automix - Whether to enable automix.
     */
    getUpNext(video_id, automix = true) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.get({ title: 'Up next' });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const music_queue = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(MusicQueue_1.default);
            if (!music_queue || !music_queue.content)
                throw new Utils_1.InnertubeError('Music queue was empty, the given id is probably invalid.', music_queue);
            const playlist_panel = music_queue.content.as(PlaylistPanel_1.default);
            if (!playlist_panel.playlist_id && automix) {
                const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_1.default);
                if (!automix_preview_video)
                    throw new Utils_1.InnertubeError('Automix item not found');
                const page = yield ((_b = automix_preview_video.playlist_video) === null || _b === void 0 ? void 0 : _b.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
                    videoId: video_id,
                    client: 'YTMUSIC',
                    parse: true
                }));
                if (!page)
                    throw new Utils_1.InnertubeError('Could not fetch automix');
                return (_c = page.contents_memo.getType(PlaylistPanel_1.default)) === null || _c === void 0 ? void 0 : _c[0];
            }
            return playlist_panel;
        });
    }
    /**
     * Retrieves related content.
     * @param video_id - The video id.
     */
    getRelated(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.get({ title: 'Related' });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: 'YTMUSIC', parse: true });
            const shelves = page.contents.item().as(SectionList_1.default).contents.array().as(MusicCarouselShelf_1.default, MusicDescriptionShelf_1.default);
            return shelves;
        });
    }
    /**
     * Retrieves song lyrics.
     * @param video_id - The video id.
     */
    getLyrics(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.get({ title: 'Lyrics' });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: 'YTMUSIC', parse: true });
            if (page.contents.item().key('type').string() === 'Message')
                throw new Utils_1.InnertubeError(page.contents.item().as(Message_1.default).text, video_id);
            const section_list = page.contents.item().as(SectionList_1.default).contents.array();
            return section_list.firstOfType(MusicDescriptionShelf_1.default);
        });
    }
    /**
     * Retrieves recap.
     */
    getRecap() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                browseId: 'FEmusic_listening_review',
                client: 'YTMUSIC_ANDROID'
            });
            return new Recap_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves search suggestions for the given query.
     * @param query - The query.
     */
    getSearchSuggestions(query) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/music/get_search_suggestions', {
                parse: true,
                input: query,
                client: 'YTMUSIC'
            });
            const search_suggestions_section = (_a = response.contents_memo.getType(SearchSuggestionsSection_1.default)) === null || _a === void 0 ? void 0 : _a[0];
            if (!(search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.is_array))
                return (0, helpers_1.observe)([]);
            return search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.array();
        });
    }
}
_Music_session = new WeakMap(), _Music_actions = new WeakMap(), _Music_instances = new WeakSet(), _Music_fetchInfoFromVideoId = function _Music_fetchInfoFromVideoId(video_id) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const cpn = (0, Utils_1.generateRandomString)(16);
        const initial_info = __classPrivateFieldGet(this, _Music_actions, "f").execute('/player', {
            cpn,
            client: 'YTMUSIC',
            videoId: video_id,
            playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0
                }
            }
        });
        const continuation = __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
            client: 'YTMUSIC',
            videoId: video_id
        });
        const response = yield Promise.all([initial_info, continuation]);
        return new TrackInfo_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
    });
}, _Music_fetchInfoFromListItem = function _Music_fetchInfoFromListItem(list_item) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!list_item)
            throw new Utils_1.InnertubeError('List item cannot be undefined');
        if (!list_item.endpoint)
            throw new Error('This item does not have an endpoint.');
        const cpn = (0, Utils_1.generateRandomString)(16);
        const initial_info = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
            cpn,
            client: 'YTMUSIC',
            playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0
                }
            }
        });
        const continuation = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
            client: 'YTMUSIC',
            enablePersistentPlaylistPanel: true,
            override_endpoint: '/next'
        });
        const response = yield Promise.all([initial_info, continuation]);
        return new TrackInfo_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
    });
};
exports.default = Music;
//# sourceMappingURL=Music.js.map