 var height = 155;
 var weight = 40;
 var age = 17;
 var gender;
 var bmi;
 var isGenderSelected = false;

 var scale = document.querySelector("#scale");
 var user_height = document.querySelector("#height");
 var user_weight = document.querySelector("#weight");
 var user_age = document.querySelector("#age");
 var female_card = document.querySelector(".female");
 var male_card = document.querySelector(".male");
 var cal_btn = document.querySelector("#calBtn");
 var recal_btn = document.querySelector("#recalBtn");
 var comment = document.querySelector("#comment");
 var result = document.querySelector("#result");
 var age_increment_btn = document.querySelector("#ageIncrement");
 var age_decrement_btn = document.querySelector("#ageDecrement");
 var weight_increment_btn = document.querySelector("#weightIncrement");
 var weight_decrement_btn = document.querySelector("#weightDecrement");

 cal_btn.disabled = true;
 cal_btn.style.opacity = "0.5";

 function calEnable() {
   if (isGenderSelected) {
     cal_btn.disabled = false;
     cal_btn.style.opacity = "1";
   } else {
     cal_btn.disabled = true;
     cal_btn.style.opacity = "0.5";
   }
 }

 function ageIncrement() {
   age++;
   user_age.innerHTML = age;
 }

 function ageDecrement() {
   if (age > 0) age--;
   user_age.innerHTML = age;
 }

 function weightIncrement() {
   weight++;
   user_weight.innerHTML = weight;
 }
 function weightDecrement() {
   if (weight > 0) weight--;
   user_weight.innerHTML = weight;
 }

 function bmi(weight, height) {
  return (weight / (height * height)) * 10000;
 }

 scale.addEventListener("change", () => (user_height.innerHTML = scale.value));
 age_increment_btn.addEventListener("click", ageIncrement);
 age_decrement_btn.addEventListener("click", ageDecrement);
 weight_increment_btn.addEventListener("click", weightIncrement);
 weight_decrement_btn.addEventListener("click", weightDecrement);

 male_card.addEventListener("click", () => {
   gender = "male";
   isGenderSelected = true;
   male_card.classList.add("active");
   female_card.classList.remove("active");
   calEnable();
 });

 female_card.addEventListener("click", () => {
   gender = "female";
   isGenderSelected = true;
   female_card.classList.add("active");
   male_card.classList.remove("active");
   calEnable();
 });

 cal_btn.addEventListener("click", () => {
   document.querySelector(".container").style.visibility = "hidden";
   bmi = bmi(weight, height);
   result.innerHTML = bmi.toFixed(1);
   var status = document.querySelector("#status");

   if (bmi < 18.5) {
     comment.innerHTML = "You are underweight.";
     status.innerText = "UNDERWEIGHT";
   } else if (bmi >= 18.5 && bmi < 25) {
     comment.innerHTML = "You are at a healthy weight. Good job!";
     status.innerText = "NORMAL";
   } else if (bmi > 25 && bmi <= 29.99) {
     comment.innerHTML = "You are overweight.";
     status.innerHTML = "OVERWEIGHT";
   } else {
     comment.innerHTML = "You are obese.";
     status.innerText = "OBESE";
   }
 });

 recal_btn.addEventListener("click", () => {
   document.querySelector(".container").style.visibility = "";
 });