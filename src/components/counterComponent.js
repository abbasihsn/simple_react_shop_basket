import React, { Component } from "react";

class CounterComponent extends Component {


  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    const {counterInfo} = this.props;
    return (
      <React.Fragment>
        <span style={this.styles} className={this.newMethod(counterInfo.value)}>
          {counterInfo.value === 0 ? "Zero" : counterInfo.value}
        </span>
        <button
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
          onClick={()=>this.props.onIncrement(counterInfo)}
        >
          Increase
        </button>
        <button onClick={()=>this.props.onDelete(counterInfo.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {counterInfo.value === 0 && <h1>Please enter more tags</h1>}  */}
      </React.Fragment>
    );
  }


  newMethod(count) {
    return count === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
  }
}

export default CounterComponent;
