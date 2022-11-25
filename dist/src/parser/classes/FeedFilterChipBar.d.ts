import { YTNode } from '../helpers';
import ChipCloudChip from './ChipCloudChip';
export default class FeedFilterChipBar extends YTNode {
    static type: string;
    contents: import("../helpers").ObservedArray<ChipCloudChip>;
    constructor(data: any);
}
