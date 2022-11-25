import { ParsedResponse } from '../index';
import Actions, { ApiResponse } from '../../core/Actions';
import MusicShelf from '../classes/MusicShelf';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf';
import MusicImmersiveHeader from '../classes/MusicImmersiveHeader';
import MusicVisualHeader from '../classes/MusicVisualHeader';
import MusicHeader from '../classes/MusicHeader';
declare class Artist {
    #private;
    header: MusicHeader | MusicImmersiveHeader | MusicVisualHeader | undefined;
    sections: (MusicCarouselShelf | MusicShelf)[];
    constructor(response: ApiResponse | ParsedResponse, actions: Actions);
    getAllSongs(): Promise<MusicPlaylistShelf | null>;
    get page(): ParsedResponse;
}
export default Artist;
