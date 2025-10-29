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
    fraction(int _numerator,int _denominator)
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
        if(d==0){
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
    void printNum(){
        int gcd =__gcd(numerator,denominator);

        if((numerator%denominator)==0){
            cout<<numerator/denominator;
            return;
        }

        cout<<getNumerator()/gcd<<"/"<<getDenominator()/gcd<<endl;
    }
};
fraction add(fraction* f1,fraction* f2){
    int d = f1->getDenominator()*f2->getDenominator();
    int n1 = f2->getDenominator()*f1->getNumerator();
    int n2 = f1->getDenominator()*f2->getNumerator();
    int n = n1+n2;
    return fraction(n,d);

}
int main()
{
    fraction* f1 = new fraction(12,8);
    cout<<"num1 = ";f1->printNum();cout<<endl;

    fraction* f2 = new fraction(3,2);
    cout<<"num2 = ";f2->printNum();cout<<endl;

    fraction f3 = add(f1,f2);
    cout<<"num3 = ";f3.printNum();cout<<endl;

    return 0;
}
