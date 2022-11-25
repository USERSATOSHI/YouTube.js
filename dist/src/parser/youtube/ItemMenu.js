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
var _ItemMenu_page, _ItemMenu_actions, _ItemMenu_items;
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = __importDefault(require("../classes/menus/Menu"));
const MenuServiceItem_1 = __importDefault(require("../classes/menus/MenuServiceItem"));
const Button_1 = __importDefault(require("../classes/Button"));
const Utils_1 = require("../../utils/Utils");
class ItemMenu {
    constructor(data, actions) {
        _ItemMenu_page.set(this, void 0);
        _ItemMenu_actions.set(this, void 0);
        _ItemMenu_items.set(this, void 0);
        __classPrivateFieldSet(this, _ItemMenu_page, data, "f");
        __classPrivateFieldSet(this, _ItemMenu_actions, actions, "f");
        const menu = data === null || data === void 0 ? void 0 : data.live_chat_item_context_menu_supported_renderers;
        if (!menu || !menu.is(Menu_1.default))
            throw new Utils_1.InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');
        __classPrivateFieldSet(this, _ItemMenu_items, menu.as(Menu_1.default).items, "f");
    }
    selectItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpoint;
            if (item instanceof Button_1.default) {
                endpoint = item.endpoint;
            }
            else {
                const button = __classPrivateFieldGet(this, _ItemMenu_items, "f").find((button) => {
                    if (!button.is(MenuServiceItem_1.default)) {
                        return false;
                    }
                    const menuServiceItem = button.as(MenuServiceItem_1.default);
                    return menuServiceItem.icon_type === item;
                });
                if (!button)
                    throw new Utils_1.InnertubeError(`Button "${item}" not found.`);
                endpoint = button.as(MenuServiceItem_1.default).endpoint;
            }
            const response = yield endpoint.call(__classPrivateFieldGet(this, _ItemMenu_actions, "f"), { parse: true });
            return response;
        });
    }
    items() {
        return __classPrivateFieldGet(this, _ItemMenu_items, "f");
    }
    page() {
        return __classPrivateFieldGet(this, _ItemMenu_page, "f");
    }
}
_ItemMenu_page = new WeakMap(), _ItemMenu_actions = new WeakMap(), _ItemMenu_items = new WeakMap();
exports.default = ItemMenu;
//# sourceMappingURL=ItemMenu.js.map