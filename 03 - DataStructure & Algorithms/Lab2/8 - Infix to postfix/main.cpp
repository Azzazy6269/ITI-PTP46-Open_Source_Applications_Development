#include <iostream>
#include <stack>
#include <string>
using namespace std;



string postfix(string equation)
{
    stack<char> * op = new stack<char>();
    string eq = "";
    bool sameNum = false;
    int currentNum =0;

    for(int i =0 ; i<equation.length(); i++)
    {
        char c = equation[i];
        if(c == ' ')
        {
            sameNum = false;
            if(isdigit(equation[i-1])){
            eq += ' ';
            eq += to_string(currentNum);
            eq += ' ';
            }
            currentNum =0;
        }
        else if(isdigit(c))
        {

            if(sameNum)
            {
                currentNum = 10*currentNum + c -'0';
            }
            else
            {
                currentNum = c- '0';
                sameNum = true;
            }

        }
        else
        {
            if(c == '*' || c == '/')
            {
                if(!op->empty()&&(op->top() == '/' || op->top() == '*') )
                {
                    eq += ' ';
                    eq += op->top();
                    eq += ' ';
                    op->pop();
                }
                op->push(c);
            }
            else if(c == '+' || c=='-')
            {
                while(!op->empty() &&op->top()!='(')
                {
                    eq += ' ';
                    eq += op->top();
                    eq += ' ';
                    op->pop();
                }
                op->push(c);
            }
            else if( c =='(')
            {
                op->push(c);
            }
            else if(c ==')')
            {
                while(op->top() != '(')
                {
                    eq += ' ';
                    eq += op->top();
                    eq += ' ';
                    op->pop();
                }
                op->pop();

            }
        }
        if(i==equation.length()-1){
            eq += ' ';
            eq += to_string(currentNum);
            eq += ' ';
        }
    }
    while(!op->empty())
    {
        eq += ' ';
        eq += op->top();
        eq += ' ';
        op->pop();
    }
    return eq;

}


int main()
{
    cout<<postfix("2 * 4 - 2")<<endl;//24*2-
    cout<<postfix("8 / 2 + 7 - 4 * 2")<<endl;//82/7+42*-
    cout<<postfix("10 * ( 2 + 1 + 5 ) / 2 - 1")<<endl;//1021+5+*2/1-
    cout<<postfix("2 + ( ( 8 + 2 * 3 ) / 2 ) - 1")<<endl;//2823*+2/+1-
    return 0;
}
