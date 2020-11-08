# Contributing Guidelines
---
I know there are Bond actors or significant figures who have passed and are not on this website. Please feel free to add them using these guidelines:

1. Fork the repository and clone it to your machine. Create a new branch with the actor or characters name
2. You will need to add a JQuery file to the directory, and use ```npm install``` to get the dependencies. 
3. Using the following card template, replace the $ indicated words with the corresponding information.

```
<div id="$link_to_wikipedia" onclick="window.open(this.id)" class="hover:cursor-pointer bond-card border-gray-700 border-2 rounded shadow-xl h-64 relative object-center flex items-center justify-center">
                    <img class="card-image h-full object-center absolute" src="../imgs/$first_last.jpg" alt="$first $last as (character) $first $last">
                    <p class="font-sans text-xl relative" style="display: none;">Sean Connery</p>
                    <p class="font-sans relative" style="display: none;">(character) $first $last</p>
                    <p class="font-sans relative" style="display: none;">(dob) $08/25/1930 - (dod) $10/31/2020</p>
                </div>
```
If there's any confusion just look at the other cards for reference. First and Last are the actors names unless preceded by "(character)". The dates are the date of birth and the date of death as indicated by the parenthesis. 

4. The image should be a suitable image placed in the ```imgs``` directory using the first_last format of the actor. 

5. Once all this is done, push it to the origin feature branch and submit a PR for review. 