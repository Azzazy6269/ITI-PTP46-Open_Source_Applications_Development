#include <iostream>

using namespace std;

int main()
{
    int x,y,result=1;
    cout << "Enter integer : ";
    cin >> x;
    if(cin.fail()) return 0 ;

    cout << "Enter the power : ";
    cin >> y;
    if(cin.fail()) return 0 ;
    int tempy = y;

    for(tempy;tempy>0;tempy--){
       result *=x;//
    }
    cout << x << "^" << y << " = " << result <<endl;
    return 0;
}
