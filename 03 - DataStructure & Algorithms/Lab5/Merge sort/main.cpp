#include <iostream>
using namespace std;

void Merge(int arr[], int left[], int l1, int right[], int l2)
{
    int i = 0, j = 0, k = 0;

    while (i < l1 && j < l2)
    {
        if (left[i] < right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < l1)
        arr[k++] = left[i++];

    while (j < l2)
        arr[k++] = right[j++];
}

void MergeSort(int arr[], int length)
{
    if (length <= 1)
        return;

    int l1 = length / 2;
    int l2 = length - l1;

    int* left = new int[l1];
    int* right = new int[l2];

    for (int i = 0; i < l1; i++)
        left[i] = arr[i];

    for (int i = 0; i < l2; i++)
        right[i] = arr[l1 + i];

    MergeSort(left, l1);
    MergeSort(right, l2);

    Merge(arr, left, l1, right, l2);

    delete[] left;
    delete[] right;
}

int main()
{
    int arr[] = {2, 7, 6, 4, 3, 9, 1, 5, 8};
    int length = sizeof(arr) / sizeof(arr[0]);

    MergeSort(arr, length);

    for (int i = 0; i < length; i++)
        cout << arr[i] << endl;

    return 0;
}
