import React , {Component} from "react";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from "./Title";


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title: "Refreshing Cocktail's",
                info:'Few things go better with a Saturday spent hanging by the backyard than a refreshing cocktail, or a batch of ice-cold summer drinks.'
            },
            {
                icon:<FaHiking />,
                title: "Endless Hiking",
                info:'Experience the most adventerous and thrilling Hiking experience with us!'
            },
            {
                icon:<FaShuttleVan />,
                title: "Easy Shuttle",
                info:'Comfortable shuttels working directly from your hotel to your favourite place of attraction.'
            },
            {
                icon:<FaBeer />,
                title: "Luxury Bar",
                info:'Re-defining the defination of Luxury with our massive Bars'
            }
        ]
    }
    render() {
        return(
            <section className="services">
             <Title title="services" />
             <div className="services-center">
                {this.state.services.map((item,index)=>{
                   return (<article key={index} className="service">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                   </article>)
                 })} 
             </div>

            </section>

        );
    }
}
