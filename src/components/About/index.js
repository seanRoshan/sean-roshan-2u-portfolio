import { Card, Image, Container } from 'semantic-ui-react'
import profile_photo from "../../assets/profile_photo.jpg";

function About() {
    return (
        <Card
            raised
            fluid
            color='yellow'>
            <Card.Header><h1 className='aboutme-header'>Sean Roshan</h1></Card.Header>
            <Card.Description>
                <div className='aboutme-description'>
                    <Image size='small' src={profile_photo} floated='left' />
                    <Container textAlign='justified'>
                        <p >
                            I'm a self-motivated and visionary software developer with over seven years of experience producing robust and scalable applications. I can analyze requirements and provide creative solutions to complex problems with my deep knowledge of system design and top-notch coding skills. In my previous role, I designed an application to automate the dentist's credentialing process for insurance companies, reducing processing time by 90%. Furthermore, on a team of five developers, I helped migrate a monolithic legacy Apache Wicket application to a modern Spring-Angular framework with micro-services architecture, opening new revenue opportunities for my employer. My most recent project was to create a web application from scratch for a venture capital company, potentially generating multi-million dollars annually.
                        </p>
                    </Container>
                </div>
            </Card.Description>
        </Card>
    )
}

export default About;