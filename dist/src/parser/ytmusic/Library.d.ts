import { ParsedResponse } from '..';
import Actions, { ApiResponse } from '../../core/Actions';
import Grid from '../classes/Grid';
import MusicShelf from '../classes/MusicShelf';
import MusicSideAlignedItem from '../classes/MusicSideAlignedItem';
import ChipCloudChip from '../classes/ChipCloudChip';
import MusicMultiSelectMenuItem from '../classes/menus/MusicMultiSelectMenuItem';
declare class Library {
    #private;
    header: MusicSideAlignedItem | undefined;
    contents: import("../helpers").ObservedArray<Grid | MusicShelf>;
    constructor(response: ApiResponse, actions: Actions);
    /**
     * Applies given sort filter to the library items.
     */
    applySortFilter(sort_by: string | MusicMultiSelectMenuItem): Promise<Library>;
    /**
     * Applies given filter to the library.
     */
    applyFilter(filter: string | ChipCloudChip): Promise<Library>;
    /**
     * Retrieves continuation of the library items.
     */
    getContinuation(): Promise<LibraryContinuation>;
    get has_continuation(): boolean;
    get sort_filters(): string[];
    get filters(): string[];
    get page(): ParsedResponse;
}
declare class LibraryContinuation {
    #private;
    contents: any[] | undefined;
    constructor(response: ApiResponse, actions: Actions);
    getContinuation(): Promise<LibraryContinuation>;
    get has_continuation(): boolean;
    get page(): ParsedResponse;
}
export { LibraryContinuation };
export default Library;
