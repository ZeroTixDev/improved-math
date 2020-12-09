'use strict';
const Vector = require('./vector.js');
module.exports = class ImprovedMath {
   add(a, b) {
      return a + b;
   }
   sub(a, b) {
      return a - b;
   }
   dist(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
   }
   circle_area_radius(radius) {
      return radius * radius * Math.PI;
   }
   circumference_radius(radius) {
      return radius * 2 * Math.PI;
   }
   new_vector(x, y) {
      return new Vector(x, y);
   }
   lerp(start, end, time) {
      return start * (1 - time) + end * time;
   }
   random(min = 0, max = 1) {
      return Math.random() * (max - min + 1) + min;
   }
   fibonacci(number) {
      const memo = {};
      function run(num) {
         let value;
         if (memo[num]) {
            value = memo[num];
         } else {
            if (num < 2) {
               value = num;
            } else {
               value = run(num - 1) + run(num - 2);
               memo[num] = value;
            }
         }
         return value;
      }
      return run(number);
   }
};
