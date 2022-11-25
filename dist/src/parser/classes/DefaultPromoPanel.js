"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class DefaultPromoPanel extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.large_form_factor_background_thumbnail = __1.default.parseItem(data.largeFormFactorBackgroundThumbnail);
        this.small_form_factor_background_thumbnail = __1.default.parseItem(data.smallFormFactorBackgroundThumbnail);
        this.scrim_color_values = data.scrimColorValues;
        this.min_panel_display_duration_ms = data.minPanelDisplayDurationMs;
        this.min_video_play_duration_ms = data.minVideoPlayDurationMs;
        this.scrim_duration = data.scrimDuration;
        this.metadata_order = data.metadataOrder;
        this.panel_layout = data.panelLayout;
    }
}
exports.default = DefaultPromoPanel;
DefaultPromoPanel.type = 'DefaultPromoPanel';
//# sourceMappingURL=DefaultPromoPanel.js.map