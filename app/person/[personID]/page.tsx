"use client"

import { useGetPersonQuery } from "@/store/rtkApi";
import s from './person.module.css'

const Person = (props: Props) => {
  const { data, isLoading } = useGetPersonQuery(props.params.personID);


  if( isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className={s.mainWrapper}>
      <div>
        <img src={data?.image} alt="hello" />
      </div>
      <div>
        <div className={s.name}><h1>{data?.name}</h1></div>
        <div className={s.description} >
      <p>LOACTION: <b>   {data?.location.name}</b></p>
      <p>GENDER:<b>   {data?.gender}</b></p>
      <p>WHO: <b>  {data?.species}</b></p>
      <p>STSTUS: <b>  {data?.status}</b></p>
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
