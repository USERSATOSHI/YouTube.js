import Text from './misc/Text';
import MusicThumbnail from './MusicThumbnail';
import { YTNode } from '../helpers';
declare class MusicImmersiveHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnail: MusicThumbnail | null;
    constructor(data: any);
}
export default MusicImmersiveHeader;
