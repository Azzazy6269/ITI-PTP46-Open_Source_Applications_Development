public class ArrayAlgorithms{
    static int Max(int [] arr){
        int max = arr[0];
        for(int i =0 ;i < arr.length ; i++)
            if(arr[i] > max)
                max = arr[i];
        return max;
    }
    static int Min(int [] arr){
        int min = arr[0];
        for(int i =0 ;i < arr.length ; i++)
            if(arr[i] < min)
                min = arr[i];
        return min;
    }
    static void Sort(int [] arr , int n){
        int minIndex;
        for(int i = 0; i < n - 1; i++)
        {
            minIndex = i;
            for (int j = i+1; j < n; j++)
            {
                if (arr[minIndex] > arr[j])
                {
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    static int BinarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
}