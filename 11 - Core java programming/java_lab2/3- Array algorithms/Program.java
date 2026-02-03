public class Program {
    public static void main(String[] args) {

        int[] arr = new int[1000];
        for (int i = 0; i < 1000; i++) {
            arr[i] = (int)(Math.random() * 1000);
        }

        long timeBeforeMax = System.currentTimeMillis();
        System.out.println("max : " +ArrayAlgorithms.Max(arr)) ;
        System.out.println("time spent to calculate max : " + (System.currentTimeMillis()-timeBeforeMax)) ;

        long timeBeforeMin = System.currentTimeMillis();
        System.out.println("min : " +ArrayAlgorithms.Min(arr)) ;
        System.out.println("time spent to calculate min : " + (System.currentTimeMillis()-timeBeforeMin)) ;

        ArrayAlgorithms.Sort(arr , 1000);
        long timeBeforeBS = System.currentTimeMillis();
        System.out.println("index : " +ArrayAlgorithms.BinarySearch(arr,998)) ;
        System.out.println("time spent to calculate search : " + (System.currentTimeMillis()-timeBeforeBS)) ;
    }
}
