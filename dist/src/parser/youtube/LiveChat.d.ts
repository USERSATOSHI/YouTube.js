import { LiveChatContinuation, ParsedResponse } from '../index';
import EventEmitter from '../../utils/EventEmitterLike';
import VideoInfo from './VideoInfo';
import AddChatItemAction from '../classes/livechat/AddChatItemAction';
import AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction';
import MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction';
import MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction';
import ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction';
import ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction';
import ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction';
import AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand';
import RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand';
import ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand';
import { ObservedArray } from '../helpers';
import LiveChatTextMessage from '../classes/livechat/items/LiveChatTextMessage';
import LiveChatPaidMessage from '../classes/livechat/items/LiveChatPaidMessage';
import LiveChatPaidSticker from '../classes/livechat/items/LiveChatPaidSticker';
import LiveChatAutoModMessage from '../classes/livechat/items/LiveChatAutoModMessage';
import LiveChatMembershipItem from '../classes/livechat/items/LiveChatMembershipItem';
import LiveChatViewerEngagementMessage from '../classes/livechat/items/LiveChatViewerEngagementMessage';
import ItemMenu from './ItemMenu';
import Button from '../classes/Button';
export type ChatAction = AddChatItemAction | AddBannerToLiveChatCommand | AddLiveChatTickerItemAction | MarkChatItemAsDeletedAction | MarkChatItemsByAuthorAsDeletedAction | RemoveBannerForLiveChatCommand | ReplaceChatItemAction | ReplayChatItemAction | ShowLiveChatActionPanelAction | ShowLiveChatTooltipCommand;
export type ChatItemWithMenu = LiveChatAutoModMessage | LiveChatMembershipItem | LiveChatPaidMessage | LiveChatPaidSticker | LiveChatTextMessage | LiveChatViewerEngagementMessage;
export interface LiveMetadata {
    title: UpdateTitleAction | undefined;
    description: UpdateDescriptionAction | undefined;
    views: UpdateViewershipAction | undefined;
    likes: UpdateToggleButtonTextAction | undefined;
    date: UpdateDateTextAction | undefined;
}
declare class LiveChat extends EventEmitter {
    #private;
    initial_info?: LiveChatContinuation;
    metadata?: LiveMetadata;
    running: boolean;
    is_replay: boolean;
    constructor(video_info: VideoInfo);
    start(): void;
    stop(): void;
    /**
     * Sends a message.
     */
    sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>>;
    /**
     * Retrieves given chat item's menu.
     */
    getItemMenu(item: ChatItemWithMenu): Promise<ItemMenu>;
    /**
     * Equivalent to "clicking" a button.
     */
    selectButton(button: Button): Promise<ParsedResponse>;
}
export default LiveChat;
