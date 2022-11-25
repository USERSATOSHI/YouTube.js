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
var _OAuth_instances, _OAuth_identity, _OAuth_session, _OAuth_credentials, _OAuth_polling_interval, _OAuth_loadCachedCredentials, _OAuth_getUserCode, _OAuth_startPolling, _OAuth_refreshAccessToken, _OAuth_getClientIdentity;
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __importDefault(require("../utils/Constants"));
const Utils_1 = require("../utils/Utils");
class OAuth {
    constructor(session) {
        _OAuth_instances.add(this);
        _OAuth_identity.set(this, void 0);
        _OAuth_session.set(this, void 0);
        _OAuth_credentials.set(this, void 0);
        _OAuth_polling_interval.set(this, 5);
        __classPrivateFieldSet(this, _OAuth_session, session, "f");
    }
    /**
     * Starts the auth flow in case no valid credentials are available.
     */
    init(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldSet(this, _OAuth_credentials, credentials, "f");
            if (this.validateCredentials()) {
                if (!this.has_access_token_expired)
                    __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth', {
                        credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
                        status: 'SUCCESS'
                    });
            }
            else if (!(yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_loadCachedCredentials).call(this))) {
                yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
            }
        });
    }
    cacheCredentials() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const encoder = new TextEncoder();
            const data = encoder.encode(JSON.stringify(__classPrivateFieldGet(this, _OAuth_credentials, "f")));
            yield ((_a = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a === void 0 ? void 0 : _a.set('youtubei_oauth_credentials', data.buffer));
        });
    }
    removeCache() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a === void 0 ? void 0 : _a.remove('youtubei_oauth_credentials'));
        });
    }
    /**
     * Refresh access token if the same has expired.
     */
    refreshIfRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.has_access_token_expired) {
                yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_refreshAccessToken).call(this);
            }
        });
    }
    revokeCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _OAuth_credentials, "f"))
                return;
            yield this.removeCache();
            return __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL(`/o/oauth2/revoke?token=${encodeURIComponent(__classPrivateFieldGet(this, _OAuth_credentials, "f").access_token)}`, Constants_1.default.URLS.YT_BASE), {
                method: 'post'
            });
        });
    }
    get credentials() {
        return __classPrivateFieldGet(this, _OAuth_credentials, "f");
    }
    get has_access_token_expired() {
        const timestamp = __classPrivateFieldGet(this, _OAuth_credentials, "f") ? new Date(__classPrivateFieldGet(this, _OAuth_credentials, "f").expires).getTime() : -Infinity;
        return new Date().getTime() > timestamp;
    }
    validateCredentials() {
        return __classPrivateFieldGet(this, _OAuth_credentials, "f") &&
            Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), 'access_token') &&
            Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), 'refresh_token') &&
            Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), 'expires') || false;
    }
}
_OAuth_identity = new WeakMap(), _OAuth_session = new WeakMap(), _OAuth_credentials = new WeakMap(), _OAuth_polling_interval = new WeakMap(), _OAuth_instances = new WeakSet(), _OAuth_loadCachedCredentials = function _OAuth_loadCachedCredentials() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield ((_a = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a === void 0 ? void 0 : _a.get('youtubei_oauth_credentials'));
        if (!data)
            return false;
        const decoder = new TextDecoder();
        const credentials = JSON.parse(decoder.decode(data));
        __classPrivateFieldSet(this, _OAuth_credentials, {
            access_token: credentials.access_token,
            refresh_token: credentials.refresh_token,
            expires: new Date(credentials.expires)
        }, "f");
        __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth', {
            credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
            status: 'SUCCESS'
        });
        return true;
    });
}, _OAuth_getUserCode = function _OAuth_getUserCode() {
    return __awaiter(this, void 0, void 0, function* () {
        __classPrivateFieldSet(this, _OAuth_identity, yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
        const data = {
            client_id: __classPrivateFieldGet(this, _OAuth_identity, "f").client_id,
            scope: Constants_1.default.OAUTH.SCOPE,
            device_id: (0, Utils_1.uuidv4)(),
            model_name: Constants_1.default.OAUTH.MODEL_NAME
        };
        const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL('/o/oauth2/device/code', Constants_1.default.URLS.YT_BASE), {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response_data = yield response.json();
        __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth-pending', response_data);
        __classPrivateFieldSet(this, _OAuth_polling_interval, response_data.interval, "f");
        __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_startPolling).call(this, response_data.device_code);
    });
}, _OAuth_startPolling = function _OAuth_startPolling(device_code) {
    const poller = setInterval(() => __awaiter(this, void 0, void 0, function* () {
        const data = Object.assign(Object.assign({}, __classPrivateFieldGet(this, _OAuth_identity, "f")), { code: device_code, grant_type: Constants_1.default.OAUTH.GRANT_TYPE });
        try {
            const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL('/o/oauth2/token', Constants_1.default.URLS.YT_BASE), {
                body: JSON.stringify(data),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response_data = yield response.json();
            if (response_data.error) {
                switch (response_data.error) {
                    case 'access_denied':
                        __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth-error', new Utils_1.OAuthError('Access was denied.', { status: 'ACCESS_DENIED' }));
                        break;
                    case 'expired_token':
                        __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth-error', new Utils_1.OAuthError('The device code has expired, restarting auth flow.', { status: 'DEVICE_CODE_EXPIRED' }));
                        clearInterval(poller);
                        __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
                        break;
                    default:
                        break;
                }
                return;
            }
            const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);
            __classPrivateFieldSet(this, _OAuth_credentials, {
                access_token: response_data.access_token,
                refresh_token: response_data.refresh_token,
                expires: expiration_date
            }, "f");
            __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth', {
                credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
                status: 'SUCCESS'
            });
            clearInterval(poller);
        }
        catch (err) {
            clearInterval(poller);
            return __classPrivateFieldGet(this, _OAuth_session, "f").emit('auth-error', new Utils_1.OAuthError('Could not obtain user code.', { status: 'FAILED', error: err }));
        }
    }), __classPrivateFieldGet(this, _OAuth_polling_interval, "f") * 1000);
}, _OAuth_refreshAccessToken = function _OAuth_refreshAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!__classPrivateFieldGet(this, _OAuth_credentials, "f"))
            return;
        __classPrivateFieldSet(this, _OAuth_identity, yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
        const data = Object.assign(Object.assign({}, __classPrivateFieldGet(this, _OAuth_identity, "f")), { refresh_token: __classPrivateFieldGet(this, _OAuth_credentials, "f").refresh_token, grant_type: 'refresh_token' });
        const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL('/o/oauth2/token', Constants_1.default.URLS.YT_BASE), {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response_data = yield response.json();
        const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1000);
        __classPrivateFieldSet(this, _OAuth_credentials, {
            access_token: response_data.access_token,
            refresh_token: response_data.refresh_token || __classPrivateFieldGet(this, _OAuth_credentials, "f").refresh_token,
            expires: expiration_date
        }, "f");
        __classPrivateFieldGet(this, _OAuth_session, "f").emit('update-credentials', {
            credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
            status: 'SUCCESS'
        });
    });
}, _OAuth_getClientIdentity = function _OAuth_getClientIdentity() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL('/tv', Constants_1.default.URLS.YT_BASE), { headers: Constants_1.default.OAUTH.HEADERS });
        const response_data = yield response.text();
        const url_body = (_a = Constants_1.default.OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)) === null || _a === void 0 ? void 0 : _a[1];
        if (!url_body)
            throw new Utils_1.OAuthError('Could not obtain script url.', { status: 'FAILED' });
        const script = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch(url_body, { baseURL: Constants_1.default.URLS.YT_BASE });
        const client_identity = (yield script.text())
            .replace(/\n/g, '')
            .match(Constants_1.default.OAUTH.REGEX.CLIENT_IDENTITY);
        const groups = client_identity === null || client_identity === void 0 ? void 0 : client_identity.groups;
        if (!groups)
            throw new Utils_1.OAuthError('Could not obtain client identity.', { status: 'FAILED' });
        return groups;
    });
};
exports.default = OAuth;
//# sourceMappingURL=OAuth.js.map