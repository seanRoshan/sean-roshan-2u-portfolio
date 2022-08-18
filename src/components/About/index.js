import { Card } from 'semantic-ui-react'

function About(){
    return(
        <Card 
        raised
        fluid
        header='About Me'
        color='yellow' 
        description="I'm a self-motivated and visionary software developer with over seven years of experience producing robust and scalable applications. I can analyze requirements and provide creative solutions to complex problems with my deep knowledge of system design and top-notch coding skills. In my previous role, I designed an application to automate the dentist's credentialing process for insurance companies, reducing processing time by 90%. Furthermore, on a team of five developers, I helped migrate a monolithic legacy Apache Wicket application to a modern Spring-Angular framework with micro-services architecture, opening new revenue opportunities for my employer. My most recent project was to create a web application from scratch for a venture capital company, potentially generating multi-million dollars annually.">
        </Card>
    )
}

export default About;