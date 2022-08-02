//1----------------------------------------------------

const greeting = 'Добрий день, everybody';

let sayGreeting = new Promise((resolve, reject) => {
  if (greeting.length > 0) {
    setTimeout(() => resolve(greeting), 3000);
  } else {
    setTimeout(() => reject("Error!"), 3000);
  }
});

sayGreeting.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

//2----------------------------------------------------

let count = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);
  if (randomNum % 2 == 0) {
    resolve('Number is even!')
  } else {
    reject('Error! It is odd number!')
  }
});

count.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

//3----------------------------------------------------

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

async function asyncDelay () {
  console.log('first call');
  await delay(4000).then(() => console.log('second call'));
}

asyncDelay ();