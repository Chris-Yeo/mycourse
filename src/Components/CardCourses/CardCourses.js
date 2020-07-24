import React from 'react';
import Avatar from '../Avatar/Avatar.js'
import './cardcourses.css';

const Courses = ({courses}) => {

    const authorImages = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        objectFit: 'contain',
    }

    return (
        <div className="cards">
            {
                courses.map((element) => (
                    <div className="linkbox">
                   
                    <div className="info">
                        <div className="nihnih">
                            <div className="link">
                                {element.link}
                            </div>
                            <div className="description">
                                <h5>{element.title}</h5>
                                <p>{element.vidDescription}</p>
                            </div>
                        </div>
                        <div className="smallAvatar">
                            <Avatar image={element.smallAvatar} styles={authorImages}/>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Courses;