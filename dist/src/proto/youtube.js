"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFilter_Filters = exports.SearchFilter = exports.MusicSearchFilter_Filters_Type = exports.MusicSearchFilter_Filters = exports.MusicSearchFilter = exports.PeformCommentActionParams_TranslateCommentParams_Params_Comment = exports.PeformCommentActionParams_TranslateCommentParams_Params = exports.PeformCommentActionParams_TranslateCommentParams = exports.PeformCommentActionParams = exports.CreateCommentParams_Params = exports.CreateCommentParams = exports.GetCommentsSectionParams_Params_RepliesOptions_UnkOpts = exports.GetCommentsSectionParams_Params_RepliesOptions = exports.GetCommentsSectionParams_Params_Options = exports.GetCommentsSectionParams_Params = exports.GetCommentsSectionParams_Context = exports.GetCommentsSectionParams = exports.LiveMessageParams_Params_Ids = exports.LiveMessageParams_Params = exports.LiveMessageParams = exports.NotificationPreferences_Preference = exports.NotificationPreferences = exports.SoundInfoParams_Sound_Params_Ids = exports.SoundInfoParams_Sound_Params = exports.SoundInfoParams_Sound = exports.SoundInfoParams = exports.InnertubePayload_VideoThumbnail_Thumbnail = exports.InnertubePayload_VideoThumbnail = exports.InnertubePayload_License = exports.InnertubePayload_AgeRestricted = exports.InnertubePayload_MadeForKids = exports.InnertubePayload_Category = exports.InnertubePayload_Privacy = exports.InnertubePayload_Tags = exports.InnertubePayload_Description = exports.InnertubePayload_Title = exports.InnertubePayload_Context_Client = exports.InnertubePayload_Context = exports.InnertubePayload = exports.ChannelAnalytics_Params = exports.ChannelAnalytics = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelAnalytics$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.ChannelAnalytics", [
            { no: 32, name: "params", kind: "message", T: () => exports.ChannelAnalytics_Params }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.ChannelAnalytics.Params params */ 32:
                    message.params = exports.ChannelAnalytics_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.ChannelAnalytics.Params params = 32; */
        if (message.params)
            exports.ChannelAnalytics_Params.internalBinaryWrite(message.params, writer.tag(32, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.ChannelAnalytics
 */
exports.ChannelAnalytics = new ChannelAnalytics$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChannelAnalytics_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.ChannelAnalytics.Params", [
            { no: 1001, name: "channel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { channelId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string channel_id */ 1001:
                    message.channelId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string channel_id = 1001; */
        if (message.channelId !== "")
            writer.tag(1001, runtime_1.WireType.LengthDelimited).string(message.channelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.ChannelAnalytics.Params
 */
exports.ChannelAnalytics_Params = new ChannelAnalytics_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload", [
            { no: 1, name: "context", kind: "message", T: () => exports.InnertubePayload_Context },
            { no: 2, name: "target", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "title", kind: "message", T: () => exports.InnertubePayload_Title },
            { no: 4, name: "description", kind: "message", T: () => exports.InnertubePayload_Description },
            { no: 6, name: "tags", kind: "message", T: () => exports.InnertubePayload_Tags },
            { no: 38, name: "privacy", kind: "message", T: () => exports.InnertubePayload_Privacy },
            { no: 7, name: "category", kind: "message", T: () => exports.InnertubePayload_Category },
            { no: 68, name: "made_for_kids", kind: "message", T: () => exports.InnertubePayload_MadeForKids },
            { no: 69, name: "age_restricted", kind: "message", T: () => exports.InnertubePayload_AgeRestricted },
            { no: 8, name: "license", kind: "message", T: () => exports.InnertubePayload_License },
            { no: 20, name: "video_thumbnail", kind: "message", T: () => exports.InnertubePayload_VideoThumbnail }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.InnertubePayload.Context context */ 1:
                    message.context = exports.InnertubePayload_Context.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                case /* optional string target */ 2:
                    message.target = reader.string();
                    break;
                case /* optional youtube.InnertubePayload.Title title */ 3:
                    message.title = exports.InnertubePayload_Title.internalBinaryRead(reader, reader.uint32(), options, message.title);
                    break;
                case /* optional youtube.InnertubePayload.Description description */ 4:
                    message.description = exports.InnertubePayload_Description.internalBinaryRead(reader, reader.uint32(), options, message.description);
                    break;
                case /* optional youtube.InnertubePayload.Tags tags */ 6:
                    message.tags = exports.InnertubePayload_Tags.internalBinaryRead(reader, reader.uint32(), options, message.tags);
                    break;
                case /* optional youtube.InnertubePayload.Privacy privacy */ 38:
                    message.privacy = exports.InnertubePayload_Privacy.internalBinaryRead(reader, reader.uint32(), options, message.privacy);
                    break;
                case /* optional youtube.InnertubePayload.Category category */ 7:
                    message.category = exports.InnertubePayload_Category.internalBinaryRead(reader, reader.uint32(), options, message.category);
                    break;
                case /* optional youtube.InnertubePayload.MadeForKids made_for_kids */ 68:
                    message.madeForKids = exports.InnertubePayload_MadeForKids.internalBinaryRead(reader, reader.uint32(), options, message.madeForKids);
                    break;
                case /* optional youtube.InnertubePayload.AgeRestricted age_restricted */ 69:
                    message.ageRestricted = exports.InnertubePayload_AgeRestricted.internalBinaryRead(reader, reader.uint32(), options, message.ageRestricted);
                    break;
                case /* optional youtube.InnertubePayload.License license */ 8:
                    message.license = exports.InnertubePayload_License.internalBinaryRead(reader, reader.uint32(), options, message.license);
                    break;
                case /* optional youtube.InnertubePayload.VideoThumbnail video_thumbnail */ 20:
                    message.videoThumbnail = exports.InnertubePayload_VideoThumbnail.internalBinaryRead(reader, reader.uint32(), options, message.videoThumbnail);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.InnertubePayload.Context context = 1; */
        if (message.context)
            exports.InnertubePayload_Context.internalBinaryWrite(message.context, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string target = 2; */
        if (message.target !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.target);
        /* optional youtube.InnertubePayload.Title title = 3; */
        if (message.title)
            exports.InnertubePayload_Title.internalBinaryWrite(message.title, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.Description description = 4; */
        if (message.description)
            exports.InnertubePayload_Description.internalBinaryWrite(message.description, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.Tags tags = 6; */
        if (message.tags)
            exports.InnertubePayload_Tags.internalBinaryWrite(message.tags, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.Privacy privacy = 38; */
        if (message.privacy)
            exports.InnertubePayload_Privacy.internalBinaryWrite(message.privacy, writer.tag(38, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.Category category = 7; */
        if (message.category)
            exports.InnertubePayload_Category.internalBinaryWrite(message.category, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.MadeForKids made_for_kids = 68; */
        if (message.madeForKids)
            exports.InnertubePayload_MadeForKids.internalBinaryWrite(message.madeForKids, writer.tag(68, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.AgeRestricted age_restricted = 69; */
        if (message.ageRestricted)
            exports.InnertubePayload_AgeRestricted.internalBinaryWrite(message.ageRestricted, writer.tag(69, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.License license = 8; */
        if (message.license)
            exports.InnertubePayload_License.internalBinaryWrite(message.license, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.InnertubePayload.VideoThumbnail video_thumbnail = 20; */
        if (message.videoThumbnail)
            exports.InnertubePayload_VideoThumbnail.internalBinaryWrite(message.videoThumbnail, writer.tag(20, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload
 */
exports.InnertubePayload = new InnertubePayload$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Context$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Context", [
            { no: 1, name: "client", kind: "message", T: () => exports.InnertubePayload_Context_Client }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.InnertubePayload.Context.Client client */ 1:
                    message.client = exports.InnertubePayload_Context_Client.internalBinaryRead(reader, reader.uint32(), options, message.client);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.InnertubePayload.Context.Client client = 1; */
        if (message.client)
            exports.InnertubePayload_Context_Client.internalBinaryWrite(message.client, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Context
 */
exports.InnertubePayload_Context = new InnertubePayload_Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Context_Client$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Context.Client", [
            { no: 16, name: "unkparam", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "client_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unkparam: 0, clientVersion: "", clientName: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 unkparam */ 16:
                    message.unkparam = reader.int32();
                    break;
                case /* string client_version */ 17:
                    message.clientVersion = reader.string();
                    break;
                case /* string client_name */ 18:
                    message.clientName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 unkparam = 16; */
        if (message.unkparam !== 0)
            writer.tag(16, runtime_1.WireType.Varint).int32(message.unkparam);
        /* string client_version = 17; */
        if (message.clientVersion !== "")
            writer.tag(17, runtime_1.WireType.LengthDelimited).string(message.clientVersion);
        /* string client_name = 18; */
        if (message.clientName !== "")
            writer.tag(18, runtime_1.WireType.LengthDelimited).string(message.clientName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Context.Client
 */
exports.InnertubePayload_Context_Client = new InnertubePayload_Context_Client$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Title$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Title", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { text: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.text);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Title
 */
exports.InnertubePayload_Title = new InnertubePayload_Title$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Description$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Description", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { text: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.text);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Description
 */
exports.InnertubePayload_Description = new InnertubePayload_Description$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Tags$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Tags", [
            { no: 1, name: "list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { list: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string list */ 1:
                    message.list.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string list = 1; */
        for (let i = 0; i < message.list.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.list[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Tags
 */
exports.InnertubePayload_Tags = new InnertubePayload_Tags$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Privacy$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Privacy", [
            { no: 1, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 type */ 1:
                    message.type = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Privacy
 */
exports.InnertubePayload_Privacy = new InnertubePayload_Privacy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_Category$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.Category", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Category
 */
exports.InnertubePayload_Category = new InnertubePayload_Category$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_MadeForKids$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.MadeForKids", [
            { no: 1, name: "unkparam", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "choice", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unkparam: 0, choice: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 unkparam */ 1:
                    message.unkparam = reader.int32();
                    break;
                case /* int32 choice */ 2:
                    message.choice = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 unkparam = 1; */
        if (message.unkparam !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.unkparam);
        /* int32 choice = 2; */
        if (message.choice !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.choice);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.MadeForKids
 */
exports.InnertubePayload_MadeForKids = new InnertubePayload_MadeForKids$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_AgeRestricted$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.AgeRestricted", [
            { no: 1, name: "unkparam", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "choice", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unkparam: 0, choice: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 unkparam */ 1:
                    message.unkparam = reader.int32();
                    break;
                case /* int32 choice */ 2:
                    message.choice = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 unkparam = 1; */
        if (message.unkparam !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.unkparam);
        /* int32 choice = 2; */
        if (message.choice !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.choice);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.AgeRestricted
 */
exports.InnertubePayload_AgeRestricted = new InnertubePayload_AgeRestricted$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_License$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.License", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { type: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.License
 */
exports.InnertubePayload_License = new InnertubePayload_License$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_VideoThumbnail$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.VideoThumbnail", [
            { no: 1, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "thumbnail", kind: "message", T: () => exports.InnertubePayload_VideoThumbnail_Thumbnail }
        ]);
    }
    create(value) {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* youtube.InnertubePayload.VideoThumbnail.Thumbnail thumbnail */ 3:
                    message.thumbnail = exports.InnertubePayload_VideoThumbnail_Thumbnail.internalBinaryRead(reader, reader.uint32(), options, message.thumbnail);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        /* youtube.InnertubePayload.VideoThumbnail.Thumbnail thumbnail = 3; */
        if (message.thumbnail)
            exports.InnertubePayload_VideoThumbnail_Thumbnail.internalBinaryWrite(message.thumbnail, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.VideoThumbnail
 */
exports.InnertubePayload_VideoThumbnail = new InnertubePayload_VideoThumbnail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InnertubePayload_VideoThumbnail_Thumbnail$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.InnertubePayload.VideoThumbnail.Thumbnail", [
            { no: 1, name: "image_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { imageData: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes image_data */ 1:
                    message.imageData = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes image_data = 1; */
        if (message.imageData.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.imageData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.VideoThumbnail.Thumbnail
 */
exports.InnertubePayload_VideoThumbnail_Thumbnail = new InnertubePayload_VideoThumbnail_Thumbnail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SoundInfoParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SoundInfoParams", [
            { no: 94, name: "sound", kind: "message", T: () => exports.SoundInfoParams_Sound }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.SoundInfoParams.Sound sound */ 94:
                    message.sound = exports.SoundInfoParams_Sound.internalBinaryRead(reader, reader.uint32(), options, message.sound);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.SoundInfoParams.Sound sound = 94; */
        if (message.sound)
            exports.SoundInfoParams_Sound.internalBinaryWrite(message.sound, writer.tag(94, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams
 */
exports.SoundInfoParams = new SoundInfoParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SoundInfoParams_Sound$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SoundInfoParams.Sound", [
            { no: 1, name: "params", kind: "message", T: () => exports.SoundInfoParams_Sound_Params }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.SoundInfoParams.Sound.Params params */ 1:
                    message.params = exports.SoundInfoParams_Sound_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.SoundInfoParams.Sound.Params params = 1; */
        if (message.params)
            exports.SoundInfoParams_Sound_Params.internalBinaryWrite(message.params, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound
 */
exports.SoundInfoParams_Sound = new SoundInfoParams_Sound$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SoundInfoParams_Sound_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SoundInfoParams.Sound.Params", [
            { no: 2, name: "ids", kind: "message", T: () => exports.SoundInfoParams_Sound_Params_Ids }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.SoundInfoParams.Sound.Params.Ids ids */ 2:
                    message.ids = exports.SoundInfoParams_Sound_Params_Ids.internalBinaryRead(reader, reader.uint32(), options, message.ids);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.SoundInfoParams.Sound.Params.Ids ids = 2; */
        if (message.ids)
            exports.SoundInfoParams_Sound_Params_Ids.internalBinaryWrite(message.ids, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound.Params
 */
exports.SoundInfoParams_Sound_Params = new SoundInfoParams_Sound_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SoundInfoParams_Sound_Params_Ids$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SoundInfoParams.Sound.Params.Ids", [
            { no: 1, name: "id_1", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "id_2", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "id_3", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { id1: "", id2: "", id3: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id_1 */ 1:
                    message.id1 = reader.string();
                    break;
                case /* string id_2 */ 2:
                    message.id2 = reader.string();
                    break;
                case /* string id_3 */ 3:
                    message.id3 = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string id_1 = 1; */
        if (message.id1 !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.id1);
        /* string id_2 = 2; */
        if (message.id2 !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.id2);
        /* string id_3 = 3; */
        if (message.id3 !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.id3);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound.Params.Ids
 */
exports.SoundInfoParams_Sound_Params_Ids = new SoundInfoParams_Sound_Params_Ids$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NotificationPreferences$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.NotificationPreferences", [
            { no: 1, name: "channel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pref_id", kind: "message", T: () => exports.NotificationPreferences_Preference },
            { no: 3, name: "number_0", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "number_1", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { channelId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string channel_id */ 1:
                    message.channelId = reader.string();
                    break;
                case /* youtube.NotificationPreferences.Preference pref_id */ 2:
                    message.prefId = exports.NotificationPreferences_Preference.internalBinaryRead(reader, reader.uint32(), options, message.prefId);
                    break;
                case /* optional int32 number_0 */ 3:
                    message.number0 = reader.int32();
                    break;
                case /* optional int32 number_1 */ 4:
                    message.number1 = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string channel_id = 1; */
        if (message.channelId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.channelId);
        /* youtube.NotificationPreferences.Preference pref_id = 2; */
        if (message.prefId)
            exports.NotificationPreferences_Preference.internalBinaryWrite(message.prefId, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 number_0 = 3; */
        if (message.number0 !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.number0);
        /* optional int32 number_1 = 4; */
        if (message.number1 !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.number1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.NotificationPreferences
 */
exports.NotificationPreferences = new NotificationPreferences$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NotificationPreferences_Preference$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.NotificationPreferences.Preference", [
            { no: 1, name: "index", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 index */ 1:
                    message.index = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 index = 1; */
        if (message.index !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.NotificationPreferences.Preference
 */
exports.NotificationPreferences_Preference = new NotificationPreferences_Preference$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LiveMessageParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.LiveMessageParams", [
            { no: 1, name: "params", kind: "message", T: () => exports.LiveMessageParams_Params },
            { no: 2, name: "number_0", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "number_1", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.LiveMessageParams.Params params */ 1:
                    message.params = exports.LiveMessageParams_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* optional int32 number_0 */ 2:
                    message.number0 = reader.int32();
                    break;
                case /* optional int32 number_1 */ 3:
                    message.number1 = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.LiveMessageParams.Params params = 1; */
        if (message.params)
            exports.LiveMessageParams_Params.internalBinaryWrite(message.params, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 number_0 = 2; */
        if (message.number0 !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.number0);
        /* optional int32 number_1 = 3; */
        if (message.number1 !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.number1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams
 */
exports.LiveMessageParams = new LiveMessageParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LiveMessageParams_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.LiveMessageParams.Params", [
            { no: 5, name: "ids", kind: "message", T: () => exports.LiveMessageParams_Params_Ids }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.LiveMessageParams.Params.Ids ids */ 5:
                    message.ids = exports.LiveMessageParams_Params_Ids.internalBinaryRead(reader, reader.uint32(), options, message.ids);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.LiveMessageParams.Params.Ids ids = 5; */
        if (message.ids)
            exports.LiveMessageParams_Params_Ids.internalBinaryWrite(message.ids, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams.Params
 */
exports.LiveMessageParams_Params = new LiveMessageParams_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LiveMessageParams_Params_Ids$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.LiveMessageParams.Params.Ids", [
            { no: 1, name: "channel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { channelId: "", videoId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string channel_id */ 1:
                    message.channelId = reader.string();
                    break;
                case /* string video_id */ 2:
                    message.videoId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string channel_id = 1; */
        if (message.channelId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.channelId);
        /* string video_id = 2; */
        if (message.videoId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.videoId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams.Params.Ids
 */
exports.LiveMessageParams_Params_Ids = new LiveMessageParams_Params_Ids$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams", [
            { no: 2, name: "ctx", kind: "message", T: () => exports.GetCommentsSectionParams_Context },
            { no: 3, name: "unk_param", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "params", kind: "message", T: () => exports.GetCommentsSectionParams_Params }
        ]);
    }
    create(value) {
        const message = { unkParam: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.GetCommentsSectionParams.Context ctx */ 2:
                    message.ctx = exports.GetCommentsSectionParams_Context.internalBinaryRead(reader, reader.uint32(), options, message.ctx);
                    break;
                case /* int32 unk_param */ 3:
                    message.unkParam = reader.int32();
                    break;
                case /* youtube.GetCommentsSectionParams.Params params */ 6:
                    message.params = exports.GetCommentsSectionParams_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.GetCommentsSectionParams.Context ctx = 2; */
        if (message.ctx)
            exports.GetCommentsSectionParams_Context.internalBinaryWrite(message.ctx, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 unk_param = 3; */
        if (message.unkParam !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.unkParam);
        /* youtube.GetCommentsSectionParams.Params params = 6; */
        if (message.params)
            exports.GetCommentsSectionParams_Params.internalBinaryWrite(message.params, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams
 */
exports.GetCommentsSectionParams = new GetCommentsSectionParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams_Context$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams.Context", [
            { no: 2, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { videoId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string video_id */ 2:
                    message.videoId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string video_id = 2; */
        if (message.videoId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.videoId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Context
 */
exports.GetCommentsSectionParams_Context = new GetCommentsSectionParams_Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams.Params", [
            { no: 1, name: "unk_token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "opts", kind: "message", T: () => exports.GetCommentsSectionParams_Params_Options },
            { no: 3, name: "replies_opts", kind: "message", T: () => exports.GetCommentsSectionParams_Params_RepliesOptions },
            { no: 5, name: "page", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "target", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { target: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string unk_token */ 1:
                    message.unkToken = reader.string();
                    break;
                case /* optional youtube.GetCommentsSectionParams.Params.Options opts */ 4:
                    message.opts = exports.GetCommentsSectionParams_Params_Options.internalBinaryRead(reader, reader.uint32(), options, message.opts);
                    break;
                case /* optional youtube.GetCommentsSectionParams.Params.RepliesOptions replies_opts */ 3:
                    message.repliesOpts = exports.GetCommentsSectionParams_Params_RepliesOptions.internalBinaryRead(reader, reader.uint32(), options, message.repliesOpts);
                    break;
                case /* optional int32 page */ 5:
                    message.page = reader.int32();
                    break;
                case /* string target */ 8:
                    message.target = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string unk_token = 1; */
        if (message.unkToken !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.unkToken);
        /* optional youtube.GetCommentsSectionParams.Params.Options opts = 4; */
        if (message.opts)
            exports.GetCommentsSectionParams_Params_Options.internalBinaryWrite(message.opts, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional youtube.GetCommentsSectionParams.Params.RepliesOptions replies_opts = 3; */
        if (message.repliesOpts)
            exports.GetCommentsSectionParams_Params_RepliesOptions.internalBinaryWrite(message.repliesOpts, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 page = 5; */
        if (message.page !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.page);
        /* string target = 8; */
        if (message.target !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.target);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params
 */
exports.GetCommentsSectionParams_Params = new GetCommentsSectionParams_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams_Params_Options$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams.Params.Options", [
            { no: 4, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "sort_by", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { videoId: "", sortBy: 0, type: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string video_id */ 4:
                    message.videoId = reader.string();
                    break;
                case /* int32 sort_by */ 6:
                    message.sortBy = reader.int32();
                    break;
                case /* int32 type */ 15:
                    message.type = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string video_id = 4; */
        if (message.videoId !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.videoId);
        /* int32 sort_by = 6; */
        if (message.sortBy !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.sortBy);
        /* int32 type = 15; */
        if (message.type !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.Options
 */
exports.GetCommentsSectionParams_Params_Options = new GetCommentsSectionParams_Params_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams_Params_RepliesOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams.Params.RepliesOptions", [
            { no: 2, name: "comment_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "unkopts", kind: "message", T: () => exports.GetCommentsSectionParams_Params_RepliesOptions_UnkOpts },
            { no: 5, name: "channel_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "unk_param_1", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "unk_param_2", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { commentId: "", videoId: "", unkParam1: 0, unkParam2: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string comment_id */ 2:
                    message.commentId = reader.string();
                    break;
                case /* youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts unkopts */ 4:
                    message.unkopts = exports.GetCommentsSectionParams_Params_RepliesOptions_UnkOpts.internalBinaryRead(reader, reader.uint32(), options, message.unkopts);
                    break;
                case /* optional string channel_id */ 5:
                    message.channelId = reader.string();
                    break;
                case /* string video_id */ 6:
                    message.videoId = reader.string();
                    break;
                case /* int32 unk_param_1 */ 8:
                    message.unkParam1 = reader.int32();
                    break;
                case /* int32 unk_param_2 */ 9:
                    message.unkParam2 = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string comment_id = 2; */
        if (message.commentId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.commentId);
        /* youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts unkopts = 4; */
        if (message.unkopts)
            exports.GetCommentsSectionParams_Params_RepliesOptions_UnkOpts.internalBinaryWrite(message.unkopts, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string channel_id = 5; */
        if (message.channelId !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.channelId);
        /* string video_id = 6; */
        if (message.videoId !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.videoId);
        /* int32 unk_param_1 = 8; */
        if (message.unkParam1 !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.unkParam1);
        /* int32 unk_param_2 = 9; */
        if (message.unkParam2 !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.unkParam2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions
 */
exports.GetCommentsSectionParams_Params_RepliesOptions = new GetCommentsSectionParams_Params_RepliesOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCommentsSectionParams_Params_RepliesOptions_UnkOpts$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts", [
            { no: 1, name: "unk_param", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unkParam: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 unk_param */ 1:
                    message.unkParam = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 unk_param = 1; */
        if (message.unkParam !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.unkParam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts
 */
exports.GetCommentsSectionParams_Params_RepliesOptions_UnkOpts = new GetCommentsSectionParams_Params_RepliesOptions_UnkOpts$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateCommentParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.CreateCommentParams", [
            { no: 2, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "params", kind: "message", T: () => exports.CreateCommentParams_Params },
            { no: 10, name: "number", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { videoId: "", number: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string video_id */ 2:
                    message.videoId = reader.string();
                    break;
                case /* youtube.CreateCommentParams.Params params */ 5:
                    message.params = exports.CreateCommentParams_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* int32 number */ 10:
                    message.number = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string video_id = 2; */
        if (message.videoId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.videoId);
        /* youtube.CreateCommentParams.Params params = 5; */
        if (message.params)
            exports.CreateCommentParams_Params.internalBinaryWrite(message.params, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 number = 10; */
        if (message.number !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.number);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentParams
 */
exports.CreateCommentParams = new CreateCommentParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateCommentParams_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.CreateCommentParams.Params", [
            { no: 1, name: "index", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 index */ 1:
                    message.index = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 index = 1; */
        if (message.index !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentParams.Params
 */
exports.CreateCommentParams_Params = new CreateCommentParams_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PeformCommentActionParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.PeformCommentActionParams", [
            { no: 1, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "comment_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "video_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "unk_num", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "channel_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 31, name: "translate_comment_params", kind: "message", T: () => exports.PeformCommentActionParams_TranslateCommentParams }
        ]);
    }
    create(value) {
        const message = { type: 0, commentId: "", videoId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* string comment_id */ 3:
                    message.commentId = reader.string();
                    break;
                case /* string video_id */ 5:
                    message.videoId = reader.string();
                    break;
                case /* optional int32 unk_num */ 2:
                    message.unkNum = reader.int32();
                    break;
                case /* optional string channel_id */ 23:
                    message.channelId = reader.string();
                    break;
                case /* optional youtube.PeformCommentActionParams.TranslateCommentParams translate_comment_params */ 31:
                    message.translateCommentParams = exports.PeformCommentActionParams_TranslateCommentParams.internalBinaryRead(reader, reader.uint32(), options, message.translateCommentParams);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        /* string comment_id = 3; */
        if (message.commentId !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.commentId);
        /* string video_id = 5; */
        if (message.videoId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.videoId);
        /* optional int32 unk_num = 2; */
        if (message.unkNum !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.unkNum);
        /* optional string channel_id = 23; */
        if (message.channelId !== undefined)
            writer.tag(23, runtime_1.WireType.LengthDelimited).string(message.channelId);
        /* optional youtube.PeformCommentActionParams.TranslateCommentParams translate_comment_params = 31; */
        if (message.translateCommentParams)
            exports.PeformCommentActionParams_TranslateCommentParams.internalBinaryWrite(message.translateCommentParams, writer.tag(31, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams
 */
exports.PeformCommentActionParams = new PeformCommentActionParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PeformCommentActionParams_TranslateCommentParams$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.PeformCommentActionParams.TranslateCommentParams", [
            { no: 3, name: "params", kind: "message", T: () => exports.PeformCommentActionParams_TranslateCommentParams_Params },
            { no: 2, name: "comment_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "target_language", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { commentId: "", targetLanguage: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.PeformCommentActionParams.TranslateCommentParams.Params params */ 3:
                    message.params = exports.PeformCommentActionParams_TranslateCommentParams_Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* string comment_id */ 2:
                    message.commentId = reader.string();
                    break;
                case /* string target_language */ 4:
                    message.targetLanguage = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.PeformCommentActionParams.TranslateCommentParams.Params params = 3; */
        if (message.params)
            exports.PeformCommentActionParams_TranslateCommentParams_Params.internalBinaryWrite(message.params, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string comment_id = 2; */
        if (message.commentId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.commentId);
        /* string target_language = 4; */
        if (message.targetLanguage !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.targetLanguage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams
 */
exports.PeformCommentActionParams_TranslateCommentParams = new PeformCommentActionParams_TranslateCommentParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PeformCommentActionParams_TranslateCommentParams_Params$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.PeformCommentActionParams.TranslateCommentParams.Params", [
            { no: 1, name: "comment", kind: "message", T: () => exports.PeformCommentActionParams_TranslateCommentParams_Params_Comment }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment comment */ 1:
                    message.comment = exports.PeformCommentActionParams_TranslateCommentParams_Params_Comment.internalBinaryRead(reader, reader.uint32(), options, message.comment);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment comment = 1; */
        if (message.comment)
            exports.PeformCommentActionParams_TranslateCommentParams_Params_Comment.internalBinaryWrite(message.comment, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params
 */
exports.PeformCommentActionParams_TranslateCommentParams_Params = new PeformCommentActionParams_TranslateCommentParams_Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PeformCommentActionParams_TranslateCommentParams_Params_Comment$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { text: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.text);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment
 */
exports.PeformCommentActionParams_TranslateCommentParams_Params_Comment = new PeformCommentActionParams_TranslateCommentParams_Params_Comment$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MusicSearchFilter$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.MusicSearchFilter", [
            { no: 2, name: "filters", kind: "message", T: () => exports.MusicSearchFilter_Filters }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional youtube.MusicSearchFilter.Filters filters */ 2:
                    message.filters = exports.MusicSearchFilter_Filters.internalBinaryRead(reader, reader.uint32(), options, message.filters);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional youtube.MusicSearchFilter.Filters filters = 2; */
        if (message.filters)
            exports.MusicSearchFilter_Filters.internalBinaryWrite(message.filters, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter
 */
exports.MusicSearchFilter = new MusicSearchFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MusicSearchFilter_Filters$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.MusicSearchFilter.Filters", [
            { no: 17, name: "type", kind: "message", T: () => exports.MusicSearchFilter_Filters_Type }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional youtube.MusicSearchFilter.Filters.Type type */ 17:
                    message.type = exports.MusicSearchFilter_Filters_Type.internalBinaryRead(reader, reader.uint32(), options, message.type);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional youtube.MusicSearchFilter.Filters.Type type = 17; */
        if (message.type)
            exports.MusicSearchFilter_Filters_Type.internalBinaryWrite(message.type, writer.tag(17, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter.Filters
 */
exports.MusicSearchFilter_Filters = new MusicSearchFilter_Filters$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MusicSearchFilter_Filters_Type$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.MusicSearchFilter.Filters.Type", [
            { no: 1, name: "song", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "video", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "album", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "artist", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "playlist", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 song */ 1:
                    message.song = reader.int32();
                    break;
                case /* optional int32 video */ 2:
                    message.video = reader.int32();
                    break;
                case /* optional int32 album */ 3:
                    message.album = reader.int32();
                    break;
                case /* optional int32 artist */ 4:
                    message.artist = reader.int32();
                    break;
                case /* optional int32 playlist */ 5:
                    message.playlist = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 song = 1; */
        if (message.song !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.song);
        /* optional int32 video = 2; */
        if (message.video !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.video);
        /* optional int32 album = 3; */
        if (message.album !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.album);
        /* optional int32 artist = 4; */
        if (message.artist !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.artist);
        /* optional int32 playlist = 5; */
        if (message.playlist !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.playlist);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter.Filters.Type
 */
exports.MusicSearchFilter_Filters_Type = new MusicSearchFilter_Filters_Type$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchFilter$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SearchFilter", [
            { no: 1, name: "sort_by", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "no_filter", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "filters", kind: "message", T: () => exports.SearchFilter_Filters }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 sort_by */ 1:
                    message.sortBy = reader.int32();
                    break;
                case /* optional int32 no_filter */ 19:
                    message.noFilter = reader.int32();
                    break;
                case /* optional youtube.SearchFilter.Filters filters */ 2:
                    message.filters = exports.SearchFilter_Filters.internalBinaryRead(reader, reader.uint32(), options, message.filters);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 sort_by = 1; */
        if (message.sortBy !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.sortBy);
        /* optional int32 no_filter = 19; */
        if (message.noFilter !== undefined)
            writer.tag(19, runtime_1.WireType.Varint).int32(message.noFilter);
        /* optional youtube.SearchFilter.Filters filters = 2; */
        if (message.filters)
            exports.SearchFilter_Filters.internalBinaryWrite(message.filters, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SearchFilter
 */
exports.SearchFilter = new SearchFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchFilter_Filters$Type extends runtime_5.MessageType {
    constructor() {
        super("youtube.SearchFilter.Filters", [
            { no: 1, name: "upload_date", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "duration", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 upload_date */ 1:
                    message.uploadDate = reader.int32();
                    break;
                case /* optional int32 type */ 2:
                    message.type = reader.int32();
                    break;
                case /* optional int32 duration */ 3:
                    message.duration = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 upload_date = 1; */
        if (message.uploadDate !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.uploadDate);
        /* optional int32 type = 2; */
        if (message.type !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.type);
        /* optional int32 duration = 3; */
        if (message.duration !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.duration);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message youtube.SearchFilter.Filters
 */
exports.SearchFilter_Filters = new SearchFilter_Filters$Type();
//# sourceMappingURL=youtube.js.map