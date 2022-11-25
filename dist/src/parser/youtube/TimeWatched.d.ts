import { ParsedResponse } from '..';
import { ApiResponse } from '../../core/Actions';
import ItemSection from '../classes/ItemSection';
declare class TimeWatched {
    #private;
    contents: import("../helpers").ObservedArray<ItemSection> | undefined;
    constructor(response: ApiResponse);
    get page(): ParsedResponse;
}
export default TimeWatched;
