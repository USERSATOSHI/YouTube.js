"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class GameDetails extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.box_art = Thumbnail_1.default.fromResponse(data.boxArt);
        this.box_art_overlay_text = new Text_1.default(data.boxArtOverlayText);
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        this.is_official_box_art = data.isOfficialBoxArt;
    }
}
exports.default = GameDetails;
GameDetails.type = 'GameDetails';
//# sourceMappingURL=GameDetails.js.map