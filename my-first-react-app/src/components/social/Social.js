import React, { Component } from 'react'
import './Social.css'
import fbLogo from '../../assets/icons/facebook-logo.png'
import isLogo from '../../assets/icons/instagram-logo.png'
import twLogo from '../../assets/icons/twitter-logo.png'


class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul>
                    <li>
                        <a  target="_blanc" href="https://web.facebook.com/GDGAlgiers/">
                        <img src={fbLogo} alt=""/>

                        </a>
                    </li>
                    <li>
                        <a target="_blanc" href="https://instagram.com/gdg_algiers">
                            <img src={isLogo} alt=""/>

                        </a>
                        </li>
                    <li>
                        <a target="_blanc" href="https://twitter.com/gdg_algiers">
                        <img src={twLogo} alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Social