"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./Text"));
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class NavigatableText extends Text_1.default {
    constructor(node) {
        var _a, _b;
        super(node);
        // TODO: is this needed? Text now supports this itself
        this.endpoint =
            ((_b = (_a = node === null || node === void 0 ? void 0 : node.runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) ?
                new NavigationEndpoint_1.default(node === null || node === void 0 ? void 0 : node.runs[0].navigationEndpoint) :
                (node === null || node === void 0 ? void 0 : node.navigationEndpoint) ?
                    new NavigationEndpoint_1.default(node === null || node === void 0 ? void 0 : node.navigationEndpoint) :
                    (node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) ?
                        new NavigationEndpoint_1.default(node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) : null;
    }
    toJSON() {
        return this;
    }
}
NavigatableText.type = 'NavigatableText';
exports.default = NavigatableText;
//# sourceMappingURL=NavigatableText.js.map