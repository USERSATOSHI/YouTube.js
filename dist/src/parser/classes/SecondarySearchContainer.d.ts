import { YTNode } from '../helpers';
declare class SecondarySearchContainer extends YTNode {
    static type: string;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default SecondarySearchContainer;
