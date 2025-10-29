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
        }
        else
        {
            cout<<"can't accept this size . default size is applied which is 10";
            size = 10;
        }
        arr = new int[size];
    }
    Stack(Stack& s)
    {
        size = s.size;
        tos = s.tos;
        arr = new int[size];
        for(int i = 0; i<tos;i++)
        {
            arr[i] = s.arr[i];
        }
    }
    ~Stack() {
        delete[] arr;
    }
    void push(int value)
    {
        if(tos==size)
        {
            cout<<"stack is filled"<<endl;
            return;
        }
        arr[tos++]=value;
    }
    void pop()
    {
        if(tos==0)
        {
            cout<<"stack is empty"<<endl;
            return ;
        }
        cout<<arr[--tos]<<endl;
    }
};
int main()
{
    Stack* s1 = new Stack(5);
    (*s1).push(5);
    (*s1).push(11);
    (*s1).push(9);
    (*s1).push(8);
    (*s1).push(33);
    (*s1).push(15);


    Stack s2 = *s1; //call copy constructor
    Stack s3(*s1); //call copy constructor
    s2.pop();// we didn't write (*s2.pop())
    s2.pop();
    s3.pop();
    s3.pop();
    (*s1).pop();
    (*s1).pop();

    return 0;
}
