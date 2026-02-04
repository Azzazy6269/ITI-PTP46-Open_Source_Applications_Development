package myapp;

public interface Complex<T> {
    T getReal();
    T getImaginary();

    Complex<T> add(Complex<T> x);
    Complex<T> substract(Complex<T> x);
    Complex<T> multiply(Complex<T> x);
    Complex<T> div(Complex<T> x);

}
