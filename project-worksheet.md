# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 (Mon., Jan. 24)| Project Description | Complete
|Day 1 (Mon., Jan. 24)| Wireframes / Priority Matrix / Timeline | Complete
|Day 2 (Tues., Jan. 25)| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3 (Wed., Jan. 26)| MVP & Bug Fixes | Complete
|Day 4 (Thurs., Jan. 27)| Final Touches | In Progress
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

## Wireframes

- [Mobile](https://i.imgur.com/xIt2nhO.jpg)
- [Tablet](https://i.imgur.com/iONiVGt.jpg)
- [Desktop](https://i.imgur.com/ARjLVoI.jpg)


## Time/Priority Matrix 

[Link](https://i.imgur.com/wR1JeSD.jpg)


### MVP/PostMVP

#### MVP 

- Hamburger
- Text content
- Full nav bar for desktop
- Responsive design
- Skill icons
- Social media buttons

#### PostMVP 

- Animation for project placeholders
- Interesting shapes between divs
- Carousel for projects
- Make own logo


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | 5hr |
| Project Previews | H | 1hr | 0.5hr |
| Regular Nav | H | 3hr | 3hr |  
| Text Content | H | 3hr|  2hr | 
| Other Sections and Flex| M | 3hr | 2hr|
| Skill Icons | H | 2hrs| 1hr | 
| Responsive | H | 3hr | 2hr |
| Social Media Icons | L | 1hr |  1hr |
| Total | H | 19hrs| 16.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Animations on hover | M | 3hr | 4hr |
| Interesting shapes between divs | L | 3hr | hr |
| Bootstrap | H | 4hr | 0hr |
| Make Own Logo | L | 4hr | 2hr |
| Total | H | 17hrs| hrs |

## Additional Libraries
 - FontAwesome: used for hamburger menu and icons for Skills Section
 - Social Icons by Torleif Halseth: [link](https://codepen.io/thalseth/pen/saqIj). I tried using the regular Font Awesome library but could not get the icons to display. Somehow, using the direct HMTL from this CodePen (with my own CSS) worked.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
// *************
// Smooth Scroll
// *************

// Code Adapted from Stack Overflow: https://stackoverflow.com/questions/6677035/scroll-to-an-element-with-jquery

        $(document).ready(function (){
            $("#smooth-about-me").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about-me-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-skills").click(function (){
                $('html, body').animate({
                    scrollTop: $("#skills-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-projects").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects-section").offset().top
                }, 2000);
            });
        });

        $(document).ready(function (){
            $("#smooth-contact").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact-me-section").offset().top
                }, 2000);
            });
        });
```

## Issues and Resolutions
 ### Could not get hamburger menu to recognize onclick
 I had to put my JavaScript at the bottom of the HTML body despite having the code in my app.js that is supposed to cause the JS to wait until all HTML is loaded before running.
 ### Could not get jquery hover to overlay img
 There was a typo in my element (. instead of -); once fixed, the hover was successful.
 ### Could not get nav links to function in desktop view
 I had to change them from `position: absolute` to instead be part of a grid and change the row property.
