import { Point2D } from "./point2d";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

class Adapter {

    private shapes: (Circle | Rectangle)[] = [];

    // Adiciona um círculo à lista de formas
    circle(x: number, y: number, r: number): void {
        const newCircle = new Circle(new Point2D(x, y), r);
        this.shapes.push(newCircle);
    }

    // Adiciona um retângulo à lista de formas
    rectange(x1: number, y1: number, x2: number, y2: number): void {
        const newRectangle = new Rectangle(new Point2D(x1, y1), new Point2D(x2, y2));
        this.shapes.push(newRectangle);
    }

    // Retorna informações sobre as formas
    info(): string {
        let result = "";
        for (const shape of this.shapes) {
            result += `${shape.toString()}\n`;
            result += `Area: ${shape.getArea()}\n`;
            result += `Perimeter: ${shape.getPerimeter()}\n\n`;
        }
        return result;
    }

    // Retorna a mesma saída do método info()
    toString(): string {
        return this.info();
    }
}

export { Adapter };