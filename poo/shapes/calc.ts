import { Point2D } from "./point2d";

class Calc {
    static distance(a: Point2D, b: Point2D): number {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }
}

export { Calc };
