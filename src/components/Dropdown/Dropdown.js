import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show=() =>{
  //     this.setState({visible:true})
  // }

  // hide=()=>{
  //     this.setState({visible:false})
  // }
  render() {
    const { visible } = this.state;
    return (
      <div className={s.Dropdown}>
        <button
          type="button"
          className={s.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className={s.Dropdown__menu}>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
