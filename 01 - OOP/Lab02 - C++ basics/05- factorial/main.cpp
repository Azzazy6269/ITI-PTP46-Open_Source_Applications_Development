#include <iostream>

using namespace std;

int main()
{
    int x;
    int f = 1;
    cout << "Enter integer : " ;
    cin >> x;
    if(cin.fail()) return 0 ;
    for(x;x>0;x--){
        f *= x;
    }
    cout << f;
    return 0;
}
