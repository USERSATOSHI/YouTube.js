import { YTNode } from '../helpers';
declare class RichSection extends YTNode {
    static type: string;
    content: YTNode | null;
    constructor(data: any);
}
export default RichSection;