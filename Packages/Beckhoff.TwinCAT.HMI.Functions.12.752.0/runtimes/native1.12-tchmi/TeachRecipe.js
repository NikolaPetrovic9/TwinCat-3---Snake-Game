var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.TeachRecipe=function(ctx,recipeReference){recipeReference?TcHmi.Server.RecipeManagement.teach(recipeReference,null,(function(data){return data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TeachRecipe, Recipe "+recipeReference+" teaching failed",domain:"Function",errors:data.details?[data.details]:void 0}):(TCHMI_CONSOLE_LOG_LEVEL>=3&&TcHmi.Log.info("[Source=Function, Module=TcHmi.Functions.Beckhoff.TeachRecipe] Recipe "+recipeReference+" teached successful."),void ctx.success())})):ctx.success()}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("TeachRecipe","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.TeachRecipe);