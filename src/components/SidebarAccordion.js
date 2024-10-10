import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


const SidebarAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Section 1</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Sub Link 1</li>
            <li>Sub Link 2</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Section 2</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Sub Link 1</li>
            <li>Sub Link 2</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Section 3</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Sub Link 1</li>
            <li>Sub Link 2</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SidebarAccordion;
