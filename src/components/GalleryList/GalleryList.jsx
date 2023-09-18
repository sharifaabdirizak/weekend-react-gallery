import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, getGallery}) {

    return (
        <ul>{galleryList.map(picture =>{ 
            return ( <GalleryItem
            
            key= {[picture.id]}
            picture={picture}
            getGallery={getGallery}
            />
            )
        })}
         </ul>
    )
}
export default GalleryList;