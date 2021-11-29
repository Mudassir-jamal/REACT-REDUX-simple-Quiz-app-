import "./App.css";
import AppRouter from "./Router/Router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState ,useEffect } from "react";
import Button from "./components/Button";
import "./App.css"
 
function App() {

  // const [data,setSendData] = useState([])

  const state = useSelector((e) => (e))
  // const dispatch = useDispatch()


  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json => setSendData(json))
  // }, [])


  // const sendDta = () => {

  //       dispatch({
  //          type : "UPDATEINITIALSTATE",
  //          newDta : data
   
  //       })
  // }

  const [all,setAll] = useState()
  const [nextInd , setNextInd] = useState(0)
  const [marks,setMarks] = useState(0)
  const [result ,setResult] = useState(false)

  
  
  const checkAns = (ans,user) => {
    console.log(ans,user)
    setNextInd(nextInd + 1)
     if(ans == user){
       setMarks(marks + 10)   


     }


      if(state.data.length -1 == nextInd){
       setResult(true)
  }
  else{
      setNextInd(nextInd + 1)
  }
}




  return (

    <div className="App">

     {/* {
       state.newDta.map((e) => {
         return <><h1>{e.id } : { e.name}</h1>
                   <h4>{e.email}</h4>
                   <h3>{e.phone}</h3>
                   
         </>
       })
     } */}

     {/* <h1>{state.userName} </h1> */}

 
     {result == false ?   
      <div>
         <div className="quiz">
      <h1>{state.data[nextInd].question}</h1>     
  
      {
          state.data[nextInd].option.map((e,i) => {
          return<> <Button   
                   key={i}
                   value={e}
                   onClick={ () => checkAns(state.data[nextInd].anwser,e) }
                   
                   >
                     {e}
                   </Button>
          <br></br>

          </>
        })
      }



    
            
       

    
     
       </div>
      </div>
     
       
     
     
     
     :<h1>Score : {marks}</h1> }
      

    
         {/* <button onClick={sendDta}>SendData</button> */}
   
    </div>
  );

  // {/* {Dashboard ? <Dashboard /> :login ? <Login /> : "nullmkkl"}
  //     {Login && <Login>} */}
}

export default App;
    