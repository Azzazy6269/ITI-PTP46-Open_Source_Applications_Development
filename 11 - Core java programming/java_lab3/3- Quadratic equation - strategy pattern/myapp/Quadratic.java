package myapp;

import java.util.function.Function;

public class Quadratic implements Function<Double[], Double[]> {
    @Override
    public Double[] apply(Double[] arr) {
        double a = arr[0];
        double b = arr[1];
        double c = arr[2];
        System.out.println("a=" + a + ", b=" + b + ", c=" + c);
        Double[] roots;

        double d = b * b - 4 * a * c;
        System.out.println("Discriminant d = " + d);

        QuadraticSolutionStrategy strategy = SelectStrategy(d);
        return strategy.solve(a, b, c, d);
    }

    private QuadraticSolutionStrategy SelectStrategy(double d) {
        if (d < 0) {
            return new NoRealRoot();
        } else if (d == 0) {
            return new OneRoot();
        } else {
            return new TwoRoots();
        }
    }

}
