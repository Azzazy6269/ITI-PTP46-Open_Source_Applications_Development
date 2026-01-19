#include <iostream>
#include <stack>
#include <string>
using namespace std;

int postfix(string equation)
{
    int x, y, z = 0;
    stack<int> s;
    bool sameNum = false;
    for(int i=0;i<equation.length();i++)
    {
        char c=equation[i];
        if (c == '+' || c == '-' || c == '*' || c == '/')
        {
            x = s.top(); s.pop();
            y = s.top(); s.pop();

            switch (c)
            {
                case '+': z = y + x; break;
                case '-': z = y - x; break;
                case '*': z = y * x; break;
                case '/': z = y / x; break;
            }

            s.push(z);
        }
        else
        {

            if(c == ' ')
                sameNum = false;
            if(sameNum){
            int x = s.top(); s.pop();
            s.push(x*10 + (c - '0'));
            }else if(c != ' '){
            s.push(c-'0');
            sameNum = true;
            }

        }
    }

    return s.top();
}

int main()
{
    cout << postfix("12 5 3 * +")<<endl;
    cout << postfix("44 2 / 3 +")<<endl;

}
