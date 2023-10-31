import React, { Component } from 'react';
import "./style.css"

interface QuantityPickerProps {
  min: number;
  max: number;
}

interface QuantityPickerState {
  value: number;
  disableDec: boolean;
  disableInc: boolean;
}

export default class QuantityPicker extends Component<QuantityPickerProps, QuantityPickerState> {
  constructor(props: QuantityPickerProps) {
    super(props);

    this.state = { value: this.props.min, disableDec: true, disableInc: false };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.value + 1;
    if (this.state.value < this.props.max) {
      this.setState({ value: plusState, disableDec: false });
    }
    if (this.state.value === (this.props.max - 1)) {
      this.setState({ disableInc: true });
    }
    if (this.state.value === this.props.min) {
      this.setState({ disableDec: false });
    }
  }

  decrement() {
    const minusState = this.state.value - 1;
    if (this.state.value > this.props.min) {
      this.setState({ value: minusState });
      if (this.state.value === this.props.min + 1) {
        this.setState({ disableDec: true });
      }
    } else {
      this.setState({ value: this.props.min });
    }
    if (this.state.value === this.props.max) {
      this.setState({ disableInc: false });
    }
  }

  render() {
    const { disableDec, disableInc } = this.state;

    return (
      <span className="quantity-picker border-solid border-2 border-[--md-blue] ml-5">
        <button className={`${disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left  font-semibold`} onClick={this.decrement}>&ndash;</button>
        <input className="quantity-display font-normal" type="text" value={this.state.value} />
        <button className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right font-semibold`} onClick={this.increment}>&#xff0b;</button>
      </span>
    );
  }
}
