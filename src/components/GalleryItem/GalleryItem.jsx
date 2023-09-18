import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function GalleryItem({ picture, getGallery }) {
const [likeCount, setLikeCount] = useState(picture.likes);
const [photoStatus, setPhotoStatus] =useState(true)

const flipPhoto = () => {
    setPhotoStatus(!photoStatus); // Toggle the value
}


  const addLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        setLikeCount(likeCount + 1);
        getGallery();
      })
      .catch((error) => {
        console.error(error); // Log the error here
      });
  };

  return (
    <>
    <div>
        {photoStatus ?
        <>
      <li>
        <img src={picture.path}  onClick={flipPhoto} alt={`Gallery Item ${picture.id}`} />
        <p>
          {likeCount} likes
          <button className='button' onClick={() => addLike(picture.id)}>
            👍
          </button>
        </p>
      </li>
      </>
      :
      <div className='description' onClick={flipPhoto}> 
      <p>{picture.description}</p>
      <p>
          {likeCount} likes
          <button className='button' onClick={() => addLike(picture.id)}>
            👍
          </button>
        </p>

      </div>
}
    </div>
    </>
  );
}

export default GalleryItem;
