import { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
  
function Jwellery ()

    {
        const [apidata,setData]=useState([])
        useEffect(()=>{
          getData()
        },[])
       async function getData()
        {
          var result=await fetch("https://fakestoreapi.com/products/category/jewelery")
        //   console.log(result)
        var data= await result.json()
        setData(data)
        console.log(data)
        }
    return(
        <div style={{backgroundColor:"Red"}}>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
  
  {
   apidata.map((item)=>
   <MDBCol>
   <MDBCard> 
    <center>
    <MDBCardImage
       src={item.image} style={{width:"300px", height:"150px"}}
       alt='...'
       position='top'
     />
      </center>
     <MDBCardBody style={{ width:"100px",  height:"300px"}}>
   
       {/* <MDBCardTitle>{item.title}</MDBCardTitle> */}
       <MDBCardTitle style={{color:"green"}} >{item.category}</MDBCardTitle>
       <MDBCardTitle style={{color:"red"}}>Rs. {item.price*80} </MDBCardTitle>
       <MDBCardTitle style={{color:"blue"}} >{item.rating.rate}</MDBCardTitle>
       <MDBCardText style={{width:"100px", height:"200px"}}> {item.description.slice(0,50)} </MDBCardText>
      
     </MDBCardBody>
   </MDBCard>
 </MDBCol>
 ) }
 </MDBRow>
 <br></br>
<Footer></Footer>
     </div>

    )
}


    
export default Jwellery 

