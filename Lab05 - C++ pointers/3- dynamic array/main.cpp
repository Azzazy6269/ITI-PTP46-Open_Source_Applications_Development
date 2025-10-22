#include <iostream>

using namespace std;

int main()
{
    int _size;
    cout << "Enter array size: ";
    cin >> _size;
    int* arr = new int[_size];
    for(int i =0;i<_size;i++){
        cin >> arr[i];
        if(cin.fail()){
            cout<<"invalid data";
            return 0;
        }
    }
    for(int i =0; i<_size;i++)
        cout<<arr[i]<<"  ";

    return 0;
}
