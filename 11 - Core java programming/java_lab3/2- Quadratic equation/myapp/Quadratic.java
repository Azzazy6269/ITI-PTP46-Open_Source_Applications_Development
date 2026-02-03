package myapp;
import java.util.function.Function;

public class Quadratic implements Function<Double[],Double[]>{
    @Override
    public Double[] apply(Double [] arr){
        double a = arr[0];
        double b = arr[1];
        double c = arr[2];
        System.out.println("a=" + a + ", b=" + b + ", c=" + c);
        Double [] roots;

        double d = b * b - 4 * a * c;
        System.out.println("Discriminant d = " + d);

        if (d < 0) {
            System.out.println("No real roots");
            roots = new Double[0];
        } else if (d == 0) {
            Double root = (-b / (2 * a));
            System.out.println("One root: " + root);
            roots = new Double[]{root};
        } else {
            Double root1 = (-b + Math.sqrt(d)) / (2 * a);
            Double root2 = (-b - Math.sqrt(d)) / (2 * a);
            System.out.println("Roots: " + root1 + " , " + root2);
            roots = new Double[]{root1,root2};
        }
        return roots;

    }
}
