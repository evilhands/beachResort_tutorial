import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Service extends Component {

    state = {
        service: [{
            icon: <FaCocktail />,
            title: "free cocktails",
            info: 'ffdd '
        },
        {
            icon: <FaHiking />,
            title: "free hiking",
            info: 'ffdd '
        },
        {
            icon: <FaShuttleVan />,
            title: "free Shuttle Van",
            info: 'ffdd '
        },
        {
            icon: <FaBeer />,
            title: "free Beer",
            info: 'ffdd '
        }]
    }

    render() {
        return (
            <section className="services" >
                <Title title="service" />
                <div className="services-center">
                    {this.state.service.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    };
}
