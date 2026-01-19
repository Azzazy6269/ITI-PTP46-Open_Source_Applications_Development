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
class Queue
{
    struct Node
    {
         int val;
         Node* next;
    };
    Node* rear = new Node;
    Node * front = new Node ;
    int length;

public :
     Queue(){
        rear = front = nullptr;
        length=0;
    }
    bool isEmpty(){
        return (front==nullptr);
    }
    bool isFull(){
        Node* temp = new Node;
        if(temp ==nullptr)
            return true;
        return false;
    }
    void Enqueue(int _val){
        Node* temp = new Node;
        temp->val = _val;
        if(isEmpty()){
            rear = front = temp;
            temp->next=nullptr;
        }else{
            rear->next = temp;
            rear = temp;
        }
        length++;
    }
    int Dequeue(){
        if(isEmpty())
            return -1;
        int res = front->val;
        Node* temp = new Node;
        temp = front;
        front = front->next;
        delete temp;
        length--;
        return res;

    }
    void print(){
        Node* temp = new Node;
        temp = front;
       for(int i=0;i<length;i++){
            cout<<temp->val<<endl;
            temp = temp->next;
        }
    }
};

int main()
{
    Queue * q = new Queue();
    char menu[6][10]={{"Enqueu"},{"Dequeue"},{"Print"},{"is full?"},{"is empty?"},{"Exit"}};
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
                q->Enqueue(input);
                cin.clear();
                break;
            case 1 :
                q->Dequeue();
                getch();
                break;
            case 2 :
                q->print();
                getch();
                break;
            case 3 :
                {
                if(q->isFull()) cout<<"Full list";
                if(!q->isFull()) cout<<"not Full";
                getch();
                break;
                }

            case 4 :
                {
                if(q->isEmpty()) cout<<"empty list";
                if(!q->isEmpty()) cout<<"not empty";
                getch();
                break;
                }
            case 5 :
                flag =true;

            }
            break;
        }

    }while(!flag);

    return 0;
}

