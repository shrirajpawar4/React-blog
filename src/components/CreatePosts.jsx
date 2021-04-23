import React from "react";

export default function CreatePost(props) {
    return (
        <div className='flex flex-col'>
            <form onSubmit={props.savePost} className='align-items justify-center'>
                <h1 className='text-2xl text-white mt-6 align-items justify-center'>Create Post</h1>
                <input 
                className='mt-4 rounded-sm p-1 align-items justify-center'
                onChange={props.saveTitle}
                type='text' 
                placeholder='Title' 
                size='39' 
                ref={props.getTitle}
                />
                <br />
                <br />
                <textarea 
                className='mt-4 rounded-sm p-1 align-items justify-center'
                onChange={props.saveContent}
                placeholder='Content' 
                row='8' 
                cols='41' 
                ref={props.getContent}
                 />
                <br />
                <br />
                <button className='bg-cornflower-blue-600 text-white text-lg rounded-md p-1.5 hover:bg-cornflower-blue-800 transform hover:scale-110 motion-reduce:transform-none'>Publish</button> 
            </form>
        </div>
    )
}

