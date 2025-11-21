#include <iostream>

using namespace std;

int main()
{
    int x;
    cout << "Enter degree : ";
    cin >> x;
    if(cin.fail()) return 0 ;

    if(x>85){
        cout << "Excellent";
    }else if(x>75){
        cout << "very good";
    }else if(x>65){
        cout << "good";
    }else if(x>50){
        cout << "successed";
    }else{
        cout << "failed";
    }
    return 0;
}
