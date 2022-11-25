import { YTNode } from '../helpers';
declare class Grid extends YTNode {
    static type: string;
    items: import("../helpers").ObservedArray<YTNode>;
    is_collapsible?: boolean;
    visible_row_count?: string;
    target_id?: string;
    continuation: string | null;
    header?: import("../helpers").SuperParsedResult<YTNode> | undefined;
    constructor(data: any);
    get contents(): import("../helpers").ObservedArray<YTNode>;
}
export default Grid;
