import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api/'}),
    endpoints: (builder)=> ({
        getAllCharacters: builder.query<Characters, void>({
            query: ()=> 'character'
        }),
        getPerson: builder.query<Person,string>({
            query:(personID)=> `character/${personID}`
        })
    })
})


export const {useGetAllCharactersQuery, useGetPersonQuery}= charactersApi





type Characters = {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Person[];
  };
  
  type Person = {
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