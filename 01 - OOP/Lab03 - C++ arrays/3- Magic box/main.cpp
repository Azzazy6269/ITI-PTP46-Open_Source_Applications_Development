#include <iostream>
#include <iomanip>
#include <windows.h>
using namespace std;

void gotoxy(int x, int y) {
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int main()
{
    int size;
    cout << "Enter size of magic box (odd number): ";
    cin >> size;
    if (cin.fail() || size%2==0) return 0;
    int arr[size][size] ={0};
    int row = 0;
    int col = size / 2;
    for (int num =1; num <= size * size; num++) {
        arr[row][col] = num;
        if(num%size ==0){
            row++;
        }else{
            row--;
            col--;
        }
        if (row < 0) row = size - 1;
        if (col < 0) col = size - 1;
        if (row >= size) row = 0;
        if (col >= size) col = 0;


    }

    int startX = 5;
    int startY = 5;

    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            int x = startX + j*5 ;
            int y = startY + i*3 ;
            gotoxy(x, y);
            cout << setw(3) << arr[i][j];
        }
        cout << endl;
    }
}
