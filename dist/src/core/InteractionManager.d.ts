import Actions from './Actions';
declare class InteractionManager {
    #private;
    constructor(actions: Actions);
    /**
     * Likes a given video.
     * @param video_id - The video ID
     */
    like(video_id: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Dislikes a given video.
     * @param video_id - The video ID
     */
    dislike(video_id: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Removes a like/dislike.
     * @param video_id - The video ID
     */
    removeRating(video_id: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Subscribes to a given channel.
     * @param channel_id - The channel ID
     */
    subscribe(channel_id: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Unsubscribes from a given channel.
     * @param channel_id - The channel ID
     */
    unsubscribe(channel_id: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Posts a comment on a given video.
     * @param video_id - The video ID
     * @param text - The comment text
     */
    comment(video_id: string, text: string): Promise<import("./Actions").ApiResponse>;
    /**
     * Translates a given text using YouTube's comment translate feature.
     *
     * @param target_language - an ISO language code
     * @param args - optional arguments
     */
    translate(text: string, target_language: string, args?: {
        video_id?: string;
        comment_id?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        translated_content: any;
        data: any;
    }>;
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     * @param channel_id - The channel ID.
     * @param type - The notification type.
     */
    setNotificationPreferences(channel_id: string, type: 'PERSONALIZED' | 'ALL' | 'NONE'): Promise<import("./Actions").ApiResponse>;
}
export default InteractionManager;
