import React from 'react';

import { projects } from '../../constants/constants';
import './Projects.css'

const Projects = () => {

  return (
    <div className="projects__container-main">
      
      <div className="short__h1">
      <span className="decoration__span-above"></span>
        <h1 id="projects">Projects</h1>
      </div>
      <div className="projects__grid-container">

        {projects.map(({ title, description, image, tags, source, visit, id}, index) => (
            <div className="project__divs" key={id} index={id}>
                <img src={image} alt='projectIMG'/>
                <h2 className="title__content">{title}</h2>
                <span className="decoration__span"></span>
                <p className="project__info">{description}</p>
                    <div className="project__stack">
                        <div className="stack__p"><p>Stack</p></div>
                        <div className="tags__mapped">
                        {tags.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        </div>
                    </div>
                    <div className="external__links">
                      <a href={source}><button type="button">Code</button></a>
                     
                       
                      <a href={visit}><button type="button">Visit</button></a>
                     
                      
                    </div>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Projects