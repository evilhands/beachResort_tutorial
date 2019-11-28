import React, { Component } from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import RoomContainer from '../components/RoomContainer'

export class Room extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero" >
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
            </>
        )
    }
}

export default Room
