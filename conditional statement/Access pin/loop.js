// let correctPin = prompt('Input the correct pin');
// let trial = 0;

// while(trial <= 3){
//     if(correctPin == 1234){
//         console.log('Access Granted');
//     }else console.log('Try Again')
//     if(trial > 3) console.log('Access Denied');
//     trial++
// }

let correctPin = '1234';
let trial = 0

while (trial <= 2){
    if(prompt('Enter Pin') == correctPin){
        console.log('Access Granted');
        break;
    }else console.log('Try Again')
    trial++
}
if(trial > 2) console.log('Access blocked')