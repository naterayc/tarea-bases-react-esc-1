import React from 'react';
import Photo from '../photo/photo.component';

const GalleryGrid = ({ title, items }) => {
    return (
        <div className="category-row">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="row">
                {items
                    .filter((photo, idx) => idx < 4)
                    .map(({ id, ...otherPhotoProps }) => (
                        <Photo key={id} {...otherPhotoProps} />
                    ))}
            </div>
        </div>
    )
}

export default GalleryGrid;