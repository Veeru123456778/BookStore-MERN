import React from "react";

function Spinner(){
return (
  <div className="d-flex justify-content-center align-items-center vh-80">
    <div className="d-flex align-items-center spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
)
}

export default Spinner;