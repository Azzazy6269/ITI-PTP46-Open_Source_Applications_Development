#include <iostream>
#include <conio.h>
using namespace std;

int main()
{
    int flag =0;
    do{
    system("cls");
   // getchar();
    cout << "\nNew\nModify\nExit\nEnter a letter (n , m , e) : ";
    char x;
    cin >> x;
    switch (x){
    case 'n':
    case 'N':
        cout << "You chose : New";
        break;
    case 'm':
    case 'M':
        cout << "You chose : Modify";
        break;
    case 'e':
    case 'E':
        flag =1;
        cout << "You chose : Exit";
        break;
    }
    getchar();
    }while(!flag&&getchar());

    return 0;
}
