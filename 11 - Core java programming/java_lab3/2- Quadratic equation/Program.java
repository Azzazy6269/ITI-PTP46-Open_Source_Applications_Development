import myapp.Quadratic;

public class Program{
    public static void main(String[]args){
        
        Quadratic q = new Quadratic();
        Double [] arr={2.0,-3.0,1.0};
        Double [] roots = q.apply(arr);
    }
}