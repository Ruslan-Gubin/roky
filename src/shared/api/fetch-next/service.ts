import { nextFetch } from "./baseApi";
import {  FethNextServiceDeletePayload, FethNextServiceGetPayload, FethNextServicePathPayload, FethNextServicePostPayload, FethNextServicePutPayload } from "./types";


export class FetchNextService {

  static get({ url, params, options }: FethNextServiceGetPayload) {
    return nextFetch({url,  method: 'GET', params, options })
  }

  static post({ url, payload, params, revalidate, options }: FethNextServicePostPayload) {
    return nextFetch({url,  payload, method: 'POST', params, revalidate, options })
  }

  static patch({url, payload, params, revalidate, options}: FethNextServicePathPayload) {
    return nextFetch({url, payload, method: 'PATCH', params, revalidate, options })
  }

  static put({url, payload, params, revalidate, options}: FethNextServicePutPayload) {
    return nextFetch({url, payload, method: 'PUT', params, revalidate, options })
  }

  static delete({ url, params, revalidate, options }: FethNextServiceDeletePayload) {
    return nextFetch({url, method: 'DELETE', params, revalidate, options })
  }


  static graphQl({ query, variables }: { query: string, variables?: object }) {
    return nextFetch({ method: 'POST', payload: { query, variables } })
  }

}
