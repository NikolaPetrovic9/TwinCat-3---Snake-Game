// Keep these lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 37) {
                //left %s%PLC1.GameEngine.iSnakeDirection%/s%
                TcHmi.Symbol.writeEx('%s%PLC1.GVL_Variables.iSnakeDirection|Interval=2%/s%', 1);
            } else if (event.keyCode == 38) {
                //up
                TcHmi.Symbol.writeEx('%s%PLC1.GVL_Variables.iSnakeDirection|Interval=2%/s%', 2);

            } else if (event.keyCode == 40) {
                //down
                TcHmi.Symbol.writeEx('%s%PLC1.GVL_Variables.iSnakeDirection|Interval=2%/s%', 3);

            } else if (event.keyCode == 39) {
                //right
                TcHmi.Symbol.writeEx('%s%PLC1.GVL_Variables.iSnakeDirection|Interval=2%/s%', 4);
            }
            //else if (event.keyCode == 39) {
            //    alert('Right was pressed');
            //}
        }, true);
    });
})(TcHmi);
