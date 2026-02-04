
package myapp;

public class FilterClass {
    public static String filterBelow10(int n) throws MyException{
        if(n<10){
            throw new MyException();
        }
        return "valid number";
    }
    public static String filterBelow5(int n) throws MyException{
        if(n<5){
            throw new MyException();
        }
        return "valid number";
    }
    public static String filterBelow0(int n) throws MyException{
        if(n<0){
            throw new MyException();
        }
        return "valid number";
    }
    public static String SecondfilterBelow0(int n) throws MyException{
        return filterBelow0(n);
    }
}
