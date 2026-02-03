package myapp;
import java.util.function.Function;

public class TemperatureConverter implements Function<Float,Float>{
    @Override
    public Float apply(Float celsuis){
        return ((celsuis *1.8f)+32f);
    }
}
