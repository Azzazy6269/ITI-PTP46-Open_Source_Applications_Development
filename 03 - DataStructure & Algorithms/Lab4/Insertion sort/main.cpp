#include <iostream>

using namespace std;

void insertionSort(int arr[],int arrSize)
{
    for(int i=1 ; i<arrSize; i++)
    {
        int current = arr[i];
        for(int j=i-1; j>0; j--)
        {
            if(current<arr[j])
            {
                arr[j+1] = arr[j];
                arr[j]=current;
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
    insertionSort(arr,arrSize);
    return 0;
}
