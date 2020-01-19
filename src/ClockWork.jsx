// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from './';
import { connectPi } from './redux/pi/actions';

class ClockWork extends Component {

    state = { timer: null }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() { this.stopTimer() }

    startTimer = () => {
        const store = getStore();
        store.dispatch({ type: `CLOCKWORK/START` });

        store.dispatch({
            type: "PI/SET_CONNECTING",
            connecting: false
        });

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
            initted,
            ticks,
            connecting,
            connected
        } = this.props;

        if (!connecting && !connected) {
            connectPi();
        }

        if (ticks % 5 === 0) {
            connectPi();
            store.dispatch({ type: `CAMERA/UPDATE` });
        }

        if (!initted) {
            if (!initting) {
                store.dispatch({ type: `USERENTITY/INIT` });
            }
        }
        if (fireprintInitted && ipLocationInitted && !initted) {
            store.dispatch({ type: `USERENTITY/INIT/COMPLETE` });
        }


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
        ////////////////////
        fireprintInitted: store.userEntity.fireprintInitted,
        ipLocationInitted: store.userEntity.ipLocationInitted,
        initting: store.userEntity.initting,
        initted: store.userEntity.initted,
        ////////////////////
        connected: store.pi.connected,
        connecting: store.pi.connecting,
    };
};

export default (connect(mapStateToProps, null)(ClockWork));
