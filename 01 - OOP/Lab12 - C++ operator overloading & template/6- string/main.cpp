#include <iostream>
#include <cstring>
using namespace std;

class String {
private:
    int size = 0;
    char* arr;

public:
    String(int _size = 20) {
        size = _size > 0 ? _size : 20;
        arr = new char[size];
        arr[0] = '\0';
    }

    String(const char* x) {
        size = strlen(x) + 1;
        arr = new char[size];
         int i = 0;
        while (x[i] != '\0') {
            arr[i] = x[i];
            i++;
        }
        arr[i] = '\0';
    }


    void operator=(String& s) {
        delete[] arr;
        size = s.size;
        arr = new char[size];
         int i = 0;
        while (s.arr[i] != '\0') {
            arr[i] = s.arr[i];
            i++;
        }
        arr[i] = '\0';
    }

    String operator+(String& s) {
        int newSize = strlen(arr) + strlen(s.arr) + 1;
        String res(newSize);
        int i = 0, j = 0;

        while (arr[i] != '\0') {
            res.arr[i] = arr[i];
            i++;
        }
        while (s.arr[j] != '\0') {
            res.arr[i] = s.arr[j];
            i++;
            j++;
        }

        res.arr[i] = '\0';

        return res;
    }
    bool operator>(String& s){
        return arr[0] > s.arr[0];
    }
    bool operator<(String& s){
        return arr[0] < s.arr[0];
    }
    bool operator==(String& s){
        for(int i=0;i<size;i++){
            if (arr[i]!=s.arr[i]) return false;
        }
        return true;
    }
    void toUpper() {
        for (int i = 0; arr[i] != '\0'; i++) {
            if (arr[i] >= 'a' && arr[i] <= 'z') {
                arr[i] = arr[i] - 32;
            }
        }
    }

    void toLower() {
        for (int i = 0; arr[i] != '\0'; i++) {
            if (arr[i] >= 'A' && arr[i] <= 'Z') {
                arr[i] = arr[i] + 32;
            }
        }
    }
    void print() const {
        cout << arr << endl;
    }

    ~String() {
        delete[] arr;
    }
};

int main() {
    String s1("Hello");
    String s2=s1;
    String s3 = s1 + s2;
    s3.print();  //
    String s4("asd");
    if(s1>s4) cout<<"s1>s4"<<endl;
    if(s1<s4) cout<<"s1<s4"<<endl;
    if(s1==s2) cout<<"s1=s2"<<endl;
    s1.toUpper();
    s1.print();
    s1.toLower();
    s1.print();
    return 0;
}
