# Recipe AI

A full-stack ASP.net app with Angular frontend that allows users to select food and click button to generate AI created recipe via ChatGPT API.




## Contents 

* [Idea](#idea)
* [Showcase](#showcase)
* [Technologies](#technologies)
* [Running a Recipe AI demonstration](#running-a-learn-scotland-demonstration)


<br>

## Idea

Intrigued by the rapid evolution of Artificial Intelligence, I couldn't resist the urge to dive into the ChatGPT API. To channel my focus, I embarked on an exciting experiment: building a recipe generator.

Committed to continuously expanding my knowledge in emerging technologies, I've embraced a proactive approach: learning by doing.
This endeavour led me down the path of ASP.NET to master C#, coupled with an Angular frontend. All new to me!

This is a practise project and not intended for production.


## Showcase
https://github.com/dvdjms/Recipe-AI/assets/21125062/320b6972-7b72-4df9-b051-a03177d02f30

<br>

## Technologies
* C#
* TypeScript
* ASP.NET Core
* Angular
* HTML & CSS
* Bootstrap

<br>

## Running a Recipe AI demonstration

You will need a ChatGPT API key. This entails creating a user account and providing credit/debit card details.

In route folder create a file named config.json and enter the following:

```{ API_KEY" : "<Your API key to be added here>" }```
<br>

Run locally

Clone the project and go to the project base directory

```cd RecipeRevel```

Run ASP.NET Core (this will automatically run Angular client side)

```dotnet build```

```dotnet run```

The application is runnning on port 44417 so go to http://localhost:44417/ to try it out.