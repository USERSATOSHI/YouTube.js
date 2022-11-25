"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const Button_1 = __importDefault(require("./Button"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
class RecognitionShelf extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.subtitle = new Text_1.default(data.subtitle);
        this.avatars = data.avatars.map((avatar) => new Thumbnail_1.default(avatar));
        this.button = __1.default.parseItem(data.button, Button_1.default);
        this.surface = data.surface;
    }
}
exports.default = RecognitionShelf;
RecognitionShelf.type = 'RecognitionShelf';
//# sourceMappingURL=RecognitionShelf.js.map