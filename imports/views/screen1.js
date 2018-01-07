import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "@blueprintjs/core";

class Screen1 extends Component {
    navigate = (event, path) => {
        event.preventDefault();
        this.props.history.push(path);
    }

    sampleAction = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Screen 1</h1>

                <a onClick={(event) => this.navigate(event, '/')} href="#">Main Page</a><br />
                <a onClick={(event) => this.navigate(event, '/screen2')} href="#">Screen 2</a><br />
                <a onClick={(event) => this.navigate(event, '/screen3')} href="#">Screen 3</a><br />
                
                <Button
                    style={{ margin:'10px 0' }}
                    text="Dispatch Action Sample"
                    iconName="edit"
                    onClick={this.sampleAction}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
    screen1Props: {
        a:1,
        b:2
    }
})

export default connect(mapStateToProps)(Screen1);