import { useParams } from "react-router-dom";

function Wishes() {
    const {title} = useParams()
    console.log(title,'title')
  return (
    <div className="container-fluid mt-5">
     <div className="row">
      <div className="col-md-6 text-center">
        <img src="https://cmstelugu.letsly.in/wp-content/uploads/2024/04/Ugadi-Wishes-in-Telugu-3.jpg"
        alt="img"
        className="img-fluid payment_img "/>
        <h5 className="my-3" style={{color:"grey"}}>Ugadi pachhadi (chutney) is an integral component of Ugadi festivities, symbolising a mix of all the flavours one must expect to face in the coming year: sweet, sour, salty, bitter, piquant and spicy hot, signifying happiness, sadness, anger, disgust, fear and surprise </h5>
       <h3 style={{color:"green"}}> Wishing you a Happy  Ugadhi {title.toUpperCase()} & Your Family Members</h3>
      </div>
     </div>
    </div>
  );
}

export default Wishes;
