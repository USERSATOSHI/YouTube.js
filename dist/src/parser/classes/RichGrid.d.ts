import { YTNode } from '../helpers';
declare class RichGrid extends YTNode {
    static type: string;
    header: YTNode | null;
    contents: import("../helpers").ObservedArray<YTNode>;
    constructor(data: any);
}
export default RichGrid;
