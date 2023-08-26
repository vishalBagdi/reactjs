// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomeCarousel from './Components/HomeCarousel';
import HomeCard from './Components/HomeCard';
import { useState,useEffect } from 'react';
import ImgCard1 from './Components/ImgCard1';
const nCard=(val)=>{
  return(
    <ImgCard1
    id={val.id}
    title={val.title}
    imgurl={val.image}
    decs={val.decription}
    />
  )
}


function App(){
  const[Data ,SetData]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
      try{
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        console.log(data)
        SetData(data);
      }
      catch(error){
        console.log("error occured",error)
      }
    };
    fetchdata();
  },[]);

  return (
    <div>
      <NavBar/>
      <HomeCarousel/>
      <div className="Image">
        {
          Data.map((val,index)=>(
            <div key={val.id}
            className='col-md-3'>
              {nCard(val)}
            </div>
          ))
        }
          
        
      </div>
      {/* <off/> */}
      </div>
  );
      
      
//       <HomeCard/>
//       <imgCard/>
//     </>
  // );
}

export default App;
