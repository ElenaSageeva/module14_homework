let month = {
    name: 'March',
    number: 3,
    days: 31  
}

function seasons (spr) {
    console.log(Object.getPrototypeOf(month));
   return Boolean(month);
}

seasons(month)