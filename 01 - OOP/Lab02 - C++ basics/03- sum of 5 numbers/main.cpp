#include <iostream>

using namespace std;

int main()
{
    cout << "Enter 5 integers : " ;
    int i,temp,result ;
    for(i = 0;i<5;i++){
        cin >> temp;
        if(cin.fail()) return 0 ;
        result += temp;
    }
    cout << result;
    return 0;
}
