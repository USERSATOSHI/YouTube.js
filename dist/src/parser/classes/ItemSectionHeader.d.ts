import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ItemSectionHeader extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default ItemSectionHeader;
