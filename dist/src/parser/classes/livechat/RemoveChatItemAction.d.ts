import { YTNode } from '../../helpers';
declare class RemoveChatItemAction extends YTNode {
    static type: string;
    target_item_id: string;
    constructor(data: any);
}
export default RemoveChatItemAction;