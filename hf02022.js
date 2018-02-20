var laptop = ["Toshiba", "Lenovo", "HP", "Apple", "ACER"];

var feature = ["resolution", "memory", "HDD", "processor", "graphics"];

var i = 0;

var j = 0;

while (laptop[i]) {
  console.log((laptop[i]));
  i++;
  do {
    console.log(("- " + feature[j]));
    j++;
  } while (feature[j]);
}
