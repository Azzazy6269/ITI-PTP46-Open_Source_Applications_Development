#include <iostream>

using namespace std;

class person{
protected:
    int id = 0 ;
    string name = "";
    int age = 0;
public:
    person(int _id,string _name,int _age){
        setId(_id);
        setName(_name);
        setAge(_age);
    }
    void setId(int _id){
        if(_id>0)
            id = _id;
    }
    void setName(string _name){
        if(_name.size()>2)
            name = _name;
    }
    void setAge(int _age){
        if(_age>22)
            age = _age;
    }

    int getId(){
        return id;
    }
    string getName(){
        return name;
    }
    int getAge(){
        return age;
    }
};

class emp:public person{
private:
    int salary = 0;
public:
    emp(int _id,string _name,int _age,int _salary):person(_id,_name,_age){
        setSalary(_salary);
    }
    void setSalary(int _salary){
        if(_salary>15000){
            salary = _salary;
        }
    }
    int getSalary(){
        return salary;
    }
    void print(){
            cout<<id<<" : " <<name<<" : "<<age<<" : "<<salary<<endl;
    }
};

class student : public person{
private:
    float grade =0;
public:
    student(int _id,string _name,int _age,float _grade):person(_id,_name,_age){
        setGrade(_grade);
    }
    void setGrade(float _grade){
        if(_grade>=0 && _grade<=4){
            grade = _grade;
        }
    }
    float getGrade(){
        return grade;
    }
    void print(){
        cout<<id<<" : " <<name<<" : "<<age<<" : "<<grade<<endl;
    }

};

int main()
{
    emp* e1 =new emp(18,"othman ibrahim",35,80000);
    e1->print();

    student* s1 = new student(14,"Kareem Osama",19,3.2);
    s1->print();
    return 0;
}
