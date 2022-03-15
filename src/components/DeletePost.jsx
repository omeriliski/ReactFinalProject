import { useContext } from "react";
import { PostContext } from "../App";
import "./DeletePost.scss";
const DeletePost=({post})=>{
    const {database,savePostData} = useContext(PostContext);

    const deletePost=()=>{
        const tempDatabase = database.filter(item=>item!=post);
        savePostData(tempDatabase)
        console.log("post deleted");
      }
    return(
        <div className="delete-container">
            <a onClick={deletePost}>Delete Post</a>
        </div>
    )
}
export default DeletePost;