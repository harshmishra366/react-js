import React,{useState,useEffect} from "react";
import service from "../appwite/config";
import {Container,Postcard } from "../component/index"
function Home(){
    const [posts,SetPosts]= useState([])
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                SetPosts(posts.documents)
            }

        })
    },[])
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


    return (
        <div className="py-8 w-full">
            <Container>
                <div>
                    {posts.map((post)=>{
                        <div key={post.$id}>
                            <Postcard {...post} />
                        </div>
                    })}
                </div>

            </Container>
        </div>

        
    )
}
export default Home