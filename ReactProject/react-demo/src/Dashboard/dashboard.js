import React from "react";
import "./dashboard.scss";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Dashboard = () => {
  return (
    <Container className="main">
      <div className="sidebar py-4 px-3">sidebar</div>
      <div className="content-section">
        <Row>
          <Col className="header-section p-3">Row1</Col>
        </Row>
        <Row>
          <Col className="middle-section p-3">Row2</Col>
        </Row>
        <Row  >
          <Col className="footer-section px-3 py-2">Row3</Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
