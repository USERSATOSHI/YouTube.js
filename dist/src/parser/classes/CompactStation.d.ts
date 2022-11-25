import { YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
export default class CompactStation extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    video_count: Text;
    endpoint: NavigationEndpoint;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
