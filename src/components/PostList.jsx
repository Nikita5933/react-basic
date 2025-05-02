import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import {useLoaderData} from "react-router-dom";

function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => (<Post id={post.id} author={post.author} key={post.id} body={post.body} />))}
            </ul>)}
            {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>No posts yet.</h2>
            </div>}

        </>
    )
}

export default PostList;