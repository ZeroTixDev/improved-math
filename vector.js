module.exports = class Vector {
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
};
