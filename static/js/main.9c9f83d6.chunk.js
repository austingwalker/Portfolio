(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports=[{id:1,image:"http://i68.tinypic.com/dvhr0n.png",name:"Volunteer Manager",description:"Database management system.",technologies:"React, Javascript,  Bootstrap, reactstrap,  JSX,  Node.js, Express, MongoDB, Mongoose",deployedUrl:"https://thawing-refuge-91413.herokuapp.com/",githubRepo:"https://github.com/austingwalker/Volunteer-Manager-MERN"},{id:2,image:"http://i64.tinypic.com/2irvw35.png",name:"Portfolio Page",description:"Custom built website.",technologies:"React, Javascript, JSX, Bootstrap, reactstrap, CSS",deployedUrl:"https://austingwalker.github.io/Portfolio/",githubRepo:"https://github.com/austingwalker/Portfolio"},{id:3,image:"http://i63.tinypic.com/10e31nn.png",name:"News Scrubber",description:"Scraping, storing, retrieving, and displaying data.",technologies:"React, Javascript, Bootstrap, reactstrap, JSX,  Node.js, Express, MongoDB, Mongoose",deployedUrl:"https://murmuring-ridge-90992.herokuapp.com/",githubRepo:"https://github.com/austingwalker/NewsArticle-Scrubber-MERN"},{id:4,image:"http://i64.tinypic.com/30rshh2.png",name:"House Manager",description:"Authentication app with administrator & client login capabilities.",technologies:"Javascript, jQuery, Node.js, SQL, Sequelize, Passport, Bcrypt",deployedUrl:"https://gentle-basin-74402.herokuapp.com/",githubRepo:"https://github.com/austingwalker/HouseHold-Manager-App"},{id:5,image:"http://i67.tinypic.com/2l9o4g1.png",name:"Loteria Memoria",description:"Card memory game.",technologies:"JavaScript & React",deployedUrl:"https://austingwalker.github.io/Click-Game-React/",githubRepo:"https://github.com/austingwalker/Click-Game-React"}]},27:function(e,a,t){e.exports=t(53)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(14),r=t.n(c),o=t(8),s=t(9),i=t(11),m=t(10),u=t(12),g=t(60),d=t(58),p=t(59),E=(t(32),function(e){return n.a.createElement("div",{className:"card portfolioDisplay"},n.a.createElement("img",{className:"card-img-top",src:e.image,alt:"App-Pic"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.name),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",null,n.a.createElement("b",null,"Description:")," ",e.description)),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",null,n.a.createElement("b",null,"Technologies Used:")," ",e.technologies)),n.a.createElement("p",null,n.a.createElement("small",null,n.a.createElement("u",null,n.a.createElement("a",{className:"card-text",href:e.deployedUrl,target:"_blank",rel:"noreferrer noopener"},"Visit Depolyed App Here")))),n.a.createElement("p",null,n.a.createElement("small",null,n.a.createElement("u",null,n.a.createElement("a",{className:"card-text",href:e.githubRepo,target:"_blank",rel:"noreferrer noopener"},"GitHub Repo"))))))}),h=(t(33),function(){return n.a.createElement("footer",{className:"footerBox"},n.a.createElement("span",null,n.a.createElement("i",{class:"fab fa-react fa-2x react"})))}),b=(t(34),t(24)),f=(t(35),t(5)),N=(t(36),t(54)),v=t(61),k=t(55),y=t(56),j=t(57),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N.a,{className:"bioButton",onClick:this.toggle},n.a.createElement("i",{className:"fas fa-book fa-3x"}),n.a.createElement("h5",null,"Bio")),n.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(k.a,{toggle:this.toggle},n.a.createElement("strong",null,"Bio")),n.a.createElement(y.a,null,n.a.createElement("div",{className:"bioBox"},n.a.createElement("p",{className:"bioP"},"Full Stack Web Developer able to build clean and fully functional websites and applications from the ground up. Skilled at blending systematic, methodical, and spatial thinking with creativity to produce desired results. Strong in a variety of work environments and pursues excellence in all aspects of a project."))),n.a.createElement(j.a,null,n.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Back to Home"))))}}]),a}(n.a.Component),w=(t(48),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"resumeBox"},n.a.createElement(N.a,{className:"resumeButton",href:"https://docs.google.com/document/u/1/d/e/2PACX-1vRr-TpJg1esEcOklHJpNb8r7BFp8RaCDwu2nvIio76rTRXrTgbZYpe3RX4qFl4DeEd8F8Jr6jwd9NUd/pub",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("i",{className:"far fa-file fa-3x"}),n.a.createElement("h5",null,"Resume")))}}]),a}(n.a.Component)),B=(t(49),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N.a,{className:"infoButton",onClick:this.toggle},n.a.createElement("i",{className:"far fa-address-card fa-3x"}),n.a.createElement("h5",null,"Contact Info")),n.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(k.a,{toggle:this.toggle},"Contact Info"),n.a.createElement(y.a,null,n.a.createElement("div",{className:"infoBox"},n.a.createElement("div",{className:"information"},n.a.createElement("h2",{className:"name"},n.a.createElement("strong",null,"Name:"),"\xa0\xa0\xa0Austin Walker"),n.a.createElement("h2",{className:"email"},n.a.createElement("strong",null,"Email:"),"\xa0\xa0agwalker249@gmail.com"),n.a.createElement("h2",{className:"phone"},n.a.createElement("strong",null,"Phone:"),"\xa0\xa0\xa0(512) 468-8416")))),n.a.createElement(j.a,null,n.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Back to Home"))))}}]),a}(n.a.Component)),x=(t(50),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N.a,{className:"skillsButton",onClick:this.toggle},n.a.createElement("i",{className:"fas fa-laptop fa-3x"}),n.a.createElement("h5",null,"Skills")),n.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(k.a,{toggle:this.toggle},n.a.createElement("strong",null,"Professional Skills")),n.a.createElement(y.a,null,n.a.createElement("div",{className:"titleAndSkills"},n.a.createElement("div",{className:"skillsBox"},n.a.createElement("p",{className:"listedSkills"},"HTML | CSS | Bootstrap | Javascript | jQuery | Node.js | Express | SQL | Sequelize | Handlebars |  MongoDB | Mongoose | Passport.js |  MVC | React | npm | yarn | Git | Github | Heroku | SEO | APIs - consuming | APIs - creating ")))),n.a.createElement(j.a,null,n.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Back to Home"))))}}]),a}(n.a.Component)),C=(t(51),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N.a,{className:"experienceButton",onClick:this.toggle},n.a.createElement("i",{className:"fas fa-city fa-3x"}),n.a.createElement("h5",null,"Experience")),n.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(k.a,{toggle:this.toggle},n.a.createElement("strong",null,"Experience")),n.a.createElement(y.a,null,n.a.createElement("div",{className:"experienceBox"},n.a.createElement("div",{className:"jobs"},n.a.createElement("p",{className:"student"},n.a.createElement("small",null,n.a.createElement("b",null,"Student"),n.a.createElement("li",null,"University of Texas Coding Bootcamp"))),n.a.createElement("p",{className:"stone"},n.a.createElement("small",null,n.a.createElement("b",null,"Ministry Associate"),n.a.createElement("li",null,"The Austin Stone Community Church"))),n.a.createElement("p",{className:"rbi"},n.a.createElement("small",null,n.a.createElement("b",null,"Community Development Associate"),n.a.createElement("li",null,"RBI Austin")," "))))),n.a.createElement(j.a,null,n.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Back to Home"))))}}]),a}(n.a.Component)),R=(t(52),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={modal:!1},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N.a,{className:"educationButton",onClick:this.toggle},n.a.createElement("i",{className:"fas fa-university fa-3x"}),n.a.createElement("h5",null,"Education")),n.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(k.a,{toggle:this.toggle},n.a.createElement("strong",null,"Education")),n.a.createElement(y.a,null,n.a.createElement("div",{className:"educationBox"},n.a.createElement("div",{className:"schools"},n.a.createElement("p",{className:"texas"},n.a.createElement("small",null,n.a.createElement("b",null,"University of Texas at Austin"),"  ",n.a.createElement("li",null,"Web Development Certificate"))),n.a.createElement("p",{className:"txstate"},n.a.createElement("small",null,n.a.createElement("b",null,"Texas State University"),"  ",n.a.createElement("li",null,"Bachelor of Science"),n.a.createElement("li",null," Major in Geography"),n.a.createElement("li",null," Minor in History")," ")),n.a.createElement("p",{className:"tt"},n.a.createElement("small",null,n.a.createElement("b",null,"Texas Tech University"),"  ",n.a.createElement("li",null,"Undergraduate work")))))),n.a.createElement(j.a,null,n.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Back to Home"))))}}]),a}(n.a.Component)),S=function(){return n.a.createElement("div",{className:"navContainer"},n.a.createElement(d.a,{className:"navContainer"},n.a.createElement(p.a,{md:"4",className:"profilePicColOutside"},n.a.createElement(p.a,{className:"profilePicColInside"},n.a.createElement("div",{className:"profilePic"},n.a.createElement("img",{className:"headshot",src:"http://i63.tinypic.com/2ef82aa.jpg",alt:"headshot"})))),n.a.createElement(p.a,{className:"colRows"},n.a.createElement(d.a,{className:"navRowOne "},n.a.createElement("nav",{className:"austinWBox"},n.a.createElement("div",{className:"nameBox"},n.a.createElement("h1",{className:"austinW"},"| Austin Walker |")))),n.a.createElement(d.a,{className:"navRowTwo"},n.a.createElement("nav",{className:"titleBox"},n.a.createElement("div",{className:"fswdBox",href:"/"},n.a.createElement("h1",{className:"title"},"Full Stack Web Developer")))),n.a.createElement(d.a,{className:"modalRow"},n.a.createElement("nav",{className:"modalNav"},n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(w,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(B,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(x,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(C,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(R,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement(O,null)),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement("a",{className:"logo",href:"https://github.com/austingwalker?tab=repositories",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("button",{type:"button",className:"btn github"},n.a.createElement("i",{className:"fab fa-github fa-3x"}),n.a.createElement("h5",{className:"logoTitle"},"GitHub")))),n.a.createElement("div",{className:"navbar-brand modalBtnRow"},n.a.createElement("a",{className:"logo",href:"https://www.linkedin.com/in/austin-walker-aa0aab129/",target:"_blank",rel:"noreferrer noopener"}," ",n.a.createElement("button",{type:"button",className:"btn linkedIn"},n.a.createElement("i",{className:"fab fa-linkedin fa-3x "}),n.a.createElement("h5",{className:"logoTitle"},"LinkedIn")))))))))},M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={portfolioItems:b},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement(g.a,{className:"containerBox",fluid:!0},n.a.createElement(d.a,{className:"portfolioRow"},this.state.portfolioItems.map(function(e){return n.a.createElement(p.a,{key:e.id,className:"noGuttersP"},n.a.createElement(E,{key:e.id,id:e.id,image:e.image,name:e.name,description:e.description,technologies:e.technologies,deployedUrl:e.deployedUrl,githubRepo:e.githubRepo}))})),n.a.createElement(d.a,null,n.a.createElement(p.a,{className:"noGutters",md:"12"},n.a.createElement(h,null)))))}}]),a}(l.Component),A=function(){return n.a.createElement(M,null)};r.a.render(n.a.createElement(A,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9c9f83d6.chunk.js.map