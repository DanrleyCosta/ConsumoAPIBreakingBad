import React, { Component } from 'react'
import axios from 'axios'

const { API_KEY } = process.env
const API_URL = 'https://www.breakingbadapi.com/api/'

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${API_URL}characters?limit=${this.state.query}&offset=${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    render() {
        return ( <
            form >
            <
            input placeholder = "Pesquisar..."
            ref = { input => this.search = input }
            onChange = { this.handleInputChange }
            /> <
            p > { this.state.query } < /p> <
            /form>
        )
    }
}

export default Search