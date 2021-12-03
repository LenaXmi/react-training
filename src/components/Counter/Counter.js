import React from 'react';
import Controls from './Controls.js';
import Value from './Value.js';
import s from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    //         this.setState({                       //без изменения предыдущего значения
    //             value:0
    // })

    this.setState(
      (
        prevState, //если нужно изменить предыдущее значение
      ) => ({ value: prevState.value + 1 }),
    );

    // console.log('click on increment')
    // console.log(e)
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // console.log('click on decrement')
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.Counter}>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
