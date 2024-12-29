import { Container, Row, Col } from "react-bootstrap";
import List from "./components/List";
import Main from "./components/Main";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchItem, setSearchItem] = useState("srk");
  const [selectedVideo, setSelectedVideo] = useState(undefined);
  console.log("searchItem", searchItem);
  const onSearchHandler = (val) => {
    setSearchItem(val);
  };

  const onChangeVideo = (videoDetail) => {
    setSelectedVideo(videoDetail);
  };

  useEffect(() => {
    async function getData() {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAzenigmnfntK19vqTqRtst12fGf14QKNA",
          q: searchItem,
        },
      });
      console.log("===>", response.data.items);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    }

    getData();
  }, [searchItem]);

  return (
    <Container>
      <Search searchHandler={onSearchHandler} />
      <Row>
        <Col sm="8" style={{ border: "2px solid red" }}>
          <Main mainvideo={selectedVideo} />
        </Col>
        <Col sm="4" style={{ border: "2px solid blue" }}>
          <List videos={videos} onChange={onChangeVideo} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
