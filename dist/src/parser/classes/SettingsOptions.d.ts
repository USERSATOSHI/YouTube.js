import Text from './misc/Text';
import Dropdown from './Dropdown';
import SettingsSwitch from './SettingsSwitch';
import SettingsCheckbox from './SettingsCheckbox';
import ChannelOptions from './ChannelOptions';
import CopyLink from './CopyLink';
import { YTNode } from '../helpers';
declare class SettingsOptions extends YTNode {
    static type: string;
    title: Text;
    text?: string;
    options?: import("../helpers").ObservedArray<Dropdown | SettingsSwitch | SettingsCheckbox | ChannelOptions | CopyLink> | undefined;
    constructor(data: any);
}
export default SettingsOptions;
