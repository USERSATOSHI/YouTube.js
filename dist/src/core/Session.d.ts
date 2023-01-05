import Player from './Player';
import Actions from './Actions';
import UniversalCache from '../utils/Cache';
import EventEmitterLike from '../utils/EventEmitterLike';
import HTTPClient, { FetchFunction } from '../utils/HTTPClient';
import { DeviceCategory } from '../utils/Utils';
import OAuth, { Credentials, OAuthAuthErrorEventHandler, OAuthAuthEventHandler, OAuthAuthPendingEventHandler } from './OAuth';
export declare enum ClientType {
    WEB = "WEB",
    MUSIC = "WEB_REMIX",
    ANDROID = "ANDROID",
    ANDROID_MUSIC = "ANDROID_MUSIC"
}
export interface Context {
    client: {
        hl: string;
        gl: string;
        remoteHost: string;
        screenDensityFloat: number;
        screenHeightPoints: number;
        screenPixelDensity: number;
        screenWidthPoints: number;
        visitorData: string;
        userAgent: string;
        clientName: string;
        clientVersion: string;
        clientScreen?: string;
        androidSdkVersion?: string;
        osName: string;
        osVersion: string;
        platform: string;
        clientFormFactor: string;
        userInterfaceTheme: string;
        timeZone: string;
        browserName: string;
        browserVersion: string;
        originalUrl: string;
        deviceMake: string;
        deviceModel: string;
        utcOffsetMinutes: number;
    };
    user: {
        lockedSafetyMode: false;
    };
    thirdParty?: {
        embedUrl: string;
    };
    request: {
        useSsl: true;
    };
}
export interface SessionOptions {
    lang?: string;
    account_index?: number;
    device_category?: DeviceCategory;
    client_type?: ClientType;
    timezone?: string;
    cache?: UniversalCache;
    cookie?: string;
    fetch?: FetchFunction;
}
export default class Session extends EventEmitterLike {
    #private;
    oauth: OAuth;
    http: HTTPClient;
    logged_in: boolean;
    actions: Actions;
    cache: UniversalCache | undefined;
    constructor(context: Context, api_key: string, api_version: string, account_index: number, player?: Player, cookie?: string, fetch?: FetchFunction, cache?: UniversalCache);
    on(type: 'auth', listener: OAuthAuthEventHandler): void;
    on(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
    on(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;
    on(type: 'update-credentials', listener: OAuthAuthEventHandler): void;
    once(type: 'auth', listener: OAuthAuthEventHandler): void;
    once(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
    once(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;
    static create(options?: SessionOptions): Promise<Session>;
    static getSessionData(lang?: string, account_index?: number, device_category?: DeviceCategory, client_name?: ClientType, tz?: string, fetch?: FetchFunction): Promise<{
        context: Context;
        api_key: any;
        api_version: string;
        account_index: number;
    }>;
    signIn(credentials?: Credentials): Promise<void>;
    signOut(): Promise<Response | undefined>;
    get key(): string;
    get api_version(): string;
    get client_version(): string;
    get client_name(): string;
    get account_index(): number;
    get context(): Context;
    get player(): Player | undefined;
    get lang(): string;
}