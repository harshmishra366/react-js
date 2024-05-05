import React,{useState,useEffect} from "react";
import {Container,Postcard} from "../component/index"
import service from "../appwite/config";



function AllPost(){
    const [posts,SetPosts]= useState([])
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                SetPosts(posts.documents)
            }
            return SetPosts('')
        })
    },[])


    return(
        <div className="py-8 w-full">
            <Container>
                {posts.map((post)=>{
                    <div key={post.$id } className="p-2 w-1/4">
                        <Postcard {...post} />
                    </div>

                })}
            </Container>
        </div>
    )
}
export default AllPost