#include <iostream>
using namespace std;

class Quick_Sort
{
private:
    int* arr;
    int size;

    void Swap(int i, int j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

public:
    Quick_Sort(int array[], int s)
    {
        arr = array;
        size = s;
        sort(0, size - 1);
    }

    void sort(int from, int to)
    {
        if (from >= to)
            return;

        int Pivot = from;
        int To = to;
        int i = from + 1;

        while (i <= To)
        {
            if (arr[i] < arr[Pivot])
            {
                Swap(Pivot, i);
                Pivot = i;   // مهم بعد الـ swap
                i++;
            }
            else
            {
                Swap(i, To);
                To--;
            }
        }

        sort(from, Pivot - 1);
        sort(Pivot + 1, to);
    }

    void print()
    {
        for (int i = 0; i < size; i++)
            cout << arr[i] << endl;
    }
};

int main()
{
    int array[] = {10, 17, 7, 11, 16, 6, 2, 8, 5};
    int size = sizeof(array) / sizeof(array[0]);

    Quick_Sort * q =new Quick_Sort(array,size) ;
    q->print();

    return 0;
}
