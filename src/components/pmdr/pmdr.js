import React from 'react'
import { Button, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./pmdr.css"

class LengthChanger extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(op) {
        this.props.changeLength(this.props.type, op);
    }

    render() {
        return (
            <div>
                <div id={this.props.type + "-label"}>{this.props.type + " length"}</div>                
                <div className="pmdr-len-ctrl">                
                    <Button id={this.props.type + "-decrement"} onClick={() => this.handleClick("-")} size="sm"><FontAwesomeIcon icon="arrow-down" /></Button>
                    <div id={this.props.type + "-length"}>{this.props.length} min(s)</div>
                    <Button id={this.props.type + "-increment"} onClick={() => this.handleClick("+")} size="sm"><FontAwesomeIcon icon="arrow-up" /></Button>
                </div>
            </div>
        )
    }
}

class Ctrl extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartPause = this.handleStartPause.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStartPause() {
        this.props.startPause();
    }

    handleReset() {
        this.props.reset();
    }

    render() {
        return (
            <div className="pmdr-ctrl">
                <Button id="start_stop" onClick={this.handleStartPause} size="sm"><FontAwesomeIcon icon="play" /><FontAwesomeIcon icon="pause" /></Button>
                {' '}
                <Button id="reset" onClick={this.handleReset} size="sm"><FontAwesomeIcon icon="redo" /></Button>
            </div>
        )
    }
}

class Timer extends React.Component {

    render() {
        return (
            <div className="pmdr-timer">                
                <div id="timer-label">{this.props.timerType==="session" ? "Keep on working!" : "Get some rest!"}</div>
                <Progress animated={this.props.active ? true : false} color={this.props.timer < 60 ? "danger" : "success"} value={this.props.progress}>{this.props.timer}</Progress>
                <div id="time-left">{this.props.timer}</div>
            </div>
        )
    }
}

class Pmdr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timer: 60 * 25,
            timerType: "session",
            active: false,
            progress: 100
        }
        this.ticker = null; // for setInterval()
        this.startPause = this.startPause.bind(this);
        this.reset = this.reset.bind(this);
        this.changeLength = this.changeLength.bind(this);
    }

    startPause() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            this.ticker = setInterval(() => {
                if (this.state.timer === 0) {
                    this.audio.play();
                    this.setState({
                        timerType: (this.state.timerType === "session") ? "break" : "session",
                        timer: (this.state.timerType === "session") ? 60 * this.state.breakLength + 1 : 60 * this.state.sessionLength + 1,
                        progress: 100
                    });
                }
                this.setState({
                    timer: this.state.timer - 1,
                    progress: (this.state.timerType === "session") ? Math.floor(this.state.timer / (60 * this.state.sessionLength) * 100) : Math.floor(this.state.timer / (60 * this.state.breakLength) * 100)
                });
            }, 1000);
        } else {
            window.clearInterval(this.ticker);
            this.setState({
                active: false
            });
        }
    }

    reset() {
        window.clearInterval(this.ticker);
        this.audio.pause();
        this.audio.currentTime = 0;
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timer: 60 * 25,
            timerType: "session",
            active: false,
            progress: 100
        });
    }

    changeLength(type, op) {
        var stateToChange = type + "Length";
        if (!this.state.active) {
            if (op === "+" && this.state[stateToChange] < 60) {
                this.setState({
                    [stateToChange]: this.state[stateToChange] + 1,
                    timer: (this.state.timerType === type) ? 60 * (this.state[stateToChange] + 1) : this.state.timer
                });
            } else if (op === "-" && this.state[stateToChange] > 1) {
                this.setState({
                    [stateToChange]: this.state[stateToChange] - 1,
                    timer: (this.state.timerType === type) ? 60 * (this.state[stateToChange] - 1) : this.state.timer
                });
            }
        }
    }

    render() {
        return (

            <div className="pmdr">

                <LengthChanger type="break" length={this.state.breakLength} changeLength={this.changeLength} />

                <LengthChanger type="session" length={this.state.sessionLength} changeLength={this.changeLength} />

                {/* Format timer: seconds to MM:SS}*/}
                <Timer timerType={this.state.timerType} timer={("0" + Math.floor(this.state.timer / 60)).slice(-2)+':'+("0" + this.state.timer % 60).slice(-2)} progress={this.state.progress} active={this.state.active} />

                <Ctrl startPause={this.startPause} reset={this.reset} />

                <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={(audio) => { this.audio = audio; }} />

            </div>
        )
    }
}

export default () =>
    <Pmdr />