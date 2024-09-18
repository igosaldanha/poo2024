import { Point2D } from "./point2d";
import { Shape } from "./shape";

class Rectangle implements Shape {
    constructor(public P1: Point2D, public P2: Point2D) {}

    getName(): string {
        return "Rectangle";
    }

    inside(point: Point2D): boolean {
        return (
            point.x >= this.P1.x && point.x <= this.P2.x &&
            point.y >= this.P1.y && point.y <= this.P2.y
        );
    }

    getArea(): number {
        const width = Math.abs(this.P2.x - this.P1.x);
        const height = Math.abs(this.P2.y - this.P1.y);
        return width * height;
    }

    getPerimeter(): number {
        const width = Math.abs(this.P2.x - this.P1.x);
        const height = Math.abs(this.P2.y - this.P1.y);
        return 2 * (width + height);
    }

    toString(): string {
        return `Rectangle with corners at ${this.P1.toString()} and ${this.P2.toString()}`;
    }
}

export { Rectangle };