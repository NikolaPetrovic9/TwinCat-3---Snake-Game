// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Snake_HMI;
        (function (Snake_HMI) {
            function DrawSnake(snakeBody, actualSnakeLength, maxSnakeLength) {
                if (actualSnakeLength > 0 && actualSnakeLength < maxSnakeLength) {
                    for (var i = 0; i < actualSnakeLength; i++) {
                       // console.log(SnakeBody[i]);

                        var id = 'SnakeBody' + i;
                        var snake = TcHmi.Controls.get(id);
                        if (snake != undefined) {
                            snake.destroy();
                        }
                        var newSnake = TcHmi.ControlFactory.createEx(
                           'TcHmiRectangle',
                           id.toString(),
                           {
                               'data-tchmi-background-color': {
                                   'color': 'rgba(61, 136, 207)'
                               }
                           }
                        );
                        var grid = TcHmi.Controls.get('TcHmiGrid');
                        if (grid && newSnake) {

                            newSnake.setGridColumnIndex(snakeBody[i].stBodyCoordinate.iColumnCoordinate);
                            newSnake.setGridRowIndex(snakeBody[i].stBodyCoordinate.iRowCoordinate);

                            newSnake.setWidthUnit('%');
                            newSnake.setHeightUnit('%');

                            newSnake.setWidth(100);
                            newSnake.setHeight(100);
                            grid.addChild(newSnake);
                        }
                    }
                }
            }
            Snake_HMI.DrawSnake = DrawSnake;
        })(Snake_HMI = Functions.Snake_HMI || (Functions.Snake_HMI = {}));
        Functions.registerFunctionEx('DrawSnake', 'TcHmi.Functions.Snake_HMI', Snake_HMI.DrawSnake);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);