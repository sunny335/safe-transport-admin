import React from 'react';
import { Row, Col } from 'reactstrap';

import ScrollNav from '../ScrollNav';
import Sidebar from '../Sidebar';

const DocMain = (props) => {
  const { children, list } = props;
  return (
    <Row>
      <Col lg={list ? 10 : 12}>{children}</Col>
      {list && (
        <Col lg={2}>
          <Sidebar heading="Components">
            <ScrollNav list={list} />
          </Sidebar>
        </Col>
      )}
    </Row>
  );
};

export default DocMain;
