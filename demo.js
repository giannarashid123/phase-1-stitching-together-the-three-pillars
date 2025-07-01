// We use the Objects below to control toggling like / unlike status
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1: Select all heart icons
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: Handle successful "server" response
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: Add click event listeners to each heart
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: When all the STEPs' code changes have been complete, you'll be able
// to see a working demonstration of our reference example.


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
