# The Perfect Cocktail

The Perfect Cocktail is a website that allows users to select their liquor of choice or a non-alcoholic option and then generate a random cocktail recipe based on their preference.

Link to live site: https://dwalraven21.github.io/the_perfect_cocktail/index.html

## About The Project

For this project I used HTML, CSS, JavaScript, jQuery and AJAX.

All landing page photos were taken from the open source library: <a href="https://unsplash.com/">unsplash.com</a>.
Photo credit goes to <a href="https://unsplash.com/@arobj">Adam Jaime</a>,
<a href="https://unsplash.com/@wwarby" >William-Warby</a>, <a href="https://unsplash.com/@soulvanschaik" >Soul van Schaik</a>, <a href="https://unsplash.com/@maltewingen" >Malte Wingen</a>,
<a href="https://unsplash.com/@fifernando" >Fidel Fernando</a>, <a href="https://unsplash.com/@kaiser1310" >Jonas Kaiser</a>
and
<a href="https://unsplash.com/@foodbymars" >Alison Marras</a>

I used data from <a href="https://www.thecocktaildb.com/api.php" >The Cocktail DB API</a>, which contains recipes and photos for hundreds of cocktails and allows for filter by type of liquor, which was essential for this project. For their Patreon supporters, this API also has an option for filtering by multiple ingredients at once. If I wanted to improve this website in the future, I might contribute, so as to have access to this feature. I would then allow the user to select favorite ingredients in addition to favorite liquor.


## Usage

When users land on the page, they will be asked to choose their favorite liquor or a non-alcoholic option. When they click the button for their choice, a modal will pop up with a drink name and a picture of the drink. They can click the "See Recipe" button to view the ingredients and recipe for the cocktail. There are also options to print the window, close and try a different cocktail, or to save the drink as their personal favorite.

Once a drink has been saved as the favorite, it will be displayed above the choose your favorite liquor section so that they can access it again easily.

To make this more user-friendly, one improvement I might make is having a button to generate a new cocktail within the modal. So the user doesn't need to click close to generate another cocktail.


## Challenges

One interesting challenge was that when you used the API filter for a specific type of liquor, it only returned objects with name of the drink, the photo and the drink ID. In order to get the full list of ingredients and the recipe, I had to save the drink ID, and then do another data pull for that drink to return the those objects.

```JavaScript
	url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + $drinkId
```

<!-- Another challenge was that in order to randomize a drink, I had to use the Math.random() function and then store that as a variable to use as the array index, however, not all liquors had the same number of drink recipes. Vodka and Gin had nearly 100 each, but Whiskey had two, so I ended up using the term "Bourbon" instead. (In the future I might include a drop-down under whisky with each category and filter by those.) I console logged the length of each of these arrays, to determine the range of random numbers to use for the index. I tried replacing the number with (data.drinks.length), but had an error with that for some reason.

```JavaScript

	//Generate a drink recipe by clicking on the name of the liquor that you want in your drink
	$('#generateVodka').on('click', () => {

			$.ajax({
				url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
				type: 'GET',
				dataType: 'json'

			}).then(
				(data)=>{

				// console.log(data.drinks.length) => 81

				let index = (Math.floor(Math.random() * 81))

				$drinkName = (data.drinks[index].strDrink);
				$drinkImage = (data.drinks[index].strDrinkThumb)
				$drinkId = (data.drinks[index].idDrink)

				populateModal()
				openModal()

				},
			(error)=>{
					console.log(error);
			})
	})

``` -->
Another challenge I had was listing the ingredients. Some recipes had no ingredients listed, some had as many as 15 and each ingredient was stored as a separate object, so I had to check 15 object keys and only return the values that existed. I tried to make this a function at first, to make my code as DRY as possible, but I couldn't make it run properly within the ajax function. I'm sure there's a way to do it, but for the time being I wrote code that looked something like this:

```JavaScript
//Tried to make this more dry by making it a function, but it wouldn't work.
if (data.drinks[0].strIngredient1 !== null) {
		$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient1)
		$ul.append($drinkIngredient)
	}
if (data.drinks[0].strIngredient2 !== null) {
		$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient2)
		$ul.append($drinkIngredient)
	}
if (data.drinks[0].strIngredient3 !== null) {
		$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient3)
		$ul.append($drinkIngredient)
	}
```
etc...

Then when I went back to populate the Favorite Drink recipe, I had to use a slightly different version of this. Definitely not DRY.

Also, in order to use local storage, I had to make sure that I added a function that checked to see if there was anything stored on page load and then, if so, populate the Favorite Drink area with that information.

```JavaScript

//check local storage to see if a favorite exists
//if it does then display it
//if not, don't display this section yet

if (localStorage.getItem('favDrinkName') !== null) {
	$favoriteName = localStorage.getItem('favDrinkName')
	$favoriteRecipe = localStorage.getItem('favDrinkRecipe')
	$favoriteImage = localStorage.getItem('favDrinkPic')
	$favoriteID = localStorage.getItem('favDrinkID')
	$('.favoriteName').empty()
	const $h4 = $('<h4>').text($favoriteName)
	// const $p = $('<p>').text($favoriteRecipe)
	const $img = $('<img>').attr('src', $favoriteImage).attr('id', 'favDrinkImage')
	$('.favoriteName').append($h4)
	$('.favoriteName').append($img)
	// $('.favoriteName').append($p)
	$('.favorite').css('display', 'block')
} else {
	$('.favorite').css('display', 'none')
}

```

Finally, I was slightly limited with this API in that I could only filter by one ingredient, so I choose types of liquor. If I was willing to contribute on Patreon, I could have filtered by multiple ingredients. I think that would have added another level to the website. I really like the idea of having the user choose their liquor and then their favorite ingredients (lime, mint, ginger, etc.). I could even change the purpose to be "Drink recipes based on what you already have in your kitchen".

```
Filter by multi-ingredient (only available to $1+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
```
