import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FanChart from "../components/FanChart";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

function renderBarChart() {
  return (
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}

function renderLineChart() {
  return (
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

const Tab1 = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={8} md={12} className="mb-4 order-lg-1 order-2">
          <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
          {/* {renderBarChart()} */}
          {/* Uncomment the next line and comment out the above line to render the line chart */}
          {/* {renderLineChart()} */}
          <FanChart/>
          </ResponsiveContainer>
          </div>
        </Col>
        <Col lg={4} md={12} className="mb-4 order-lg-2 order-1">
          <Form>
            <Form.Group controlId="dropdown1">
              <Form.Label>Select Option 1</Form.Label>
              <Form.Control as="select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="dropdown2">
              <Form.Label>Select Option 2</Form.Label>
              <Form.Control as="select">
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="dropdown3">
              <Form.Label>Select Option 3</Form.Label>
              <Form.Control as="select">
                <option>Choice X</option>
                <option>Choice Y</option>
                <option>Choice Z</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Tab1;
