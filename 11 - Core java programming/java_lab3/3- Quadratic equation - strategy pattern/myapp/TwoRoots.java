package myapp;

public class TwoRoots implements QuadraticSolutionStrategy{
    public Double[] solve(double a , double b , double c , double discriminant){
        Double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        Double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        System.out.println("Roots: " + root1 + " , " + root2);
        return new Double[]{root1,root2};
    }

}