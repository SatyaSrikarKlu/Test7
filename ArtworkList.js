import React from 'react';

const ArtworkList = () => {
  const artworks = [
    { id: 1, title: "Starry Night", artist: "Vincent van Gogh" },
    { id: 2, title: "Guernica", artist: "Pablo Picasso" },
    { id: 3, title: "Mona Lisa", artist: "Leonardo da Vinci" },
    // Add more artworks as needed
  ];

  return (
    <div>
      <h2>Artworks</h2>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <p>Title: {artwork.title}</p>
            <p>Artist: {artwork.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworkList;
