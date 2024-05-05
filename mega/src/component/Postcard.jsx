import React from "react";
import service from "../appwite/config";
import { Link } from "react-router-dom";



function Postcard({$id,title,featuredImg}){



    return(
       <Link to={`./post/${$id}`}>
        <div>
            <div>
                <img src={service.getFilePreview(featuredImg)} alt={title}  className="rounded-xl "/>
            </div>
            <div className="text-xl font-bold">
                {title}
            </div>
        </div>
       </Link>
    )
}

export default Postcard