#include <iostream>

using namespace std;
int fibonacci(int y);
int main()
{
    int x;
    cout << "Enter index : ";
    cin >> x;
    if(cin.fail()) return 0 ;
    cout<<fibonacci(x);

    return 0;
}

int fibonacci(int y){
    if(y == 0) return 0;
    if(y == 1) return 1;
    if(y>1) return(fibonacci(y-2)+fibonacci(y-1));
}
