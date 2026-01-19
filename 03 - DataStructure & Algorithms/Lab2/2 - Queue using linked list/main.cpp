#include <iostream>

using namespace std;

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
    Queue q ;
    q.Enqueue(1);
    q.Enqueue(2);
    q.Enqueue(3);
    q.Enqueue(4);
    q.Dequeue();
    q.print();
    if(q.isFull())
        cout<<"true";
    return 0;
}
