import { YTNode } from '../../helpers';
declare class RemoveChatItemByAuthorAction extends YTNode {
    static type: string;
    external_channel_id: string;
    constructor(data: any);
}
export default RemoveChatItemByAuthorAction;