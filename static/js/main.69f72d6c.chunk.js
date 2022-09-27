(this["webpackJsonpsean-roshan-2u-portfolio"]=this["webpackJsonpsean-roshan-2u-portfolio"]||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(50),s=a.n(o),r=(a(140),a(141),a(142),a(27)),c=a(168),l=a(123),h=a.p+"static/media/logo.103b5fa1.svg",d=a(4);var p=function(e){var t=e.navItems,a=e.currentNavItem,n=e.setCurrentNavItem;return Object(d.jsxs)(c.a,{size:"large",secondary:!0,className:"application-navbar",children:[Object(d.jsx)(c.a.Item,{children:Object(d.jsx)(l.a,{src:h,size:"tiny",alt:"Sean Roshan",className:"spin"})}),Object(d.jsx)(c.a.Item,{header:!0,children:"Sean Roshan"}),t.map((function(e){return Object(d.jsx)(c.a.Item,{name:e.name,active:a.name===e.name,onClick:function(){n(e)},children:e.title},e.name)}))]})},j=a(176),u=a(122),b=a(55);var m=function(){var e=(new Date).getFullYear();return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(u.a,{floated:"left",width:8,children:Object(d.jsxs)("div",{className:"icon-container",children:[Object(d.jsx)("a",{href:"https://github.com/seanRoshan",target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable footer",inverted:!0,color:"white",name:"github"})}),Object(d.jsx)("a",{href:"https://linkedin.com/in/seanroshan",target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable footer",inverted:!0,color:"white",name:"linkedin"})}),Object(d.jsx)("a",{href:"https://stackoverflow.com/users/19791206/sean-roshan",target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable footer",inverted:!0,color:"white",name:"stack overflow"})}),Object(d.jsx)("a",{href:"https://twitter.com/seanRoshandev",target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable footer",inverted:!0,color:"white",name:"twitter"})})]})}),Object(d.jsx)(u.a,{floated:"right",textAlign:"right",width:8,children:Object(d.jsxs)("span",{className:"copy-right",children:["Copyright \xa9 ",e," All Rights Reserved by",Object(d.jsx)("a",{href:"https://www.seanroshan.com",rel:"noopener noreferrer",target:"_blank",className:"copy-right-link",children:"Sean Roshan"})]})})]})},g=a(171),f=a(164),O=a.p+"static/media/profile_photo.ff18fe97.jpg";var v=function(){return Object(d.jsxs)(g.a,{raised:!0,fluid:!0,color:"yellow",children:[Object(d.jsx)(g.a.Header,{children:Object(d.jsx)("h1",{className:"aboutme-header",children:"Sean Roshan"})}),Object(d.jsx)(g.a.Description,{children:Object(d.jsxs)("div",{className:"aboutme-description",children:[Object(d.jsx)(l.a,{size:"small",src:O,floated:"left"}),Object(d.jsx)(f.a,{textAlign:"justified",children:Object(d.jsx)("p",{children:"I'm a self-motivated and visionary software developer with over seven years of experience producing robust and scalable applications. I can analyze requirements and provide creative solutions to complex problems with my deep knowledge of system design and top-notch coding skills. In my previous role, I designed an application to automate the dentist's credentialing process for insurance companies, reducing processing time by 90%. Furthermore, on a team of five developers, I helped migrate a monolithic legacy Apache Wicket application to a modern Spring-Angular framework with micro-services architecture, opening new revenue opportunities for my employer. My most recent project was to create a web application from scratch for a venture capital company, potentially generating multi-million dollars annually."})})]})})]})},x=a(101),y=a(113),k=a(167),w=a(165),S=a(166),C=a(172);var R=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],i=t[1],o=a.name,s=a.email,c=a.message,l=Object(n.useState)(""),h=Object(r.a)(l,2),p=h[0],j=h[1],u=Object(n.useState)(!1),b=Object(r.a)(u,2),m=b[0],g=b[1];function f(e,t){var n=t.name,o=t.value;e.preventDefault(),i(Object(y.a)(Object(y.a)({},a),{},Object(x.a)({},n,o)))}function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."))}return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Contact Me"}),Object(d.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),o&&s&&c?p||g(!0):j("Please make sure all fields have valid data!")},children:[Object(d.jsx)(k.a.Field,{id:"form-name",name:"name",control:w.a,label:"Name",placeholder:"Name",value:o,onChange:f,onBlur:O}),Object(d.jsx)(k.a.Field,{id:"form-email",control:w.a,name:"email",label:"Email",placeholder:"Email",value:s,onChange:f,onBlur:O}),Object(d.jsx)(k.a.Field,{id:"form-message",name:"message",control:S.a,label:"Message",placeholder:"Message",value:c,onChange:f,onBlur:O}),Object(d.jsx)(k.a.Button,{content:"Submit"})]}),m&&Object(d.jsx)(C.a,{success:!0,header:"Message Sent!",content:JSON.stringify(a)}),p&&Object(d.jsx)(C.a,{error:!0,content:p})]})};var N=function(e){var t=e.project,a=t.title,n=t.technologies,i=t.description,o=t.githubLink,s=t.deployLink,r=t.screenShot;return Object(d.jsx)("div",{className:"project-container",children:Object(d.jsxs)(g.a,{color:"yellow",raised:!0,fluid:!0,children:[Object(d.jsx)(l.a,{src:r}),Object(d.jsx)(g.a.Header,{children:Object(d.jsx)("h1",{className:"aboutme-header",children:a})}),Object(d.jsx)(g.a.Meta,{children:Object(d.jsx)("h6",{className:"aboutme-technologies",children:n})}),Object(d.jsx)(g.a.Description,{className:"aboutme-description",children:Object(d.jsx)(f.a,{textAlign:"justified",children:Object(d.jsx)("p",{children:i})})}),Object(d.jsx)(g.a.Content,{extra:!0,children:Object(d.jsxs)("div",{className:"icon-container",children:[Object(d.jsx)("a",{href:o,target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable",inverted:!0,color:"black",name:"github"})}),Object(d.jsx)("a",{href:s,target:"_blank",children:Object(d.jsx)(b.a,{link:!0,size:"large",className:"icon-clickable",inverted:!0,color:"black",name:"play"})})]})})]})})},L=a.p+"static/media/flashcards.fd0e314f.jpeg",I=a.p+"static/media/would-you-rather.bdab1251.jpeg",D=a.p+"static/media/myreads.60f2aea1.jpeg",A=a.p+"static/media/chirper.8a34450b.jpeg",M=a.p+"static/media/superduperdrive.34b01cbf.jpeg",z=a.p+"static/media/photo-port.ff89631a.jpeg",F=a.p+"static/media/google-search-engine.1f3adc2a.jpeg";var T=function(){var e=Object(n.useState)([{name:"flashcards",title:"Flash Cards",technologies:"React-Native",description:'Flashcards is a mobile application for Android, iOS, and web that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks," add flashcards to those decks, then take quizzes on those decks.',githubLink:"https://github.com/seanRoshan/flashcards",deployLink:"https://seanroshan.github.io/flashcards/",screenShot:L},{name:"would-you-rather",title:"Would you rather?",technologies:"React",description:'The "Would You Rather?" Project, is a web app that lets a user play the \u201cWould You Rather?\u201d game. The game goes like this: A user is asked a question in the form: \u201cWould you rather [option A] or [option B] ?\u201d. Answering "neither" or "both" is against the rules.\nIn your app, users will be able to answer questions, see which questions they haven\u2019t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.',githubLink:"https://github.com/seanRoshan/would-you-rather",deployLink:"https://seanroshan.github.io/would-you-rather",screenShot:I},{name:"myreads",title:"MyReads",technologies:"React",description:"The MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.",githubLink:"https://github.com/seanRoshan/myreads",deployLink:"https://seanroshan.github.io/myreads",screenShot:D},{name:"chirper",title:"Chirper",technologies:"React",description:"Chirper application is a mini twitter application that would allow users to write tweets, reply to tweets, and like different tweets.",githubLink:"https://github.com/seanRoshan/chirper",deployLink:"https://seanroshan.github.io/chirper/",screenShot:A},{name:"superduperdrive",title:"Super Duper Drive Cloud Storage",technologies:"Spring Boot",description:"SuperDuperDrive, is a brand-new company aiming to make a dent in the Cloud Storage market and is already facing stiff competition from rivals like Google Drive and Dropbox. That hasn't dampened their spirits at all, however. They want to include personal information management features in their application to differentiate them from the competition, and the minimum viable product includes three user-facing features.",githubLink:"https://github.com/seanRoshan/SuperDuperDriveCloudStorage",deployLink:"https://superduperdrivecloudstorage.herokuapp.com",screenShot:M},{name:"photo-port",title:"Oh Snap!",description:"This website is designed to help Lyza, a family friend and budding photographer who needs a no-frills site to display photos. It's a single page application called Oh Snap! that uses React state, props, Hooks and reusable UI components to provide a simple yet sleek platform for showing off those photography skills.",githubLink:"https://github.com/seanRoshan/photo-port",deployLink:"https://seanroshan.github.io/photo-port/",screenShot:z},{name:"book-search-engine",title:"Book Search Engine",description:"The Book search engine is an application that is employing MERN (MongoDB, Express, React, Node) Stack and GraphQL. It allows users to Signup, login, logout, search books via Google Book Search API and save their favorite books. They can also see the list of their favorite books and can delete any of the books from the list if they do not like them anymore.",githubLink:"https://github.com/seanRoshan/book-search-engine",deployLink:"https://infinite-bastion-30683.herokuapp.com/",screenShot:F}]);return Object(r.a)(e,1)[0].map((function(e){return Object(d.jsx)(N,{project:e},e.name)}))},E=a(173),B=a(174),H=a(151),_=a(169),J=a(170),P=a(175),q=a.p+"static/media/Resume.b67efdef.pdf";var U=function(){var e=Object(n.useState)({employmentHistory:[{date:"Aug 2022 - Current",title:"Instructor",location:"2U - University of Toronto"},{date:"Jul 2022 - Current",title:"Founder and CEO",location:"LucidCo Inc."},{date:"Apr 2021 - Current",title:"Founder and CEO",location:"LucidCo LLC."},{date:"Jan 2021 - Current",title:"Lead Software Developer",location:"Companyon Ventures"},{date:"Jul 2019 - Current",title:"Software Developer",location:"DentalXChange"},{date:"Oct 2018 to Jul 2019",title:"Software Developer",location:"Freightgate"},{date:"Sep 2018 to May 2019",title:"Instructor",location:"Trilogy Education"},{date:"Oct 2015 to Feb 2018",title:"Software Engineer",location:"University of California"}],education_history:[{date:"Sep 2015 - Mar 2018",title:"MSc. in Computer Science",location:"University of Caliofornia, Riverside"},{date:"Sep 2012 - Feb 2015",title:"BSc. in Computer Engineering",location:"Sharif University of Technology"}],skills:[{title:"Angular",level:5},{title:"React",level:4},{title:"Java",level:5},{title:"Node.js",level:4},{title:"Spring",level:4},{title:"MongoDB",level:4},{title:"MySQL",level:5},{title:"Javascript",level:5},{title:"TypeScript",level:5},{title:"HTML",level:5},{title:"CSS",level:4},{title:"Python",level:3},{title:"C++",level:3}]}),t=Object(r.a)(e,1)[0];return console.log(t.employmentHistory),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(E.a,{placeholder:!0,children:[Object(d.jsxs)(B.a,{icon:!0,children:[Object(d.jsx)(b.a,{name:"pdf file outline"}),"You can download Sean Roshan's resume from the link below!"]}),Object(d.jsx)("a",{href:q,children:Object(d.jsx)(H.a,{primary:!0,children:"Download Resume"})})]}),Object(d.jsxs)(g.a,{raised:!0,fluid:!0,children:[Object(d.jsx)(g.a.Content,{children:Object(d.jsx)(g.a.Header,{children:"Employment History"})}),Object(d.jsx)(g.a.Content,{children:Object(d.jsx)(_.a,{children:t.employmentHistory.map((function(e){return Object(d.jsx)(_.a.Event,{children:Object(d.jsxs)(_.a.Content,{children:[Object(d.jsx)(_.a.Date,{content:e.date}),Object(d.jsxs)(_.a.Summary,{children:[Object(d.jsx)("a",{children:e.title})," at ",Object(d.jsx)("a",{children:e.location})]})]})},e.title)}))})})]}),Object(d.jsxs)(g.a,{raised:!0,fluid:!0,children:[Object(d.jsx)(g.a.Content,{children:Object(d.jsx)(g.a.Header,{children:"Education History"})}),Object(d.jsx)(g.a.Content,{children:Object(d.jsx)(_.a,{children:t.education_history.map((function(e){return Object(d.jsx)(_.a.Event,{children:Object(d.jsxs)(_.a.Content,{children:[Object(d.jsx)(_.a.Date,{content:e.date}),Object(d.jsxs)(_.a.Summary,{children:[Object(d.jsx)("a",{children:e.title})," at ",Object(d.jsx)("a",{children:e.location})]})]})},e.title)}))})})]}),Object(d.jsxs)(g.a,{raised:!0,fluid:!0,children:[Object(d.jsx)(g.a.Content,{children:Object(d.jsx)(g.a.Header,{children:"Skills"})}),Object(d.jsx)(g.a.Content,{children:t.skills.map((function(e){return Object(d.jsx)(J.a.Group,{children:Object(d.jsx)(J.a,{children:Object(d.jsx)(J.a.Content,{verticalAlign:"left",children:Object(d.jsx)(J.a.Header,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)(P.a,{icon:"star",defaultRating:e.level,maxRating:e.level})," ",e.title]})})})})})}))})]})]})};var W=function(){var e=Object(n.useState)([{name:"aboutme",title:"About Me"},{name:"portfolio",title:"Portfolio"},{name:"contact",title:"Contact"},{name:"resume",title:"Resume"}]),t=Object(r.a)(e,1)[0],a=Object(n.useState)(t[0]),i=Object(r.a)(a,2),o=i[0],s=i[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("header",{children:[Object(d.jsx)("title",{children:"Sean Roshan"}),Object(d.jsx)(p,{navItems:t,setCurrentNavItem:s,currentNavItem:o})]})}),Object(d.jsx)("section",{children:Object(d.jsxs)(E.a,{basic:!0,className:"app-content-container",children:["aboutme"===o.name&&Object(d.jsx)(v,{}),"contact"===o.name&&Object(d.jsx)(R,{}),"portfolio"===o.name&&Object(d.jsx)(T,{}),"resume"===o.name&&Object(d.jsx)(U,{})]})}),Object(d.jsx)("div",{className:"app-footer-container",children:Object(d.jsx)(m,{})})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),Y()}},[[150,1,2]]]);
//# sourceMappingURL=main.69f72d6c.chunk.js.map