import React from 'react';
import './App.css';
import avatar from './images/thor.jpg'
import Avatar from './Components/Avatar/Avatar'
import ReactPlayer from "react-player"
import Info from './Components/InfoStudent/InfoStudent'
import Courses from './Components/CardCourses/CardCourses'
import smallAvatar from './images/cat.jpg'

function App() {
  let card = {
      photo: avatar,
      name: 'David Winalda',
      job: 'Bootcamp Student',
      description: 'What a day! What a wonderful day!'
  };

  console.log(card.photo)
  let card2 = [
      {
      link: <ReactPlayer width={100} height={80}
      url="https://youtu.be/s2uE3v5pbD0">
      </ReactPlayer>,
      title: 'TV News Bloopers Fails',
      vidDescription: 'A collection of the best TV news bloopers fails.',
      smallAvatar: smallAvatar
    },
      {
        link: <ReactPlayer width={100} height={80}
        url="https://youtu.be/NSUjXhWuGSc">
        </ReactPlayer>,
        title: 'Try Not To Laugh Challenge',
        vidDescription: 'No one was seriously injured in the making of this video.',
        smallAvatar: smallAvatar
      },
      
  ];
  

  return (
    <div className="wrapper">
      <div className="studentInfo">
        <Avatar image={card.photo}/>
        <Info name={card.name} job={card.job} description={card.description}/>
      </div>
      <h2>MY COURSES</h2>
      <Courses courses={card2}/>
    </div>
  );
};

export default App;
