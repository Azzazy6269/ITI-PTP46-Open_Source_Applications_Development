#include <iostream>

using namespace std;
void evenOrOdd();
void degree_grade();
void sum5Numbers();
void sentence();
void factorial();
void XpowerY();
void ReverseNum();
void Fibanocci();

int main()
{
    int flag =0;
    do{
    system("cls");
   // getchar();
    cout << "1-Even or odd\n2-Degree , grade\n3-Sum of 5 numbers\n4-Sentence\n"
    <<"5-Factorial\n6-X^Y\n7-Reverse\n8-Fibanocci\n9-Exit\nEnter the number of the function you want : ";
    int n;
    cin >> n;
    if(cin.fail()) return 0;

    switch (n){
    case 1:
        cout << "You chose : Even or odd\n";
        evenOrOdd();
        break;
    case 2:
        cout << "You chose : Degree , grade\n";
        degree_grade();
        break;
    case 3:
        cout << "You chose : Sum of 5 numbers\n";
        sum5Numbers();
        break;
    case 4:
        cout << "You chose : Sentence\n";
        sentence();
        break;
    case 5:
        cout << "You chose : Factorial\n";
        factorial();
        break;
    case 6:
        cout << "You chose : X^Y\n";
        XpowerY();
        break;
    case 7:
        cout << "You chose : Reverse\n";
        ReverseNum();
        break;
    case 8:
        cout << "You chose : Fibanocci\n";
        Fibanocci();
        break;
    case 9:
    case 27:
        flag =1;
        cout << "You chose : Exit\n";
        break;
    default :
        break;
    }
    getchar();
    }while(!flag&&getchar());

    return 0;
}
void evenOrOdd(){
    int x;

    cout << "Enter integer : ";
    cin>>x;
    if(cin.fail()) return;

        if (x%2){
            cout << "odd number";
        }else
            cout << "even number";
}
void degree_grade(){
    int x;
    cout << "Enter degree : ";
    cin >> x;
    if(cin.fail()) return;

    if(x>85){
        cout << "Excellent";
    }else if(x>75){
        cout << "very good";
    }else if(x>65){
        cout << "good";
    }else if(x>50){
        cout << "successed";
    }else{
        cout << "failed";
    }
}
void sum5Numbers(){
cout << "Enter 5 integers : " ;
    int i,temp,result ;
    for(i = 0;i<5;i++){
        cin >> temp;
        if(cin.fail()) return;
        result += temp;
    }
    cout << result;
}
void sentence(){

    string x;
    cin.ignore();
    cout << "Enter a sentence : ";
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
}
void factorial(){
    int x;
    int f = 1;
    cout << "Enter integer : " ;
    cin >> x;
    if(cin.fail()) return;
    for(x;x>0;x--){
        f *= x;
    }
    cout << f;
}
void XpowerY(){

    int x,y,result=1;
    cout << "Enter integer : ";
    cin >> x;
    if(cin.fail()) return;

    cout << "Enter the power : ";
    cin >> y;
    if(cin.fail()) return;
    int tempy = y;

    for(tempy;tempy>0;tempy--){
       result *=x;//
    }
    cout << x << "^" << y << " = " << result <<endl;
}
void ReverseNum(){
    int x;
    cout << "Enter integer : " ;
    cin >> x;
    if(cin.fail()) return ;
    cout << "reverse : ";
    while(x != 0){
        int y = x%10 ;
        cout << y;
        x= x/10;
    }
}
void Fibanocci(){
    int x;
    cout << "Enter index : ";
    cin >> x;
    if(cin.fail()) return;
    if(x == 0) cout << "0";
    if(x == 1) cout << "1";
    if(x>1){
            int last1 = 1 , last2 =0,temp;
        for(x;x>1;x--){
            temp = last1+last2;
            last2 = last1;
            last1 = temp;
        }
        cout << temp;;
    }
}
