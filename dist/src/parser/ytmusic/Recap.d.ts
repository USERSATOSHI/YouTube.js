import { ParsedResponse } from '../index';
import Actions, { ApiResponse } from '../../core/Actions';
import Playlist from './Playlist';
import MusicHeader from '../classes/MusicHeader';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import HighlightsCarousel from '../classes/HighlightsCarousel';
import ItemSection from '../classes/ItemSection';
import Message from '../classes/Message';
declare class Recap {
    #private;
    header: MusicHeader | HighlightsCarousel | undefined;
    sections: import("../helpers").ObservedArray<ItemSection | MusicCarouselShelf | Message> | undefined;
    constructor(response: ApiResponse, actions: Actions);
    /**
     * Retrieves recap playlist.
     */
    getPlaylist(): Promise<Playlist>;
    get page(): ParsedResponse;
}
export default Recap;
