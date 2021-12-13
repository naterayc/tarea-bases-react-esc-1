import React from "react";

import PICTURES_DATA from '../../assets/pictures-data';

import GalleryGrid from "../../components/galleryGrid/galleyGrid.component";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: PICTURES_DATA,
    };
  }
  
  render() {
    const { categories } = this.state;
    return (
      <div className="categories-page">
        {categories.map(({ id, ...otherCategoriesProps }) => (
          <GalleryGrid key={id} {...otherCategoriesProps} />
        ))}
      </div>
    );
  }
}

export default Gallery;
