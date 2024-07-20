import {useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    const navigate =useNavigate()
    const [title,setTitle] = useState("")
    const  readingtext =(value)=>{
        setTitle(value)
    }
    const onSubmitBtn = (e) => {
      e.preventDefault();  
              setTimeout(() => {
                navigate(`/Wishes/${title}`);
              }, 3000);
            }
  
  return (
    <div className="p-5" style={{backgroundColor:"yellowgreen"}}>
    <div className="container-fluid my-5" >
     <div className="row">
      <form className="col-md-6 text-center" onSubmit={onSubmitBtn} >
        <h4 className="my-3">Please Enter Your Cute Name</h4>
        <input 
        className="my-3"
        type="text"
        onChange={(e)=>readingtext(e.target.value)}
        />
        <br/>
        <button 
        className="btn btn-light"
        type="submit"
        ><b>Enter</b></button>
      </form>
     </div>
    </div>
    </div>
  );
}

export default Home;
