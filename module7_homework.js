// Задание1

function func(obj = {
    name: 'Vova',
    age: 35,
    kids: 'no'
}){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}
func();

// Задание 2

const person = {
    name : 'Lili',
    age : 25,
    job : 'qa'
}
function func(str, obj){
    let result = str in obj;
    return result
}
console.log(func('job', person));

// Задание 3

const obj = Object.create(null);
console.log(obj);

// Задание 4

function PowerSocket (device){
    this.condition = 'included',
    this.device = device
} 

PowerSocket.prototype.getPrice = function(price){
console.log(`Price is ${price} euro`);
}

function ViewDevice (color, size, device){
this.color = color,
this.size = size,
this.device = device
}

ViewDevice.prototype = new PowerSocket()
const fridge = new ViewDevice('black', 'big', 'fridge');
const toaster = new ViewDevice('white', 'small', 'toaster');

fridge.getPrice(500);
toaster.getPrice(190);

console.log(fridge);
console.log(toaster);

// Задание 5

class PowerSocket{
    constructor(options){
      this.condition = options.condition
      this.device = options.device
    }
     price(a){
      console.log(`Price is ${a} euro`); 
     }
  } 
  
  
  
  class ViewDevice extends PowerSocket{
    constructor(options){
      super(options)
      this.color = options.color
      this.size = options.size
    }
  }
  
  
  const fridge = new ViewDevice({
    condition: 'included',
    device: 'fridge',
    color: 'black',
    size: 'big'
  });
  
  const toaster = new ViewDevice({
    condition: 'included',
    device: 'toaster',
    color: 'white',
    size: 'small'
  });
  
  
  fridge.price(500);
  toaster.price(190);