import { plus, minus } from './math.js'; // Named import
import MyMath from './math.js'; // Default import
plus(1, 2);
minus(2, 3);
MyMath.plus(3, 4);
MyMath.minus(3, 4);
MyMath.multiply(3, 4);
