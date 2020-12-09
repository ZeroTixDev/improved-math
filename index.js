'use strict';
class Vector {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }
   copy() {
      return new Vector(this.x, this.y);
   }
   scale(factor) {
      this.x *= factor;
      this.y *= factor;
   }
   add(vector) {
      this.x += vector.x;
      this.y += vector.y;
   }
   sub(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
   }
   dist(vector) {
      return Math.sqrt((this.x - vector.x) * (this.x - vector.x) + (this.y - vector.y) * (this.y - vector.y));
   }
}
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
   new_vector(x, y) {
      return new Vector(x, y);
   }
};
