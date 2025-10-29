#include <iostream>

using namespace std;
class parent{
protected :
    int x,y;
public :
    parent(int _x=1,int _y=1){
        setX(_x);
        setY(_y);
    }
    void setX(int _x){
        x=_x;
    }
    void setY(int _y){
        y = _y;
    }
    int getX(){
        return x;
    }
    int getY(){
        return y;
    }
    virtual int add(){
        return x+y;
    }
};
class child:public parent{
private:
    int z;
public:
    child(int _x=1,int _y=1,int _z=1):parent(_x,_y){
        z = _z;
    }
    int add(){
        return x+y+z;
    }
};
int main()
{
    parent* p = new parent(3,4);
    cout<<p->add()<<endl;

    p = new child(5,6,7);
    cout<<p->add()<<endl;

    child c(10,10,10);
    p = &c;
    cout<<p->add()<<endl;

    return 0;
}
