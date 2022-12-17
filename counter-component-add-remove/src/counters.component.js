import React, { Component } from 'react';
import Counter from './counter.component';

export default class Counters extends Component {
    state = {
        counters:[
            {
                id:1,
                value:0
            },
            {
                id:2,
                value:0
            },
            {
                id:3,
                value:0
            }
        ]
    }

    handleAdd = () => {
        if (this.state.counters.length > 0) {
            const counters = [...this.state.counters];
            const lastCounter = counters[counters.length-1];
            const newObj = { id:lastCounter.id+1, value:0 };
            counters.push(newObj);
            this.setState({ counters });
        }else{
            // const obj = {id:1, value:0}
            // this.setState({ counters:obj})
        }
    }

    handleIncrement = (id) => {
        const counters = [...this.state.counters];
        const counter = counters.find(counter => counter.id === id);
        counter.value+=1;
        this.setState({counters});
    }
    
    handleDecrement = (id) => {
        const counters = [...this.state.counters];
        const counter = counters.find(counter => counter.id === id);
        if(counter.value > 0) counter.value-=1;
        this.setState({counters});
    }

    handleRemove = (id) => {
        const counters = [...this.state.counters];
        const updateCounters = counters.filter( counter => counter.id !== id );
        this.setState({ counters : updateCounters })
    }

    showTouchedCounter = () => {
        let count = 0;
        this.state.counters.forEach( counter => {if(counter.value > 0) count++} );
        return count;
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <h2 className='float-start col-9'>Touched: {this.showTouchedCounter() } </h2>
                    <button className='btn btn-primary col-3' onClick={this.handleAdd} >Add New</button>
                </div>
                {
                    this.state.counters.map( (counter) => (
                        <Counter 
                            key={counter.id}
                            id={counter.id}
                            value={counter.value}
                            handleIncrement={this.handleIncrement}
                            handleDecrement={this.handleDecrement}
                            handleRemove={this.handleRemove}
                        />
                    ) )
                }
            </React.Fragment>
        )
    }
}
