import React from "react";
import './photo.styles.css';

const Photo = ({ url, autor }) => (
  <div className="photo">
    <img alt={`img-${autor}`} src={url} />
    <div className="photo-footer">
      <span className="autor">{autor}</span>
    </div>
  </div>
);

export default Photo;
