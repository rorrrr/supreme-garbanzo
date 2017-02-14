var CAT_ARRAY = [
{name: "Kitty Purry", food: "Mexico", pic: "https://pbs.twimg.com/media/B3I1pVPCMAAd1b-.jpg"},
{name: "Nidalee", food: "LP", pic: "https://i.ytimg.com/vi/EBesv7hPxdI/hqdefault.jpg"},
{name: "Kermit", food: "Checken", pic: "https://s-media-cache-ak0.pinimg.com/564x/6b/23/a0/6b23a0d0a78f55223e9c20ae33212a91.jpg"
}
]

var createCatUl = function(){
  var catUl = document.createElement('ul')
  catUl.classList.add('cat');
  return catUl;
}

var createName = function(name){
  var catName = document.createElement('li');
  catName.innerText = "Name: " + name
  return catName; 
}

var createFood = function(food){
  var faveFood = document.createElement('li');
  faveFood.innerText = "Favourite food: " + food;
  return faveFood; 
}

var createBlockImage = function(pic){
  var blockImage = document.createElement('img');
  blockImage.src = pic
  blockImage.style.width = "500px";
  blockImage.style.display = "block";
  return blockImage;
}

var appendElements = function(cats, catUl, nameLi, foodLi, blockImage){
  foodLi.appendChild(blockImage);
  nameLi.appendChild(foodLi);
  catUl.appendChild(nameLi);
  cats.appendChild(catUl);
}


var addCat = function(name, food, pic){
  var catUl = createCatUl();
  var blockImage = createBlockImage(pic);
  var foodLi = createFood(food);
  var nameLi = createName(name);
  var cats = document.querySelector('#cats');
  appendElements(cats, catUl, nameLi, foodLi, blockImage);
}


var app = function() {
  for (var cat of CAT_ARRAY) {
    addCat(cat.name, cat.food, cat.pic);
  }
}



window.onload = app;