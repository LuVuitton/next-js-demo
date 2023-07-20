
import Link from 'next/link'
import s from './app.module.css'



const arr = [1,2,3,4,5,6,7,8,9]
const mapedarr = arr.map(e=> <div>number:{e}</div>)


export default function Home() {

  return (
   <main className={s.mainWrapper}>
    hello next
    <h3><Link href={'./characters'}>TO CHARACTERS</Link></h3>
    <ul>
      {mapedarr} 
    </ul>
   </main>
  )
}
