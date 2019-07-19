# Mex-and-Match

Mex-and-Match is an app that generates different recipes for each component of a taco and allows you to mix and match them to form your perfect taco recipe. Take your taco game to the next level!

Link to live site:<a href="dwalraven21.github.io/taco_app/index.html">dwalraven21.github.io/taco_app/index.html</a>

## About The Project

For this project, I used HTML, CSS, JavaScript, jQuery, and AJAX.

All photos were taken from the open source library: <a href="https://unsplash.com/">unsplash.com</a>
Photo credit goes to <a href="https://unsplash.com/@alexandermils">Alexander Mils
</a>, <a href="Tai's Captures">Tai's Captures</a>, <a href="https://unsplash.com/@christine_siracusa">Christine Siracusa</a> and <a href="https://unsplash.com/@edgarraw">Edgar Castrejon</a>

For the taco recipes, I used data from the API: <a href="https://github.com/evz/tacofancy-api">tacofancy</a>

<a href="https://github.com/evz/tacofancy-api">tacofancy</a> contains user-submitted recipes for full-tacos, base layers, mix-ins, condiments, seasoning, shells, and things that are "like tacos", but aren't technically tacos. [inserts reference to <a href="https://www.youtube.com/watch?v=KLHRjaUBb3o">SNL's "Almost Pizza" skit</a>.]

## Usage

When users land on the page, they can click the, "Generate New Taco", button. This will populate each section (base, condiment, mix-in, seasoning, and shell) with a randomly generated recipe for that part of the taco. If the user wants to change the full taco, they can do so by clicking, "Generate New Taco", again, but if they're happy with some of the taco, they will now have the option to just change specific components by clicking, "Try A Different Base", for example.

Once the user is happy with their taco, they can save it or print out all the recipes on one page. If they prefer, they can just select the one recipe they want, for example the asian cabbage slaw, to print.

There are also buttons that allow the user to hide or reveal each recipe, as some of them can be quite long and take up a lot of screen real estate.

Some other fun features include a carousel, featuring taco photos (the carousel can be navigated with left and right arrow buttons, but it also advances each time the user generates a new taco) and modals, which pop up when the user choses to print a recipe.

## Challenges

This was my first solo project using an API, but luckily, I found that <a href="https://github.com/evz/tacofancy-api">tacofancy</a> was well documented and extremely easy to work with. My only suggestion would be that the author could have an object key, "protein", that contains "beef", "pork", "fish", "vegetarian" etc., as this would have allowed me to filter the recipes in some way. I originally had the idea to ask the user what protein they wanted first, but there was no realistic way for me to return recipes based on the protein source, given that the data didn't include a protein object.

One of the trickiest problems for me to solve was how to make the full taco description dynamic, so that every time the user changed one single component, the description at the top would reflect that change, without updating the other components. I accomplished this by making the recipe names  global variables, and concatenating those variables in the sentence. That way, each time I requested another data pull, for say a condiment, I could make it so just the one variable was being updated.


```JavaScript
// Function to update the text field and display the new taco
const changeTacoDescription  = () => {
	$displayName.empty()
	$displayName.text($base + ", with " + $condiment + ", garnished with " + $mixin + ", topped off with " + $seasoning + " and wrapped in delicious " + 	$shell)
	$('.display-full-name').append($displayName)
}

// Names of all the taco components
let $base = '';
let $condiment = '';
let $mixin = '';
let $seasoning = '';
let $shell = '';

// Generate New Recipes for one specific ingredient type
// Condiment
$('#new-condiment-button').on('click', () => {

	$.ajax({
			url:'https://taco-randomizer.herokuapp.com/random/'
	}).then(
			(data)=>{
				$('#condiment').html(data.condiment.name);
				$condiment = data.condiment.name
				$('#condiment-recipe').html(data.condiment.recipe);

				changeTacoDescription();
			},
			(error)=>{
					console.log(error);
			})
})
```
