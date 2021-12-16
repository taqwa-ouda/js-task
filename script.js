// Solve the first problem
for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay === 1) {
        console.log('1st January is being a Sunday ' + year)
    }
    console.log(d)
}
console.log("===>>>> Solve the second problem")

// Solve the second problem

    // the Christmas time
    let d2 = new Date("jan 7 2022 12:00:00").getTime()
    // el date now
    let dateNow = new Date().getTime()
    //calculate the time bettwen now date to Christmas date
    let timeDeff = d2 - dateNow;
    // math floor for int number
    let getDay = Math.floor((timeDeff / 1000 / 60 / 60 / 24));
    console.log('days left until next Christmas /' +  getDay)


console.log("===>>>> Solve the third problem")
// Solve the third problem

function check(num) {
    return ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));

}
console.log(check(10));
console.log(check(90));

console.log("===>>>> Solve the fourth problem")

// Solve the fourth problem

function givenIntegers(x, y, z) {
    let maxValue = 0;
    if (x > y) {
        maxValue = x;
    }
    else {
        maxValue = y;

    }
    if (z > maxValue) {
        maxValue = z;
    }
    return maxValue;
}
console.log(givenIntegers(2, 6, 0));
console.log(givenIntegers(400, 9, 0));
console.log(givenIntegers(8, 6, 1000));

console.log("===>>>> Solve the fifth problem")
// Solve the fifth problem
function capitalize(capi)
{
    let _text = capi.split("");
 for(var i = 0, x = _text.length; i < x; i++)
 {
    capi[i] = capi[i][0].toUpperCase() + capi[i].substr(1);
 }
 return _text.join(" ");
}
console.log(capitalize("Write a JavaScript program to capitalize the first letter of each word of a given string"));

console.log("===>>>> Solve the sixth problem")

// Solve the sixth problem


  function withoutCharcter(firstAndEnd) 
  {
      return firstAndEnd.substring(1, firstAndEnd.length -1);
  }
  console.log(withoutCharcter("taqwa ouda"));
  console.log(withoutCharcter("web development"));

  console.log("===>>>> Solve the seventh problem")

// Solve the seventh problem

function rotateElemant (array)
{
return [array[2], array[1], array[0]] ;
}
console.log(rotateElemant ([9,2,8]))

console.log("===>>>> Solve the 8 problem")

// Solve the 8 problem
function first_last_same(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}

console.log(first_last_same([70, 20, 10])); 
console.log(first_last_same([30, 20, 30])); 
