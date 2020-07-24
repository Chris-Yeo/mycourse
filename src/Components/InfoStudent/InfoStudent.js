import React from 'react';
import './InfoStudent.css';


const Info = ({name, job, description}) => {
    return (
        <>
            <div className="student">
                <h1>{name}</h1>
                <h3>{job}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Info;