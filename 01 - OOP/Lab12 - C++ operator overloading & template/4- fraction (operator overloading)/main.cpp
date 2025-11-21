#include <iostream>
#include <stdio.h>
#include <algorithm>
using namespace std;
class fraction
{
private:
    int numerator;
    int denominator;
public:
    fraction(int _numerator=0,int _denominator=0)
    {
        setNumerator(_numerator);
        if(_denominator == 0)
        {
            cout<<"can't divide on 0 . default denominator is assigned which is 1"<<endl;
            denominator = 1;
        }
        else
        {
            setDenominator(_denominator);
        }
    }
    void setNumerator(int n)
    {
        numerator = n;
    }
    void setDenominator(int d)
    {
        if(d==0)
        {
            cout<<"can't divide on zero"<<endl;
        }
        else if(d<0)
        {
            denominator = -d;
            numerator = -numerator;
        }
        else
        {
            denominator = d;
        }

    }
    int getNumerator()
    {
        return numerator;
    }
    int getDenominator()
    {
        return denominator;
    }
    fraction operator+(fraction f)
    {
        int d = getDenominator()*f.getDenominator();
        int n1 = getDenominator()*f.getNumerator();
        int n2 = f.getDenominator()*getNumerator();
        int n = n1+n2;
        return fraction(n,d);
    }
    fraction operator+(int i){
        int n = i*getDenominator() + getNumerator();
        return fraction(n,getDenominator());
    }
    friend fraction operator+(int i , fraction f){
        return f+i;
    }
    bool operator==(fraction f){
        return(numerator/denominator == f.getNumerator()/f.getDenominator());
    }
    bool operator!=(fraction f){
        return!(numerator/denominator == f.getNumerator()/f.getDenominator());
    }
    void operator++(int){
        numerator+=denominator;
    }
    void operator++(){
        numerator+=denominator;
    }
    void printNum()
    {
        int gcd =__gcd(numerator,denominator);

        if((numerator%denominator)==0)
        {
            cout<<numerator/denominator;
            return;
        }

        cout<<getNumerator()/gcd<<"/"<<getDenominator()/gcd<<endl;
    }
};
fraction add(fraction f1,fraction f2)
{
    int d = f1.getDenominator()*f2.getDenominator();
    int n1 = f2.getDenominator()*f1.getNumerator();
    int n2 = f1.getDenominator()*f2.getNumerator();
    int n = n1+n2;
    return fraction(n,d);

}
int main()
{
    fraction f1(12,8);
    cout<<"num1 = ";
    f1.printNum();
    cout<<endl;

    fraction f2(3,2);
    cout<<"num2 = ";
    f2.printNum();
    cout<<endl;

    fraction f3 = add(f1,f2);
    cout<<"num3 = ";
    f3.printNum();
    cout<<endl;

    fraction f4 =f1+f2;
    cout<<"num4 = ";
    f4.printNum();
    cout<<endl;

    fraction f5 =f1+3;
    cout<<"num5 = ";
    f5.printNum();
    cout<<endl;

    fraction f6 =3+f1;
    cout<<"num6 = ";
    f6.printNum();
    cout<<endl;

    if(f1==f2){
        cout<<"f1 = f2"<<endl;
    }else{
        cout<<"f1 != f2"<<endl;
    }
    if(f1!=f2){
        cout<<"f1 != f2"<<endl;
    }else{
        cout<<"f1 = f2"<<endl;
    }
    f1++;
    f1.printNum();
    cout<<endl;

    ++f1;
    f1.printNum();
    cout<<endl;
    return 0;
}
