'use server';
import { CONFIG_APP } from "../../config/config";
import { fetchNextOptionsType } from "./types";
 

interface ConfigFetchInit extends RequestInit {
  headers: {
    'Content-Type'?: string
    Authorization?: string;
  }
}

export const  fethConfig = async(method: string ="GET", payload?: object, options?: fetchNextOptionsType) => {
  const payloadIsFormData = payload instanceof FormData;


  const config: ConfigFetchInit = {
    method: method,
    headers: {},
  };

  if (options) {
    Object.assign(config, options) 
  }

  if (!payloadIsFormData) {
    config.headers["Content-Type"] = 'application/json';
  }

  if (payload) {
    const currentPayload = payloadIsFormData ? payload : JSON.stringify(payload);
    config.body = currentPayload;
  }

  return config;
}

const getParamsString = (params?: Record<string, string>) => {
  let resultString = ''
  
  for (const key in params) {
    const value = params[key]
    if (value) {
      resultString += `&${key}=${value}`
    }
  }

  return resultString.slice(1)
}

export const fetchUrl = async(url?: string, params?: Record<string, string>) => {
  let mainUrl = new URL(CONFIG_APP.API_ENDPOINT);

  if (url) {
    mainUrl = new URL(`${mainUrl}/${url}`);
  } 

  if (params) {
    const paramsString = getParamsString(params)

    const searchParams = new URLSearchParams(paramsString);
    mainUrl.search = searchParams.toString();
  }

  return mainUrl.toString();
}

