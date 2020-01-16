// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from './';

class ClockWork extends Component {

    state = { timer: null }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        // console.log('tick', Date.now())
        const store = getStore();
        store.dispatch({ type: `CLOCKWORK/TICK` });
    }

    startTimer = () => {
        const { tickDelay } = this.props;
        const {
            timer
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) });
        }
    }

    stopTimer = () => {
        const {
            timer
        } = this.state;
        if (timer) {
            clearInterval(timer);
            this.setState({ timer: null });
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = (store) => {
    return {
        tickDelay: store.clockwork.data.tickDelay,
    };
};


export default (connect(mapStateToProps, null)(ClockWork));
