#include <iostream>

using namespace std;

void InputArr(int arr[]);
void PrintArr(int arr[]);
void Sum(int arr[]);
void Max(int arr[]);
void Min(int arr[]);
void Search(int arr[],int x);
void Gap(int arr[]);
int arrSize;
int main()
{
    cout<<"Enter array's size : ";
    cin >> arrSize;
    if(cin.fail()) return 0;
    int nums[arrSize];
    InputArr(nums);
    PrintArr(nums);
    Sum(nums);
    Max(nums);
    Min(nums);
    cout << "Enter element to look for : ";
    int x;
    cin >>x;
    if(cin.fail()) return 0;
    Search(nums,x) ;
    Gap(nums);
    return 0;
}

void InputArr(int arr[]){
    cout << "Enter "<<arrSize<<" numbers"<<endl;
    int i;
    for (i=0 ; i<arrSize;i++){
        cin >> arr[i];
        if(cin.fail()){
            i--;
            cin.clear();
            cin.ignore();
        }

    }
}

void PrintArr(int arr[]){
    cout << "Your array : ";
    int i;
    for (i=0 ; i<arrSize;i++){
        cout << arr[i]<<" ";
    }
    cout<<endl;
}

void Sum(int arr[]){
    int i,sum=0;
    for (i=0 ; i<arrSize;i++){
        sum+=arr[i];
    }
    cout << "Sum of the array = " << sum << endl;
}

void Max(int arr[]){
    int i,maximum=arr[0];
    for (i=0 ; i<arrSize;i++){
        if(arr[i]>maximum) maximum = arr[i];
    }
    cout << "Max = "<<maximum<<endl;
}

void Min(int arr[]){
    int i,minimum=arr[0];
    for (i=0 ; i<arrSize;i++){
        if(arr[i]<minimum) minimum = arr[i];
    }
    cout << "Min = "<<minimum<<endl;
}

void Search(int arr[],int x){
    int i;
    for (i=0 ; i<arrSize;i++){
        if (x==arr[i])
        {
            cout<<"element is exist at index "<< i<<endl;
            return;
        }
    }
    cout<<"element isn't exist";
}

void Gap(int arr[])
{
    int maxGap = -1;

    for (int i = 0; i < arrSize; i++) {
        for (int j = arrSize-1; j > i; j--) {
            if (arr[i] == arr[j]) {
                int gap = j - i;
                if (gap > maxGap)
                    maxGap = gap;
            }
        }
    }
    cout << "The longest distance between 2 duplicated elements is "<< maxGap;
}
