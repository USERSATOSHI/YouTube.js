import { ParsedResponse } from '../index';
import Actions, { ActionsResponse } from '../../core/Actions';
import { YTNode } from '../helpers';
import CreatePlaylistDialog from './CreatePlaylistDialog';
declare class NavigationEndpoint extends YTNode {
    static type: string;
    payload: any;
    dialog?: import("../helpers").SuperParsedResult<YTNode> | CreatePlaylistDialog | null | undefined;
    metadata: {
        url?: string;
        api_url?: string;
        page_type?: string;
        send_post?: boolean;
    };
    constructor(data: any);
    /**
     * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
     */
    getEndpoint(name: string): "/browse" | "/player" | "/search" | "/next" | "live_chat/get_item_context_menu" | undefined;
    call(actions: Actions, args: {
        [key: string]: any;
        parse: true;
    }): Promise<ParsedResponse>;
    call(actions: Actions, args?: {
        [key: string]: any;
        parse?: false;
    }): Promise<ActionsResponse>;
}
export default NavigationEndpoint;