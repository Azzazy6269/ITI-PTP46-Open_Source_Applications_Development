#include <iostream>

using namespace std;

class Queue
{
private:
    int* arr;
    int size;
    int head =0, tail = 0;
public:
    Queue(int _size)
    {
        if(_size>0)
        {
            size =_size;
        }
        else
        {
            size = 10;
            cout<< "invalid size . default size is assigned which is 10";
        }
        arr = new int[size];
    }
    ~Queue() {}
    void Enqueue(int value)
    {
        if((head-tail ==size)||(tail-head == 1))
        {
            cout<<"queue is filled"<<endl;
            return;
        }
        if(head==size)
        {
            head =0;
        }
        arr[head++]=value;
    }
    void Dequeue()
    {
        if(head==tail)
        {
            cout<<"empty queue"<<endl;
            return;
        }
        if(tail == size)
        {
            tail = 0;
        }
        cout<<arr[tail++]<<endl;
    }

};

int main()
{
    Queue* q = new Queue(5);
    (*q).Enqueue(0);
    (*q).Enqueue(1);
    (*q).Enqueue(2);
    (*q).Enqueue(3);
    (*q).Enqueue(4);
    (*q).Enqueue(5);
    (*q).Enqueue(6);
    (*q).Dequeue();
    (*q).Dequeue();
    (*q).Dequeue();
    (*q).Dequeue();
    //(*q).Dequeue();
    //(*q).Dequeue();
    //(*q).Dequeue();
    (*q).Enqueue(6);
    (*q).Dequeue();
    (*q).Dequeue();



    return 0;
}
