import React, { Component } from 'react';
import CounterComponent from './counterComponent';



class Counters extends Component {
    state = { 
        counters: [
            {
                id:1,
                value:4
            },
            {
                id:2,
                value:2
            },
            {
                id:3,
                value:9
            },
            {
                id:4,
                value:0
            },
        ]
    }

    resetCounters =()=>{
        const {counters} = this.state;
        counters.map(e=>e.value=0);
        console.log(counters)
        this.setState({counters:counters});
    }

    onDelete = (givenID)=>{
        console.log(`ID: ${givenID}`);
        const counters = this.state.counters.filter(e=>e.id !== givenID)
        this.setState({
            counters
        });
    }

    handleIncrement = (counter)=>{
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter)
        counters[idx] ={...counter}
        counters[idx].value++;
        this.setState({counters})
    
    }

    render() { 
        const {counters} = this.state;

        return ( 
            <div>
                <button className="btn btn-primary btn-small m-2" onClick={this.resetCounters}>Reset</button>
                {counters.map(e=><CounterComponent counterInfo={e} onIncrement={this.handleIncrement} onDelete={this.onDelete} key={e.id}/>)}
            </div>
         );
    }
}
 
export default Counters;