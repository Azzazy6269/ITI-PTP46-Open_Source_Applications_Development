#include <iostream>
#include <string.h>
using namespace std;

class student {
    private :
        string name;
        int age;
        float rate;

    public :
        string getName(){
            return name;
        }
        int getAge(){
            return age;
        }
        float getRate(){
            return rate;
        }

        void setName(string _name){
            if(_name.size()<2){
                cout << "invalid data"<<endl;
            }else{
                name = _name;
                cout<<"name has been updated"<<endl;
            }
        }
        void setAge(int _age){
            if(_age<20 || _age>25){
                cout << "invalid data"<<endl;
            }else{
                age = _age;
                cout<<"age has been updated"<<endl;
            }
        }

        void setRate(float _rate){
            if(_rate<0 || _rate>4){
                cout << "invalid data"<<endl;
            }else{
                rate = _rate;
                cout<<"rate has been updated"<<endl;
            }
        }

        void print(){
            cout<<"name : "<<name<<" , age : "<<age<<" , rate : "<<rate<<endl;
        }

};
int main()
{
        student s1;
        s1.setName("O");
        s1.setAge(22);
        s1.setRate(3.74);

        s1.print();
        cout<<s1.getName()<<":"<<s1.getAge()<<":"<<s1.getRate()<<endl;
    return 0;
}
