#include <iostream>

using namespace std;

void bubbleSort(int arr[],int arrSize)
{
    for(int i=0; i<arrSize; i++)
    {
        for(int j=0;j<arrSize-i-1;j++){
            if(arr[j]>arr[j+1])
        {
            int temp = arr[j+1];
            arr[j+1]=arr[j];
            arr[j]= temp;
        }
        }

    }
    for(int i=0;i<arrSize; i++){
        cout<<arr[i]<<"  ";
    }
}


int main()
{
    int arr []= {1,5,4,9,3};
    int arrSize = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr,arrSize);

    return 0;
}
