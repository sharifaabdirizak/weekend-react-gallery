import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList';

function GalleryItem({picture, getGallery}) {

    return (
        <div>
            <li>
           
               <img src={picture.path}/>
               <p>likes</p>

            
                
            </li>
            {/* Likes: {picture.like} */}
            {/* <button className= '.button' onClick={onSubmit}>👍</button> */}
        </div>
    )
}


export default GalleryItem;