import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class GridHeader extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default GridHeader;
