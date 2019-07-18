$(() => {
// console.log("up and running!");

//================================
// Functions
//================================

// Function to show or hide the recipe for the associated Button.
// Takes two parameters: the id for the recipe you want to display or hide and the id for the button that generates a new recipe for that specific type of ingredient. e.g. ('#base-recipe', '#new-base-button')
const showOrHideRecipe = (recipeID, buttonID) => {
	// If recipe is hidden the button will reveal recipe
	if ($(event.target).siblings(recipeID).css('display') === 'none') {
			$(event.target).siblings(recipeID).css('display', 'block')
			$(event.target).siblings(buttonID).css('display', 'block')
			// and the button text will change to "Hide Recipe"
			$(event.target).text("Hide Recipe")
	// If the recipe is already showing the button will hide it
	} else {
			$(event.target).siblings(recipeID).css('display', 'none')
			$(event.target).siblings(buttonID).css('display', 'none')
			// and the button text will change to "Show Recipe"
			$(event.target).text("Show Recipe")
	}
}


//================================
// Starting Variables
//================================
// const $baseRecipe = $('#base-recipe')
// const $condimentRecipe = $('#condiment-recipe')
// const $mixinRecipe = $('#mixin-recipe')
// const $seasoningRecipe = $('#seasoning-recipe')
// const $shellRecipe = $('#shell-recipe')


//================================
// Event Listeners
//================================

	// Generate All-New Taco on Generate Taco Button Click

	$('#generate-taco').on('click', (event) => {

		event.preventDefault();

		$.ajax({
        url:'http://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
            $('#base').html(data.base_layer.name);
						$('#base-recipe').html(data.base_layer.recipe);
            $('#condiment').html(data.condiment.name);
						$('#condiment-recipe').html(data.condiment.recipe);
            $('#mixin').html(data.mixin.name);
						$('#mixin-recipe').html(data.mixin.recipe);
						$('#seasoning').html(data.seasoning.name);
						$('#seasoning-recipe').html(data.seasoning.recipe);
						$('#shell').html(data.shell.name);
						$('#shell-recipe').html(data.shell.recipe);
        },
        (error)=>{
            console.log(error);
        })

			// Show Recipe Button should appear
			$('.show-recipe').css('display', 'block')
	})

	// Show or Hide Recipes

	// Base
	$('#show-base-button').on('click', (event) => {
		event.preventDefault();
		showOrHideRecipe('#base-recipe', '#new-base-button')
	})
	// Condiment
	$('#show-condiment-button').on('click', (event) => {
		event.preventDefault();
		showOrHideRecipe('#condiment-recipe', '#new-condiment-button')
	})
	// Mixins
	$('#show-mixin-button').on('click', (event) => {
		event.preventDefault();
		showOrHideRecipe('#mixin-recipe', '#new-mixin-button')
	})
	// Seasoning
	$('#show-seasoning-button').on('click', (event) => {
		event.preventDefault();
		showOrHideRecipe('#seasoning-recipe', '#new-seasoning-button')
	})
	// Shell
	$('#show-shell-button').on('click', (event) => {
		event.preventDefault();
		showOrHideRecipe('#shell-recipe', '#new-shell-button')
	})


	// Generate New Recipes for one specifiic ingredient type
	// Could be more DRY

	//
	$('#new-base-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'http://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
            $('#base').html(data.base_layer.name);
						$('#base-recipe').html(data.base_layer.recipe);
        },
        (error)=>{
            console.log(error);
        })
	})
	// Condiment
	$('#new-condiment-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'http://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
					$('#condiment').html(data.condiment.name);
					$('#condiment-recipe').html(data.condiment.recipe);
        },
        (error)=>{
            console.log(error);
        })
	})
	// Mix-Ins
	$('#new-mixin-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'http://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
					$('#mixin').html(data.mixin.name);
					$('#mixin-recipe').html(data.mixin.recipe);
        },
        (error)=>{
            console.log(error);
        })
	})
	// Seasoning
	$('#new-seasoning-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
				url:'http://taco-randomizer.herokuapp.com/random/'
		}).then(
				(data)=>{
					$('#seasoning').html(data.seasoning.name);
					$('#seasoning-recipe').html(data.seasoning.recipe);
				},
				(error)=>{
						console.log(error);
				})
	})
	// Shell
	$('#new-shell-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
				url:'http://taco-randomizer.herokuapp.com/random/'
		}).then(
				(data)=>{
					$('#shell').html(data.shell.name);
					$('#shell-recipe').html(data.shell.recipe);
				},
				(error)=>{
						console.log(error);
				})
	})

})
