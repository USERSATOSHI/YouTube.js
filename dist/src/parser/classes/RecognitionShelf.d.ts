import { YTNode } from '../helpers';
import Button from './Button';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
export default class RecognitionShelf extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    avatars: Thumbnail[];
    button: Button | null;
    surface: string;
    constructor(data: any);
}
