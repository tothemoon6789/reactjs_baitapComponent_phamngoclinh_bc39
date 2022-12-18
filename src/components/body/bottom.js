import React, { Component } from 'react';
import Item from './item';

class Bottom extends Component {
    render() {
        return (
            <>
                <div className='d-flex container px-0'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Item />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Item />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Item />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Item />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Bottom;