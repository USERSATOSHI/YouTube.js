import { YTNode } from '../helpers';
import Thumbnail from './misc/Thumbnail';
export default class CarouselItem extends YTNode {
    static type: string;
    items: YTNode[];
    background_color: string;
    layout_style: string;
    pagination_thumbnails: Thumbnail[];
    paginator_alignment: string;
    constructor(data: any);
}
