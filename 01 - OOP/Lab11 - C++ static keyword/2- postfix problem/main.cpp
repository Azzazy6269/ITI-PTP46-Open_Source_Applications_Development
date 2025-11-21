#include <iostream>
#include <stack>

using namespace std;
class Solution
{
public:
    int postfix(string equation)
    {
        stack<int> s;
        int x;
        int y;
        int Result =0;
        for(char ch : equation)
        {
            if(ch >= 48 && ch <= 57 )
            {
                int chASint = ch - 48;
                s.push(chASint);
            }
            else
            {
                x = s.top();
                s.pop();
                y = s.top();
                s.pop();
                switch (ch)
                {
                case'+':
                    Result = y+x;
                    break;
                case'-':
                    Result = y-x;
                    break;
                case'*':
                    Result = y*x;
                    break;
                case'/':
                    Result = y/x;
                    break;
                }
                s.push(Result);
            }
        }
        return Result;
    }
};
int main()
{
    Solution sol ;
    string tests[] = {
        "23+","82-","34*","84/","446*+",
        "56+7*","23+5*4-","93/4+","523*+","52-3*4/",
        "93*5+","72/3-","82/52*+","6523+8*+3+*","45+63-*",
        "34+56+*","82/4*","92/3/4*","84/21+-","56*78*+"
    };

    for (int i = 0; i < 20; i++) {
        cout << "Test " << i + 1 << ": " << sol.postfix(tests[i]) << endl;
    }

    return 0;
}
