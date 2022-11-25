import Text from './misc/Text';
import Button from './Button';
import { YTNode } from '../helpers';
declare class ConfirmDialog extends YTNode {
    static type: string;
    title: Text;
    confirm_button: Button | null;
    cancel_button: Button | null;
    dialog_messages: Text[];
    constructor(data: any);
}
export default ConfirmDialog;
