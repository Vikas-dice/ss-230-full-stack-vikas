import { Image } from "react-bootstrap";

const Main = ({ mainvideo }) => {
  if (mainvideo === undefined) return <h1>Loading....</h1>;
  const videoSrc = `https://www.youtube.com/embed/${mainvideo.id.videoId}`;
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h4>{mainvideo.snippet.channelTitle}</h4>
      <h6>{mainvideo.snippet.description}</h6>
    </div>
  );
};

export default Main;
