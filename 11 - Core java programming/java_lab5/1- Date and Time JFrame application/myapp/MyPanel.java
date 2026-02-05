package myapp;
import java.awt.*;
import java.util.Date;
import javax.swing.JPanel;
/* 
public class MyPanel extends JPanel {
    public MyPanel(){
        this.setBackground(Color.CYAN);
        new Thread(this).start();
    }

    @Override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.drawString(new Date().toLocaleString(), 100, 100);
    }
}
 */
public class MyPanel extends JPanel implements Runnable{
    public MyPanel(){
        this.setBackground(Color.CYAN);
        new Thread(this).start();
    }

    @Override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.drawString(new Date().toLocaleString(), 100, 100);
    }
    
    @Override
    public void run() {
        while(true){
            try{
                Thread.sleep(1000);
                this.repaint();
            }catch(Exception ex){
                System.out.println(ex.getMessage());
            }
            
        }
    }
}