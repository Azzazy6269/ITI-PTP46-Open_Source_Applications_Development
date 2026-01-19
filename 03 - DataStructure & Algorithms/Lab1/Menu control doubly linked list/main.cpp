#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
#include <limits>
using namespace std;

#define null -32

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}
void gotoxy(int x, int y) {
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
void ClearCurrentLine() {
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO csbi;
    GetConsoleScreenBufferInfo(hConsole, &csbi);

    COORD startPos = { 0, csbi.dwCursorPosition.Y };
    SetConsoleCursorPosition(hConsole, startPos);

    for (int i = 0; i < csbi.dwSize.X; i++)
        cout << ' ';

    SetConsoleCursorPosition(hConsole, startPos);
}

class LinkedList
{
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
    void searchWithId(int _id)
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0; i<length; i++)
        {
            if(temp->id == _id)
            {
                cout<<"id : "<<temp->id<<" ,name : "<<temp->name<<" age : "<<temp->age<<endl;
                return;
            }
            temp = temp->next;
        }
        cout<<"There's no such id";
    }
    void searchWithName(string _name)
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0; i<length; i++)
        {
            if(temp->name == _name)
            {
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
        }
        else
        {
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
        }
        else
        {
            temp->next = head;
            head->previous = temp;
            head = temp;
        }
        length++;
    }
    void deleteAtLast()
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        cout<<"element was deleted id : "<<tail->id<<endl;
        if(length==1)
        {
            delete head;
            head = tail =nullptr;
        }
        else
        {
            Node * temp = tail;
            tail->previous->next = nullptr;
            tail = tail->previous;
            delete temp;
        }
        length--;

    }
    void deleteAtFirst()
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }

        cout<<"element was deleted id : "<<head->id<<endl;
        if(length==1)
        {
            delete head;
            head = tail =nullptr;
        }
        else
        {
            Node * temp = head;
            head->next->previous = nullptr;
            head = head->next;
            delete temp;
        }
        length--;
    }
    void deleteWithId(int _id)
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0; i<length; i++)
        {
            if(temp->id == _id)
            {
                if(tail == temp)
                {
                    deleteAtLast();
                    return;
                }
                else if(head== temp)
                {
                    deleteAtFirst();
                    return;
                }
                else
                {
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
    void deleteWithName(string _name)
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        for(int i =0; i<length; i++)
        {
            if(temp->name == _name)
            {
                if(tail == temp)
                {
                    deleteAtLast();
                    return;
                }
                else if(head== temp)
                {
                    deleteAtFirst();
                    return;
                }
                else
                {
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
    void Disply()
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        Node * temp = head;
        while(temp != nullptr)
        {
            cout<<"id : "<<temp->id<<" ,name : "<<temp->name<<" age : "<<temp->age<<endl;
            temp = temp->next;
        }
    }
    void deleteAll()
    {
        if(isEmpty())
        {
            cout<<"Empty list"<<endl;
            return;
        }
        while(length>0)
        {
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
static LinkedList* ls = new LinkedList();
void ShowAppendMenu();
void ShowDeleteMenu();
void ShowSearchMenu();

int main()
{

    char menu[6][10]= {{"Append"},{"Delete"},{"Search"},{"Disply"},{"is empty?"},{"Exit"}};
    int highlighted_Index = 0;
    int flag =0;
    do
    {
        system("cls");
        for(int i =0 ; i<6 ; i++)
        {
            if(highlighted_Index == i)
            {
                textattr(240);
                cout << menu[i]<<endl;
                textattr(7);
            }
            else
            {
                cout << menu[i]<<endl;
            }
        }
        char x;
        x = _getch();
        if(x == -32) x= _getch();
        switch (x)
        {
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
            switch(highlighted_Index)
            {
            case 0 :
                ShowAppendMenu();
                getch();
                break;
            case 1 :
                ShowDeleteMenu();
                getch();
                break;
            case 2 :
                ShowSearchMenu();
                getch();
                break;
            case 3 :
                ls->Disply();
                getch();
                break;
            case 4 :{
                if(ls->isEmpty()){
                    cout << "empty list"<<endl;
                }else{
                    cout << "not empty"<<endl;
                }
                getch();
                break;
            }

            case 5 :
                flag =true;

            }
            break;
        }

    }
    while(!flag);

    return 0;
}


void ShowAppendMenu()
{
    int highlightedIndex_append = 0;
    int exitFlag =0;
    char menu[3][20]= {{"append at first"},{"append at last"},{"back to main menu"}};
    do{
        for(int i =0 ; i<3 ; i++)
        {
            gotoxy(8,i);
            if(highlightedIndex_append == i)
            {
                textattr(240);
                cout<<menu[i]<<endl;
                textattr(7);
            }
            else
            {
                textattr(7);
                cout<<menu[i]<<endl;
            }
        }
        int x = getch();
        if(x==-32) x = getch();
        switch(x)
        {
        case 72 :
            highlightedIndex_append--;
            if(highlightedIndex_append<0) highlightedIndex_append=2;
            break;
        case 80 :
            highlightedIndex_append++;
            if(highlightedIndex_append>2) highlightedIndex_append=0;
            break;
        case 13 :
            gotoxy(0,8);
            ClearCurrentLine();
            cout<<"you chose "<<menu[highlightedIndex_append]<<endl;
            if(highlightedIndex_append==2)
                return;
            cout<<"Enter id : "<<endl;
            int id;
            cin >> id;
            cout<<"Enter age : "<<endl;
            int age;
            cin >> age;
            cout<<"Enter name : "<<endl;
            string name;
            cin.ignore();
            getline(cin, name);
            cin.clear();

            switch(highlightedIndex_append)
            {
            case 0:
                ls->appendAtFirst(id,name,age);
                return;
            case 1:
                ls->appendAtLast(id,name,age);
                return;
            }
        }
    }while(!exitFlag);
}

void ShowDeleteMenu()
{
    int highlightedIndex_delete = 0;
    int exitFlag =0;
    char menu[6][20]= {{"delete at first"},{"delete at last"},{"delete by id"},{"delete by name"},{"delete all"},{"back to main menu"}};
    do
    {
        for(int i =0 ; i<6 ; i++)
        {
            gotoxy(10,i);
            if(highlightedIndex_delete == i)
            {
                textattr(240);
                cout<<menu[i]<<endl;
                textattr(7);
            }
            else
            {
                textattr(7);
                cout<<menu[i]<<endl;
            }
        }
        int x = getch();
        if(x==-32) x = getch();
        switch(x)
        {
        case 72 :
            highlightedIndex_delete--;
            if(highlightedIndex_delete<0) highlightedIndex_delete=5;
            break;
        case 80 :
            highlightedIndex_delete++;
            if(highlightedIndex_delete>5) highlightedIndex_delete=0;
            break;
        case 13 :
            gotoxy(0,10);
            ClearCurrentLine();
            cout<<"you chose "<<menu[highlightedIndex_delete]<<endl;
            switch(highlightedIndex_delete)
            {
            case 0:
                ls->deleteAtFirst();
                return;
            case 1:
                ls->deleteAtLast();
                return;
            case 2:{
                cout<<"Enter id : "<<endl;
                int id;
                cin >> id;
                ls->deleteWithId(id);
                return;
            }
            case 3:
                {
                cout<<"Enter name :"<<endl;
                string name;
                getline(cin,name);
                ls->deleteWithName(name);
                return;
                }

            case 4 :
                ls->deleteAll();
                return;
            case 5:
                return;
            }
        }

    }
    while(!exitFlag);
}

void ShowSearchMenu()
{
    int highlightedIndex_search = 0;
    int exitFlag =0;
    char menu[3][20]= {{"search by id"},{"search by name"},{"back to main menu"}};
    do
    {
        for(int i =0 ; i<2 ; i++)
        {
            gotoxy(10,i);
            if(highlightedIndex_search == i)
            {
                textattr(240);
                cout<<menu[i]<<endl;
                textattr(7);
            }
            else
            {
                textattr(7);
                cout<<menu[i]<<endl;
            }
        }
        int x = getch();
        if(x==-32) x = getch();
        switch(x)
        {
        case 72 :
            highlightedIndex_search--;
            if(highlightedIndex_search<0) highlightedIndex_search=2;
            break;
        case 80 :
            highlightedIndex_search++;
            if(highlightedIndex_search>2) highlightedIndex_search=0;
            break;
        case 13 :
            gotoxy(0,8);
            ClearCurrentLine();
            cout<<"you chose "<<menu[highlightedIndex_search]<<endl;
            switch(highlightedIndex_search)
            {
            case 0:
                {
                cout<<"Enter id : "<<endl;
                int id;
                cin >> id;
                ls->searchWithId(id);
                return;
                }

            case 1:
                {
                cout<<"Enter name : "<<endl;
                string name;
                cin.ignore();
                getline(cin, name);
                cin.clear();
                ls->searchWithName(name);
                return;
                }
            case 2:
                return;
            }
        }

    }
    while(!exitFlag);
}

