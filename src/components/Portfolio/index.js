import { useState } from "react";
import Project from "../Project";
import flashcardsScreenShot from '../../assets/flashcards.jpeg';
import wouldYourRather from '../../assets/would-you-rather.jpeg'
import myReads from '../../assets/myreads.jpeg';
import chirper from '../../assets/chirper.jpeg';
import superduperdrive from '../../assets/superduperdrive.jpeg';
import photoPort from '../../assets/photo-port.jpeg'

function Portfolio(){

    const [projects] = useState([
        {
            name: 'flashcards',
            title: 'Flash Cards',
            technologies: 'React-Native',
            description: `Flashcards is a mobile application for Android, iOS, and web that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks," add flashcards to those decks, then take quizzes on those decks.`,
            githubLink: 'https://github.com/seanRoshan/flashcards',
            deployLink: 'https://seanroshan.github.io/flashcards/',
            screenShot: flashcardsScreenShot
        },
        {
            name: 'would-you-rather',
            title: "Would you rather?",
            technologies: 'React',
            description: `The "Would You Rather?" Project, is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.
In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.`,
            githubLink: 'https://github.com/seanRoshan/would-you-rather',
            deployLink: 'https://seanroshan.github.io/would-you-rather',
            screenShot: wouldYourRather
        },
        {
            name: 'myreads',
            title: "MyReads",
            technologies: 'React',
            description: `The MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.`,
            githubLink: 'https://github.com/seanRoshan/myreads',
            deployLink: 'https://seanroshan.github.io/myreads',
            screenShot: myReads
        },
        {
            name: 'chirper',
            title: "Chirper",
            technologies: 'React',
            description: `Chirper application is a mini twitter application that would allow users to write tweets, reply to tweets, and like different tweets.`,
            githubLink: 'https://github.com/seanRoshan/chirper',
            deployLink: 'https://seanroshan.github.io/chirper/',
            screenShot: chirper
        },
        {
            name: 'superduperdrive',
            title: "Super Duper Drive Cloud Storage",
            technologies: 'Spring Boot',
            description: `SuperDuperDrive, is a brand-new company aiming to make a dent in the Cloud Storage market and is already facing stiff competition from rivals like Google Drive and Dropbox. That hasn't dampened their spirits at all, however. They want to include personal information management features in their application to differentiate them from the competition, and the minimum viable product includes three user-facing features.`,
            githubLink: 'https://github.com/seanRoshan/SuperDuperDriveCloudStorage',
            deployLink: 'https://superduperdrivecloudstorage.herokuapp.com',
            screenShot: superduperdrive
        },
        {
            name: 'photo-port',
            title: "Oh Snap!",
            description: `This website is designed to help Lyza, a family friend and budding photographer who needs a no-frills site to display photos. It's a single page application called Oh Snap! that uses React state, props, Hooks and reusable UI components to provide a simple yet sleek platform for showing off those photography skills.`,
            githubLink: 'https://github.com/seanRoshan/photo-port',
            deployLink: 'https://seanroshan.github.io/photo-port/',
            screenShot: photoPort
        }
    ]);

    return(
        projects.map((project)=>(<Project project={project} key={project.name}></Project>))
    )


}

export default Portfolio;