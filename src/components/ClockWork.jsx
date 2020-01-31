import React, { Component } from 'react'
import { connect } from 'react-redux'

class ClockWork extends Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        // console.log ('tick', Date.now())
        // const store = getStore()
        // store.dispatch({ type: `APP/CLOCKWORK/TICK` })
        // const {
        //     tickDelay,
        //     ticking,
        //     ticks
        // } = this.props
    }

    startTimer = () => {
        // const store = getStore()
        // store.dispatch({ type: `APP/CLOCKWORK/START` })
        const { tickDelay } = this.props
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) })
        }
        this.tick()
    }

    stopTimer = () => {
        const {
            timer
        } = this.state
        if (timer) {
            clearInterval(timer)
            this.setState({ timer: null })
        }
    }

    render() {
        const showClock = false;
        if (!showClock) {
            return null
        }
        return <React.Fragment>Clock</React.Fragment>
    }
}

const mapStateToProps = (store) => {
    return {
        tickDelay: store.app.clockwork.tickDelay,
        ticking: store.app.clockwork.ticking,
        ticks: store.app.clockwork.ticks
    }
}

export default (connect(mapStateToProps, null)(ClockWork))
