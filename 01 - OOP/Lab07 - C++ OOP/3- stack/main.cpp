#include <iostream>

using namespace std;

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
            cout<<"stack is filled"<<endl;
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

};
int main()
{
    Stack* s = new Stack(5);
    (*s).push(5);
    (*s).push(11);
    (*s).push(9);
    (*s).push(8);
    (*s).push(33);
    (*s).push(15);
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    return 0;
}
