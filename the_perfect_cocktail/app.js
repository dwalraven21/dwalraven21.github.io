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
		$('#generateRecipe').show()

	}
	// Function to close the modal
	const closeModal = () => {
		$modal.css('display', 'none');
		$('#modal-ingredients').empty()
		$('#modal-recipe').empty()
		$('#modal-text').empty()

	}

	// Create function that populates modal h3 with the name of recipe and the p with the full recipe
	const populateModal = () => {
			const $h3 = $('<h3>').text($drinkName);
			const $img = $('<img>').attr('src', $drinkImage).css('width', '200px').css('height', '200px')
			$('#modal-text').empty()
			$('#modal-recipe').empty()
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

let $drinkIngredient = '';
let $drinkRecipe = '';

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

			// console.log(data.drinks.length);

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


//Generate a drink recipe by clicking on the name of the liquor that you want in your drink
$('#generateGin').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length);

			let index = (Math.floor(Math.random() * 94))

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
$('#generateRum').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length);


			let index = (Math.floor(Math.random() * 18))

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
$('#generateTequila').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length);

			let index = (Math.floor(Math.random() * 25))

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
$('#generateWhiskey').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length);

			let index = (Math.floor(Math.random() * 2))

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
$('#generateNA').on('click', () => {

		$.ajax({
			url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
			type: 'GET',
      dataType: 'json'

		}).then(
			(data)=>{

			// console.log(data.drinks.length);

			let index = (Math.floor(Math.random() * 59))

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

				$('#modal-ingredients').empty()
				const $h4 = $('<h4>').text("Ingredients")
				$('#modal-ingredients').append($h4)
				const $ul = $('<ul>')
				$('#modal-ingredients').append($ul)


				//Tried to make this more dry by making it a function, but it wouldn't work.
				if (data.drinks[0].strIngredient1.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient1)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient2.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient2)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient3.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient3)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient4.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient4)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient5.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient5)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient6.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient6)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient7.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient7)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient8.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient8)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient9.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient9)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient10.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient10)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient11.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient11)
						$('#modal-ingredients').append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient12.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient12)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient13.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient13)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient14.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient14)
						$ul.append($drinkIngredient)
					}
				if (data.drinks[0].strIngredient15.length > 0) {
						$drinkIngredient = $('<li>').text(data.drinks[0].strIngredient15)
						$ul.append($drinkIngredient)
					}

				$('#modal-recipe').empty()
				const $h5 = $('<h4>').text("Recipe")
				$('#modal-recipe').append($h5)

				$drinkRecipe = (data.drinks[0].strInstructions)
				$('#modal-recipe').append($drinkRecipe)

				$('#generateRecipe').hide()

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
