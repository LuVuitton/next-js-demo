import { CommonRes, Episode } from "@/store/rtkApi";
import Link from "next/link";
import s from './episode.module.css'

const getAllEpisodes = async (): Promise<CommonRes<Episode[]>> => {
  const res = await fetch("https://rickandmortyapi.com/api/episode/");
  return res.json();
};

const getEpisode = async (eposideID: string): Promise<Episode> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${eposideID}`
  );
  return res.json();
};

export async function generateStaticParams() {
  const result = await getAllEpisodes();
  return result.results.map((e) => ({ id: e.id.toString() }));
}

const Episode = async ({ params }: Props) => {
    
  const { characters, episode, name,  } = await getEpisode(params.id);
  

  const getCharID = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };
  
  

  return (
    <>
    <div className={s.mainWrapper}>
      <h2>{name}</h2>
      <h5>{episode}</h5>
      <ul>
        {characters.map((e) => (

            <Link href={`../person/${getCharID(e)}`}>{name}</Link>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Episode;

type Props = {
  params: { id: string };
};
