import React from 'react';
import { NetInfo, Alert } from 'react-native';

function checkNet () {
    handleFirstConnectivityChange = (isConnected) => {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
            
            if(!isConnected){  
                Alert.alert(
                    'No net work detected',
                    "You don't have NetWork. Please check it.",
                    [{ text: 'Try', onPress: () =>  console.log("ok") }],
                    { cancelable: false }
                )
            } 
        });
    }
    
     NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );
}

export default checkNet

