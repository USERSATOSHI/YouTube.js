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
var _Actions_instances, _Actions_session, _Actions_wrap, _Actions_needsLogin;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../parser/index"));
const Utils_1 = require("../utils/Utils");
class Actions {
    constructor(session) {
        _Actions_instances.add(this);
        _Actions_session.set(this, void 0);
        __classPrivateFieldSet(this, _Actions_session, session, "f");
    }
    get session() {
        return __classPrivateFieldGet(this, _Actions_session, "f");
    }
    /**
     * Used to retrieve video info.
     * @param id - The video ID.
     * @param cpn - Content Playback Nonce.
     * @param client - The client to use.
     * @param playlist_id - The playlist ID.
     */
    getVideoInfo(id, cpn, client, playlist_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                playbackContext: {
                    contentPlaybackContext: {
                        vis: 0,
                        splay: false,
                        referer: 'https://www.youtube.com',
                        currentUrl: `/watch?v=${id}`,
                        autonavState: 'STATE_OFF',
                        signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Actions_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0,
                        autoCaptionsDefaultOn: false,
                        html5Preference: 'HTML5_PREF_WANTS',
                        lactMilliseconds: '-1'
                    }
                },
                attestationRequest: {
                    omitBotguardData: true
                },
                videoId: id
            };
            if (client) {
                data.client = client;
            }
            if (cpn) {
                data.cpn = cpn;
            }
            if (playlist_id) {
                data.playlistId = playlist_id;
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/player', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Makes calls to the playback tracking API.
     * @param url - The URL to call.
     * @param client - The client to use.
     * @param params - Call parameters.
     */
    stats(url, client, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const s_url = new URL(url);
            s_url.searchParams.set('ver', '2');
            s_url.searchParams.set('c', client.client_name.toLowerCase());
            s_url.searchParams.set('cbrver', client.client_version);
            s_url.searchParams.set('cver', client.client_version);
            for (const key of Object.keys(params)) {
                s_url.searchParams.set(key, params[key]);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(s_url);
            return response;
        });
    }
    execute(action, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            if (args && !args.protobuf) {
                data = Object.assign({}, args);
                if (Reflect.has(data, 'browseId')) {
                    if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data.browseId) && !__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                        throw new Utils_1.InnertubeError('You must be signed in to perform this operation.');
                }
                if (Reflect.has(data, 'override_endpoint'))
                    delete data.override_endpoint;
                if (Reflect.has(data, 'parse'))
                    delete data.parse;
                if (Reflect.has(data, 'request'))
                    delete data.request;
                if (Reflect.has(data, 'clientActions'))
                    delete data.clientActions;
                if (Reflect.has(data, 'settingItemIdForClient'))
                    delete data.settingItemIdForClient;
                if (Reflect.has(data, 'action')) {
                    data.actions = [data.action];
                    delete data.action;
                }
                if (Reflect.has(data, 'boolValue')) {
                    data.newValue = { boolValue: data.boolValue };
                    delete data.boolValue;
                }
                if (Reflect.has(data, 'token')) {
                    data.continuation = data.token;
                    delete data.token;
                }
                if ((data === null || data === void 0 ? void 0 : data.client) === 'YTMUSIC') {
                    data.isAudioOnly = true;
                }
            }
            else if (args) {
                data = args.serialized_data;
            }
            const endpoint = Reflect.has(args || {}, 'override_endpoint') ? args === null || args === void 0 ? void 0 : args.override_endpoint : action;
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(endpoint, {
                method: 'POST',
                body: (args === null || args === void 0 ? void 0 : args.protobuf) ? data : JSON.stringify((data || {})),
                headers: {
                    'Content-Type': (args === null || args === void 0 ? void 0 : args.protobuf) ?
                        'application/x-protobuf' :
                        'application/json'
                }
            });
            if (args === null || args === void 0 ? void 0 : args.parse) {
                return index_1.default.parseResponse(yield response.json());
            }
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
}
_Actions_session = new WeakMap(), _Actions_instances = new WeakSet(), _Actions_wrap = function _Actions_wrap(response) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            success: response.ok,
            status_code: response.status,
            data: JSON.parse(yield response.text())
        };
    });
}, _Actions_needsLogin = function _Actions_needsLogin(id) {
    return [
        'FElibrary',
        'FEhistory',
        'FEsubscriptions',
        'FEmusic_listening_review',
        'FEmusic_library_landing',
        'SPaccount_overview',
        'SPaccount_notifications',
        'SPaccount_privacy',
        'SPtime_watched'
    ].includes(id);
};
exports.default = Actions;
//# sourceMappingURL=Actions.js.map