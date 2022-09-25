import React from "react"

export default function Card(props) {
    let badgeText //conditional rendering
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="card--image" />
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
        /*  <div className="card">
             <img src={require("../images/katie-zaferes.png")} className="card--image" />
             <div className="card--stats">
                 <img src={require("../images/star.png")} className="card--star" />
                 <span>5.0</span>
                 <span className="gray">(6) • </span>
                 <span className="gray">USA</span>
             </div>
             <p>Life Lessons with Katie Zaferes</p>
             <p><span className="bold">From $136</span> / person</p>
         </div> */
    )
}