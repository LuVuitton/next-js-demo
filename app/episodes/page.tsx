import { notFound } from "next/navigation";

const getEpisodes = async (): Promise<any> => {
  const res = await fetch("https://rickandmortyapi.com/api/episode/1");

  return res.json();
};

export default async function Characters() {
  const {name} = await getEpisodes();

  if (!name) {
    console.log("characters not found");
  }

  return (  
    <div>
      <div>hello</div>
      {name}
    </div>
  );
}

//гетСтатикПрос выполняется когда я делаю билд проекта,
//во время билда она выполняется и в следующий раз она выполнится только тогда,
//когда я буду делать билд еще раз
//например, если внутри этой функции я буду делать запрос к АПИ,
//то для всех пользователей данные будут актуальны на момент выполнения билда,
//еcли пользователь откроет приложение через неделю
//данные все равно будут актуальные на момент билда,
//потому как только во время него выполнится функция,
//слишком много я помоему написал про это

//то что выше было в старом нексте,
//теперь любая функция выполняется на сервере и кешируется по умолчанию(сразу все становится гет статик пропс)
// в фетче по умолчанию вторым параметром стоит {cache:'force-cache'}, 
//это говорит о том что все такие запросы по умолчанию выполняются во время билда и после уже нет(как гет статик пропс)
//что бы поставить получение новой информации по каждому запросу нужно поставить задержку в 0
// это делается вторым параметром в фетч запросе {next: {revalidate:0}} или {cache: 'non-store'} (разница пока не извесна)
