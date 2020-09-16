import React from 'react';
import { Form, Card, Select, Switch, Typography, Space } from 'antd';
import Ship from '../../Gameboards/Ship/Ship';

const { Option } = Select;
const { Title } = Typography;

const MoveShip = (props) => {
  let column;
  let row;
  let length;
  let orientation;

  if (props.currentShip) {
    column = props.currentShip.startCoordinate.col;
    row = props.currentShip.startCoordinate.row;
    length = props.currentShip.length;
    orientation = props.currentShip.orientation;
  }

  return (
    <Card>
      <Space direction="vertical">
        <Title level={5}>
          Click on a ship to change the starting coordinate
        </Title>
        <Form layout="inline">
          <Form.Item label="Ship">
            <Ship length={length} orientation={orientation} showcase />
          </Form.Item>
          <Form.Item label="Column">
            <Select
              value={column}
              style={{ width: 60 }}
              onChange={(value) => props.moveShip(row, value)}
            >
              <Option value={0}>A</Option>
              <Option value={1}>B</Option>
              <Option value={2}>C</Option>
              <Option value={3}>D</Option>
              <Option value={4}>E</Option>
              <Option value={5}>F</Option>
              <Option value={6}>G</Option>
              <Option value={7}>H</Option>
              <Option value={8}>I</Option>
              <Option value={9}>J</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Row">
            <Select
              value={row}
              style={{ width: 60 }}
              onChange={(value) => props.moveShip(value, column)}
            >
              <Option value={0}>1</Option>
              <Option value={1}>2</Option>
              <Option value={2}>3</Option>
              <Option value={3}>4</Option>
              <Option value={4}>5</Option>
              <Option value={5}>6</Option>
              <Option value={6}>7</Option>
              <Option value={7}>8</Option>
              <Option value={8}>9</Option>
              <Option value={9}>10</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Horizontal">
            <Switch checked={orientation} onChange={props.toggleShip} />
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
};

export default MoveShip;
