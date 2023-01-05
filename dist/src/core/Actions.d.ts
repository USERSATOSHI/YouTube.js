import Session from './Session';
import { ParsedResponse } from '../parser/index';
export interface ApiResponse {
    success: boolean;
    status_code: number;
    data: any;
}
export type ActionsResponse = Promise<ApiResponse>;
declare class Actions {
    #private;
    constructor(session: Session);
    get session(): Session;
    /**
     * Used to retrieve video info.
     * @param id - The video ID.
     * @param cpn - Content Playback Nonce.
     * @param client - The client to use.
     * @param playlist_id - The playlist ID.
     */
    getVideoInfo(id: string, cpn?: string, client?: string, playlist_id?: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Makes calls to the playback tracking API.
     * @param url - The URL to call.
     * @param client - The client to use.
     * @param params - Call parameters.
     */
    stats(url: string, client: {
        client_name: string;
        client_version: string;
    }, params: {
        [key: string]: any;
    }): Promise<Response>;
    /**
     * Executes an API call.
     * @param action - The endpoint to call.
     * @param args - Call arguments
     */
    execute(action: string, args: {
        [key: string]: any;
        parse: true;
        protobuf?: false;
        serialized_data?: any;
    }): Promise<ParsedResponse>;
    execute(action: string, args?: {
        [key: string]: any;
        parse?: false;
        protobuf?: true;
        serialized_data?: any;
    }): Promise<ActionsResponse>;
}
export default Actions;