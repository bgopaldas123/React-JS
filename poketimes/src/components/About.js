import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque delectus maxime sapiente libero magni provident quaerat nihil doloribus totam dicta!</p>
        </div>
    )
}

export default Rainbow(About);