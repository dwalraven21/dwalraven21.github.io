$(() => {
console.log("up and running!");

//================================
// Functions
//================================

//=========== CAROUSEL ========
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
//=========== CAROUSEL ========
//counter var to keep track of the current image index
let currentIndex = 0
// current image Element
let $currentImg = $('.carousel-images').children().eq(currentIndex)
let numOfImages = $('.carousel-images').children().length - 1
//next button
const $next = $('.next')
//previous button
const $previous = $('.previous')



//================================
// Event Listeners
//================================

//=========== CAROUSEL ========
// Advances carousel when next button is clicked
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




})
