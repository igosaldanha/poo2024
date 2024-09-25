class Point2D {
    
    constructor(public x: number, public y: number) {}

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

export { Point2D };