import React, {Component} from 'react';
import { DatePicker, Radio } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

export default class HomeContainer extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} />
        <br />
        <RangePicker size={size} />
      </div>
    );
  }
}
