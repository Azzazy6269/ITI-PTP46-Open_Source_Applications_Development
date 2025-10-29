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
class Stack
{
private:
    int size=0;
    int* arr ;
    int tos=0;
public:
    Stack(int _size)
    {
        if(_size >0)
        {
            size = _size;
        }else{
            cout<<"can't accept this size . default size is applied which is 10";
            size = 10;
        }
            arr = new int[size];
    }
    ~Stack(){}
    void push(int value){
        if(tos==size){
            cout<<"stack is full"<<endl;
            return;
        }
        arr[tos++]=value;
    }
    void pop(){
        if(tos==0){
            cout<<"stack is empty"<<endl;
            return ;
        }
        cout<<arr[--tos]<<endl;
    }
    void peek(){
        if(tos==0){
            cout<<"stack is empty"<<endl;
            return ;
        }
        cout<<arr[tos-1]<<endl;
    }
    void isFull(){
        if(tos==size){
            cout<<"stack is full"<<endl;
        }else{
            cout<<"stack isn't full"<<endl;
        }
    }
    void isEmpty(){
        if(tos==0){
            cout<<"stack is empty"<<endl;
            return ;
        }else{
            cout<<"stack isn't empty"<<endl;
        }
    }
};
int main()
{
    Stack* s1 = new Stack(5);
    char menu[6][10]={{"push"},{"pop"},{"peek"},{"is full?"},{"is empty?"},{"Exit"}};
    int highlighted_Index = 0;
    int flag =0;
    do{
        system("cls");
        for(int i =0 ; i<6 ; i++){
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
            if(highlighted_Index<0) highlighted_Index=5;
            break;
        case 80:
            highlighted_Index++;
            if(highlighted_Index>5) highlighted_Index=0;
            break;
        case 13:
            cout<<"you chose "<<menu[highlighted_Index]<<endl;
            switch(highlighted_Index){
            case 0 :
                cout<<"Enter integer : "<<endl;
                int input;
                cin >> input;
                s1->push(input);
                cin.clear();
                break;
            case 1 :
                s1->pop();
                getch();
                break;
            case 2 :
                s1->peek();
                getch();
                break;
            case 3 :
                s1->isFull();
                getch();
                break;
            case 4 :
                s1->isEmpty();
                getch();
                break;
            case 5 :
                flag =true;

            }
            break;
        }

    }while(!flag);

    return 0;
}
