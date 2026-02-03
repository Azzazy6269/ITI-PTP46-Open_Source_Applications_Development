public class ArgsLoop {
    public static void main(String[] args) {
        if(args.length > 0) {
            for(int i = 0; i < Integer.parseInt(args[0]); i++) {
                System.out.print(args[1] + " ");
            }
        }
        System.out.println("Hello Java!");
    }
}