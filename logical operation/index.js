let permit = false;
let access = false;

let outcome = permit || access;
console.log('Access Granted',outcome);

let rejected = !outcome;
console.log('Access Denied',rejected)