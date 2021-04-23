import React, {useState, useRef} from 'react';
import CreatePost from './CreatePosts';
import Post from "./Posts";
import EditPost from "./EditPost";

export default function Display() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [allPosts, setAllPosts] = useState([]);
    const [isCreatePost, setIsCreatePost] = useState(false);
    const [isEditPost, setIsEditPost] = useState(false);
    const [editPostId, setEditPostId] = useState('');
    
    const getTitle = useRef();
    const getContent = useRef();

    const saveTitle = event => {
        setTitle(event.target.value);
    }

    const saveContent = event => {
        setContent(event.target.value);
    }

    const toggleCreatePost = () => {
        setIsCreatePost(!isCreatePost);
    }

    const toggleEditPost = () => {
        setIsEditPost(!isEditPost);
    }

    const editPost = id => {
        setEditPostId(id);
        toggleEditPost();
    }

    const deletePost = id => {
        const editedPost = allPosts.filter(eachPost => {
            return eachPost.id !== id;
        });
        setAllPosts(editedPost);
    }

    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map(eachPost => {
            if(eachPost.id === editPostId){
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    content: content || eachPost.content
                };
            }
            return eachPost;
        });
        setAllPosts(updatedPost);
        toggleEditPost();
    }

    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, {title, content, id}]);
        console.log(allPosts);
        getTitle.current.value = '';
        getContent.current.value = '';
        toggleCreatePost();
    };

    if(isCreatePost){
        return(
            <div className='flex flex-col'>
            <CreatePost
            className='align-items justify-center'
            saveTitle={saveTitle}
            saveContent={saveContent}
            getTitle={getTitle}
            getContent={getContent}
            savePost={savePost}
             />
            </div>
        );
    } else if (isEditPost){
        const post = allPosts.find(post => {
            return post.id === editPostId;
        });
        return (
            <EditPost
            title={post.title}
            content={post.content}
            updatePost={updatePost}
            saveTitle={saveTitle}
            saveContent={saveContent}
             />
        );
    }
    return(
        <div className='flex-col'>
            <h2 className='text-2xl text-white flex justify-center content-center mt-8'>All Posts</h2>
            {!allPosts.length ? (
                <div>
                    <h3 className='text-white text-2xl flex justify-center content-center my-6'>There is nothing to see here!</h3>
                </div>
            ) : (
                allPosts.map( eachPost => {
                    return(
                        <Post 
                            id={eachPost.id}
                            key={eachPost.id}
                            title={eachPost.title}
                            content={eachPost.content}
                            editPost={editPost}
                            deletePost={deletePost}
                        />
                    );
                })
            )}
            <button className='bg-cornflower-blue-600 text-white text-lg rounded-md p-1.5 hover:bg-cornflower-blue-800 transform hover:scale-110 motion-reduce:transform-none flex content-center items-center' onClick={toggleCreatePost}>Create New Post</button>
        </div>
    )
};