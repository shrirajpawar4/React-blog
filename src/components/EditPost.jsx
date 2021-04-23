import React from 'react';

export default function EditPost(props) {
    return (
        <div>
            <form>
                <h1 className='text-2xl text-white'>Edit Post</h1>
                <input 
                defaultValue={props.title}
                onChange={props.saveTitle}
                type='text'
                placeholder='Title' 
                size='39'
                 />
                <br />
                <br />
                <textarea 
                defaultValue={props.content}
                onChange={props.saveContent}
                placeholder='Content' 
                row='8' 
                cols='41'
                 />
                <br />
                <br />
                <button className='bg-cornflower-blue-600 text-white text-lg rounded-md p-2 hover:bg-cornflower-blue-800' onClick={props.updatePost}>Update</button> 
            </form>
        </div>
    )
}