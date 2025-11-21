#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>

using namespace std;

#define null -32

void textattr(int i)
{
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}
int main()
{
    char menu[3][10]={{"New"},{"Disply"},{"Exit"}};
    int highlighted_Index = 0;
    int flag =0;
    do{
        system("cls");
        for(int i =0 ; i<3 ; i++){
            if(highlighted_Index == i){
                textattr(240);
                cout << menu[i]<<endl;
                textattr(7);
            }else{
                cout << menu[i]<<endl;
            }
        }
        char x;
        x = _getch();
        if(x == -32) x= _getch();
        switch (x){
        case 72:
            highlighted_Index--;
            if(highlighted_Index<0) highlighted_Index=2;
            break;
        case 80:
            highlighted_Index++;
            if(highlighted_Index>2) highlighted_Index=0;
            break;
        case 13:
            cout<<"you chose "<<menu[highlighted_Index]<<endl;
            getch();
            break;
        }

    }while(!flag);

    return 0;
}
