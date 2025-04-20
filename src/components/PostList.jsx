import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";

function PostList() {
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author='Nikita' body="Makita" />
            <Post author='Makita' body="Nikita" />
        </ul>
        </>
    )
}

export default PostList;