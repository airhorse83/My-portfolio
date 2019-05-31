import React, { Component } from 'react';
import { portfolioObj } from './projectTiles';


export default class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {portfolioObj};
    }
    render() {
      return (
        <div className='projects-grid'>
            {portfolioObj.map((project, index) => {
                return (
                    <a className={`project ${project.classname}`} href={project.url} target='_blank' key={index} onClick={() => visited(project.title)}>

                        <div className='description'>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <h3 href={project.url} target='_blank'>Click to visit!</h3>
                        </div>
                    </a>
                )
            })}
        </div>
      )
    }
}    