import { YTNode } from '../helpers';
import Thumbnail from './misc/Thumbnail';
export default class PlaylistCustomThumbnail extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
