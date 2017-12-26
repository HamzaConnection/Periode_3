import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() { // runs when component output has been rendered to the DOM
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() { // runs when the clock component is removed
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ // each time set state is called the render() method is called
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
