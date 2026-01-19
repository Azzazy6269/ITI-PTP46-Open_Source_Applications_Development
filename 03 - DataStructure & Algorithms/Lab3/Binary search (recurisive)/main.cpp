#include <iostream>
#include <algorithm>
using namespace std;


int BinarySearch(int arr[], int size, int element,int l,int h)
{
    int m;

    m = (l + h) / 2;

    if(l>h)
        return -1;

    if (arr[m] == element)
        return m;

    if (arr[m] > element)
        return BinarySearch(arr,size,element,l,m-1);

    if (arr[m] < element)
        return BinarySearch(arr,size,element,m+1,h);

}

int main()
{
    int arr[] = {23, 55, 11, 62, 18, 93, 42, 16, 24, 31, 21, 88, 51, 15, 64, 79};
    int arr2[] = {10, 20, 30, 40, 50};

    int size1 = sizeof(arr) / sizeof(arr[0]);
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    sort(arr, arr + size1);

    cout << BinarySearch(arr, size1, 24,0,size1-1) << endl;
    cout << BinarySearch(arr2, size2, 60,0,size2-1) << endl;


    return 0;
}
