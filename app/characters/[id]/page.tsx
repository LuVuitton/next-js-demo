const getCharacters = async (): Promise<Characters> => {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  return res.json();
};

const OneCharacter = async () => {
  const { results } = await getCharacters();

  const mappedChars = results.map((e, i) => {
    return <div key={i}>my name is: {e.name}</div>;
  });

  return (
    <>
      <div> Hello </div>
      <div>{mappedChars}</div>
    </>
  );
};


export default OneCharacter

type Characters = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: OneCharacter[];
};

type OneCharacter = {
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
