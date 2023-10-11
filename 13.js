 class Shape  {
   constructor(width, height) {
     this.width = width;
     this.height = height;
   }

   calculateArea() {
     return this.width;
   }
   calculatePerimeter() {
     return this.height;
   }

 }

class Triangle extends Shape {
  constructor(side) {
    super(side);
    this.name = 'Triangle';
    this.side = side
  }
  calculateArea() {
    return (((Math.sqrt(3)) / 4) * this.side * this.side).toFixed(4);
  }

  calculatePerimeter() {
    return 3 * this.side;
  }
}
 class Rectangle extends Shape{
   constructor(width, height) {
     super(width, height );
     this.name = 'Rectangle';
   }

   calculateArea() {
     return this.width * this.height;
   }

   calculatePerimeter() {
     return 2 * (this.width + this.height);
   }
 }


 class Circle extends Shape {
  constructor(radius) {
    super()
    this.name = 'Circle';
    this.radius = radius
  }
   calculateArea = function ()
   {
     return Math.PI * this.radius * this.radius;
   };
   calculatePerimeter = function ()
   {
     return 2 * Math.PI * this.radius;
   };
 }


 const circle = new Circle(3)
 const rectangle = new Rectangle(3, 2)
 const triangle = new Triangle(3)
 const shape = new Shape(3, 2)




