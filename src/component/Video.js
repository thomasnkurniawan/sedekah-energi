export default function Video({ videoId, thumbnailUrl, setShowModalVideo }) {
  // const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setShowModalVideo(videoId);
  };

  return (
    <div className="video-container">
      <div className="thumbnail" onClick={handlePlay}>
        <img
          alt="sedekah-energi-asset"
          src={
            thumbnailUrl ||
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
          }
          alt="Video Thumbnail"
          className="thumbnail-image"
        />
        <div className="play-icon">
          <img
            alt="sedekah-energi-asset"
            src="/energi-asset-vector/play-icon.svg" // Tambahkan play icon SVG ke public folder
            alt="Play Icon"
          />
        </div>
      </div>
    </div>
  );
}
