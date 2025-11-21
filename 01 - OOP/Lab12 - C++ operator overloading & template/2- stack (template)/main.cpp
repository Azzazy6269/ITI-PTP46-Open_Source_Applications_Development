#include <iostream>

using namespace std;

template<class T>
class Stack
{
private:
    int size=0;
    T* arr ;
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
            arr = new T[size];
    }
    ~Stack(){}
    void push(T value){
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
    Stack<char>* s = new Stack<char>(5);
    (*s).push('f');
    (*s).push('k');
    (*s).push('5');
    (*s).push('p');
    (*s).push('e');
    (*s).push('A');
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    (*s).pop();
    return 0;
}
