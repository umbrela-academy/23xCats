export interface RGBObj {
    r: number;
    g: number;
    b: number;
}

export class RGB {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static fromStr(rgb: string): RGB {
        if (!rgb.startsWith("rgb(") || !rgb.endsWith(")")) return new RGB(255, 255, 255);
        const rgbNums = rgb.substring(4, rgb.length - 1).split(',').map(s => parseInt(s, 10));
        return new RGB(rgbNums[0], rgbNums[1], rgbNums[2]);
    }

    static fromObj({ r, g, b }: RGBObj): RGB {
        return new RGB(r, g, b);
    }

    asObj(): RGBObj {
        return { r: this.r, g: this.g, b: this.b };
    }

    asStr() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    invertBW(): RGB {
        // See https://stackoverflow.com/a/3943023
        return (this.r * 0.299 + this.g * 0.587 + this.b * 0.114) > 186
            ? new RGB(0, 0, 0)
            : new RGB(255, 255, 255);
    }
}