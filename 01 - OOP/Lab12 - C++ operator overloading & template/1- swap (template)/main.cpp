#include <iostream>

using namespace std;


class Solution
{
public:
    template<class T>
    static void swap(T& x, T& y)
    {
        T temp = x;
        x = y;
        y = temp;
    }
};
int main()
{
    int x=5, y=8;
    cout<<"x: "<<x<<" y: "<<y<<endl;

    Solution::swap(x,y);
    cout<<"x: "<<x<<" y: "<<y<<endl;

    return 0;
}
