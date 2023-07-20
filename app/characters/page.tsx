"use client";

import { useGetAllCharactersQuery } from "@/store/rtkApi";
import Link from "next/link";
import s from "./characters.module.css";

// function wihtoutSpaces(str: string) {
//   return str.replace(/\s+/g, "_");
// }

const characters = () => {
  const { data, isLoading, error } = useGetAllCharactersQuery();

  const mappedCharacters = data?.results.map((e, i) => (
    <div key={i} className={s.linkWrapper}>
      <Link href={`/person/${[e.id]}`} className={s.link}>
        {e.name}
      </Link>
    </div>
  ));

  if (isLoading) {
    return <div>LOADING...!!</div>;
  }
  if (error) {
    const err = error as any;
    return <div>{err.data.error}</div>;
  }

  return <>{mappedCharacters}</>;
};

export default characters;


