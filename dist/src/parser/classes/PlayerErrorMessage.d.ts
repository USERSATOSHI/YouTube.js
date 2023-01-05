import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import Button from './Button';
import { YTNode } from '../helpers';
declare class PlayerErrorMessage extends YTNode {
    static type: string;
    subreason: Text;
    reason: Text;
    proceed_button: Button | null;
    thumbnails: Thumbnail[];
    icon_type: string | null;
    constructor(data: any);
}
export default PlayerErrorMessage;