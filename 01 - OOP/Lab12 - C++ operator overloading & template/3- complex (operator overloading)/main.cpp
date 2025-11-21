#include <iostream>

using namespace std;


class Complex
{
private:
    int real;
    int img;
public:
    Complex(int _real = 0,int _img = 0)
    {
        setReal(_real);
        setImg(_img);
    }
    int getReal()
    {
        return real;
    }
    int getImg()
    {
        return img;
    }
    void setReal(int _real)
    {
        real = _real;
    }
    void setImg(int _img)
    {
        img = _img;
    }
    void print()
    {
        if(img>0)
        {
            cout<<real<<"+"<<img<<"j"<<endl;
        }
        else
        {
            cout<<real<<img<<"j"<<endl;
        }
    }
    void substract(Complex c)
    {
        real -= c.getReal();
        img -= c.getImg();
    }

    friend Complex operator+(Complex c1, Complex c2);
    Complex operator-(Complex c)
    {
        Complex res(real-c.getReal(),img-c.getImg());
        return res;
    }
    Complex operator+(int i)
    {
        Complex res(real+i,img);
        return res;
    }
    Complex operator-(int i)
    {
        Complex res(real-i,img);
        return res;
    }
    bool operator==(Complex c)
    {
        return((real==c.getReal()) && (img==c.getImg()));
    }
    bool operator!=(Complex c)
    {
        return((real!=c.getReal()) || (img!=c.getImg()));
    }
    void operator++(int)
    {
        real++;
    }
    void operator--(int)
    {
        real--;
    }
    void operator++()
    {
        ++real;
    }
    void operator--()
    {
        --real;
    }
    operator int const(){
        return real;
    }

};
Complex add(Complex c1,Complex c2)
{
    Complex c3;
    c3.setReal(c1.getReal()+c2.getReal());
    c3.setImg(c1.getImg()+c2.getImg());
    return c3;
}
Complex operator+(Complex c1, Complex c2)
{
    Complex res(c1.getReal()+c2.getReal(),c1.getImg()+c2.getImg());
    return res;
}

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

    Complex c3 = c1+c2;
    c3.print();

    Complex c4 = c1-c2;
    c4.print();

    Complex c5 = c1.operator-(c2); // can't write such this with operator+ because the overloading isn't inside the class
    c5.print();

    Complex c6 = c1+12;
    c6.print();

    Complex c7 = c1-12;
    c7.print();

    if(c1==c2)
    {
        cout<<"c1 = c2"<<endl;
    }
    else
    {
        cout<<"c1 != c2"<<endl;
    }
    if(c4==c5)
    {
        cout<<"c4 = c5"<<endl;
    }
    else
    {
        cout<<"c4 != c5"<<endl;
    }
    if(c1!=c2)
    {
        cout<<"c1 != c2"<<endl;
    }
    else
    {
        cout<<"c1 = c2"<<endl;
    }
    if(c4!=c5)
    {
        cout<<"c4 != c5"<<endl;
    }
    else
    {
        cout<<"c4 = c5"<<endl;
    }
    c1++;
    c1.print();

    c1--;
    c1.print();

    ++c1;
    c1.print();

    --c1;
    c1.print();

    cout<<(int)c1;
    return 0;
}
