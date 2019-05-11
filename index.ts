import * as OSC from "osc";

const oscPort = new OSC.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 10018
}); 

oscPort.on("error", (err: Error) => console.log(err));

/**
 * Xairs remote
 * @param addr 
 */
function xairResponseListener(addr: string): void {
    // let msg: OSC.OscMessage = {
    //     address: "/xinfo",
    //     args: []
    // };
    oscPort.on('osc', (msg: OSC.OscMessage) => {
        
    })
}

const 