import React, {Fragment, useState } from "react";
import { Button, Text } from 'react-native'

import style from "./style";

export default ({ initial }) => {
    const [cont1, setNum] = useState(initial);

    //cont1 = cont1 == 11 ? cont1 - 11 : cont1;
    //cont1 = cont1 == -1 ? cont1 + 1 : cont1;
    if(cont1 == 11) setNum(cont1 - 11);
    if(cont1 == -1) setNum(cont1 + 1);

    return (
        <Fragment>
            <Text style={style.text}>{cont1}</Text>
            <Button style={style.button} title="incremento" onPress={() => setNum(cont1 + 1)}/>
            <Button style={style.button} title="decremento" onPress={() => setNum(cont1 - 1)}/>
        </Fragment>
    )
}