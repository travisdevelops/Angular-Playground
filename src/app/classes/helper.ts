export class Helper {

  static randomNumber(min: number, max: number): number {
    return Math.round(Helper.randomDecimal(min, max));
  }

  static randomDecimal(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
