package myapp;
import java.awt.*;
import java.util.Date;
import javax.swing.JPanel;

public class MyPanel extends JPanel implements Runnable{
    int x;
    int y;
    public MyPanel(){
        this.setBackground(Color.CYAN);
        new Thread(this).start();
        x = 0;
        y = 0;
    }

    @Override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        if(x>getWidth()){
            x = 0;
        }
        y = getHeight() / 2;
        g.drawString("Hello", x, y);
    }
    
    @Override
    public void run() {
        while(true){
            try{
                Thread.sleep(3);
                x++;
                this.repaint();
            }catch(Exception ex){
                System.out.println(ex.getMessage());
            }
            
        }
    }
}