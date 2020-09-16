import React from 'react';
import { Form, Card, Select, Button, Switch, Typography, Space } from 'antd';
import Ship from '../../Gameboards/Ship/Ship';

const { Option } = Select;
const { Title } = Typography;

const MoveShip = () => {
  return (
    <Card>
      <Space direction="vertical">
        <Title level={5}>Click on a ship to change the coordinates</Title>
        <Form layout="inline">
          <Form.Item label="Ship">
            <Ship length={2} orientation={true} showcase />
          </Form.Item>
          <Form.Item label="Column">
            <Select defaultValue="A" style={{ width: 120 }}>
              <Option value="0">A</Option>
              <Option value="1">B</Option>
              <Option value="2">C</Option>
              <Option value="3">D</Option>
              <Option value="4">E</Option>
              <Option value="5">F</Option>
              <Option value="6">G</Option>
              <Option value="7">H</Option>
              <Option value="8">I</Option>
              <Option value="9">J</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Row">
            <Select defaultValue="3" style={{ width: 120 }}>
              <Option value="0">1</Option>
              <Option value="1">2</Option>
              <Option value="2">3</Option>
              <Option value="3">4</Option>
              <Option value="4">5</Option>
              <Option value="5">6</Option>
              <Option value="6">7</Option>
              <Option value="7">8</Option>
              <Option value="8">9</Option>
              <Option value="9">10</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Horizontal">
            <Switch checked />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Update Ship</Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
};

export default MoveShip;
