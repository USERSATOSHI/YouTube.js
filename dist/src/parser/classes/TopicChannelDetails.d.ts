import { YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import SubscribeButton from './SubscribeButton';
export default class TopicChannelDetails extends YTNode {
    static type: string;
    title: Text;
    avatar: Thumbnail[];
    subtitle: Text;
    subscribe_button: SubscribeButton | null;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
