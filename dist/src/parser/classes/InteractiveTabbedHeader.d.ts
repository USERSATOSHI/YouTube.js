import { ObservedArray, YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import SubscribeButton from './SubscribeButton';
import MetadataBadge from './MetadataBadge';
import Button from './Button';
export default class InteractiveTabbedHeader extends YTNode {
    static type: string;
    header_type: string;
    title: Text;
    description: Text;
    metadata: Text;
    badges: MetadataBadge[];
    box_art: Thumbnail[];
    banner: Thumbnail[];
    buttons: ObservedArray<SubscribeButton | Button>;
    auto_generated: Text;
    constructor(data: any);
}