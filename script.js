var createNewElement = (tagName) =>{
    return document.createElement(tagName)
}

var setAttributes = (elementName,attributeNameValuePair) => {
   Object.keys(attributeNameValuePair).forEach((attributeName)=>{
       elementName.setAttribute(attributeName,attributeNameValuePair[attributeName])
   })
}

var parentElement =  createNewElement("div")
setAttributes(parentElement,{class: "wrapper"})

var topBarElement = createNewElement("div")
setAttributes(topBarElement,{class:"top-bar"})

var imageContainerElement = createNewElement("div")
setAttributes(imageContainerElement,{class:"img-container"})

var imageElement = createNewElement("img")
setAttributes(imageElement,{
    class: "image",
    src: "images/propic.png",
    alt: "profile picture"
})

var spanTopElement = createNewElement("span")
setAttributes(spanTopElement,{class:"block"})

var nameContainerElement = createNewElement("div")
setAttributes(nameContainerElement,{class:"name-container"})

var nameElement = createNewElement("p")
setAttributes(nameElement,{class:"name"})
nameElement.innerText = "BRIAN DUDEY"

var addressBarElement = createNewElement("p")
setAttributes(addressBarElement,{class:"address-bar"})
addressBarElement.innerText = `N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com`

var mainElement = createNewElement("div")
setAttributes(mainElement,{class:"main"})

var mainLeftElement = createNewElement("div")
setAttributes(mainLeftElement,{class:"main-left"})

var profileElement = createNewElement("div")
setAttributes(profileElement,{class:"profile"})

var profileIconElement = createNewElement("i")
setAttributes(profileIconElement,{
    class: "fa fa-user",
    style: "padding: 12px 16px;"
})

var profileTitleElement = createNewElement("p")
setAttributes(profileTitleElement,{class:"title"})
profileTitleElement.innerText = "Profile"

var profileContentElement = createNewElement("p")
setAttributes(profileContentElement,{
    style:"margin-top: 15px; text-align: justify;"
})
profileContentElement.innerText = `Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated and an alliteration advocate.`

var skillsElement = createNewElement("div")
setAttributes(skillsElement,{class:"skills"})

var skillsIconElement = createNewElement("i")
setAttributes(skillsIconElement,{class:"fa fa-flask"})

var skillsTitleElement = createNewElement("p")
setAttributes(skillsTitleElement,{class:"title"})
skillsTitleElement.innerText = "Skills"

var tSkillsSubTitleElement = createNewElement("p")
setAttributes(tSkillsSubTitleElement,{
    class:"sub-title",
    style:"text-align: center; margin-top: 0.5px; margin-bottom: 8px;"
})
tSkillsSubTitleElement.innerText = "Technical Skills"

var tSkillsTableElement = createNewElement("table")
var tSkillsTableRowElements = []
var tSkillsName = ["JavaScript","CSS","HTML","React","Redux","Mongo","Deployment"]
var tSkillsValue = ["75","75","65","65","75","75","100"]
var tSkillsTableData = {}
var tSkillsSliderElement = []
for(var i=0;i<7;i++){
    tSkillsTableRowElements.push(createNewElement("tr"))
    tSkillsTableData["R"+(i+1)] = []
    tSkillsTableData["R"+(i+1)].push(createNewElement("td"))
    tSkillsTableData["R"+(i+1)][0].innerText = tSkillsName[i]
    tSkillsTableData["R"+(i+1)].push(createNewElement("td"))
    tSkillsSliderElement.push(createNewElement("input"))
    setAttributes(tSkillsSliderElement[i],{
        type:"range",
        min:"1",
        max:"100",
        value:tSkillsValue[i],
        class:"slider"
    })
    tSkillsTableData["R"+(i+1)][1].append(tSkillsSliderElement[i])
    tSkillsTableRowElements[i].append(tSkillsTableData["R"+(i+1)][0],tSkillsTableData["R"+(i+1)][1])
}

var aSkillsSubTitleElement = createNewElement("p")
setAttributes(aSkillsSubTitleElement,{
    class:"sub-title",
    style:"text-align: center; margin-top: 0.5px; margin-bottom: 8px;"
})
aSkillsSubTitleElement.innerText = "Additional Skills"

var aSkillsTableElement = createNewElement("table")
setAttributes(aSkillsTableElement,{style:"margin-bottom: 20px;"})
var aSkillsTableRowElements = []
var aSkillsName = ["Project Management","Recruitment","Business Development","Editing","Fundraising"]
var aSkillsValue = ["100","75","100","75","100"]
var aSkillsTableData = {}
var aSkillsSliderElement = []
for(var i=0;i<5;i++){
    aSkillsTableRowElements.push(createNewElement("tr"))
    aSkillsTableData["R"+(i+1)] = []
    aSkillsTableData["R"+(i+1)].push(createNewElement("td"))
    aSkillsTableData["R"+(i+1)][0].innerText = aSkillsName[i]
    aSkillsTableData["R"+(i+1)].push(createNewElement("td"))
    aSkillsSliderElement.push(createNewElement("input"))
    setAttributes(aSkillsSliderElement[i],{
        type:"range",
        min:"1",
        max:"100",
        value:aSkillsValue[i],
        class:"slider"
    })
    aSkillsTableData["R"+(i+1)][1].append(aSkillsSliderElement[i])
    aSkillsTableRowElements[i].append(aSkillsTableData["R"+(i+1)][0],aSkillsTableData["R"+(i+1)][1])
}

var lWorkExpElement = createNewElement("div")
setAttributes(lWorkExpElement,{class:"work-exp"})

var lWorkExpIconElement = createNewElement("i")
setAttributes(lWorkExpIconElement,{class:"fa fa-briefcase"})

var lWorkExpTitleElement = createNewElement("p")
setAttributes(lWorkExpTitleElement,{class:"title"})
lWorkExpTitleElement.innerText = "Work Experience"

var lWorkExpSubTitleElement = createNewElement("p")
setAttributes(lWorkExpSubTitleElement,{
    class:"sub-title",
    style:"margin-top: 13px;"
})
lWorkExpSubTitleElement.innerText = "Event Manager"

var lWorkExpSpanElement1 = createNewElement("span")
setAttributes(lWorkExpSpanElement1,{style:"float: right;"})
lWorkExpSpanElement1.innerText = `03/2014-2017`

var lWorkExpBrElement = createNewElement("br")
setAttributes(lWorkExpBrElement,{style:"margin:0.5px;"})

var lWorkExpSpanElement2 = createNewElement("span")
lWorkExpSpanElement2.innerText = "C3 Presents, Washington DC"

var lWorkExpUListElement = createNewElement("ul")
var lWorkExpListItemElement1 = createNewElement("li")
lWorkExpListItemElement1.innerText = `Lead and execute all phases of event planning and production spanning committe recruitment, training, vendor relationships and on-site facilitation.`
var lWorkExpListItemElement2 = createNewElement("li")
lWorkExpListItemElement2.innerText = `Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.`
var lWorkExpListItemElement3 = createNewElement("li")
lWorkExpListItemElement3.innerText = `Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organization levels to advance cohesive operations.`

var mainRightElement = createNewElement("div")
setAttributes(mainRightElement,{class:"main-right"})

var rWorkExpElement = createNewElement("div")
setAttributes(rWorkExpElement,{class:"work-exp"})

var rWorkExpIconElement = createNewElement("i")
setAttributes(rWorkExpIconElement,{class:"fa fa-briefcase"})

var rWorkExpTitleElement = createNewElement("p")
setAttributes(rWorkExpTitleElement,{class:'title'})
rWorkExpTitleElement.innerText = "Work Experience" 

var rWorkExpSubTitleElement = createNewElement("p")
setAttributes(rWorkExpSubTitleElement,{
    class:"sub-title",
    style:"margin-top: 13px;"
})
rWorkExpSubTitleElement.innerText = "Community Relations Manager"

var rWorkExpSpanElement1 = createNewElement("span")
setAttributes(rWorkExpSpanElement1,{style:"float: right;"})
rWorkExpSpanElement1.innerText = `06/2011-01/2014`

var rWorkExpBrElement = createNewElement("br")
setAttributes(rWorkExpBrElement,{style:"margin:0.5px;"})

var rWorkExpSpanElement2 = createNewElement("span")
rWorkExpSpanElement2.innerText = "Gay & Lesbian Elder Housing, Los Angeles"

var rWorkExpUListElement = createNewElement("ul")
var rWorkExpListItems = [
    `Arranging presentations and pitch deck.`,
    `Designing a PR plan and establishing important focus points.`,
    `Designing, creating and managing content across multiple communication platforms.`,
    `Building relationships with key media players.`
]
var rWorkExpListItemElements = []
for(var i=0;i<4;i++){
    rWorkExpListItemElements.push(createNewElement('li'))
    rWorkExpListItemElements[i].innerText = rWorkExpListItems[i]
}

var educationElement = createNewElement("div")
setAttributes(educationElement,{class:"work-exp"})


var educationIconElement = createNewElement("i")
setAttributes(educationIconElement,{
    class:"fa fa-graduation-cap",
    style: "padding: 14px 10px;"
})

var educationTitleElement = createNewElement("p")
setAttributes(educationTitleElement,{class:"title"})
educationTitleElement.innerText = "Education"

var educationSubTitleElement1 = createNewElement("p")
setAttributes(educationSubTitleElement1,{
    class:"sub-title",
    style:"margin-top: 13px;"
})
educationSubTitleElement1.innerText = "Education Immersion Program"

var educationSpanElement1 = createNewElement("span")
setAttributes(educationSpanElement1,{style:"float: right;"})
educationSpanElement1.innerText = `11/2018-06/2018`

var educationBrElement1 = createNewElement("br")
setAttributes(educationBrElement1,{style:"margin:0.5px;"})

var educationSpanElement2 = createNewElement("span")
educationSpanElement2.innerText = `Thinkful, Chicago, IL`

var educationContentElement = createNewElement("p")
educationContentElement.innerText = `Project-focused intensive program with emphasis on mongo, Express, React, and JavaScript (MERN) technical stack.`

var educationUListElement = createNewElement("ul")
var educationListItems = [
    `Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.`,
    `Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data`,
    `Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.`
]
var educationListItemElements = []
for(var i=0;i<3;i++){
    educationListItemElements.push(createNewElement('li'))
    educationListItemElements[i].innerText = educationListItems[i]
}

var educationSubTitleElement2 = createNewElement("p")
setAttributes(educationSubTitleElement2,{class:"sub-title"})
educationSubTitleElement2.innerText = `BA, English`

var educationSpanElement3 = createNewElement("span")
setAttributes(educationSpanElement3,{style:"float: right;"})
educationSpanElement3.innerText = `09/2001-09/2005`

var educationBrElement2 = createNewElement("br")
setAttributes(educationBrElement2,{style:"margin:0.5px;"})

var educationSpanElement4 = createNewElement("span")
educationSpanElement4.innerText = `University of California, Los Angles`


document.body.append(parentElement)

parentElement.append(topBarElement,addressBarElement,mainElement)

topBarElement.append(imageContainerElement,spanTopElement,nameContainerElement)

imageContainerElement.append(imageElement)

nameContainerElement.append(nameElement)

mainElement.append(mainLeftElement,mainRightElement)

mainLeftElement.append(profileElement,skillsElement,lWorkExpElement)

profileElement.append(profileIconElement,profileTitleElement,profileContentElement)

skillsElement.append(skillsIconElement,skillsTitleElement,tSkillsSubTitleElement,tSkillsTableElement,aSkillsSubTitleElement,aSkillsTableElement)

tSkillsTableElement.append(...tSkillsTableRowElements)

aSkillsTableElement.append(...aSkillsTableRowElements)

lWorkExpElement.append(lWorkExpIconElement,lWorkExpTitleElement,lWorkExpSubTitleElement,lWorkExpUListElement)

lWorkExpSubTitleElement.append(lWorkExpSpanElement1,lWorkExpBrElement,lWorkExpSpanElement2)

lWorkExpUListElement.append(lWorkExpListItemElement1,lWorkExpListItemElement2,lWorkExpListItemElement3)

mainRightElement.append(rWorkExpElement,educationElement)

rWorkExpElement.append(rWorkExpIconElement,rWorkExpTitleElement,rWorkExpSubTitleElement,rWorkExpUListElement)

rWorkExpSubTitleElement.append(rWorkExpSpanElement1,rWorkExpBrElement,rWorkExpSpanElement2)

rWorkExpUListElement.append(...rWorkExpListItemElements)

educationElement.append(educationIconElement,educationTitleElement,educationSubTitleElement1,educationContentElement,educationUListElement,educationSubTitleElement2)

educationSubTitleElement1.append(educationSpanElement1,educationBrElement1,educationSpanElement2)

educationUListElement.append(...educationListItemElements)

educationSubTitleElement2.append(educationSpanElement3,educationBrElement2,educationSpanElement4)