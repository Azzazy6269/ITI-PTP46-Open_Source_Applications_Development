package myapp;

public class TimeThread extends Thread {
    String name;
    MyPanel panel;
    public TimeThread(String _name,MyPanel _panel) {
        this.name = _name;
        this.panel = _panel;
    }

    @Override
    public void run() {
        while(true){
            try{
                sleep(1000);
                panel.repaint();
            }catch(Exception ex){
                System.out.println(ex.getMessage());                
            }
            
        }
    }
}
