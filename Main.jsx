import React, { Component } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'

export default class Main extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                marginTop: 100,
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Page1/>
                <Page2/>
            </div>
        )
    }
}
