#include <iostream>

using namespace std;

int main()
{
    int x;

    cout << "Enter integer : ";
    cin>>x;
    if(cin.fail()) return 0 ;

        if (x%2){
            cout << "odd number";
        }else
            cout << "even number";

       return 0;
}
