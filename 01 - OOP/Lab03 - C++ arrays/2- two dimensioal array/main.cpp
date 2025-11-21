#include <iostream>

using namespace std;
int arrRows;
int arrCoulmns;
void InputArr(int arr[][10],int rows,int columns);
void PrintArr(int arr[][10],int rows,int columns);
void SumEachRow(int arr[][10], int rows, int columns);
void AvgEachColumn(int arr[][10], int rows, int columns);
int main()
{
    cout << "Enter num of rows : ";
    cin >> arrRows;
    if(cin.fail()) return 0;
    cout << "Enter num of columns (max is 10) : ";
    cin >> arrCoulmns;
    if(cin.fail() || arrCoulmns>10) return 0;
    int nums[arrRows][10];
    InputArr(nums,arrRows,arrCoulmns);
    PrintArr(nums,arrRows,arrCoulmns);
    SumEachRow(nums,arrRows,arrCoulmns);
    AvgEachColumn(nums,arrRows,arrCoulmns);
    return 0;
}

void InputArr(int arr[][10],int rows,int columns){
    int i,j ;
    cout << "Enter the elements of the array"<<endl;
    for(i=0;i<rows;i++){
        for(j=0;j<columns;j++){
            cin >> arr[i][j];
        }
    }
}
void PrintArr(int arr[][10], int rows, int columns) {
    cout << "Your array:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < columns; j++) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}
void SumEachRow(int arr[][10], int rows, int columns){
    for (int i = 0; i < rows; i++) {
        int sum = 0;
        for (int j = 0; j < columns; j++) {
            sum+= arr[i][j];
        }
        cout << "Sum of row " << i << " = " << sum  << endl;
    }
}

void AvgEachColumn(int arr[][10], int rows, int columns){
    int result [columns]={0};
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < columns; j++) {
            result[j]+= arr[i][j];
        }
    }
    for(int j =0 ; j<columns;j++){
        result[j] /= rows;
        cout << "Avg of column " << j << " = " << result[j] << endl;
    }
}
