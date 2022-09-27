import React,{useState} from "react";

import { Header, Segment, Icon, Button, Card, Feed, Item, Rating } from 'semantic-ui-react';

import resume_pdf from '../../assets/Resume.pdf';


function Resume() {


    const [resume_data] = useState({
        employmentHistory: [
            {
                date: 'Aug 2022 - Current',
                title: 'Instructor',
                location: '2U - University of Toronto'
            },
            {
                date: 'Jul 2022 - Current',
                title: 'Founder and CEO',
                location: 'LucidCo Inc.'
            },
            {
                date: 'Apr 2021 - Current',
                title: 'Founder and CEO',
                location: 'LucidCo LLC.'
            },
            {
                date: 'Jan 2021 - Current',
                title: 'Lead Software Developer',
                location: 'Companyon Ventures'
            },
            {
                date: 'Jul 2019 - Current',
                title: 'Software Developer',
                location: 'DentalXChange'
            },
            {
                date: 'Oct 2018 to Jul 2019',
                title: 'Software Developer',
                location: 'Freightgate'
            },
            {
                date: 'Sep 2018 to May 2019',
                title: 'Instructor',
                location: 'Trilogy Education'
            },
            {
                date: 'Oct 2015 to Feb 2018',
                title: 'Software Engineer',
                location: 'University of California'
            }
        ],
        education_history: [
            {
                date: 'Sep 2015 - Mar 2018',
                title: 'MSc. in Computer Science',
                location:'University of Caliofornia, Riverside'
            },
            {
                date: 'Sep 2012 - Feb 2015',
                title: 'BSc. in Computer Engineering',
                location:'Sharif University of Technology'
            }
        ],
        skills: [
            {
                title: 'Angular',
                level: 5
            },
            {
                title: 'React',
                level: 4
            },
            {
                title: 'Java',
                level: 5
            },
            {
                title: 'Node.js',
                level: 4
            },
            {
                title: 'Spring',
                level: 4
            },
            {
                title: 'MongoDB',
                level: 4
            },
            {
                title: 'MySQL',
                level: 5
            },
            {
                title: 'Javascript',
                level: 5
            },
            {
                title: 'TypeScript',
                level: 5
            },
            {
                title: 'HTML',
                level: 5
            },
            {
                title: 'CSS',
                level: 4
            },
            {
                title: 'Python',
                level: 3
            },
            {
                title: 'C++',
                level: 3
            },
            
        ]
    });

    console.log(resume_data.employmentHistory);


    return (
        <>
            <Segment placeholder>
                <Header icon>
                    <Icon name='pdf file outline' />
                    You can download Sean Roshan's resume from the link below!
                </Header>
                <a href={resume_pdf}><Button primary>Download Resume</Button></a>
            </Segment>

            <Card raised fluid>
                <Card.Content>
                    <Card.Header>Employment History</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        {resume_data.employmentHistory.map((employment)=>(
                            <Feed.Event key={employment.title}>
                            <Feed.Content>
                                <Feed.Date content={employment.date} />
                                <Feed.Summary>
                                    <a>{employment.title}</a> at <a>{employment.location}</a>
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                        ))}
                    </Feed>
                </Card.Content>
            </Card>

            <Card raised fluid>
                <Card.Content>
                    <Card.Header>Education History</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        {resume_data.education_history.map((education)=>(
                            <Feed.Event key={education.title}>
                            <Feed.Content>
                                <Feed.Date content={education.date} />
                                <Feed.Summary>
                                    <a>{education.title}</a> at <a>{education.location}</a>
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                        ))}
                    </Feed>
                </Card.Content>
            </Card>

            <Card raised fluid>
                <Card.Content>
                    <Card.Header>Skills</Card.Header>
                </Card.Content>
                <Card.Content>
                    {resume_data.skills.map((skill)=>(
                        <Item.Group>
                        <Item>
                            <Item.Content verticalAlign='left'>
                                <Item.Header>
                                <p><Rating icon='star' defaultRating={skill.level} maxRating={skill.level}/> {skill.title}</p>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    ))}
                    
                </Card.Content>
            </Card>

        </>


    )
}

export default Resume;