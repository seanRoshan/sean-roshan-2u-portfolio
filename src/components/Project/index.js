import React from "react";

import { Card, Icon, Container, Image } from 'semantic-ui-react';



function Project(props) {
    const { project } = props;
    const { title, technologies, description, githubLink, deployLink, screenShot } = project;


    return (
        <div className="project-container">
            <Card color="yellow" raised fluid>
                <Image src={screenShot}></Image>
                <Card.Header><h1 className='aboutme-header'>{title}</h1></Card.Header>
                <Card.Meta><h6 className="aboutme-technologies">{technologies}</h6></Card.Meta>
                <Card.Description className='aboutme-description'>
                    <Container textAlign='justified'>
                        <p >
                            {description}
                        </p>
                    </Container>
                </Card.Description>
                <Card.Content extra>
                    <div className="icon-container">
                        <a href={githubLink} target="_blank"><Icon link size="large" className="icon-clickable" inverted color="black" name='github' /></a>
                        <a href={deployLink} target="_blank"><Icon link size="large" className="icon-clickable" inverted color="black" name='play' /></a>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )


}

export default Project;