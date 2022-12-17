import React, { Component } from 'react'

export default class Counter extends Component {
    
    render() {
        const { id, value, handleIncrement, handleDecrement, handleRemove } = this.props;
        return (
            <div className='row my-3 p-2 rounded-3' style={{ backgroundColor: "lightblue" }}>
                <div className='col-6'>
                    <h4>{id}. Counter :</h4>
                </div>
                <div className='col-4'>
                    <div className="input-group">
                        <button className="input-group-text btn btn-primary" onClick={ () => handleDecrement(id) } disabled={value < 1}>-</button>
                        <input type="text" className="form-control text-center" value={value} onChange={()=>{console.log('changed');}}/>
                        <button className="input-group-text btn btn-primary" onClick={ () => handleIncrement(id) } >+</button>
                    </div>
                </div>
                <div className='col-2'>
                    <button className='btn btn-danger' onClick={ () => handleRemove(id) }>X</button>
                </div>
            </div>
        )
    }
}
