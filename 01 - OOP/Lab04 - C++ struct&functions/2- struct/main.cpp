#include <iostream>

using namespace std;
struct student {
    int id =-1;
    string name;
    string faculty;
};
void printStudent(student s);
int main()
{
    student s1;

        cout << "Enter id : ";
        cin >> s1.id;
        if(cin.fail()) return 0;

        cout << "Enter name : ";
        cin >> s1.name;
        if(cin.fail()) return 0;

        cout << "Enter faculty : ";
        cin >> s1.faculty;
        if(cin.fail()) return 0;

    printStudent(s1);
    return 0;
}

void printStudent(student s){
    cout<<"id : "<<s.id<<endl<<"name : "<<s.name<<endl<<"faculty : "<<s.faculty<<endl;
}
