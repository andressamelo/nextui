import Layout from '../components/layouts/layout'
import About from './about'

import React, {Component} from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Layout>
                <h1>I am Home Page</h1>
                <About {...this.props} {...this.state} />           
            </Layout>

        )
    }
}