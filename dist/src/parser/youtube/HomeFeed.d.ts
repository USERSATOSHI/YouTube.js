import Actions from '../../core/Actions';
import FilterableFeed from '../../core/FilterableFeed';
import ChipCloudChip from '../classes/ChipCloudChip';
import FeedTabbedHeader from '../classes/FeedTabbedHeader';
import RichGrid from '../classes/RichGrid';
import { ReloadContinuationItemsCommand, AppendContinuationItemsAction } from '..';
export default class HomeFeed extends FilterableFeed {
    contents: RichGrid | AppendContinuationItemsAction | ReloadContinuationItemsCommand;
    header: FeedTabbedHeader;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Applies given filter to the feed.
     * @param filter - Filter to apply.
     */
    applyFilter(filter: string | ChipCloudChip): Promise<HomeFeed>;
    /**
     * Retrieves next batch of contents.
     */
    getContinuation(): Promise<HomeFeed>;
}
