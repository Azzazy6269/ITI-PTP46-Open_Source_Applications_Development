#include <iostream>

using namespace std;

class emp
{

private:
    int id;
    string name;
    int age;
    int salary;

public:
    emp()
    {
        id = 0;
        name= "unknown";
        age=0;
        salary=0;
    }
    emp(int _id)
    {
        setId(_id);
        name= "unknown";
        age=0;
        salary=0;
    }
    emp(int _id,string _name)
    {
        setId(_id);
        setNmae(_name);
        age=0;
        salary=0;
    }
    emp(int _id,string _name,int _age)
    {
        setId(_id);
        setNmae(_name);
        setAge(_age);
        salary=0;
    }
    emp(int _id,string _name,int _age,int _salary)
    {
        setId(_id);
        setNmae(_name);
        setAge(_age);
        setSalary(_salary);
    }
    ~emp(){
    }


    int getId()
    {
        return id;
    }
    string getName()
    {
        return name;
    }
    int getAge()
    {
        return age;
    }
    int getSalary()
    {
        return salary;
    }

    void setId(int _id)
    {
        if(_id>0)
        {
            id = _id;
            cout<<"id has been updated"<<endl;
        }
        else
        {
            cout<<"invalid id"<<endl;
        }
    }
    void setNmae(string _name)
    {
        name= _name;
        cout<<"name has been updated"<<endl;
    }
    void setSalary(int _salary)
    {
        if(_salary>0 && _salary<=250000)
        {
            salary = _salary;
            cout<<"salary has been updated"<<endl;
        }
        else
        {
            cout<<"invalid salary"<<endl;
        }
    }
    void setAge(int _age)
    {
        if(_age>0 && _age<=60)
        {
            age = _age;
            cout<<"age has been updated"<<endl;
        }
        else
        {
            cout<<"invalid age"<<endl;
        }
    }


    void print()
    {
        cout<<"emp name : "<<name<<" , "<<"Id : "<<id<<" , "<<"Age : "<<age<<" , "<<"salary : "<<salary<<endl;
    }


};


int main()
{
    emp e1 ;//all data about this emp will be stored in stack
    e1.setAge(32);
    e1.setId(116);
    e1.setNmae("Mostafa Elsayed");
    e1.setSalary(60000);
    e1.print();
    cout<<e1.getName()<<" : "<<e1.getId()<<" : "<<e1.getAge()<<" : "<<e1.getSalary()<<endl;
    cout<<"==================="<<endl;

    emp* e2 = new emp(14,"Kareem ibraheem",33,50000);//refrence in stack , data in heap
    (*e2).print();
    //e1 and e3 will destroyed automatically and you can't use delete with them as e1 isn't a pointer or a reference
    //but you can delete e2 as it's a pointer . it will not destroyed by itself
    delete e2;

}
