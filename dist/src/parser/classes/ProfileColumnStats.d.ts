import { YTNode } from '../helpers';
declare class ProfileColumnStats extends YTNode {
    static type: string;
    items: import("../helpers").ObservedArray<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers").ObservedArray<YTNode>;
}
export default ProfileColumnStats;