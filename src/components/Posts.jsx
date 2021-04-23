import React from "react";

export default function Post({ title, content, editPost, deletePost, id }) {
    return (
        <div>
            <section>
                <h3 className='text-xl text-white'> {title} </h3>
                <p className='text-lg text-white'> {content} </p>
                <button className='bg-cornflower-blue-600 text-white text-lg rounded-md p-2 mr-6 hover:bg-cornflower-blue-800 transform hover:scale-110 motion-reduce:transform-none' onClick={() => editPost(id)}>Edit</button>
                <button className='bg-cornflower-blue-600 text-white text-lg rounded-md p-2 ml-6 hover:bg-cornflower-blue-800 transform hover:scale-110 motion-reduce:transform-none' onClick={() => deletePost(id)}>Delete</button>
            </section>
        </div>
    );
};