import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({destination='/'}){
    return (
        <div className="d-flex">
<Link to={destination}>
{/* <BsArrowLeft  className="bg-primary-700"/> */}
<button type="button" className="btn btn-primary">
            <BsArrowLeft /> 
        </button>
</Link>
</div>
)
}

export default BackButton;