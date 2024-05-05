import conf from "../conf/conf";
import { Client, ID,Databases,Storage,Query } from "appwrite";
export class Service{
    client=new Client
    databases 
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appurl).setProject(conf.projectid);
        this.bucket=new Storage(this.client)
        this.databases= new Databases(this.client)
    }

    async createPost({title,slug,content,featuredimg,status,userId}){
        try {
          return await this.databases.createDocument(
            conf.databaseid,
            conf.collectionid,
            slug,
            {
                title,
                content,
                featuredimg,
                status,
                userId

            }
          ) 
        } catch (error) {
            throw(error)
        }
    }
    async updatePost(slug,{title,content,featuredimg,status,}){
        try {
            return await this.databases.updateDocument(
                slug,
                conf.databaseid,
                conf.collectionid,
                {
                    title,
                    content,
                    status,
                    featuredimg
                }
                
            )
        } catch (error) {
            throw(error)
            
        }
    }
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.databaseid,
                conf.collectionid,
                slug
            )
            return true
            
        } catch (error) {
            console.log("error:",error)
            return false
            
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.databaseid,
                conf.collectionid,
                slug

            )
           
            
        } catch (error) {
            console.log("GETpost::Error",error);
            throw error
            return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseid,
                conf.collectionid,
                queries
            )
            
        } catch (error) {
           
            throw(error)
            
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketid,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("uploadFile::error",error);
            return false
            
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.bucketid,
                fileId
            )
            return true
        } catch (error) {
            console.log("deleteFile::error",error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.bucketid,
            fileId
        )
    }


}
const service= new Service
export default service