import React, { Component } from 'react';
import Bottom from './bottom';
import Top from './top';

class Body extends Component {
    render() {
        return (
           <>
            <Top/>
            <Bottom/>
           </>
        );
    }
}

export default Body;