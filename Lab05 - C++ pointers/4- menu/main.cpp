#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
using namespace std;

struct employee {
    int id = -1;
    string name;
    int age;
};
void printEmployee(employee e);
void textattr(int i)
{
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}
int main()
{
    cout<<"Enter size of array : ";
    int _size;
    cin>>_size;
    if(cin.fail()||_size<1) {
        cout<< "invalid data";
        return 0;
    }
    employee* emps = new employee[_size];
    char menu[3][10]={{"New"},{"Disply"},{"Exit"}};
    int highlighted_Index = 0;
    int exitFlag =0;
    do{
        // print menu
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

        //read if user pressed up or down or enter
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
            //if user pressed enter on New
            if(highlighted_Index==0){
                int index =-1;
                cout<<"Enter index : ";
                cin>> index;
                if(cin.fail() || index<0 ||index>=_size){
                    cout << "invalid index";
                    continue;
                }else if(emps[index].id<0){
                    cout<<"Enter id : ";
                    cin>> emps[index].id;
                    if(cin.fail() || emps[index].id<0){
                        cout << "invalid id";
                        continue;
                    }
                    cout <<"Enter name : ";
                    cin>> emps[index].name;
                    if(cin.fail()){
                        cout << "invalid name";
                        continue;
                    }
                    cout <<"Enter age : ";
                    cin>> emps[index].age;
                    if(cin.fail()||emps[index].age>60){
                        cout << "invalid age";
                        continue;
                    }
                }else if(emps[index].id>=0){
                    cout<<"there's exist data in this index do you want to modify it?(if yes press 1)"<<endl;
                    x = getch();
                    if(x=='1'){
                            cout<<"Enter id : ";
                        cin>> emps[index].id;
                        if(cin.fail() || emps[index].id<0){
                            cout << "invalid id";
                            continue;
                        }
                        cout <<"Enter name : ";
                        cin>> emps[index].name;
                        if(cin.fail()){
                            cout << "invalid name";
                            continue;
                        }
                        cout <<"Enter age : ";
                        cin>> emps[index].age;
                        if(cin.fail()||emps[index].age>60){
                            cout << "invalid age";
                            continue;
                        }
                    }
                }
            getch();
            break;
            }

            //if user pressed enter on disply
            else if (highlighted_Index == 1){
                for(int i =0 ; i<_size ;i++){
                    if(emps[i].id >=0 ) printEmployee(emps[i]);
                }
                x = getch();
            }

            //if user pressed enter on Exit
            else if (highlighted_Index == 2){
                exitFlag=1;
                delete emps;
                break;
            }
        }
    }while(!exitFlag);

    return 0;
}

void printEmployee(employee e){
    cout<<"id : "<<e.id<<endl<<"name : "<<e.name<<endl<<"age : "<<e.age<<endl<<endl;
}
