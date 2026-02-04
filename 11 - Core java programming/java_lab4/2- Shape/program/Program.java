package program;
import myapp.*;
public class Program{
    public static void main(String[]args){
        System.out.println("program started");
        Shape rect = new Rectangle();
        Shape circle = new Circle();
        Rectangle rect2 = new Rectangle();
        Circle circle2 = new Circle();
        Test test = new Test();
        test.apply(new Shape[]{rect,rect2,circle,circle2});
    }
}