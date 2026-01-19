#include <iostream>
#include <string>
#include <cstring>
using namespace std;


class LinkedList
{
    int ID=0;
    struct Node
    {
        int id;
        string name;
        int age;
        Node * previous=nullptr;
        Node * next = nullptr;
        Node(int _id,string _name,int _age)
        {
            id = _id;
            name = _name;
            age = _age;
        }
    };
    Node * head;
    Node * tail;
    int length;
public :
    LinkedList()
    {
        head = tail =nullptr;
        length =0;
    }
    bool isEmpty()
    {
        if(head == nullptr)
            return true;
        return false;
    }
    void searchWithId(int _id){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0;i<length;i++){
            if(temp->id == _id){
                cout<<"id : "<<temp->id<<" ,name : "<<temp->name<<" age : "<<temp->age<<endl;
                return;
            }
            temp = temp->next;
        }
        cout<<"There's no such id";
    }
    void searchWithName(string _name){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0;i<length;i++){
            if(temp->name == _name){
                cout<<"id : "<<temp->id<<" ,name : "<<temp->name<<" age : "<<temp->age<<endl;
                return;
            }
            temp = temp->next;
        }
        cout<<"There's no such name";
    }
    void appendAtLast(int _id,string _name,int _age)
    {
        Node * temp =new Node(_id,_name,_age);
        cout<<"element was appended id : "<<temp->id<<endl;
        if(isEmpty())
        {
            head = tail = temp;
        }else{
            temp->previous = tail;
            tail->next = temp;
            tail = temp;
        }
        length++;
    }
    void appendAtFirst(int _id,string _name,int _age)
    {
        Node * temp =new Node(_id,_name,_age);
        cout<<"element was appended id : "<<temp->id<<endl;
        if(isEmpty())
        {
            head = tail = temp;
        }else{
            temp->next = head;
            head->previous = temp;
            head = temp;
        }
        length++;
    }
    void deleteAtLast(){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        cout<<"element was deleted id : "<<tail->id<<endl;
        if(length==1){
            delete head;
            head = tail =nullptr;
        }else{
        Node * temp = tail;
        tail->previous->next = nullptr;
        tail = tail->previous;
        delete temp;
        }
        length--;

    }
    void deleteAtFirst(){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }

        cout<<"element was deleted id : "<<head->id<<endl;
        if(length==1){
            delete head;
            head = tail =nullptr;
        }else{
            Node * temp = head;
            head->next->previous = nullptr;
            head = head->next;
            delete temp;
        }
        length--;
    }
    void deleteWithId(int _id){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0;i<length;i++){
            if(temp->id == _id){
                if(tail == temp){
                    deleteAtLast();
                    return;
                }else if(head== temp){
                    deleteAtFirst();
                    return;
                }else{
                    cout<<"element was deleted id : "<<temp->id<<endl;
                    temp->previous->next = temp->next;
                    temp->next->previous = temp->previous;
                    delete temp;
                    length--;
                    return;
                }
            }
            temp = temp->next;
        }
        cout<<"There's no such id";
    }
    void deleteWithName(string _name){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0;i<length;i++){
            if(temp->name == _name){
                if(tail == temp){
                    deleteAtLast();
                    return;
                }else if(head== temp){
                    deleteAtFirst();
                    return;
                }else{
                    cout<<"element was deleted name : "<<temp->name<<endl;
                    temp->previous->next = temp->next;
                    temp->next->previous = temp->previous;
                    delete temp;
                    length--;
                    return;
                }
            }
            temp = temp->next;
        }
        cout<<"There's no such name";
    }
    void Disply(){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        while(temp != nullptr){
            cout<<"id : "<<temp->id<<" ,name : "<<temp->name<<" age : "<<temp->age<<endl;
            temp = temp->next;
        }
    }
    void deleteAll(){
        if(isEmpty()){
            cout<<"Empty list"<<endl;
            return;
        }
        while(length>0){
            deleteAtFirst();
        }
    }

    LinkedList(LinkedList& ls)
    {
        head = tail = nullptr;
    length = 0;

    Node* temp = ls.head;
    while (temp != nullptr)
    {
        appendAtLast(temp->id, temp->name, temp->age);
        temp = temp->next;
    }
    }
    void operator=(LinkedList& ls)
    {
        head = tail = nullptr;
    length = 0;

    Node* temp = ls.head;
    while (temp != nullptr)
    {
        appendAtLast(temp->id, temp->name, temp->age);
        temp = temp->next;
    }
    }
};

int main()
{
    LinkedList ls ;
    ls.appendAtLast(1,"olj",22);
    ls.appendAtLast(2,"grj",22);
    ls.appendAtLast(3,"fhj",24);
    ls.deleteAtLast();
    ls.deleteAtLast();
    ls.searchWithId(1);
    ls.appendAtLast(4,"hgf",25);
    ls.deleteWithId(4);
    ls.appendAtLast(5,"kdj",25);
    ls.appendAtLast(6,"sfd",25);
    ls.appendAtLast(7,"sfd",25);
    ls.appendAtLast(8,"sfd",25);
    ls.deleteWithName("sfd");
    ls.Disply();
    LinkedList ls2 = ls;
    ls2.Disply();
    ls.deleteAll();
    ls.Disply();

    return 0;
}
