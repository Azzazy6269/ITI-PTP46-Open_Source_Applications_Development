#include <iostream>

using namespace std;

void method1();
void method2();
void method3();
void method4();
int main()
{
    method1();
    method2();
    method3();
    method4();
    return 0;
}

void method1(){
    int x[5];
    for(int i = 0 ; i<5 ; i++)
        x[i] = i;
    for(int i = 0 ; i<5 ; i++)
        cout<<x[i] <<"  ";
    cout<<endl;
}

void method2(){
    int x[5];
    int * ptr = x;
    for(int i = 0 ; i<5 ; i++)
        *(ptr+i) = i;
    for(int i = 0 ; i<5 ; i++)
        cout<<*(ptr+i) <<"  ";
    cout<<endl;
}

void method3(){
    int x[5];
    int * ptr = x;
    for(int i=0;i<5;i++)
        ptr[i] = i;
    for(int i=0;i<5;i++)
        cout<<ptr[i]<<"  ";
    cout<<endl;
}

void method4(){
    int x[5];
    for(int i =0;i<5;i++)
        *(x+i) = i;
    for(int i =0;i<5;i++)
        cout<<*(x+i)<<"  ";
    cout<<endl;
}
