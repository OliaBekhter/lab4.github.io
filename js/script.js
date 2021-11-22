function calculateTime(){
    var t=new Date();
    var todayHours = t.getHours();
    var todayMinutes = t.getMinutes();
    var deadlineHours = 13;
    var deadlineMinutes = 50;
    var deadlineInMin = deadlineHours*60+deadlineMinutes;
    var startTimeInMin = todayHours*60+todayMinutes;
    var hoursTillEnd, minutesTillEnd;
    if (startTimeInMin<deadlineInMin){
        if (todayMinutes<=deadlineMinutes){
            hoursTillEnd=deadlineHours-todayHours;
            minutesTillEnd=deadlineMinutes-todayMinutes;
        }
        else {
            minutesTillEnd=(60+deadlineMinutes)-todayMinutes;
            hoursTillEnd=deadlineHours-todayHours-1;
        }
    }
    else{
        console.log("Заняття закінчилось");
    }
    console.log("Кількість годин до кінця заняття: " +hoursTillEnd);
    console.log("Кількість хвилин до кінця заняття: " +minutesTillEnd);
}