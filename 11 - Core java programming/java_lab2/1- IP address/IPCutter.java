import java.util.StringTokenizer;

public class IPCutter{
    static void Cut (String IP){
        String []result = IP.split("\\.");
        for(int i =0 ; i<result.length ; i++){
            System.out.println(result[i]);
        }
    }
    static void CutTokens (String IP){
        String []result = IP.split("\\.");
        StringTokenizer st = new StringTokenizer(IP, ".");
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
    
}