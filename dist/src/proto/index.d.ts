import { VideoMetadata } from '../core/Studio';
declare class Proto {
    static encodeChannelAnalyticsParams(channel_id: string): string;
    static encodeSearchFilters(filters: {
        upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
        type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
        duration?: 'all' | 'short' | 'medium' | 'long';
        sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
    }): string;
    static encodeMusicSearchFilters(filters: {
        type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
    }): string;
    static encodeMessageParams(channel_id: string, video_id: string): string;
    static encodeCommentsSectionParams(video_id: string, options?: {
        type?: number;
        sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST';
    }): string;
    static encodeCommentParams(video_id: string): string;
    static encodeCommentActionParams(type: number, args?: {
        comment_id?: string;
        video_id?: string;
        text?: string;
        target_language?: string;
    }): string;
    static encodeNotificationPref(channel_id: string, index: number): string;
    static encodeVideoMetadataPayload(video_id: string, metadata: VideoMetadata): Uint8Array;
    static encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array): Uint8Array;
}
export default Proto;