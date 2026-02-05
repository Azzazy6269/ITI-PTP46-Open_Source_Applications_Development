package program;
import javax.swing.JFrame;

import myapp.*;

public class Program{
    /* 
    public static void main (String []args){
        System.out.println("program started");

        JFrame frame = new JFrame("My app");
        MyPanel panel = new MyPanel();
        TimeThread timeThread = new TimeThread("clock", panel);
        frame.setContentPane(panel);
        frame.setSize(400,200);
        frame.setVisible(true);
        timeThread.start();
    }
    */
   public static void main (String []args){
        System.out.println("program started");

        JFrame frame = new JFrame("My app");
        MyPanel panel = new MyPanel();
        frame.setContentPane(panel);
        frame.setSize(400,200);
        frame.setVisible(true);
    }
}