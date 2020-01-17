import React from 'react'
import './Header.css'
import Social from '../social/Social'


const Header = props => (
    <header className="header">
    <h1>{props.title}</h1>
    <Social/>
    </header>
)
export default Header

/*
class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <Social/>
            </header>
        )
    }
}

export default Header*/