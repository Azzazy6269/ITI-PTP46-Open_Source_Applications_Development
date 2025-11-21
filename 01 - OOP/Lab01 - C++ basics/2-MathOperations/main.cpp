#include <iostream>

using namespace std;

int main()
{
    float x,y;
    cin >> x >> y ;
    if(cin.fail()) return 0;

    cout << "x+y = " << x + y << endl;
    cout << "x-y = " << x - y << endl;
    cout << "x*y = " << x * y << endl;
    if(y != 0) cout << "x/y = " << x / y << endl;


    return 0;
}
