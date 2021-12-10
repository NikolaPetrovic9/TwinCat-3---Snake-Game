// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Snake_HMI;
        (function (Snake_HMI) {
            function DrawFood(food) {
                var oldFood = TcHmi.Controls.get('Food');
                if (oldFood != undefined) {
                    oldFood.destroy();
                }
                var newFood = TcHmi.ControlFactory.createEx(
                    'TcHmiRectangle',
                    'Food',
                    {
                        'data-tchmi-background-color': {
                            'color': 'rgba(273, 28, 36)'
                        }
                    }
                );
                var grid = TcHmi.Controls.get('TcHmiGrid');
                if (grid && newFood) {

                    newFood.setGridColumnIndex(food.stFoodCoordinate.iColumnCoordinate);
                    newFood.setGridRowIndex(food.stFoodCoordinate.iRowCoordinate);

                    newFood.setWidthUnit('%');
                    newFood.setHeightUnit('%');

                    newFood.setWidth(100);
                    newFood.setHeight(100);

                    grid.addChild(newFood);
                }
                //console.log("drawn");
            }
            Snake_HMI.DrawFood = DrawFood;
        })(Snake_HMI = Functions.Snake_HMI || (Functions.Snake_HMI = {}));
        Functions.registerFunctionEx('DrawFood', 'TcHmi.Functions.Snake_HMI', Snake_HMI.DrawFood);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);