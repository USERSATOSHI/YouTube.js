import { YTNode } from '../../helpers';
declare class UpdateToggleButtonTextAction extends YTNode {
    static type: string;
    default_text: string;
    toggled_text: string;
    button_id: string;
    constructor(data: any);
}
export default UpdateToggleButtonTextAction;
