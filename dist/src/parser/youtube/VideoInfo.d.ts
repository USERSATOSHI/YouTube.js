import Actions, { ApiResponse } from '../../core/Actions';
import Player from '../../core/Player';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo';
import Format from '../classes/misc/Format';
import MerchandiseShelf from '../classes/MerchandiseShelf';
import ChipCloud from '../classes/ChipCloud';
import PlayerOverlay from '../classes/PlayerOverlay';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader';
import LiveChat from '../classes/LiveChat';
import LiveChatWrap from './LiveChat';
export type URLTransformer = (url: URL) => URL;
export interface FormatOptions {
    /**
     * Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
     */
    quality?: string;
    /**
     * Download type, can be: video, audio or video+audio
     */
    type?: 'video' | 'audio' | 'video+audio';
    /**
     * File format, use 'any' to download any format
     */
    format?: string;
    /**
     * InnerTube client, can be ANDROID, WEB, YTMUSIC, YTMUSIC_ANDROID or TV_EMBEDDED
     */
    client?: 'ANDROID' | 'WEB' | 'YTMUSIC' | 'YTMUSIC_ANDROID' | 'TV_EMBEDDED';
}
export interface DownloadOptions extends FormatOptions {
    /**
     * Download range, indicates which bytes should be downloaded.
     */
    range?: {
        start: number;
        end: number;
    };
}
declare class VideoInfo {
    #private;
    basic_info: {
        like_count: number | undefined;
        is_liked: boolean | undefined;
        is_disliked: boolean | undefined;
        /**
         * Microformat is a bit redundant, so only
         * a few things there are interesting to us.
         */
        embed: {
            iframe_url: string;
            flash_url: string;
            flash_secure_url: string;
            width: any;
            height: any;
        } | null;
        channel: {
            id: string;
            name: string;
            url: string;
        } | null;
        is_unlisted: boolean | undefined;
        is_family_safe: boolean | undefined;
        has_ypc_metadata: boolean | null;
        id?: string | undefined;
        channel_id?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        keywords?: string[] | undefined;
        is_owner_viewing?: boolean | undefined;
        short_description?: string | undefined;
        thumbnail?: import("../classes/misc/Thumbnail").default[] | undefined;
        allow_ratings?: boolean | undefined;
        view_count?: number | undefined;
        author?: string | undefined;
        is_private?: boolean | undefined;
        is_live_content?: boolean | undefined;
        is_crawlable?: boolean | undefined;
    };
    streaming_data: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: any;
        hls_manifest_url: any;
    } | undefined;
    playability_status: {
        status: string;
        error_screen: import("../helpers").YTNode | null;
        audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
        embeddable: boolean;
        reason: any;
    } | undefined;
    annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
    storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
    endscreen: import("../classes/Endscreen").default | null;
    captions: import("../classes/PlayerCaptionsTracklist").default | null;
    cards: import("../classes/CardCollection").default | null;
    primary_info: VideoPrimaryInfo | undefined;
    secondary_info: VideoSecondaryInfo | undefined;
    merchandise: MerchandiseShelf | undefined;
    related_chip_cloud: ChipCloud | undefined;
    watch_next_feed: import("../helpers").ObservedArray<import("../helpers").YTNode> | null | undefined;
    player_overlays: PlayerOverlay | undefined;
    comments_entry_point_header: CommentsEntryPointHeader | undefined;
    livechat: LiveChat | undefined;
    /**
     * @param data - API response.
     * @param cpn - Client Playback Nonce
     */
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, player?: Player, cpn?: string);
    /**
     * Applies given filter to the watch next feed.
     */
    selectFilter(name: string): Promise<this>;
    /**
     * Adds the video to the watch history.
     */
    addToWatchHistory(): Promise<Response>;
    /**
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation(): Promise<this>;
    /**
     * Likes the video.
     */
    like(): Promise<ApiResponse>;
    /**
     * Dislikes the video.
     */
    dislike(): Promise<ApiResponse>;
    /**
     * Removes like/dislike.
     */
    removeLike(): Promise<ApiResponse>;
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat(): LiveChatWrap;
    get filters(): string[];
    get actions(): Actions;
    get cpn(): string | undefined;
    get page(): [{
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        header_memo: import("../helpers").Memo;
        sidebar: import("../helpers").YTNode | null;
        sidebar_memo: import("../helpers").Memo;
        live_chat_item_context_menu_supported_renderers: import("../helpers").YTNode | null;
        live_chat_item_context_menu_supported_renderers_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("../index").TimedContinuation | null | undefined;
        continuation_contents: import("../index").SectionListContinuation | import("../index").LiveChatContinuation | import("../index").MusicPlaylistShelfContinuation | import("../index").MusicShelfContinuation | import("../index").GridContinuation | import("../index").PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../helpers").YTNode | null;
            audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
            dash_manifest_url: any;
            hls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    }, ({
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        header_memo: import("../helpers").Memo;
        sidebar: import("../helpers").YTNode | null;
        sidebar_memo: import("../helpers").Memo;
        live_chat_item_context_menu_supported_renderers: import("../helpers").YTNode | null;
        live_chat_item_context_menu_supported_renderers_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("../index").TimedContinuation | null | undefined;
        continuation_contents: import("../index").SectionListContinuation | import("../index").LiveChatContinuation | import("../index").MusicPlaylistShelfContinuation | import("../index").MusicShelfContinuation | import("../index").GridContinuation | import("../index").PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../helpers").YTNode | null;
            audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
            dash_manifest_url: any;
            hls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    } | undefined)?];
    /**
     * Get songs used in the video.
     */
    get music_tracks(): never[];
    chooseFormat(options: FormatOptions): Format;
    toDash(url_transformer?: URLTransformer): string;
    /**
     * @param options - download options.
     */
    download(options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
}
export default VideoInfo;