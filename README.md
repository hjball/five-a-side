# Five-A-Side

A team selecting application created as part of the technical challenge for DevelopMe's Coding Fellowship.

## Setup

### Requirements 

* NPM/Yarn

### Guide

Before starting, ensure you have an up-to-date version of NPM or Yarn installed locally.

After checking your package manager is up-to-date, clone this GitHub repository and navigate to the correct directory from your terminal.

Once you're in the cloned directory, run the following commands:

Install dependancies:

```bash
$ npm install / $ yarn install
```
Run the application:

```bash
$ npm start / $ yarn start
```

You can now view the application by navigating to http://localhost3000 in your browser.

## Brief

> The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).

>It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

>Optional advanced features might include: support for n-a-side, where a list of any length can be split into two teams support for balancing of the teams, where some measure of each player's rating is used to allocate teams fairly

## Approach

Intially I set out by sketching a rough wireframe of the MVP, before transfering the layout into Sketch and creating a simple design from which I based my project.

After deciding on React and Redux as main libraries for my project (mainly because I wanted to challenge myself with using Redux), I starting building the basic functionality of the MVP, reaching for the lodash JavaScript library to handle the randomising and sorting of players into teams.

Once I had all of the basic features in place I started to add styling, using a combination of Sass and Gulp to manage my workflow.

Only after I had the styled MVP up and running did I start to add user experience tweaks, such as error handling, and explore the additional features of the brief.

## Features:

* Add player names to a Players list
* Delete players from the Players list
* Randomly assign players into two equal Team lists
* Reset the Players and Team lists
* Error handling for names over 16 characters, attempting to add more than 10 players, and trying to assign teams with less than 10 players.

## Features Roadmap:

* Support for team balancing
* Support for n-a-side
* Data persistence (API or Redux Persist)
