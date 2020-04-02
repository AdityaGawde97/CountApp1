import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        step: state.step
    };
}

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Click <span style={{color: 'green'}}>{this.props.step}</span> times</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Page2);