public class Count{
    static int Count_indexOf(String sentence , String word){
        int index =0;
        int count =0;
        while(index < sentence.length()){
            int x =sentence.indexOf(word,index);
            if(x == -1){
                return count;
            }else{
                count++;
                index = x + word.length();
            }
        }
        return count;
    }

    static int Count_split(String sentence , String word){
        String [] x = sentence.split(word);
        return x.length-1;
    }
}