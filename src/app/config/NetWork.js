import React from 'react';
import { NetInfo } from 'react-native';

function checkNet () {
    handleFirstConnectivityChange = (isConnected) => {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
            this.setNetWork(isConnected)
        });
    }
    
     NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );
}

export default checkNet
