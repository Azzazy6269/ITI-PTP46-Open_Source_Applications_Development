package program;
import myapp.*;
public class Program {
    public static void main(String[] args) {
        System.out.println("Program started");
        Complex<Double> C1 = new DoubleComplex(18, 5);
        C1 = C1.add(new DoubleComplex(10, 0));
        System.out.println(C1);

        C1 = C1.substract(new DoubleComplex(10, 0));
        System.out.println(C1);

        C1 = C1.multiply(new DoubleComplex(10, 0));
        System.out.println(C1);

        C1 = C1.div(new DoubleComplex(10, 0));
        System.out.println(C1);
    }

}
