import Actions from '../../core/Actions';
import Feed from '../../core/Feed';
import Thumbnail from '../classes/misc/Thumbnail';
declare class Playlist extends Feed {
    #private;
    info: {
        author: import("../classes/misc/Author").default;
        thumbnails: Thumbnail[];
        total_items: string;
        views: string;
        last_updated: string;
        can_share: boolean;
        can_delete: boolean;
        is_editable: boolean;
        privacy: string;
        title: string;
        description: string;
        type: string;
    };
    menu: any;
    endpoint: import("../classes/NavigationEndpoint").default;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    get items(): import("../helpers").ObservedArray<import("../classes/CompactVideo").default | import("../classes/GridVideo").default | import("../classes/PlaylistPanelVideo").default | import("../classes/PlaylistVideo").default | import("../classes/WatchCardCompactVideo").default | import("../classes/Video").default | import("../classes/ReelItem").default>;
    getContinuation(): Promise<Playlist>;
}
export default Playlist;
