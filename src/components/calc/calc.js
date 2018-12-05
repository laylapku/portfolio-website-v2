import React from 'react'
import Mexp from 'math-expression-evaluator';
import { Button } from 'reactstrap';
import "./calc.css"

const buttonsArray = [
    {
        id: 'clear',
        value: 'AC',
        style: 'calc-ac calc-2col'
    },
    {
        id: 'divide',
        value: '/',
        style: 'calc-btn calc-op'
    },
    {
        id: 'multiply',
        value: '*',
        style: 'calc-btn calc-op'
    },
    {
        id: 'seven',
        value: '7',
        style: 'calc-btn'
    }, 
    {
        id: 'eight',
        value: '8',
        style: 'calc-btn'
    }, 
    {
        id: 'nine',
        value: '9',
        style: 'calc-btn'
    },
    {
        id: 'subtract',
        value: '-',
        style: 'calc-btn calc-op'
    },
    {
        id: 'four',
        value: '4',
        style: 'calc-btn'
    }, 
    {
        id: 'five',
        value: '5',
        style: 'calc-btn'
    }, 
    {
        id: 'six',
        value: '6',
        style: 'calc-btn'
    },
    {
        id: 'add',
        value: '+',
        style: 'calc-btn calc-op'
    },
    {
        id: 'one',
        value: '1',
        style: 'calc-btn'
    },
    {
        id: 'two',
        value: '2',
        style: 'calc-btn'
    },
    {
        id: 'three',
        value: '3',
        style: 'calc-btn'
    },
    {
        id: 'equals',
        value: '=',
        style: 'calc-eval'
    },    
    {
        id: 'zero',
        value: '0',
        style: 'calc-btn calc-2col'
    },
    {
        id: 'decimal',
        value: '.',
        style: 'calc-btn'
    }   
];

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        // generate multiply or divide symbol
        this.disp = this.props.value === '*' ? '\u00d7' : this.props.value === '/' ? '\u00f7' : this.props.value;
    }

    handleClick() {
        switch (this.props.id) {
            case 'equals':
                this.props.evaluate();
                break;
            case 'clear':
                this.props.clear();
                break;
            default:
                this.props.updateDisplay(this.props.value);
        }

    }

    render() {
        return (
            <Button id={this.props.id} className={this.props.style} onClick={this.handleClick}>{this.disp}</Button>
        );
    }
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0'
        }
        this.clear = this.clear.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    clear() {
        this.setState({
            display: '0'
        });
    }

    evaluate() {
        this.setState({
            display: Mexp.eval(this.state.display).toString()
        });
    }

    updateDisplay(value) {
        // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.
        if (['+', '-', '*', '/'].indexOf(this.state.display.slice(-1)) > -1 &&
            ['+', '-', '*', '/'].indexOf(value) > -1) {
            this.setState({
                display: this.state.display.slice(0, -1) + value
            });
            // entering first number replaces default 0
        } else if (this.state.display === '0' && !isNaN(value)) {
            this.setState({
                display: value
            });
            // more than 2 '.' in one number should not be accepted.
        } else if (this.state.display.split(/\+|-|\*|\//).slice(-1)[0].split('.').length - 1 > 0 && value === '.') {
            // do nothing
        } else {
            this.setState({
                display: this.state.display + value
            });
        }
    }

    render() {
        return (

            <div className='calc'>

                <div id='display' className='calc-disp'>{this.state.display}</div>

                {buttonsArray.map((ele) => {
                    return (
                        <Btn
                            id={ele.id}
                            value={ele.value}
                            style={ele.style}
                            key={'calc-' + ele.value}
                            updateDisplay={this.updateDisplay}
                            evaluate={this.evaluate}
                            clear={this.clear} />
                    )
                })}

            </div>
        )
    }
}

export default () =>
    <Calc />