[documentation](https://zerotixdev.github.io/improved-math/)
# Useful math functions
This library is a utility library for using math functions with ease (Ultra Fast) and (made to complement the Math in javascript)
## Install
```bash
npm install improved-math
```
## Documentation
```js
const ImprovedMath = require("improved-math");
const math = new ImprovedMath();
```
### math.add(a:Number, b:Number)
returns the sum of the two numbers
```js
const sum = math.add(2, 4) // 6
```
### math.sub(a:Number, b:Number)
returns the difference of the two numbers
```js
const difference = math.sub(2, 1) // 1
```
### math.dist(x1:Number, y1:Number, x2:Number, y2:Number)
returns the distance to point 1 and point 2
```js
const distance = math.dist(1, 1, 2, 2); // 1.414213...
```
### math.circle_area_radius(radius:Number)
returns the area of the circle based on the radius given
```js
const area = math.circle_area_radius(1); // 3.1415...
```
### math.circumference_radius(radius:Number)
returns the circumference of the circle based on the radius
```js
const circumference = math.circumference_radius(2); // 3.1415...
```
### math.lerp(start:Number, end:Number, time:Number)
interpolates between the start and end based on the time
```js
const position = math.lerp(0, 1, 0.25); // 0.25
```
### math.random(min:Number, max:Number)
returns a random value between the min and the max
```js
const random_value = math.random(0, 1); // 0 -> 1 ex. 0.2
```
### math.new_vector(x:Number, y:Number)
creates a vector
```js
const vector = math.new_vector(2, 2); // Vector { x: 2, y: 2 }
const vector_copy = vector.copy(); // Vector { x: 2, y: 2 }
vector.scale(2); // Vector { x: 4, y : 4 }
vector.add(math.new_vector(2, 4)); // Vector { x: 6, y: 8 }
vector.sub(math.new_vector(5, 7)); // Vector { x: 1, y:  1}
const distance = vector.dist(vector_copy); // 1.414213...
```
### math.fibonacci(index:Number)
returns the value of the index from the fibonacci sequence
```js
const value = math.fibonacci(1); // 1
```
### math.seed(key:String)
returns a predictable random number based on the key
```js
console.log(math.seed('key')); // Always 0.057609484...
```
### math.seed_rng(key:String)
returns a predictable random number generator based on the key
```js
const rng = math.seed_rng('key');
console.log(rng()); // Always 0.05760948...
console.log(rng()); // Always 0.52797544...
```
### math.round(number:Number, decimals:Number)
returns a rounded value, max precision is n decimals
```js
const round = math.round(1.234567, 3); // 1.235
```
### math.map(value:Number, input_start:Number, input_end:Number, output_start:Number, output_end:Number)
returns the value mapped to the output dimensions (range mapping)
```js
const val = math.map(25, 0, 50, 0, 100); // 50
```
## Examples
```js
console.log(math.add(5, 4)); // 9
console.log(math.sub(4, 2)); // 2
console.log(math.dist(1, 1, 2, 1)); // 1
console.log(math.circle_area_radius(4)) // 50.24...
```