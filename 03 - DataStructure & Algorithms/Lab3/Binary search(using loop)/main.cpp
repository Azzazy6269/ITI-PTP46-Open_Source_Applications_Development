#include <iostream>
#include <stdexcept>
#include <algorithm>
using namespace std;

int BinarySearch(int arr[], int size, int element)
{
    int l = 0;
    int h = size - 1;
    int m;

    while (l<=h)
    {
        m = (l + h) / 2;

        if (arr[m] == element)
            return m;

        if (arr[m] > element)
            h = m - 1;
        else
            l = m + 1;
    }
    return -1;
}

int main()
{
    int arr[] = {23, 55, 11, 62, 18, 93, 42, 16, 24, 31, 21, 88, 51, 15, 64, 79};
    int arr2[] = {10, 20, 30, 40, 50};

    int size1 = sizeof(arr) / sizeof(arr[0]);
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    sort(arr, arr + size1);


        cout << BinarySearch(arr, size1, 24) << endl;
        cout << BinarySearch(arr2, size2, 60) << endl;


    return 0;
}

