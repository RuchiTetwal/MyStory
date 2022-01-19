import axios from 'axios';

const URL= 'http://localhost:8000';

export const createPost= async (post)=>{
    try{
        return await axios.post(`${URL}/create`,post)
    }
    catch(err){
        console.log('Error while calling createPost API', err);
    }
}

export const getAllPosts = async(param)=>{
    
    try{

        let response = await axios.get(`${URL}/posts${param}`);
        
      return response.data;
    }
    catch(err){
        console.log('Error while calling getAllPosts Api:', err)
    }
}

export const getPost = async (id)=>{
    try{
            let response = await axios.get(`${URL}/post/${id}`);
            return response.data;
    }
    catch(err){
        console.log('Error while calling getPosts Api: ', err);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.post(`${URL}/update/${id}`, post);
        
    } catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}

export const deletePost = async (id) => {
    try {
         await axios.delete(`${URL}/delete/${id}`);
        
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}

export const uploadFile = async (post) => {
    console.log(post);
    try {
        return await axios.post(`${URL}/file/upload`, post);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}
export const newComment = async (comment) => {
    try {
        return await axios.post(`${URL}/comment/new/`, comment);
    } catch(error) {
        console.log('Error while calling newComment API ', error)
    } 
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${URL}/comments/${id}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getComments API ', error)
    } 
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${URL}/comment/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deleteComments API ', error)
    } 
}

