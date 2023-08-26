import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImgCard1 = () => {
  const [count, Setcount]=useState(0);

  const handleclick=()=>
{
  console.log("button clicked",count);
  Setcount(count+1)
  
}

const handledelete=()=>{
  console.log("button clicked",count);
  if(count<=0){
    alert("no item added further");
  }
  Setcount(count-1)
}
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl} style={{ width:"18rem" , height:"15rem"}}  />
      <Card.Body>  
        <Card.Title>{val.title}</Card.Title>
        <Card.Text style={{ height:"15rem"}}>
          
          {val.desc}

         
        </Card.Text>
        <Button  className='btn' onClick={handleclick} variant="primary">ADD</Button>{count}
        <Button  className='btn' onClick={handledelete} variant="primary">DELETE</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard1
