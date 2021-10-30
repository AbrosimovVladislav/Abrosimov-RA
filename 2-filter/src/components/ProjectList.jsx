import React from "react";

export default function ProjectList({projects}) {

    return (
        <div>
            {projects.map((project, idx) => <img key={idx} src={project.img}/>)}
        </div>
    )
}
