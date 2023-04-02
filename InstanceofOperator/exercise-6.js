class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}


class AreaCalculator {
  static calculate(area) {
    if (area instanceof Square) {
      return Math.pow(area.side, 2);
    } else if (area instanceof Rectangle) {
      return area.width * area.height;
    } else if (area instanceof Circle) {
      return Math.PI * Math.pow(area.radius, 2);
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));




// class AreaCalculator {
//   constructor(rectangle, square, circle) {
//     this.rectangle = rectangle;
//     this.square = square;
//     this.circle = circle;
//     }
//   static calculate(type) {
//     let area;
//     switch (type) {
//       case 'rectangle':
//         area = this.rectangle.width * this.rectangle.height;
//         break;
//       case 'square':
//         area = this.square.side * this.square.side;
//         break;
//       case 'circle':
//         area = Math.PI * this.circle.radius * this.circle.radius;
//         break;
//     }
//     return area;
//   }
// }