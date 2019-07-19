$(() => {
console.log("up and running!");

//I commented out the carousel code, because I decided to try a different style for the header. I may go back later and make the new a header a carousel. Just in case I want to put the carousel back in, I decided to keep the code.

//================================
// Functions
//================================

//=========== MODAL ========

	// Function to open the modal
	const openModal = () => {
		$modal.css('display', 'block');

	}
	// Function to close the modal
	const closeModal = () => {
		$modal.css('display', 'none');

	}

	// Create function that populates modal h3 with the name of recipe and the p with the full recipe
	const populateModal = () => {
			const $h3 = $('<h3>').text($drinkName);
			const $img = $('<img>').attr('src', $drinkImage).css('width', '200px').css('height', '200px')
			$('#modal-text').empty()
			$('#modal-text').prepend($img)
			$('#modal-text').prepend($h3)
	}

	const addIngredients = (ingredient) => {
		if (data.drinks[0].ingredient.length > 0) {
			$drinkIngredient = (data.drinks[0].ingredient)
			$('#modal-recipe').append($drinkRecipe)
		}
	}

//=========== CAROUSEL ========
// //Function to advance the carousel of images
// const $advanceCarousel = () => {
// 		// current image to hide
// 		$currentImg.hide()
// 		//check if the currentIndex is at or below the number of images. If not, reset to zero.
// 		if (currentIndex < numOfImages) {
// 			//we want the next image to show
// 			//increment current image currentIndex
// 			currentIndex++
// 		} else {
//
// 			currentIndex = 0
// 		}
// 		//change the $currentImg
// 		$currentImg = $('.carousel-images').children().eq(currentIndex)
// 		$currentImg.show()
// 	}

//================================
// GLOBAL VARS
//================================

let = $drinkIngredient = '';

// Variables we'll need to populate the modal. Pulling these from our API
// let $drinkName = '';
// let $drinkImage = '';
// let $drinkRecipe = '';

//=========== MODAL ========
// var for modal element
const $modal = $('#modal');
// var for button that closes modal
const $closeModal = $('#close');
const $modalText = $("#modal-text");

// //=========== CAROUSEL ========
// //counter var to keep track of the current image index
// let currentIndex = 0
// // current image Element
// let $currentImg = $('.carousel-images').children().eq(currentIndex)
// let numOfImages = $('.carousel-images').children().length - 1
// //next button
// const $next = $('.next')
// //previous button
// const $previous = $('.previous')

//================================
// Event Listeners
//================================

//Add event listener to Close button
$(document).on('click', '#close', () => {
	closeModal()
});

//print function
$(document).on('click', '#print', () => {
	window.print();
})


//Generate a drink recipe by clicking on the name of the liquor that you want in your drink
$('#generateVodka').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{


			let index = (Math.floor(Math.random() * 80))

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


//Generate a drink recipe by clicking on the name of the liquor that you want in your drink
$('#generateRecipe').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + $drinkId,
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

				addIngredients(strIngredient1)
				addIngredients(strIngredient2)
				addIngredients(strIngredient3)
				addIngredients(strIngredient4)
				addIngredients(strIngredient5)
				addIngredients(strIngredient6)
				addIngredients(strIngredient7)
				addIngredients(strIngredient8)
				addIngredients(strIngredient9)
				addIngredients(strIngredient10)
				addIngredients(strIngredient11)
				addIngredients(strIngredient12)
				addIngredients(strIngredient13)
				addIngredients(strIngredient14)
				addIngredients(strIngredient15)

				$drinkRecipe = (data.drinks[0].strInstructions)
				$('#modal-recipe').append($drinkRecipe)

			},
		(error)=>{
				console.log(error);
		})

})


// //=========== CAROUSEL ========
// // Advances carousel when next button is clicked
// $next.on('click', () => {
// 	$advanceCarousel();
// })
//
// $previous.on('click', () => {
// 	// we want the current image to hide
// 	$currentImg.hide()
// 	//check if the currentIndex is at or below the number of images. If not, reset to zero.
// 	if (currentIndex !== 0) {
// 		//we want the next image to show
// 		//increment current image currentIndex
// 		currentIndex--
// 	} else {
//
// 		currentIndex = numOfImages
// 	}
// 	//change the $currentImg
// 	$currentImg = $('.carousel-images').children().eq(currentIndex)
// 	$currentImg.show()
// })

})
