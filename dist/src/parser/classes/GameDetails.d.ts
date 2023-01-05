import { YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
export default class GameDetails extends YTNode {
    static type: string;
    title: Text;
    box_art: Thumbnail[];
    box_art_overlay_text: Text;
    endpoint: NavigationEndpoint;
    is_official_box_art: boolean;
    constructor(data: any);
}