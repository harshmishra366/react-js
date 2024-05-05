import React,{useEffect,useState} from "react";
import service from "../appwite/config";
import {PostForm,Container} from '../component/index'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditPost(){
    const[posts,SetPosts]=useState([])
    const navigate=useNavigate()
    const {slug}=useParams()
    useEffect(()=>{
        service.getPost(slug).then((posts)=>{
            
                SetPosts(posts)
          
        })
    },[navigate,slug])


    return(
        posts?
        <div className="py-8 w-full">
            <Container>
                <div>
                    <PostForm {...posts} />
                </div>
            </Container>

        </div>:null
    )
}
export default EditPost