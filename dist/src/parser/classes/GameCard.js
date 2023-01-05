"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
class GameCard extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.game = __1.default.parseItem(data.game);
    }
}
exports.default = GameCard;
GameCard.type = 'GameCard';
//# sourceMappingURL=GameCard.js.map