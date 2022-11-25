import { YTNode } from '../helpers';
import Thumbnail from './misc/Thumbnail';
export default class ThumbnailLandscapePortrait extends YTNode {
    static type: string;
    landscape: Thumbnail[];
    portrait: Thumbnail[];
    constructor(data: any);
}
