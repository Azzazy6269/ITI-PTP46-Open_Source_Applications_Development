package myapp;

public class NoRealRoot implements QuadraticSolutionStrategy{

    public Double[] solve(double a , double b , double c , double discriminant){
        System.out.println("No real roots");
        return new Double[0];
    }

}