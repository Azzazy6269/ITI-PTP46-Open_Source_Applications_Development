#include <iostream>

using namespace std;

class emp{
    private:
        int id;
        string name;
        int age;
        int salary;

    public:
        int getId(){
            return id;
        }
        string getName(){
            return name;
        }
        int getAge(){
            return age;
        }
        int getSalary(){
            return salary;
        }

        void setId(int _id){
            if(_id>0){
                id = _id;
                cout<<"id has been updated"<<endl;
            }else{
                cout<<"invalid id"<<endl;
            }
        }
         void setNmae(string _name){
            name= _name;
            cout<<"name has been updated"<<endl;
        }
        void setSalary(int _salary){
            if(_salary>0 && _salary<=250000){
                salary = _salary;
                cout<<"salary has been updated"<<endl;
            }else{
                cout<<"invalid salary"<<endl;
            }
        }
        void setAge(int _age){
            if(_age>0 && _age<=60){
                age = _age;
                cout<<"age has been updated"<<endl;
            }else{
                cout<<"invalid age"<<endl;
            }
        }

        void print(){
            cout<<"emp name : "<<name<<" , "<<"Id : "<<id<<" , "<<"Age : "<<age<<" , "<<"salary : "<<salary<<endl;
        }

};


int main()
{
    emp e1 ;
    e1.setAge(32);
    e1.setId(116);
    e1.setNmae("Mostafa Elsayed");
    e1.setSalary(60000);
    e1.print();
    cout<<e1.getName()<<" : "<<e1.getId()<<" : "<<e1.getAge()<<" : "<<e1.getSalary()<<endl;
}
