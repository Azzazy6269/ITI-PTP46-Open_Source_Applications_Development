class Clock{
    #intervalid;
    hours;
    minutes;
    seconds;
    constructor(time){
        const[ h,m,s] = time.split(':').map(Number);
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
    }
    static formatTime(_hours,_minutes,_seconds){
        let format="";
        _hours = String(_hours);
        format += _hours.padStart(2,"0");
        format += ":";
        _minutes = String(_minutes);
        format += _minutes.padStart(2,"0");
        format += ":";
        _seconds = String(_seconds);
        format += _seconds.padStart(2,"0");
        return format;
    }
    #tick(){
        this.seconds++;
        if(this.seconds===60){
            this.seconds = 0;
            this.minutes++
        }
        if(this.minutes===60){
            this.minutes = 0;
            this.hours++;
        }
        if(this.hours===24){
           this. hours=0;
        }
    }
    _onetick(){
        this.#tick();
    }
    start(){
        this.#intervalid = setInterval(() => {
		this.#tick();
	}, 1000);
    }
    stop(){
        clearInterval(this.#intervalid);
        this.#intervalid =null;
    }
    getTime(){
        return Clock.formatTime(this.hours,this.minutes,this.seconds);
    }
}

class AlarmClock extends Clock{
    #alarmtime = "";
    #alarmid=0;
    constructor(time,_alarmtime){
        super(time);
        const[h,m,s] =_alarmtime.split(":");
        this.#alarmtime += h.padStart(2,"0"); 
        this.#alarmtime += ":"; 
        this.#alarmtime += m.padStart(2,"0"); 
        this.#alarmtime += ":"; 
        this.#alarmtime += s.padStart(2,"0"); 
    }
    #checkAlarm(){
        if(this.getTime()===this.#alarmtime){
            this.stop();
            console.log("alarm");
        }
    }
    start(){
         this.#alarmid = setInterval(() => {
            this._onetick();       
            this.#checkAlarm(); 
        }, 1000);
    }
    stop(){
        clearInterval(this.#alarmid);
        this._alarmid = null;
        super.stop();
    }
    setAlarm(newAlarmTime) {
    const [h, m, s] = newAlarmTime.split(":"); 
    this.#alarmtime = ""; 
    this.#alarmtime += h.padStart(2, "0");
    this.#alarmtime += ":";
    this.#alarmtime += m.padStart(2, "0");
    this.#alarmtime += ":";
    this.#alarmtime += s.padStart(2, "0");

    }

}

const myAlarm = new AlarmClock("14:30:50", "14:31:00");
myAlarm.start();

