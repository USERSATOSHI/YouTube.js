import { YTNode } from '../helpers';
declare class MetadataScreen extends YTNode {
    static type: string;
    section_list: YTNode | null;
    constructor(data: any);
}
export default MetadataScreen;