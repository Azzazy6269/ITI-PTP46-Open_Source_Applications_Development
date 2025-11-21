#include <iostream>

using namespace std;

struct employee {
    int id;
    string name;
    int age;
};
void printEmployee(employee e);

int main()
{
    employee emps[10];

    for(int i = 0 ; i<3 ; i++){
        cout << "Enter id : ";
        cin >>emps[i].id;
        if(cin.fail()){
            cout << "wrong dataType . Application is terminating";
            return 0;
        }

        cout << "Enter name : ";
        cin >> emps[i].name;
        if(cin.fail()){
            cout << "wrong dataType . Application is terminating";
            return 0;
        }

        cout << "Enter age : ";
        cin >> emps[i].age;
        if(cin.fail()){
            cout << "wrong dataType . Application is terminating";
            return 0;
        }
    }

    for(int i = 0 ; i<3 ; i++){
        printEmployee(emps[i]);
    }

    return 0;
}
void printEmployee(employee e){
    cout<<"id : "<<e.id<<endl<<"name : "<<e.name<<endl<<"faculty : "<<e.age<<endl;
}
