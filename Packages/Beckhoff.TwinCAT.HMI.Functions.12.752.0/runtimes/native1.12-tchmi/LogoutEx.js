var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.LogoutEx=function(ctx,reload=!0){TcHmi.Server.logoutEx2(reload,null,data=>{if(data.error!==TcHmi.Errors.NONE)return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Function, Module=TcHmi.Functions.Beckhoff.Logout] "+TcHmi.Log.buildMessage(data.details)),void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TcHmi.Functions.Beckhoff.LogoutEx",domain:"Function",errors:data.details?[data.details]:void 0});ctx.success()})}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("LogoutEx","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.LogoutEx);