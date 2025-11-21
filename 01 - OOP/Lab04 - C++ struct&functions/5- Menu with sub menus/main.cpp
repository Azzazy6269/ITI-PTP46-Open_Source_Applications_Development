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
void gotoxy(int x, int y) {
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
void ClearCurrentLine() {
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO csbi;
    GetConsoleScreenBufferInfo(hConsole, &csbi);

    COORD startPos = { 0, csbi.dwCursorPosition.Y };
    SetConsoleCursorPosition(hConsole, startPos);

    for (int i = 0; i < csbi.dwSize.X; i++)
        cout << ' ';

    SetConsoleCursorPosition(hConsole, startPos);
}
void ShowNewMenu();
void ShowDisplyMenu();
int main()
{
    char menu[3][10]={{"New"},{"Disply"},{"Exit"}};
    int highlighted_Index = 0;
    int flagExit =0;
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
          //  cout<<"you chose "<<menu[highlighted_Index]<<endl;
            if(highlighted_Index == 0){
                ShowNewMenu();
            }else if(highlighted_Index ==1 ){
                ShowDisplyMenu();
            }else if(highlighted_Index ==2 ){
                flagExit=1;
            }
            break;
        }

    }while(!flagExit);

    return 0;
}
void ShowNewMenu(){
    int highlightedIndex_new = 0;
    int exitFlag =0;
    char menu[6][20]={{"new c++ file"},{"new header file"},{"new class"},{"new project"},{"new repository"},{"back to main menu"}};
    do{
        for(int i =0 ; i<6 ;i++){
            gotoxy(8,i);
            if(highlightedIndex_new == i){
                textattr(240);
                cout<<menu[i]<<endl;
                textattr(7);
            }else{
                textattr(7);
                cout<<menu[i]<<endl;
            }
        }
            int x = getch();
            if(x==-32) x = getch();
            switch(x){
            case 72 :
                highlightedIndex_new--;
                break;
            case 80 :
                highlightedIndex_new++;
                break;
            case 13 :
                gotoxy(0,8);
                ClearCurrentLine();
                cout<<"you chose "<<menu[highlightedIndex_new];
                if(highlightedIndex_new==5) exitFlag = 1;
            }


    }while(!exitFlag);
}


void ShowDisplyMenu(){
    int highlightedIndex_new = 0;
    int exitFlag =0;
    char menu[3][30]={{"disply element with index"},{"disply all elements"},{"back to main menu"}};
    do{
        for(int i =0 ; i<3 ;i++){
            gotoxy(8,i);
            if(highlightedIndex_new == i){
                textattr(240);
                cout<<menu[i]<<endl;
                textattr(7);
            }else{
                textattr(7);
                cout<<menu[i]<<endl;
            }
        }
            int x = getch();
            if(x==-32) x = getch();
            switch(x){
            case 72 :
                highlightedIndex_new--;
                break;
            case 80 :
                highlightedIndex_new++;
                break;
            case 13 :
                gotoxy(0,5);
                ClearCurrentLine();
                cout<<"you chose "<<menu[highlightedIndex_new];
                if(highlightedIndex_new==2) exitFlag = 1;
            }


    }while(!exitFlag);
}

