import React from "react";


export default function Header() {
    return (
        <div className="p-6 mr-6">
            <div className="text-white flex justify-end gap-x-4">
            <input type="search" placeholder="search" className="flex justify-center rounded-md"/>   
                <button><i className="material-icons hover:bg-blue-600">home</i></button>
                <button><i className="material-icons hover:bg-blue-600">explore</i></button>
                <button><i className="material-icons hover:bg-blue-600">add_box</i></button>
            </div>    
        </div>
    )
}