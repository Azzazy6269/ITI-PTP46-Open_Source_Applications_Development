#include <iostream>

using namespace std;

class BankAccout{
    private:
        int id;
        string name;
        int balance;
    public :
        int getId(){
            return id;
        }
        int getBalance(){
            return balance;
        }
        string getName(){
            return name;
        }

        void setId(int _id){
            if(_id>0){
                id = _id;
                cout<<"id has been updated"<<endl;
            }else{
                cout<<"invalid id"<<endl;
            }
        }
        void setName(string _name){
            name=_name;
        }
        void deposit(int cash){
            if(cash>0){
                balance += cash;
                cout<<"Process succesed"<<endl;
            }else{
                cout<<"process faild . please try again"<<endl ;
            }
        }
        void widthdraw(int cash){
            if(cash>0){
                balance -= cash;
                cout<<"Process succesed"<<endl;
            }else{
                cout<<"process faild . please try again"<<endl ;
            }
        }
        void showBalance(){
            cout<<"client : "<<name<<" has "<<balance<<"$"<<endl;
        }
        void print(){
            cout<<"client : "<<name<<" , id : "<<id<<" , balance : "<<balance<<endl;
        }


};

int main()
{
    BankAccout b1 ;
    b1.setId(8897);
    b1.setName("Fatma");
    b1.deposit(400);
    b1.widthdraw(200);
    b1.deposit(3500000);
    b1.showBalance();
    b1.print();
    return 0;
}
