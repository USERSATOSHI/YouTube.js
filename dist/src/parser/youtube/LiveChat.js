"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _LiveChat_instances, _LiveChat_actions, _LiveChat_video_info, _LiveChat_continuation, _LiveChat_mcontinuation, _LiveChat_pollLivechat, _LiveChat_emitSmoothedActions, _LiveChat_pollMetadata, _LiveChat_wait;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("../index"));
const EventEmitterLike_1 = __importDefault(require("../../utils/EventEmitterLike"));
const AddChatItemAction_1 = __importDefault(require("../classes/livechat/AddChatItemAction"));
const UpdateTitleAction_1 = __importDefault(require("../classes/livechat/UpdateTitleAction"));
const UpdateDescriptionAction_1 = __importDefault(require("../classes/livechat/UpdateDescriptionAction"));
const UpdateViewershipAction_1 = __importDefault(require("../classes/livechat/UpdateViewershipAction"));
const UpdateDateTextAction_1 = __importDefault(require("../classes/livechat/UpdateDateTextAction"));
const UpdateToggleButtonTextAction_1 = __importDefault(require("../classes/livechat/UpdateToggleButtonTextAction"));
const index_2 = __importDefault(require("../../proto/index"));
const Utils_1 = require("../../utils/Utils");
const ItemMenu_1 = __importDefault(require("./ItemMenu"));
class LiveChat extends EventEmitterLike_1.default {
    constructor(video_info) {
        var _a, _b;
        super();
        _LiveChat_instances.add(this);
        _LiveChat_actions.set(this, void 0);
        _LiveChat_video_info.set(this, void 0);
        _LiveChat_continuation.set(this, void 0);
        _LiveChat_mcontinuation.set(this, void 0);
        this.running = false;
        this.is_replay = false;
        __classPrivateFieldSet(this, _LiveChat_video_info, video_info, "f");
        __classPrivateFieldSet(this, _LiveChat_actions, video_info.actions, "f");
        __classPrivateFieldSet(this, _LiveChat_continuation, ((_a = video_info.livechat) === null || _a === void 0 ? void 0 : _a.continuation) || undefined, "f");
        this.is_replay = ((_b = video_info.livechat) === null || _b === void 0 ? void 0 : _b.is_replay) || false;
    }
    start() {
        if (!this.running) {
            this.running = true;
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }
    }
    stop() {
        this.running = false;
    }
    /**
     * Sends a message.
     */
    sendMessage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute('/live_chat/send_message', {
                params: index_2.default.encodeMessageParams(__classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.channel_id, __classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.id),
                richMessage: { textSegments: [{ text }] },
                clientMessageId: (0, Utils_1.uuidv4)(),
                parse: true
            });
            if (!response.actions)
                throw new Utils_1.InnertubeError('Response did not have an "actions" property. The call may have failed.');
            return response.actions.array().as(AddChatItemAction_1.default);
        });
    }
    /**
     * Retrieves given chat item's menu.
     */
    getItemMenu(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!item.menu_endpoint)
                throw new Utils_1.InnertubeError('This item does not have a menu.', item);
            const response = yield item.menu_endpoint.call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
            if (!response)
                throw new Utils_1.InnertubeError('Could not retrieve item menu.', item);
            return new ItemMenu_1.default(response, __classPrivateFieldGet(this, _LiveChat_actions, "f"));
        });
    }
    /**
     * Equivalent to "clicking" a button.
     */
    selectButton(button) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
            return response;
        });
    }
}
_LiveChat_actions = new WeakMap(), _LiveChat_video_info = new WeakMap(), _LiveChat_continuation = new WeakMap(), _LiveChat_mcontinuation = new WeakMap(), _LiveChat_instances = new WeakSet(), _LiveChat_pollLivechat = function _LiveChat_pollLivechat() {
    (() => __awaiter(this, void 0, void 0, function* () {
        const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
        const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute(endpoint, { continuation: __classPrivateFieldGet(this, _LiveChat_continuation, "f") });
        const data = index_1.default.parseResponse(response.data);
        const contents = data.continuation_contents;
        if (!(contents instanceof index_1.LiveChatContinuation))
            throw new Utils_1.InnertubeError('Continuation is not a LiveChatContinuation');
        __classPrivateFieldSet(this, _LiveChat_continuation, contents.continuation.token, "f");
        // Header only exists in the first request
        if (contents.header) {
            this.initial_info = contents;
            this.emit('start', contents);
        }
        else {
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, contents.actions);
        }
        // If there are no actions then we wait 1000 milliseconds, otherwise
        // The amount of items on the action queue will determine the polling interval.
        if (!contents.actions.length && !contents.header)
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 1000);
        if (this.running)
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
    }))();
}, _LiveChat_emitSmoothedActions = function _LiveChat_emitSmoothedActions(action_queue) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = 1E4;
        let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));
        const emit_delay_ms = delay == 1 ? (delay = base / action_queue.length,
            delay *= Math.random() + 0.5,
            delay = Math.min(1E3, delay),
            delay = Math.max(80, delay)) : delay = 80;
        for (const action of action_queue) {
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
            this.emit('chat-update', action);
        }
    });
}, _LiveChat_pollMetadata = function _LiveChat_pollMetadata() {
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const payload = { videoId: __classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.id };
        if (__classPrivateFieldGet(this, _LiveChat_mcontinuation, "f")) {
            payload.continuation = __classPrivateFieldGet(this, _LiveChat_mcontinuation, "f");
        }
        const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute('/updated_metadata', payload);
        const data = index_1.default.parseResponse(response.data);
        __classPrivateFieldSet(this, _LiveChat_mcontinuation, (_a = data.continuation) === null || _a === void 0 ? void 0 : _a.token, "f");
        this.metadata = {
            title: ((_b = data.actions) === null || _b === void 0 ? void 0 : _b.array().firstOfType(UpdateTitleAction_1.default)) || ((_c = this.metadata) === null || _c === void 0 ? void 0 : _c.title),
            description: ((_d = data.actions) === null || _d === void 0 ? void 0 : _d.array().firstOfType(UpdateDescriptionAction_1.default)) || ((_e = this.metadata) === null || _e === void 0 ? void 0 : _e.description),
            views: ((_f = data.actions) === null || _f === void 0 ? void 0 : _f.array().firstOfType(UpdateViewershipAction_1.default)) || ((_g = this.metadata) === null || _g === void 0 ? void 0 : _g.views),
            likes: ((_h = data.actions) === null || _h === void 0 ? void 0 : _h.array().firstOfType(UpdateToggleButtonTextAction_1.default)) || ((_j = this.metadata) === null || _j === void 0 ? void 0 : _j.likes),
            date: ((_k = data.actions) === null || _k === void 0 ? void 0 : _k.array().firstOfType(UpdateDateTextAction_1.default)) || ((_l = this.metadata) === null || _l === void 0 ? void 0 : _l.date)
        };
        this.emit('metadata-update', this.metadata);
        yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 5000);
        if (this.running)
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
    }))();
}, _LiveChat_wait = function _LiveChat_wait(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    });
};
exports.default = LiveChat;
//# sourceMappingURL=LiveChat.js.map