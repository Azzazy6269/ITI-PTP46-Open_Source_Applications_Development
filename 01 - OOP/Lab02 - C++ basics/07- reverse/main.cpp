#include <iostream>

using namespace std;

int main()
{
    int x;
    cout << "Enter integer : " ;
    cin >> x;
    if(cin.fail()) return 0 ;
    cout << "reverse : ";
    while(x != 0){
        int y = x%10 ;
        cout << y;
        x= x/10;
    }
    return 0;
}
