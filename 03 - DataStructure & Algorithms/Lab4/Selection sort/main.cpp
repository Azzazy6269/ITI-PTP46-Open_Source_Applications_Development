#include <iostream>

using namespace std;

void selectionSort(int arr[],int arrSize){
    for(int i=0;i<arrSize;i++){
        int minIndex=i;
        for(int j =i;j<arrSize;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    for(int i=0;i<arrSize; i++){
        cout<<arr[i]<<"  ";
    }
}

int main()
{
    int arr []= {1,5,4,9,3};
    int arrSize = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr,arrSize);

    return 0;
}

