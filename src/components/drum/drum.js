import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import "./drum.css"

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class Drum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "Press to play.",
            rSelected: 'heater',
            bank: bankOne
        }
        this.displayClipName = this.displayClipName.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({
            rSelected,
            bank: rSelected === 'heater' ? bankOne : bankTwo
        });
    }

    displayClipName(name) {
        this.setState({
            display: name
        });
    }

    render() {
        return (
            <div id="drum-machine">

                <div id="display">{this.state.display}</div>

                <Bank bank={this.state.bank} updateDisplay={this.displayClipName} />                

                <div>Bank</div>
                <ButtonGroup vertical>
                    <Button onClick={() => this.onRadioBtnClick('heater')} active={this.state.rSelected === 'heater'}>Heater Kit</Button>
                    <Button onClick={() => this.onRadioBtnClick('piano')} active={this.state.rSelected === 'piano'}>Smooth Piano Kit</Button>
                </ButtonGroup>

            </div>
        )
    }
}

class Bank extends React.Component {
    render() {
        return (
            <div className="drum-bank">
                {this.props.bank.map((ele) => {
                    return (
                        <Pad
                            keyCode={ele.keyCode}
                            keyTrigger={ele.keyTrigger}
                            id={ele.id}
                            url={ele.url}
                            key={'drum-pad-' + ele.keyTrigger}
                            updateDisplay={this.props.updateDisplay}
                        />
                    )
                })}
            </div>
        );
    }
}

class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.play = this.play.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    play() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.id);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.play();
        }
    }

    render() {
        return (
            <Button id={this.props.id} className="drum-pad" onClick={this.play}>
                <audio id={this.props.keyTrigger} className="clip" src={this.props.url}></audio>
                {this.props.keyTrigger}
            </Button>
        );
    }
}

export default () =>
    <Drum />