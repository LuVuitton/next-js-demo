

import { Person } from "@/store/rtkApi";
import s from "./person.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";


//теперь запрос делается на сервере некст
const getPerson = async (personID: string): Promise<Person> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${personID}`,
    // {next:{revalidate:0}}
  );

  return await res.json();
};

const Person = async (props: Props) => {
  const person = await getPerson(props.params.personID);
  if (!person) {
    notFound();
  }
  const { image, name, location, gender, species, status,id } = person;
  const locationName = location.name;

  // const router = useRouter();
  // const { data, isLoading } = useGetPersonQuery(props.params.personID);

  // const { image, name, location, gender, species, status } =
  //   (data as Person) || {};
  // const locationName = location?.name;

  // const goToCharacters = () => router.push("../characters");

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className={s.mainWrapper}>
      <div>
        <img src={image} alt="hello" />
      </div>
      <div>
        <div className={s.name}>
          <h1>{name}</h1>
        </div>
        <div className={s.description}>
          <p>LOACTION: <b> {locationName}</b></p>
          <p>
            GENDER:<b> {gender}</b>
          </p>
          <p>
            WHO: <b> {species}</b>
          </p>
          <p>
            STSTUS: <b> {status}</b>
          </p>
          {/* <button className={s.btn} onClick={goToCharacters}> */}
          {/* BACK */}
          {/* </button> */}
          <Link href={`../episodes/${id}`}> TO EPISODE FROM</Link>
        </div>
      </div>
    </div>
  );
};

export default Person;

type Props = {
  params: {
    personID: string;
  };
};
