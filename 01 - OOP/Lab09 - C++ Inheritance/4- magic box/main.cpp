#include <iostream>
#include <iomanip>
#include <windows.h>
using namespace std;

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
class magicBox
{
private:
    int size;
    int** arr ;
    int row ;
    int col ;
    int startX = 5;
    int startY = 5;
public:
    magicBox(int _size)
    {

        cout << "Enter size of magic box (odd number): ";
        int z=0;
        bool check;
        do
        {
            cin >> z;
            check = setSize(z);
        }
        while(!setSize(z));
        arr = new int*[size];
        for (int i = 0; i < size; i++)
        {
            arr[i] = new int[size];
            for (int j = 0; j < size; j++)
                arr[i][j] = 0; // initialize all to zero
        }
        row = 0;
        col = size / 2;
    }
    bool setSize(int _size)
    {
        if(_size>0 && _size%2==1)
        {
            size=_size;
            return true;
        }
        else
        {
            cout<<"invalid size"<<endl;
            return false;
        }
    }

    void calcStep()
    {
        for (int num =1; num <= size * size; num++)
        {
            arr[row][col] = num;
            if(num%size ==0)
            {
                row++;
            }
            else
            {
                row--;
                col--;
            }
            if (row < 0) row = size - 1;
            if (col < 0) col = size - 1;
            if (row >= size) row = 0;
            if (col >= size) col = 0;

        }
    }

    void print()
    {
        for (int i = 0; i < size; i++)
        {
            for (int j = 0; j < size; j++)
            {
                int x = startX + j*5 ;
                int y = startY + i*3 ;
                gotoxy(x, y);
                cout << setw(3) << arr[i][j];
            }
            cout << endl;
        }
    }

};
int main()
{
    magicBox* x =new magicBox(5);
    x->calcStep();
    x->print();
    return 0;
}
