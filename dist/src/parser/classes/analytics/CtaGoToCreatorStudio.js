"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
class CtaGoToCreatorStudio extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.buttonLabel;
        this.use_new_specs = data.useNewSpecs;
        // Is this even useful?
    }
}
CtaGoToCreatorStudio.type = 'CtaGoToCreatorStudio';
exports.default = CtaGoToCreatorStudio;
//# sourceMappingURL=CtaGoToCreatorStudio.js.map