// let time = 1;

// if ( time >= 6 &&  time < 12) {
//     console.log('You are late');
// }
// else if (time <= 12 && time < 6) {
//     console.log('welcome')

// }
// else{
//     console.log('good evening')
// }

// let role = 'moderator';

// if (role === 'guest') {
//     console.log('Guest user');
// }
// else if(role === "moderator") {
//     console.log('Moderator zUser')
// }
 
// else 
// console.log('Unauthorised User')

// for ( let i = 5; i>= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
    
// }


// let max = number(3,5);
// console.log(max)
// function number(first, second) {
//     if (first > second)return first;

// else if (first<second)return second
// }
  

// let result = isLandscape(12, 23);
// console.log(result);
// function isLandscape(width, height) {
//     if (width > height)return true;
//     else return false;
// }

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number' ) return 'not a number';
//      if ((input % 3 === 0 )&& (input % 5 === 0)) return 'fizzbuzz';
//      else if (input % 3 === 0) return 'fizz';
//     else if (input % 5 === 0) return 'buzz';
//     else return input
// }


showNumbers(3);

function showNumbers(limit) {
    for (let limit = 0; limit <= 10; limit++) {
        if (limit % 2 == 0) console.log (limit, 'Even');
            else  console.log(limit,'Odd')
        
    }
}

function countTruthy(array) {
    
}
