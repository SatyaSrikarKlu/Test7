import React from 'react';

const ArtworkDetail = ({ title, artist, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ArtworkDetail;
