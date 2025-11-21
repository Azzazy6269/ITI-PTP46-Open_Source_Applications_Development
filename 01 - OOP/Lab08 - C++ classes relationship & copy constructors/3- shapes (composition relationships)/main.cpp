#include <iostream>

using namespace std;
class Point
{
private:
    int x=0;
    int y=0;
public:
    Point()
    {
        cout<<"point has been created"<<endl;
    }
    Point(int x,int y)
    {
        cout<<"point has been created"<<endl;
        setX(x);
        setY(y);
    }
    ~Point()
    {
        cout<<"point has been deleted"<<endl;
    }
    void setX(int _x)
    {
        if(_x>=0)
        {
            x =_x;
        }
    }
    void setY(int _y)
    {
        if(_y>=0)
        {
            y = _y;
        }
    }
    int getX()
    {
        return x;
    }
    int getY()
    {
        return y;
    }


};

class rectangle
{
private:
    Point ul;
    Point lr;
public:
    rectangle(int ulx,int uly,int lrx,int lry):ul(ulx,uly),lr(lrx,lry)
    {
        cout<<"rectangle has been created"<<endl;
    }
    ~rectangle()
    {
        cout<<"rectangle has been deleted"<<endl;
    }
    void setUL(int x, int y)
    {
        ul.setX(x);
        ul.setY(y);
    }
    void setLR(int x,int y)
    {
        lr.setX(x);
        lr.setY(y);
    }
};


class triangle
{
private:
    Point p1;
    Point p2;
    Point p3;
public:
    triangle(int x1,int y1,int x2,int y2,int x3,int y3):p1(x1,y1),p2(x2,y2),p3(x3,y3)
    {
        cout<<"triangle has been created"<<endl;
    }
    ~triangle()
    {
        cout<<"triangle has been deleted"<<endl;
    }
    void setp1(int x,int y)
    {
        p1.setX(x);
        p1.setY(y);
    }
    void setp2(int x,int y)
    {
        p2.setX(x);
        p2.setY(y);
    }
    void setp3(int x,int y)
    {
        p3.setX(x);
        p3.setY(y);
    }

} ;

class circle
{
private:
    Point center;
    int diameter=0;
public:
    circle(int _centerX,int _centerY,int _diameter):center(_centerX,_centerY)
    {
        cout<<"circle has been created"<<endl;
        diameter = _diameter;
    }
    ~circle()
    {
        cout<<"circle has been deleted"<<endl;
    }
    void setcenter(int x,int y)
    {
        center.setX(x);
        center.setY(y);
    }
    void setdiameter(int r)
    {
        if(r>0)
        {
            diameter=r;
        }
    }
};
int main()
{

    /* Notes:
    When creating an object like rectangle:
       - The constructors of its member objects (Points) are called first.
       - Then the rectangle's own constructor is called.

    When deleting a rectangle object:
       - The rectangle's destructor is called first.
       - Then the destructors of its member objects (Points) are called.
    */
    rectangle* r1 = new rectangle(5,8,7,10);
    delete r1;
    cout<<"===================="<<endl;
    triangle* t1 = new triangle(8,9,4,3,7,15);
    delete t1;
    cout<<"===================="<<endl;
    circle* c1 = new circle(5,8,20);
    delete c1;
    return 0;
}
