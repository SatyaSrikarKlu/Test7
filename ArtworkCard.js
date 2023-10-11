import React from 'react';

const ArtworkCard = ({ title, artist, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%' }} />
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
    </div>
  );
};

export default ArtworkCard;

