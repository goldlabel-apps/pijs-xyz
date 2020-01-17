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

    startTimer = () => {
        const store = getStore();
        store.dispatch({ type: `CLOCKWORK/START` });
        const { tickDelay } = this.props;
        const {
            timer
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) });
        }
        setTimeout(this.tick, tickDelay / 3);
    }

    tick = () => {
        const store = getStore();
        store.dispatch({ type: `CLOCKWORK/TICK` });
        const {
            fireprintInitted,
            ipLocationInitted,
            initting,
            initted
        } = this.props;

        if (!initted) {
            if (!initting) {
                store.dispatch({ type: `USERENTITY/INIT` });
            }
        }
        if (fireprintInitted && ipLocationInitted && !initted) {
            store.dispatch({ type: `USERENTITY/INIT/COMPLETE` });
        }
        // store.dispatch({ type: `USERENTITY/INIT` });

    }

    stopTimer = () => {
        const store = getStore();
        store.dispatch({ type: `CLOCKWORK/PAUSE` });
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
        tickDelay: store.clockwork.tickDelay,
        ticking: store.clockwork.ticking,
        ticks: store.clockwork.ticks,
        fireprintInitted: store.userEntity.fireprintInitted,
        ipLocationInitted: store.userEntity.ipLocationInitted,
        initting: store.userEntity.initting,
        initted: store.userEntity.initted,
    };
};

export default (connect(mapStateToProps, null)(ClockWork));
