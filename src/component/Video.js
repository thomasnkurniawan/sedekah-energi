import { useState } from 'react';

export default function Video({ videoId, thumbnailUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container">
      {isPlaying ? (
        // Render iframe YouTube saat video diputar
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      ) : (
        // Render thumbnail dengan play button
        <div className="thumbnail" onClick={handlePlay}>
          <img
            src={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="thumbnail-image"
          />
          <div className="play-icon">
            <img
              src="/energi-asset-vector/play-icon.svg" // Tambahkan play icon SVG ke public folder
              alt="Play Icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}
