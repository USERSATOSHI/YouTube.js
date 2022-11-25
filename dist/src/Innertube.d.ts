import Session, { SessionOptions } from './core/Session';
import Search from './parser/youtube/Search';
import Channel from './parser/youtube/Channel';
import Playlist from './parser/youtube/Playlist';
import Library from './parser/youtube/Library';
import History from './parser/youtube/History';
import Comments from './parser/youtube/Comments';
import NotificationsMenu from './parser/youtube/NotificationsMenu';
import VideoInfo, { DownloadOptions, FormatOptions } from './parser/youtube/VideoInfo';
import NavigationEndpoint from './parser/classes/NavigationEndpoint';
import { ParsedResponse } from './parser';
import { ActionsResponse } from './core/Actions';
import Feed from './core/Feed';
import YTMusic from './core/Music';
import Studio from './core/Studio';
import HomeFeed from './parser/youtube/HomeFeed';
import AccountManager from './core/AccountManager';
import PlaylistManager from './core/PlaylistManager';
import InteractionManager from './core/InteractionManager';
import TabbedFeed from './core/TabbedFeed';
export type InnertubeConfig = SessionOptions;
export interface SearchFilters {
    upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
    type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
    duration?: 'all' | 'short' | 'medium' | 'long';
    sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
}
export type InnerTubeClient = 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'TV_EMBEDDED';
declare class Innertube {
    session: Session;
    account: AccountManager;
    playlist: PlaylistManager;
    interact: InteractionManager;
    music: YTMusic;
    studio: Studio;
    actions: import("./core/Actions").default;
    constructor(session: Session);
    static create(config?: InnertubeConfig): Promise<Innertube>;
    /**
     * Retrieves video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo>;
    /**
     * Retrieves basic video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo>;
    /**
     * Searches a given query.
     * @param query - The search query.
     * @param filters - Search filters.
     */
    search(query: string, filters?: SearchFilters): Promise<Search>;
    /**
     * Retrieves search suggestions for a given query.
     * @param query - The search query.
     */
    getSearchSuggestions(query: string): Promise<string[]>;
    /**
     * Retrieves comments for a video.
     * @param video_id - The video id.
     * @param sort_by - Sorting options.
     */
    getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments>;
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Returns the account's library.
     */
    getLibrary(): Promise<Library>;
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary}.
     */
    getHistory(): Promise<History>;
    /**
     * Retrieves trending content.
     */
    getTrending(): Promise<TabbedFeed>;
    /**
     * Retrieves subscriptions feed.
     */
    getSubscriptionsFeed(): Promise<Feed>;
    /**
     * Retrieves contents for a given channel.
     * @param id - channel id
     */
    getChannel(id: string): Promise<Channel>;
    /**
     * Retrieves notifications.
     */
    getNotifications(): Promise<NotificationsMenu>;
    /**
     * Retrieves unseen notifications count.
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves playlist contents.
     */
    getPlaylist(id: string): Promise<Playlist>;
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     */
    getStreamingData(video_id: string, options?: FormatOptions): Promise<import("./parser/classes/misc/Format").default>;
    /**
     * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     */
    download(video_id: string, options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Utility method to call an endpoint without having to use {@link Actions}.
     * @param endpoint -The endpoint to call.
     * @param args - Call arguments.
     */
    call(endpoint: NavigationEndpoint, args: {
        [key: string]: any;
        parse: true;
    }): Promise<ParsedResponse>;
    call(endpoint: NavigationEndpoint, args?: {
        [key: string]: any;
        parse?: false;
    }): Promise<ActionsResponse>;
}
export default Innertube;
