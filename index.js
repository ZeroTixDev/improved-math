module.exports = class ImprovedMath {
	add(a, b) { return a + b }
	sub(a, b) { return a - b }
	dist(x1, y1, x2, y2) { return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))}
	circle_area_radius(radius) { return radius * radius * Math.PI }
	circle_area_diameter(diameter) { return (diameter / 2) * (diameter / 2) * Math.PI }
}