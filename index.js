'use strict';
const Vector = require('./vector.js');
const seedrandom = require('seedrandom');
module.exports = new (class ImprovedMath {
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
      // PitsPower helped make this code since i dont know formula
      const a = (1 + Math.sqrt(5)) / 2;
      const b = (1 - Math.sqrt(5)) / 2;
      return Math.round((a ** number - b ** number) / Math.sqrt(5));
   }
   seed(key) {
      return seedrandom(key)();
   }
   seed_rng(key) {
      return seedrandom(key);
   }
   round(number, places = 1) {
      return Math.round(number * 10 ** places) / 10 ** places;
   }
   map(input, input_start, input_end, output_start, output_end) {
      return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
   }
})();
