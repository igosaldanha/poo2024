import { Point2D } from "./point2d";
import { Shape } from "./shape";
import { Calc } from "./calc";

class Circle implements Shape {
    constructor(public center: Point2D, public radius: number) {}

    getName(): string {
        return "Circle";
    }

    inside(point: Point2D): boolean {
        return Calc.distance(this.center, point) <= this.radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    toString(): string {
        return `Circle with center at ${this.center.toString()} and radius ${this.radius}`;
    }
}

export { Circle };