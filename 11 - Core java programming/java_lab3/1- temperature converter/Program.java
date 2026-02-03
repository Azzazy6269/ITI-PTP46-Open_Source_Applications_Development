import myapp.TemperatureConverter;

public class Program{
    public static void main(String[]args){

        TemperatureConverter tc = new TemperatureConverter();
        System.out.println(tc.apply(23f));
        
    }
}