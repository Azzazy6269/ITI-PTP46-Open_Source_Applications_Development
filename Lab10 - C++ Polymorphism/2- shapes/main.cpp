#include <iostream>

using namespace std;
class shape
{
protected:
    float dim1;
    float dim2;
    float c;
public:
    shape(float _dim1,float _dim2)
    {
        setDim1(_dim1);
        setDim2(_dim2);
    }
    virtual void setDim1(float _dim)
    {
        if(_dim>0)
        {
            dim1 = _dim;
        }
    }
    virtual void setDim2(float _dim)
    {
        if(_dim>0)
        {
            dim2 = _dim;
        }
    }
    float getDim1()
    {
        return dim1;
    }
    float getDim2()
    {
        return dim2;
    }
    virtual float calculateArea()=0;
};
class rectangle :public shape
{
public:
    rectangle(int _dim1,int _dim2):shape(_dim1,_dim2)
    {
        c=1;
        cout<<"rectangle has been created"<<endl;
    }
    int calaculatePerimeter()
    {
        return (dim1+dim2)*2;
    }

    ~rectangle()
    {
        cout<<"rectangle has been deleted"<<endl;
    }
    float calculateArea()
    {
        return (float)dim1*dim2*c;
    }

};


class triangle : public shape
{
public:
    triangle(int base,int hight):shape(base,hight)
    {
        c=.5;
        cout<<"triangle has been created"<<endl;
    }
    ~triangle()
    {
        cout<<"triangle has been deleted"<<endl;
    }

    float calculateArea()
    {
        return (float)dim1*dim2*c;
    }
} ;

class circle : private shape
{
public:
    circle(float radius):shape(radius,radius)
    {
        c = 22.0/7;
        cout<<"circle has been created"<<endl;
    }
    ~circle()
    {
        cout<<"circle has been deleted"<<endl;
    }

    void setRadius(float r)
    {
        setDim1(r);
        setDim2(r);
    }
    float getRadius()
    {
        return dim1;
    }
    float calaculatePerimeter()
    {
        return (float)2*c*dim1;
    }
     float calculateArea()
    {
        return (float)dim1*dim2*c;
    }
};

class square : public rectangle
{
public :
    square(float _dim):rectangle(_dim,_dim)
    {
        cout<<"square has been created"<<endl;
    }
    ~square(){
        cout<<"square has been deleted"<<endl;
    }
    void setDim1(int _dim)
    {
        dim1 = _dim;
        dim2 = _dim;
    }
    void setDim2(int _dim)
    {
        dim1 = _dim;
        dim2 = _dim;
    }
    float calculateArea()
    {
        return (float)dim1*dim2*c;
    }
};
int main()
{

    rectangle* r1 = new rectangle(5,8);
    cout<<"area " <<r1->calculateArea()<<" : perimeter "<<r1->calaculatePerimeter()<<endl;
    delete r1;
    cout<<"===================="<<endl;
    triangle* t1 = new triangle(5,8);
    cout<<"area "<< t1->calculateArea()<<endl;
    delete t1;
    cout<<"===================="<<endl;
    circle* c1 = new circle(5);
    cout<<"area " <<c1->calculateArea()<<" : perimeter "<<c1->calaculatePerimeter()<<endl;
    delete c1;
    cout<<"===================="<<endl;
    square* s1 = new square(8);
    cout<<"area " <<s1->calculateArea()<<" : perimeter "<<s1->calaculatePerimeter()<<endl;
    delete s1;
    return 0;
}
