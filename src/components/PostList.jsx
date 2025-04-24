import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((prev) => [...prev, postData]);
    }
    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal> : null}
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => (<Post author={post.author} key={post.body} body={post.body} />))}
            </ul>)}
            {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>No posts yet.</h2>
            </div>}

        </>
    )
}

export default PostList;