import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import './style.css';

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                item={item}
                // key={item.id}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
    })
    return (
        // <h1>App components</h1> 
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}




