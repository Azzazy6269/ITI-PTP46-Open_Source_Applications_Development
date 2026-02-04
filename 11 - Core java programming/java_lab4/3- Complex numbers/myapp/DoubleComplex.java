package myapp;

public class DoubleComplex implements Complex<Double> {
    private double real;
    private double imaginary;

    public DoubleComplex(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    @Override
    public Double getReal() {
        return real;
    }

    @Override
    public Double getImaginary() {
        return imaginary;
    }

    @Override
    public Complex<Double> add(Complex<Double> x) {
        double newReal = this.real + x.getReal();
        double newImag = this.imaginary + x.getImaginary();
        return new DoubleComplex(newReal, newImag);
    }

    @Override
    public Complex<Double> substract(Complex<Double> x) {
        double newReal = this.real - x.getReal();
        double newImag = this.imaginary - x.getImaginary();
        return new DoubleComplex(newReal, newImag);
    }

    @Override
    public Complex<Double> multiply(Complex<Double> x) {
        double newReal = (this.real * x.getReal()) - (this.imaginary * x.getImaginary());
        double newImag = (this.real * x.getImaginary()) + (this.imaginary * x.getReal());
        return new DoubleComplex(newReal, newImag);
    }

    @Override
    public Complex<Double> div(Complex<Double> x) {
        double c = x.getReal();
        double d = x.getImaginary();
        double denominator = (c * c) + (d * d);

        if (denominator == 0) {
            throw new ArithmeticException("Division by zero");
        }

        double newReal = ((this.real * c) + (this.imaginary * d)) / denominator;
        double newImag = ((this.imaginary * c) - (this.real * d)) / denominator;
        return new DoubleComplex(newReal, newImag);
    }

    @Override
    public String toString() {
        if (imaginary >= 0) {
            return real + " + " + imaginary + "i";
        } else {
            return real + " - " + Math.abs(imaginary) + "i";
        }
    }
}