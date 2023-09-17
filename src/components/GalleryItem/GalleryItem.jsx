import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList';

function GalleryItem({picture}) {

    return (
        <div className='picture'>
            <li
                onClick={flipImage}>
                {renderImage()}
            </li>
            Likes: {picture.like}
            <button className= '.button' onClick={onSubmit}>👍</button>
        </div>
    )
}


export default GalleryItem;