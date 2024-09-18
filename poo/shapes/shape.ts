import { Point2D } from './point2d';

interface Shape {
    getName(): string;
    inside(point: Point2D): boolean;
    getArea(): number;
    getPerimeter(): number;
}

export { Shape };