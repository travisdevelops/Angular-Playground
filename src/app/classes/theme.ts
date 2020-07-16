import { Vector } from './vector';

export class Theme {
  public static darkThemeToggled: boolean;
  public static bgColor: Vector;
  public static textColor: Vector;
  public static darkBGColor: Vector;
  public static lightBGColor: Vector;
  public static darkTextColor: Vector;
  public static lightTextColor: Vector;

  // Initialize Theme Variables
  static init() {
    Theme.darkBGColor = new Vector({x: 50, y: 50, z: 50});
    Theme.lightBGColor = new Vector({x: 255, y: 255, z: 255});
    Theme.darkTextColor = new Vector({x: 255, y: 255, z: 255});
    Theme.lightTextColor = new Vector({x: 50, y: 50, z: 50});
    Theme.bgColor = Theme.darkBGColor;
    Theme.textColor = Theme.darkTextColor;
    document.body.classList.add('theme-dark');
    Theme.darkThemeToggled = true;
  }

  // Toggle Theme Between light & Dark
  static toggle() {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');
    Theme.bgColor = Theme.bgColor === Theme.darkBGColor ? Theme.lightBGColor : Theme.darkBGColor;
    Theme.textColor = Theme.textColor === Theme.darkTextColor ? Theme.lightTextColor : Theme.darkTextColor;
  }
}
