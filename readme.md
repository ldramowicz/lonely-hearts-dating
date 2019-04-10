Objective
=========
A fictional client, Lonely Hearts, wants to create a dating service for its customers. Your job is to create a page that can query the Lonely Hearts database and display a list of potential matches. This exercise is expected to take around 3-5 hours of coding, but you are free to use as much time as you need.

Guidelines
=========
A sample page has been provided for you. Run `npm install` followed by `npm start` to display the current page. Your goal is to populate the `data-id="searchResults"` div with a list of potential matches.
These matches can then be filtered through the `data-id="userPreferences"` pane.
Each match lists the candidate's photo, name, and age.
Clicking on a match's contact button `data-id="userInfo"` should display a custom dialog `data-id="userContact"` listing the match's phone number `data-id="userPhone"`, cell number `data-id="userCell"` and e-mail `data-id="userEmail"`. Do not use `alert()` at all.

A web API is available to retrieve raw user information. Sample API usage can be found at [Random User API](https://randomuser.me/documentation#howto).
This raw information will need to be transformed to match the display requirements below.

A single match can be obtained via: <https://randomuser.me/api/?nat=US>

This API's data can be used to retrieve all relevant match details.

These results should be displayed, unfiltered, to the user. The user can then filter these returned results by both gender and age.
If you are applying for a role involving a specific framework, please implement your solution for the search results using that framework.
You are free to refactor the existing filtering controls to use this framework as well, but are not required to do so.

**Please make sure you also write some unit tests**. You can use Jest which is preinstalled, triggered by `npm test`, or you can replace with your favorite unit test library.

Further Instructions
===================
A basic package json file has been provided, which you are free to modify or completely overwrite. If using React, observe that `package.json` is prepared and ready for use. This file will allow you to use `npm install` to scaffold the application and `npm start` to launch the application. If you use your own build pipeline, please include documentation on how your application should be run and/or tested.

This project requires Node 6.11+. **Do not use a lower version**.

If you want to use another framework, **feel free to install other dependencies as you wish**. You can use tools such as [Angular CLI](https://cli.angular.io/) and [Vue CLI](https://github.com/vuejs/vue-cli), just make sure that the project is running at port 3000 (e.g.: running the cli with `--port 3000` might help) and the only necessary steps to start the project is running `npm install` plus `npm start`.

NOTE: Consider the scaffolding provided as a rough approximation of what the client is looking for. Feel free to modify (or completely rewrite) the markup or functionality in whatever ways you see fit. However, keep the semantic value of the given data attribute IDs - for example, `data-id="genderFemale"` should still refer to the female filter.

User Stories
============
* As a user, when no filter is selected, I should see 10 matches
* As a user, I expect each match to display:
    * User Photo
    * Full Name (`firstName lastName`)
    * Age
    * Contact Link
* As a user, I want to be able to filter the matches by age range, inclusive
* As a user, I want to be able to filter the matches by gender
* As a user, I want to be able to view a match's contact details in a custom dialog, which should contain:
    * Phone #
    * Cell #
    * E-mail
* As a user, I should be able to reset the matchlist to ignore the current filter and display the original 10 results
* As a user, I expect the actual number of matching records to be displayed above the matches themselves, as "{X} Matches Found"
* As a user, I expect the number of displayed matches to change in response to the filtering criteria.


Delivery Instructions
=====================

1. You must provide your Gitlab username. A free Gitlab account can be created at https://gitlab.com/
1. The recruiter will give you read permission to a repository named **challenge-ac001**, at https://gitlab.com/acbr/recruitment/js/challenge-ac001
1. You must **fork** this repository into a private repository on your own account and push your code in there.
1. Once finished, you must give the user **avenuecode** read permission (any non-guest roles) on your repository so that you can be evaluated. 
1. Then you need to create a **pull request** to merge your repository into "challenge-ac001" original repository.
    NOTE: If you refresh the page - you will see that the pull request no longer exists. This is normal and expected.
1. Its very important that these steps are followed accordingly, as your git and overall version control skills will also be evaluated.

PS: Only **GitLab** deliveries will be accepted, any other system such as GitHub or ZIP will disqualify the submission. Keep in mind this must never be publicly available (such as in GitHub), this test is private and we urge you to keep yours private as well.

### Wireframe

![Wireframe.](wireframe.png)

Check List
=====================
- [ ] I'm using node version 6.11+
- [ ] Running `npm install` is the only necessary step to install dependencies (you may delete node modules folder before it)
- [ ] Running `npm test` works successfully
- [ ] After running `npm start` I'm able to see the application working on http://localhost:3000/
- [ ] I am using the data-id's listed in the wireframe above

e.g.:

`[data-id="resultItem"]`, `[data-id="buttonFilter"]`, `[data-id="userDialogs"]`

`<div data-id="userAge">21</div>` Again this html tag is just an example, what matters here is that the element that represents the user age keeps the `data-id` value as `userAge` 
