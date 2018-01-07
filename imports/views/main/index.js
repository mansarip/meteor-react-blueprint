import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPageTitle, setRandomNumber } from './actions'
import { Button } from '@blueprintjs/core'

class MainPage extends Component {
    componentDidMount = () => {
        this.props.dispatch(setPageTitle('THE TITLE'))
        this.changeRandomNumber()
    }

    changeRandomNumber = () => {
        this.props.dispatch(setRandomNumber())
    }

    navigate = (event, path) => {
        event.preventDefault();
        this.props.history.push(path);
    }

    render() {
        const { title, randomNumber } = this.props;

        return (
            <div>
                <h1>This is the {title}</h1>
                <p>Random number generated : {randomNumber}</p>
                <Button text="Random Number" onClick={this.changeRandomNumber} />
                <p><a onClick={(event) => this.navigate(event, '/screen2')} href="#">Screen 2</a></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, randomNumber } = state.pageMain;

    return {
        title,
        randomNumber
    }
}

export default connect(mapStateToProps)(MainPage);