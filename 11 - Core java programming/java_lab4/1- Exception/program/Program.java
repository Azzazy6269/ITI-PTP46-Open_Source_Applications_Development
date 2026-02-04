package program;
import myapp.*;

public class Program {

    public static void main(String[] args) {
        System.out.println("Program started");
        try{
            FilterClass.SecondfilterBelow0(-3);
        }catch(MyException ex){
            System.out.println(ex.getMessage());
        }
    }
    
}
