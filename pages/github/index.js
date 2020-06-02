import React, {Component} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/layouts/layout'

export default class Github extends Component {
    static async getInitialProps(){
        const res = await fetch ('https://api.github.com/users/andressamelo/repos')

        const data = await res.json()
        return {repos:data}
    }
    render() {
        return(
            <Layout>
                <ul>
                    {
                        this.props.repos.map(repo => (
                            <Link href={`/github/andressamelo/${repo.name}`}>
                                <a><li>{repo.name}</li></a>
                            </Link>
                        ))
                    }
                    
                </ul>
            </Layout>
        )
    }
}