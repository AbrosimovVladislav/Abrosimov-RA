import React from "react";

export default function ProjectList({projects}) {
    return (
        <div className="container">
            {projects.map((project, idx) => <img alt={idx} key={idx} src={project.img}/>)}
        </div>
    )
}
