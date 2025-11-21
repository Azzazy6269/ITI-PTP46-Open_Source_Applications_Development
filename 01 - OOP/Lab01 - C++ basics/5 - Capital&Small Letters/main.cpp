#include <iostream>

using namespace std;

int main()
{
    char capitalLetter ;
    cout << "Enter Capital letter : ";
    cin >> capitalLetter;
    int Casting = capitalLetter;
    char smallLetter = capitalLetter + 32;
    cout <<capitalLetter <<" --> " <<smallLetter;
    return 0;
}
