#include <iostream>

using namespace std;

int main()
{
    string x;
    getline(cin,x);
    int letters=0,words=0;
    bool flagSpace = false;
    bool firstletter = true;
    for(char ch : x){
        if(ch == 32 && !flagSpace ){
            flagSpace = true;
            if(firstletter) continue;
            words++;
        continue;
        }else if(ch == 32 && flagSpace){
            continue;
        }
        letters++;
        flagSpace = false;
        firstletter = false;
    }
    if(!flagSpace) words++;
    cout << "num of letters : "<<letters<<endl<<"num of words : "<<words ;
    return 0;
}
