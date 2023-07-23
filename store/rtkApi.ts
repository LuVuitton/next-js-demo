import { store } from "./store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CommonRes<Person[]>, void>({
      query: () => "character",
    }),
    getPerson: builder.query<Person, string>({
      query: (personID) => `character/${personID}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetPersonQuery } = charactersApi;

export type CommonRes<D> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: D;
};

export type Person = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};


export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
