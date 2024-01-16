import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import './style.css';
import axios from "axios";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedNews, setSelectedNews] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get("http://localhost:5800/news/fullnews");
        setNewsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsData();
  }, []);
  const handleModelClick = (news) => {
    setModalShow(true);
    setSelectedNews(news);
  };
  return (
    <div>
      <Container className="d-flex justify-content-between">
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Container className="mainbox mb-5 mt-5">
            <h2 className="mainheading">News</h2>
            <div className="newscontainer">
              <Box
                sx={{
                  display: "block",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 0,
                    width: "100%",
                    height: 120,
                    justifyContent: "space-between",

                  },
                }}
              >
                {newsData.map((news) => (
                  <Paper
                    elevation={3}
                    className="newsbox m-2"
                    onClick={() => {
                      handleModelClick(news);
                    }}
                    key={news._id}

                  >
                    <div className="describe">
                      <span>{news.heading}</span>
                      <h6>{news.type}</h6>
                    </div>

                    <img src={news.image} alt="#" className="me-4" />
                  </Paper>
                ))}
              </Box>
            </div>
          </Container>

        </Col>
        <Col lg={2}></Col>
      </Row>
      

      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="modeldata"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{selectedNews.heading}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedNews.image} alt="news" />
          <span>{selectedNews.date}</span>
          <p>{selectedNews.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default News;