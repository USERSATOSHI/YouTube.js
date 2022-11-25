import { ParsedResponse } from '../index';
import Actions, { ApiResponse } from '../../core/Actions';
import MusicDetailHeader from '../classes/MusicDetailHeader';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
declare class Album {
    #private;
    header: MusicDetailHeader | undefined;
    contents: import("../helpers").ObservedArray<import("../classes/MusicResponsiveListItem").default> | undefined;
    sections: MusicCarouselShelf[];
    url: string | null;
    constructor(response: ApiResponse, actions: Actions);
    get page(): ParsedResponse;
}
export default Album;
