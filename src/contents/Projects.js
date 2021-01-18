import React from 'react';
import {Card, Button, } from "react-bootstrap";
import "./Box.css"


const Projects =() =>{

    const cardInfo = [
        {image: "https://raw.githubusercontent.com/asoler000/Online-offline-budget-tracker/master/budgetapp.PNG", title: "Progressive Budget Tracker", text: "This application keeps track of your spend." ,link:"https://gentle-ravine-68167.herokuapp.com/"},
        {image: "https://raw.githubusercontent.com/asoler000/portfolio/master/assets/dist/images/goodsamaritan.gif", title: "The Good Samaritan", text: "A covid tracker where users input their info and if a user notifies the ap they are positive the app will push a notification to others users exposed." ,link:"https://the-good-samaritan-covid-track.herokuapp.com/"},
        {image: "https://raw.githubusercontent.com/asoler000/Eat-A-Burger/main/ezgif.com-gif-maker.gif", title: "Eat A Burger", text: "This is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)." ,link:"https://serene-mountain-18371.herokuapp.com"},
        {image: "https://raw.githubusercontent.com/asoler000/google-book-search/main/googlesearch.gif", title: "Google Books Search", text: "MERN project that uses google api to search and save books/" ,link:"https://eat-burger-000.herokuapp.com/"},
        {image: "https://raw.githubusercontent.com/asoler000/employee_directory/gh-pages/employee-dir-react.gif", title: "Employee Directory", text: "REACT directory to search for employees by name, age or gender using an api called Random User API." ,link:"https://asoler000.github.io/employee_directory/"},
        {image: "https://raw.githubusercontent.com/asoler000/workout-tracker/master/work-out-tracker.gif", title: "Workout Tracker", text: "An application that keeps track of your workouts." ,link:"https://asoler000.github.io/calender/"},
        {image: "https://asoler000.github.io/portfolio/assets/dist/images/hustle-data.PNG", title: "HustleData", text: "This application searches companies by ticker name and returns questions answered in a yes or no fashion while also showing you recent stories in the news. There is a crypto section as well. Three api's were used." ,link:"https://carolynmary.github.io/hustle-data/"},
        {image: "https://asoler000.github.io/portfolio/assets/dist/images/password-generator.png", title: "Password Generator", text: "The application generates a random password based on user-selected criteria." ,link:"https://asoler000.github.io/password-generator/"},
        {image: "https://asoler000.github.io/portfolio/assets/dist/images/calender.PNG", title: "Work Day Calender", text: "Calender that let's you store tasks and shows colors according to a time frame of past, present, future." ,link:"https://asoler000.github.io/calender/"},
        {image: "https://asoler000.github.io/portfolio/assets/dist/images/WEATHER-DASHBOARD.PNG", title: "Weather Dashboard", text: "A weather dashboard that runs in the browser and features dynamically updated HTML and CSS using an OpenWeather API." ,link:"https://asoler000.github.io/Weather-Dashboard/"},
    ];
    const renderCard =(card, index) =>{
        return(
<Card style={{ width: '18rem' }} key={index} className="box">
  <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.text}
    </Card.Text>
    <Button variant="primary">{card.link}</Button>
  </Card.Body>
</Card>
        );
    };
    return <div class="grid" > {cardInfo.map(renderCard)}
        
         </div>
};
export default Projects;