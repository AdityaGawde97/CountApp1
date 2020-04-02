import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { clickButton, decrement } from '../Redux/Action';

class Page1 extends Component {
    render() {
        return (
            <div>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.props.clickButton}
                >
                    Click {this.props.step}
                </Button>

                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.props.decrement}
                >
                    minus {this.props.step}
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        step: state.step,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clickButton: () => dispatch(clickButton()),
        decrement: () => dispatch(decrement())
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Page1);