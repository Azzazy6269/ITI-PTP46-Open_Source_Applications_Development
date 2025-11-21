#include <iostream>

using namespace std;

int main()
{
    int x;
    cout << "Enter index : ";
    cin >> x;
    if(cin.fail()) return 0 ;
    if(x == 0) cout << "0";
    if(x == 1) cout << "1";
    if(x>1){
            int last1 = 1 , last2 =0,temp;
        for(x;x>1;x--){
            temp = last1+last2;
            last2 = last1;
            last1 = temp;

        }
        cout << temp;;
    }
    return 0;
}
