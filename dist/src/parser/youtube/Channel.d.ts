import Actions from '../../core/Actions';
import TabbedFeed from '../../core/TabbedFeed';
import C4TabbedHeader from '../classes/C4TabbedHeader';
import CarouselHeader from '../classes/CarouselHeader';
import InteractiveTabbedHeader from '../classes/InteractiveTabbedHeader';
import ChannelAboutFullMetadata from '../classes/ChannelAboutFullMetadata';
import SubscribeButton from '../classes/SubscribeButton';
import Tab from '../classes/Tab';
import ChipCloudChip from '../classes/ChipCloudChip';
import FilterableFeed from '../../core/FilterableFeed';
import Feed from '../../core/Feed';
export default class Channel extends TabbedFeed {
    header: C4TabbedHeader | CarouselHeader | InteractiveTabbedHeader | undefined;
    metadata: {
        url_canonical?: string | undefined;
        title: string;
        description: string;
        thumbnail?: import("../classes/misc/Thumbnail").default[] | null | undefined;
        site_name?: string | undefined;
        app_name?: string | undefined;
        android_package?: string | undefined;
        ios_app_store_id?: string | undefined;
        ios_app_arguments?: string | undefined;
        og_type?: string | undefined;
        url_applinks_web?: string | undefined;
        url_applinks_ios?: string | undefined;
        url_applinks_android?: string | undefined;
        url_twitter_ios?: string | undefined;
        url_twitter_android?: string | undefined;
        twitter_card_type?: string | undefined;
        twitter_site_handle?: string | undefined;
        schema_dot_org_type?: string | undefined;
        noindex?: string | undefined;
        is_unlisted?: boolean | undefined;
        is_family_safe: boolean;
        tags?: any;
        available_countries: string[];
        type: string;
        url: string;
        rss_urls: any;
        vanity_channel_url: string;
        external_id: string;
        keywords: string[];
        avatar: import("../classes/misc/Thumbnail").default[];
        android_deep_link: string;
        android_appindexing_link: string;
        ios_appindexing_link: string;
    };
    subscribe_button: SubscribeButton;
    current_tab: Tab | undefined;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Applies given filter to the list.
     * @param filter - The filter to apply
     */
    applyFilter(filter: string | ChipCloudChip): Promise<FilteredChannelList>;
    get filters(): string[];
    getHome(): Promise<Channel>;
    getVideos(): Promise<Channel>;
    getShorts(): Promise<Channel>;
    getLiveStreams(): Promise<Channel>;
    getPlaylists(): Promise<Channel>;
    getCommunity(): Promise<Channel>;
    getChannels(): Promise<Channel>;
    /**
     * Retrieves the channel about page.
     * Note that this does not return a new {@link Channel} object.
     */
    getAbout(): Promise<ChannelAboutFullMetadata>;
    /**
     * Retrives list continuation.
     */
    getContinuation(): Promise<ChannelListContinuation>;
}
export declare class ChannelListContinuation extends Feed {
    contents: import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction | undefined;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Retrieves list continuation.
     */
    getContinuation(): Promise<ChannelListContinuation>;
}
export declare class FilteredChannelList extends FilterableFeed {
    applied_filter: ChipCloudChip | undefined;
    contents: import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction | undefined;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Applies given filter to the list.
     * @param filter - The filter to apply
     */
    applyFilter(filter: string | ChipCloudChip): Promise<FilteredChannelList>;
    /**
     * Retrieves list continuation.
     */
    getContinuation(): Promise<FilteredChannelList>;
}
