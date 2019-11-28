import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import FeaturedRooms from '../components/FeaturedRooms'

export class Home extends Component {
    render() {
        return (
            <>
                <Hero >
                    <Banner title="luxurious rooms" subtitle="deluxe romm starting at $299" >
                        <Link to="/rooms" className="btn-primary">
                            our rooms
                    </Link>
                    </Banner>
                </Hero>
                <Service />
                <FeaturedRooms/>
            </>
        )
    }
}

export default Home
