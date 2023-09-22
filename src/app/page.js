import CardItem from "@/components/CardItem";
import './page.css'

async function FetchApi(){
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const data = await res.json();
  return data
}
 
const Home = async () => {
  
  const data = await FetchApi();

  console.log(data);
  
  return (
    <div className="container">
      {
        data.results?.map((item, index)=><CardItem key={index} character={item}/>)
      }
    </div>
  )
}

export default Home