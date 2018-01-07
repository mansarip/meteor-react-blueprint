import React, { Component } from 'react';
import { connect } from 'react-redux';

class Screen3 extends Component {
    constructor(props) {
        super(props);
    }

    navigate = (event, path) => {
        event.preventDefault();
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <h1>Screen 3</h1>
                <a onClick={(event) => this.navigate(event, '/')} href="#">Main Page</a><br />
                <a onClick={(event) => this.navigate(event, '/screen2')} href="#">Screen 2</a><br />
                <a onClick={(event) => this.navigate(event, '/screen3')} href="#">Screen 3</a><br />
            </div>
        );
    }
}

export default connect()(Screen3);