#include <iostream>

using namespace std;


class Complex{
    private:
        int real;
        int img;
        static int counter;
    public:
        Complex(){
            counter++;
        }
        Complex (int _real , int _img){
            setReal(_real);
            setImg(_img);
            counter++;
        }
        int getReal(){
            return real;
        }
        int getImg(){
            return img;
        }
        void setReal(int _real){
            real = _real;
        }
        void setImg(int _img){
            img = _img;
        }
        static int getCounter(){
            return counter;
        }
        void print(){
            if(img>0){
                cout<<real<<"+"<<img<<"j"<<endl;
            }else{
                cout<<real<<img<<"j"<<endl;
            }
        }
        void substract(Complex c){
            real -= c.getReal();
            img -= c.getImg();
        }
};
Complex add(Complex c1,Complex c2){
    Complex c3;
    c3.setReal(c1.getReal()+c2.getReal());
    c3.setImg(c1.getImg()+c2.getImg());
    return c3;
}
int Complex::counter =0;
int main()
{
    Complex c1;
    c1.setReal(20);
    c1.setImg(-35);
    c1.print();

    Complex c2;
    c2.setReal(10);
    c2.setImg(5);
    c2.print();

    c1.substract(c2);
    c1.print();

    Complex c3 = add(c1,c2);
    c3.print();

    cout<<Complex::getCounter();
    return 0;
}
