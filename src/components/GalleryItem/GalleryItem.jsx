import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function GalleryItem({ picture, getGallery }) {
  const [likeCount, setLikeCount] = useState(picture.likes);

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
    <div>
      <li>
        <img src={picture.path} alt={`Gallery Item ${picture.id}`} />
        <p>
          {likeCount} likes
          <button className='button' onClick={() => addLike(picture.id)}>
            👍
          </button>
        </p>
      </li>
    </div>
  );
}

export default GalleryItem;
