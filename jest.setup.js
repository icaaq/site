import "@testing-library/jest-dom";
import "jest-axe/extend-expect";

HTMLCanvasElement.prototype.getContext = jest.fn();
