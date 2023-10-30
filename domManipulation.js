// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let para = document.querySelector('p');
let image = document.querySelector('.image');
let name = document.querySelector('.name');
let place = document.querySelector('.location');

// CODE ALONG
// 1. An event listener in provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener("click", function() {
  name.innerHTML = "Diego";
para.innerHTML = "I like to draw";
place.innerHTML = "Chicago";
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.

image1Button.addEventListener('click', function () {
  image.src = "rocket.gif";  
});



// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.

image2Button.addEventListener('click', function () {
  image.src = "train.gif";
});

// BONUS
// 7. Try using different event types for your buttons.