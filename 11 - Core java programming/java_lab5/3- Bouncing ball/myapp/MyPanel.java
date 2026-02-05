package myapp;
import java.awt.*;
import java.util.Date;
import javax.swing.JPanel;

public class MyPanel extends JPanel implements Runnable{
    int x;
    int y;
    int XDirection;
    int YDirection;

    public MyPanel(){
        this.setBackground(Color.CYAN);
        new Thread(this).start();
        this.x = 100;
        this.y = 120;
        XDirection = 1;
        YDirection = 1;
    }

    @Override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillOval(x, y, 15, 15);
    }
    
    @Override
    public void run() {
        while(true){
            try{
                Thread.sleep(3);
                
                toggleDiretion(x,y);
                x+=XDirection;
                y+=YDirection;

                this.repaint();

            }catch(Exception ex){
                System.out.println(ex.getMessage());
            }
            
        }
    }

    private void toggleDiretion(int x ,int y){
        if(x> getWidth() || x< 0){
            this.XDirection = this.XDirection*-1 ;
        }
        if(y> getHeight() || y< 0){
            this.YDirection = this.YDirection*-1 ;
        }
    }
}