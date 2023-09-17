import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({GalleryList,UpdateGalleryList}) {

    reutrn (
        <ul>{GalleryList.map(picture =>{ 
            return <GalleryItem
            key={picture.id}
            picture={picture}
            updateGalleryItem={updateGalleryItem}
            />
        })}
         </ul>
    )
}
export default GalleryList;