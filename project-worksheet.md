# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 (Mon., Jan. 24)| Project Description | Incomplete
|Day 1 (Mon., Jan. 24)| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 2 (Tues., Jan. 25)| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 3 (Wed., Jan. 26)| MVP & Bug Fixes | Incomplete
|Day 4 (Thurs., Jan. 27)| Final Touches | Incomplete
|Day 5 (Fri., Jan. 28)| Present | Incomplete

## Project Research

Link To Site  | Things I Like and Might Want to Incorporate | 
| ------------- | ------------- |
| [http://www.denisechandler.com/](http://www.denisechandler.com/)| "send me an email" link is a mailto with the subject pre-populated
| [http://mattfarley.ca/](http://mattfarley.ca/) |  simple color scheme, minimal images, skills/languages listed are in text format, conversational tone ("say hello," "start a conversation"), social media buttons are at the bottom, hover over project transitions to opaque image with lext and link
| [https://www.lianapenn.com/](https://www.lianapenn.com/) | abstract image as full width header, translucent nav bar, abstract icon, footer section
| [http://jkeohan.com/](http://jkeohan.com/) | "what people have said" section


## Project Description

My portfolio will feature these sections: about me, skills, projects, and contact me. About Me: This will contain my name and full brand statement. Skills: Skills will be divided into sections (Front-End, Back-End, and Equity), and will have an icon for each section and will display in text format.  Projects will have placeholder images that turn to an opaque background color at hoverover.  MVP for projects section is grid display with responsive design; Post-MVP is carousel.  Contact me will have a link to my email but not a full form.  Design style will include: 1. full-width image for top banner, 2. minimalistic style for all other sections (few images, 1-3 colors), 3. conversational tone of text sections.

Questions to resolve:
1. Should I use a picrew for an image of myself in the About Me section?
2. How many columns should my Projects section contain in mobile, tablet, and desktop?
3. Should my 3rd skills column be titled "Equity" or something else like "DEI" or "Accessibility"?
4. What fonts should I use?
5. Which image should I use for my "home" section?
6. Should I include a "what people have said" section (e.g., like Joe Keohan)?

## Wireframes

Include images of wireframe with a description of the specific wireframe.   

- [Mobile](https://i.imgur.com/xIt2nhO.jpg)
- [Tablet](https://i.imgur.com/iONiVGt.jpg)
- [Desktop](https://i.imgur.com/ARjLVoI.jpg)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link](https://i.imgur.com/wR1JeSD.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Hamburger
- Text content
- Full nav bar for desktop
- Responsive design
- Skill icons
- Social media buttons

#### PostMVP 

- Animation for project placeholders
- Carousel for projects
- Make own logo

## Functional Components


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | hr |
| Project Previews | H | 1hr | hr |
| Regular Nav | H | 3hr | hr |  
| Text Content | H | 3hr|  hr | 
| Other Sections and Flex| M | 3hr | hr|
| Skill Icons | H | 2hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Social Media Icons | L | 1hr |  hr |
| Total | H | 19hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Animations on hover | M | 3hr | hr | hr |
| Project Carousel | M | 3hr | hr | hr |
| Bootstrap | H | 4hr | hr |
| Make Own Logo | L | 4hr | hr |
| Total | H | 11hrs| hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 ### Could not get hamburger menu to recognize onclick
 I had to put my JavaScript at the bottom of the HTML body despite having the code in my app.js that is supposed to cause the JS to wait until all HTML is loaded before running.


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
