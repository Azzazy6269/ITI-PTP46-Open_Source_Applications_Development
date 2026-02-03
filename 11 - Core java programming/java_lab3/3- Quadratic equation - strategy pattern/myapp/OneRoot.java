package myapp;

public class OneRoot implements QuadraticSolutionStrategy{
    public Double[] solve(double a , double b , double c , double discriminant){
        Double root = (-b / (2 * a));
        System.out.println("One root: " + root);
        return new Double[]{root};
    }
}