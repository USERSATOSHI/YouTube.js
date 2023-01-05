import Session from '../core/Session';
export type FetchFunction = typeof fetch;
export interface HTTPClientInit {
    baseURL?: string;
}
export default class HTTPClient {
    #private;
    constructor(session: Session, cookie?: string, fetch?: FetchFunction);
    get fetch_function(): typeof fetch;
    fetch(input: URL | Request | string, init?: RequestInit & HTTPClientInit): Promise<Response>;
}