"use client";

import { Person, useGetPersonQuery } from "@/store/rtkApi";
import s from "./person.module.css";
import { useRouter } from "next/navigation";

const Person = (props: Props) => {
const router = useRouter()
  const { data, isLoading } = useGetPersonQuery(props.params.personID);

  const { image, name,  location, gender, species, status  } = data as Person || {};
  const locationName = location?.name

  const goToCharacters = ()=> router.push('../characters')

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
          <p>
            LOACTION: <b> {locationName}</b>
          </p>
          <p>
            GENDER:<b> {gender}</b>
          </p>
          <p>
            WHO: <b> {species}</b>
          </p>
          <p>
            STSTUS: <b> {status}</b>
          </p>
      <button className={s.btn} onClick={goToCharacters}>BACK</button>
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
