#include <iostream>
#include <stdexcept>
using namespace std;


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
};

int main() {
    LinkedStack a;
    a.push(15);
    a.push(25);
    a.push(35);

    int x = 0;
    a.Pop(x);
    a.Print();


    return 0;
}
