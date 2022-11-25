import { ParsedResponse } from '..';
import { ApiResponse } from '../../core/Actions';
declare class Analytics {
    #private;
    sections: (import("../helpers").YTNode | undefined)[] | undefined;
    constructor(response: ApiResponse);
    get page(): ParsedResponse;
}
export default Analytics;
