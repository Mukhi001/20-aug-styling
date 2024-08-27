import { Im } from "./Components/image";
import { Buttton } from "./Components/button";
import CustomList from "./Components/list";
import { Headd } from "./Components/heading";
function App(){
  const arr=[
    {
      source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name:"bag1",
      height:220,
      width:220
    },
    {
      source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name:"bag2",
      height:420,
      width:420
    },
    {
      source:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name:"bag3",
      height:520,
      width:520
    }
  ]
  return (
   <>{
    arr.map((eachImage)=>{
return <Im key={eachImage.name} source={eachImage.source} alternateText={eachImage.name} height={eachImage.height} width={eachImage.width}></Im>
    })
   }
   <Buttton text="hola" bgColor="red"/>
   <Headd text="These are Fruits">
    hi,there
   </Headd>
   <Headd text="These are Fruits">
    hi,there
   </Headd>
   <CustomList list={["kiwi", "apple","banana"]}/>
   <Headd text="These are criketers">
    hola,there
   </Headd>
   <CustomList list={["Dhoni","rahul","virat"]}/>
   <Headd text="These are vegetables">
    hello,there
   </Headd>
   <CustomList list={["spinach", "tomato","potato"]}/>
   </>
    
  )
}
export default App