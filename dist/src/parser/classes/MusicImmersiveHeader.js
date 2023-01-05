"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const MusicThumbnail_1 = __importDefault(require("./MusicThumbnail"));
const helpers_1 = require("../helpers");
class MusicImmersiveHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.thumbnail = index_1.default.parseItem(data.thumbnail, MusicThumbnail_1.default);
        /**
             Not useful for now.
             this.menu = Parser.parse(data.menu);
             this.play_button = Parser.parse(data.playButton);
             this.start_radio_button = Parser.parse(data.startRadioButton);
         */
    }
}
MusicImmersiveHeader.type = 'MusicImmersiveHeader';
exports.default = MusicImmersiveHeader;
//# sourceMappingURL=MusicImmersiveHeader.js.map