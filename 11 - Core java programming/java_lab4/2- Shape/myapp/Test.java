package myapp;

public class Test {
    public void apply(Shape[] shapes){
        for(int i =0 ;i<shapes.length;i++){
            System.out.println(shapes[i].draw());
        }
    }
}