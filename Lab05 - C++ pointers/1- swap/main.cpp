#include <iostream>

using namespace std;

void swap_byAddress(int* x,int* y);
int main()
{
    int a = 5;
    int b = 7;
    cout << "before swap a = "<<a<<" , b = "<<b<<endl;
    swap_byAddress(&a,&b);
    cout << "after swap a = "<<a<<" , b = "<<b<<endl;

    return 0;
}
void swap_byAddress(int* x,int* y){
    int temp = *x;
    *x = *y;
    *y = temp;
}
