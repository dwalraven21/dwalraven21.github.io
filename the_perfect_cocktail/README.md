# The Perfect Cocktail

The Perfect Cocktail is an app that allows users to select their liquor of choice or a non-alcoholic option and then generates a random cocktail recipe based on their preference.

Link to live site: https://dwalraven21.github.io/the_perfect_cocktail/index.html

## About The Project

For this project, I used HTML, CSS, JavaScript, jQuery, and AJAX.

All photos were taken from the open source library: <a href="https://unsplash.com/">unsplash.com</a>.
Photo credit goes to <a href="https://unsplash.com/@arobj">Adam Jaime</a>,
<a href="https://unsplash.com/@wwarby" >William-Warby</a>, <a href="https://unsplash.com/@soulvanschaik" >Soul van Schaik</a>, <a href="https://unsplash.com/@maltewingen" >Malte Wingen</a>,
<a href="https://unsplash.com/@fifernando" >Fidel Fernando</a>, <a href="https://unsplash.com/@kaiser1310" >Jonas Kaiser</a>
and
<a href="https://unsplash.com/@foodbymars" >Alison Marras</a>

I used data from <a href="https://www.thecocktaildb.com/api.php" >The Cocktail DB API</a>, which contains recipes and photos for hundreds of cocktails and allows for filter by type of liquor, which was essential for this project. For their Patreon supporters, this API also has an option for filtering by multiple ingredients at once. If I wanted to improve this app in the future, I might contribute, so as to have access to this feature. I would then allow the user to select favorite ingredients in addition to favorite liquor.


## Usage

When users land on the page, they will be asked to choose their favorite liquor or a non-alcoholic option. When they click the button for their choice, a modal will pop up with a drink name and a picture of the drink. They can click the "See Recipe" button to view the ingredients and recipe for the cocktail. There is also an option to print the window or to close and try a different cocktail.

To make this more user-friendly, one improvement I might make is having a button to generate a new cocktail within the modal. So the user doesn't need to click close to generate another cocktail.


## Challenges

One interesting challenge was that when you used the API filter for a specific type of liquor, it only returned objects with name of the drink, the photo and the drink ID. In order to get the full list of ingredients and the recipe, I had to save the drink ID, and then do another data pull for that drink to return the those objects.

Another challenge was that in order to make the app randomize a drink, I had to use the Math.random() function and then store that as a variable to use as the array index, however, not all liquors had the same number of drink recipes. Vodka and Gin had nearly 100 each, but Whiskey had two. I console logged the length of each of these arrays, to determine the range of random numbers to use for the index. I tried replacing the number with (data.drinks.length + 1), but had an error with that for some reason.

```JavaScript
$('#generateVodka').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length); => 81

			let index = (Math.floor(Math.random() * 82))

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
```

Finally, I was slightly limited with this API in that I could only filter by one ingredient, so I choose types of liquor. If I was willing to contribute on Patreon, I could have filtered by multiple ingredients. I think that would have added another level to the app. I really like the idea of having the user choose their liquor and then their favorite ingredients (lime, mint, ginger, etc.). I could even change the purpose to be "Drink recipes based on what you already have in your kitchen".