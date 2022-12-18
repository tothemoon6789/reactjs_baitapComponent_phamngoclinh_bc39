import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <>
                <div className="card text-center">
                    <img src="https://w0.peakpx.com/wallpaper/189/218/HD-wallpaper-red-glass-bg-black-red-abstract.jpg" className="card-img-top bg-dark" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>

            </>
        );
    }
}

export default Item;