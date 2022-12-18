import React, { Component } from 'react';

class Top extends Component {
    render() {
        return (
            <>
                <div className="jumbotron container">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        It uses utility classes for typography and spacing to space content out
                        within the larger container.
                    </p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">
                        Learn more
                    </a>
                </div>

            </>
        );
    }
}

export default Top;