import React, { Fragment, useState } from "react";
import { Button, Text, View } from 'react-native';

import style from "./style";

export default() => {
    let [hour,    hourF]    = useState(0);
    let [minutes, minutesF] = useState(0);
    let [seconds, secondsF] = useState(0);
    let cron;

    function start(){ 
        if(!(hour != 0 || minutes != 0 || seconds != 0)){ 
            cron = setInterval(timer,100);
        }
    }

    function pause(){clearInterval(cron)}

    function stop(){
        clearInterval(cron);
        [hour, minutes, seconds] = [0,0,0];
    }

    function timer(){
        secondsF(seconds + 1);
        if(seconds == 60){
            secondsF(seconds - 60);
            minutesF(minutes + 1);
            
            if(minutes == 60){
                minutesF(minutes - 60);
                hourF(hour + 1);
    
                if(hour == 23){
                    hourF(hour - 60);
                }
            }
        }
    }

    return(
        <Fragment>
            <Text style={style.text}>{(hour < 10 ? '0' + hour : hour) + ':' + 
                                      (minutes < 10 ? '0' + minutes : minutes) + ':' +
                                      (seconds < 10 ? '0' + seconds : seconds)}</Text>
            <View style={style.buttons}>
                <View style={style.dadButton1}>
                    <Button style={style.button1} title='start' color='white'
                    onPress={start}/>
                </View>
                <View style={style.dadButton2}>
                    <Button style={style.button2} title='pause'  color='white'
                    onPress={pause}/>
                </View>
                <View style={style.dadButton3}>
                    <Button style={style.button3} title='stop'  color='white'
                    />
                </View>
            </View>
        </Fragment>
    );
}
