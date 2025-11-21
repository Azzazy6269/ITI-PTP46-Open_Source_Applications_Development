#include <iostream>

using namespace std;

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
    ~Stack() {}
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
    void operator=(Stack s)
    {
        size=s.size;
        tos=s.tos;
        arr = new int[size];
        for(int i=0 ; i<size;i++){
            arr[i] = s.arr[i];
        }
    }
    Stack operator+(Stack s){
        Stack res(size+s.size);
        for(int i =0 ; i<tos;i++){
            res.push(arr[i]);
        }
        for(int i =0 ; i<s.tos;i++){
            res.push(s.arr[i]);
        }
        return res;
    }

};
int main()
{
    Stack s1(5);
    s1.push(5);
    s1.push(11);
    s1.push(9);
    s1.push(8);
    s1.push(33);
    s1.push(15);
    Stack s2(8);
    s2.push(7);
    s2.push(1);
    s2.push(95);
    s2.push(0);
    Stack s3(8);
    s3.push(72);
    s3.push(8);
    s3.push(5);
    s3.push(100);
    s2 = s1;
    s2.pop();
    s1.pop();
    s2.pop();
    s2.pop();
    Stack s4 = s2+s3;
    s4.pop();

    return 0;
}
