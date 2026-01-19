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
class LinkedStack
{
private:
    struct Node
    {
        int val;
        Node* previous;
    };

    Node* Top;

public:
    LinkedStack()
    {
        Top = nullptr;
    }

    void push(int _val)
    {
        Node* newNode = new Node();
        newNode->val = _val;
        newNode->previous = Top;
        Top = newNode;
    }

    void Pop()
    {
        if (IsEmpty())
        {
            cout<<"LinkedStack is empty";
            return;
        }
        Node* temp = Top;
        Top = Top->previous;
        delete temp;
    }
    void Pop(int& var)
    {
        if (IsEmpty())
        {
            cout<<"LinkedStack is empty";
            return;
        }
        var = Top->val;
        Node* temp = Top;
        Top = Top->previous;
        delete temp;
    }
    int GetTop()
    {
        if (IsEmpty())
        {
            cout<<"LinkedStack is empty";
            return -1;

        }
        return Top->val;
    }
    void Print()
    {
        if (IsEmpty())
        {
            cout<<"LinkedStack is empty";
            return;
        }
        Node* temp = Top;
        while (temp != nullptr)
        {
            cout << temp->val << endl;
            temp = temp->previous;
        }
    }
    bool IsEmpty()
    {
        return (Top == nullptr);
    }
   bool isFull(){
        Node* temp = new Node;
        if(temp ==nullptr)
            return true;
        return false;
    }
};
int main()
{
    LinkedStack* s1 = new LinkedStack();
    char menu[7][10]={{"push"},{"pop"},{"GetTop"},{"Print"},{"is full?"},{"is empty?"},{"Exit"}};
    int highlighted_Index = 0;
    int flag =0;
    do{
        system("cls");
        for(int i =0 ; i<7 ; i++){
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
            if(highlighted_Index<0) highlighted_Index=6;
            break;
        case 80:
            highlighted_Index++;
            if(highlighted_Index>6) highlighted_Index=0;
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
                s1->Pop();
                getch();
                break;
            case 2 :
                cout<<s1->GetTop();
                getch();
                break;
            case 3 :
                s1->Print();
                getch();
                break;
            case 4 :
                {
                if(s1->isFull()) cout<<"full list";
                if(!s1->isFull()) cout<<"not full";
                getch();
                break;
                }
            case 5 :
                {
                if(s1->IsEmpty()) cout<<"empty list";
                if(!s1->IsEmpty()) cout<<"not empty";
                getch();
                break;
                }
            case 6 :
                flag =true;

            }
            break;
        }

    }while(!flag);

    return 0;
}
