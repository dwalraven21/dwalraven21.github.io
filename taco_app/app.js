$(() => {
// console.log("up and running!");


//================================
// Functions
//================================

const expandAll = () => {
	if ($('.recipe').css('display') === 'none') {
		$('.recipe').css('display', 'block')
	} else {
		$('.recipe').css('display', 'none')
	}
}

// Function to show or hide the recipe for the associated Button.
// Takes two parameters: the id for the recipe you want to display or hide and the id for the button that generates a new recipe for that specific type of ingredient. e.g. ('#base-recipe', '#new-base-button')
const showOrHideRecipe = (recipeID, buttonID) => {
	// If recipe is hidden the button will reveal recipe
	if ($(event.target).parent().siblings(recipeID).css('display') === 'none') {
			$(event.target).parent().siblings(recipeID).css('display', 'block')
			// $(event.target).siblings(buttonID).css('display', 'block')
			// and the button text will change to "Hide Recipe"
			$(event.target).text("Hide Recipe")
	// If the recipe is already showing the button will hide it
	} else {
			$(event.target).parent().siblings(recipeID).css('display', 'none')
			// $(event.target).siblings(buttonID).css('display', 'none')
			// and the button text will change to "Show Recipe"
			$(event.target).text("Show Recipe")
	}
}

// Function to update the text field and display the new taco
// const changeTacoDescription  = () => {
// 	$('.display-full-name').empty()
// 	$displayName = $('<p>').text( data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
// 	$('.display-full-name').append($displayName)
// }


//Function to advance the carousel of images

const $advanceCarousel = () => {
		// current image to hide
		$currentImg.hide()
		//check if the currentIndex is at or below the number of images. If not, reset to zero.
		if (currentIndex < numOfImages) {
			//we want the next image to show
			//increment current image currentIndex
			currentIndex++
		} else {

			currentIndex = 0
		}
		//change the $currentImg
		$currentImg = $('.carousel-images').children().eq(currentIndex)
		$currentImg.show()
	}


//================================
// GLOBAL VARS
//================================
//counter var to keep track of the current image index
let currentIndex = 0

// current image Element
let $currentImg = $('.carousel-images').children().eq(currentIndex)

let numOfImages = $('.carousel-images').children().length - 1

//next button
const $next = $('.next')

//previous button
const $previous = $('.previous')

let $displayName = $('<p>')

//================================
// Event Listeners
//================================

setTimeout($advanceCarousel(), 2000);

$next.on('click', () => {
	$advanceCarousel();
})

$previous.on('click', () => {
	// we want the current image to hide
	$currentImg.hide()
	//check if the currentIndex is at or below the number of images. If not, reset to zero.
	if (currentIndex !== 0) {
		//we want the next image to show
		//increment current image currentIndex
		currentIndex--
	} else {

		currentIndex = numOfImages
	}
	//change the $currentImg
	$currentImg = $('.carousel-images').children().eq(currentIndex)
	$currentImg.show()
})

	// Generate All-New Taco on Generate Taco Button Click

	$('#generate-taco').on('click', (event) => {

		event.preventDefault();
		$advanceCarousel();

		$.ajax({
        url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
        dataType: 'json'

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

						// Diplay taco Name
						$displayName.empty()
						$displayName.text(data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
						$('.display-full-name').append($displayName)

        },
        (error)=>{
            console.log(error);
        })

			// Name of recipe should appear
			$('.type').css('display', 'block')
			// Show Recipe Button should appear
			$('.show-recipe').css('display', 'block')
			//show favorite button
			$('#favorite').css('display', 'block')
			// show print option
			$('.print').css('display', 'block')
			$('.new-recipe').css('display', 'block')
			$('.display-full-name').css('display', 'flex')
			$('.expand').css('display', 'block')


	})


	// Show or Hide Recipes (Individually)

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

// Show or Hide ALl Recipes

$('.expand').on('click', () => {
	event.preventDefault();
	expandAll()

})


	// Generate New Recipes for one specifiic ingredient type
	// Could be more DRY

	//
	$('#new-base-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'https://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
            $('#base').html(data.base_layer.name);
						$('#base-recipe').html(data.base_layer.recipe);

						// $('.display-full-name').append($displayName)
        },
        (error)=>{
            console.log(error);
        })
	})
	// Condiment
	$('#new-condiment-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'https://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
					$('#condiment').html(data.condiment.name);
					$('#condiment-recipe').html(data.condiment.recipe);

					// $displayName.text( data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
        },
        (error)=>{
            console.log(error);
        })
	})
	// Mix-Ins
	$('#new-mixin-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
        url:'https://taco-randomizer.herokuapp.com/random/'
    }).then(
        (data)=>{
					$('#mixin').html(data.mixin.name);
					$('#mixin-recipe').html(data.mixin.recipe);
					//
					// $displayName.text( data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
        },
        (error)=>{
            console.log(error);
        })
	})
	// Seasoning
	$('#new-seasoning-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/'
		}).then(
				(data)=>{
					$('#seasoning').html(data.seasoning.name);
					$('#seasoning-recipe').html(data.seasoning.recipe);

					// $displayName.empty()
					// $displayName = $('<p>').text( data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
					// $('.display-full-name').append($displayName)
				},
				(error)=>{
						console.log(error);
				})
	})
	// Shell
	$('#new-shell-button').on('click', (event) => {
		event.preventDefault();
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/'
		}).then(
				(data)=>{
					$('#shell').html(data.shell.name);
					$('#shell-recipe').html(data.shell.recipe);

					// $displayName.text( data.base_layer.name + " with " + data.condiment.name + " garnished with " + data.mixin.name + " topped off with " + data.seasoning.name + " and wrapped in delicious " + data.shell.name)
				},
				(error)=>{
						console.log(error);
				})
	})

})