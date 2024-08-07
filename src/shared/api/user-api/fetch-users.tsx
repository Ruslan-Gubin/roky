'use server';
import { FetchNextService } from "../fetch-next";
import type { UsersListResponse } from "./types";

export const fetchUserList = (page?: string | null, search?: string | null): Promise<UsersListResponse | Error> => {
  const params = {
    results: '10',
    page: page ? page : '1',
    name: search ? search : '',

  }
  
  return FetchNextService.get({  params, options: {  next: { tags: [`fetchUserList?page=${page}$username=${search}`] },
   } }).then((result) => result);
};