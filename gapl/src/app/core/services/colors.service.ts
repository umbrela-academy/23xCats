import { Injectable } from '@angular/core';
import { RGB } from '../models/rgb.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  randomLightRGB(): RGB {
    const r = Math.floor((1 + Math.random()) * 256 / 2);
    const g = Math.floor((1 + Math.random()) * 256 / 2);
    const b = Math.floor((1 + Math.random()) * 256 / 2);
    return new RGB(r, g, b);
  }

  invertRGB({ r, g, b }: RGB): RGB {
    const ir = 255 - r;
    const ig = 255 - g;
    const ib = 255 - b;
    return new RGB(ir, ig, ib);
  }

  invertRGBasBW({ r, g, b }: RGB): RGB {
    // See https://stackoverflow.com/a/3943023
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? new RGB(0, 0, 0)
      : new RGB(255, 255, 255);
  }

  randomBGandFG(): [RGB, RGB] {
    const color = this.randomLightRGB();
    const textColor = this.invertRGBasBW(color);
    return [color, textColor];
  }
}
