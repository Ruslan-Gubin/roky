
export type BaseFetchArgsType = {
  params?: Record<string, string>;
  url?: string;
  method: string;
  payload?: object;
  options?: fetchNextOptionsType;
  revalidate?: string | null;
}

export type fetchNextOptionsType = {
  cache?: 'force-cache' | 'no-store' | 'default' | 'reload',
  next?: { revalidate?: number, tags?: string[] }
}

export interface FethNextServiceGetPayload  {
  url?: string, params?: Record<string, string>, options?: fetchNextOptionsType
}
export interface FethNextServicePostPayload extends  FethNextServiceGetPayload {
   payload?: object | FormData, revalidate?: string | null 
}
export interface FethNextServicePathPayload extends FethNextServicePostPayload {}
export interface FethNextServicePutPayload extends FethNextServicePostPayload {}
export interface FethNextServiceDeletePayload extends FethNextServicePostPayload {}
export interface FethNextServiceBlobPayload extends FethNextServicePostPayload {
  method: string;
}