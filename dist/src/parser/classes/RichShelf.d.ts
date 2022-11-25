import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class RichShelf extends YTNode {
    static type: string;
    title: Text;
    contents: import("../helpers").ObservedArray<YTNode>;
    endpoint: NavigationEndpoint | null;
    constructor(data: any);
}
export default RichShelf;
