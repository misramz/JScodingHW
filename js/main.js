var box1 = document.querySelector('#value-one');

var box2 = document.querySelector('#value-two');
var answer = document.querySelector('#answer');
var button = document.querySelector('#calculate-button');



button.addEventListener('click', function (even) {
   event.preventDefault();
   console.log(button);
    Number(value);


   var value = Number(box1.value) + Number(box2.value);
   answer.textContent = value;
  //  var answer = (box1.value + box2.value);
});
