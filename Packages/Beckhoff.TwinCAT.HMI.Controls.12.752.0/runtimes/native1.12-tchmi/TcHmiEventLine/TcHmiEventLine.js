var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){var _a,_TcHmiEventLine_tchmiFQN;class TcHmiEventLine extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__eventDestroyFunctions=[],this.__mouseDown=!1,this.__subscriptionId=0,this.__localizedElements=new Map,this.__localizationReader=void 0,this.__destroyLocalizationWatch=null,this.__onResolverForFilterWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("filter"),tchmi_equal(data.value,this.__filter)||(this.__filter=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Filter"}),this.__processFilter())},this.__onResolverForSortingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("sorting"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__sorting)||(this.__sorting=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Sorting"}),this.__processSorting()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")+", Id="+this.getId()+", Attribute=Sorting] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor())},this.__evtHandlerMouseEnter=this.__onMouseEnter(),this.__evtHandlerMouseLeave=this.__onMouseLeave(),this.__evtHandlerMouseDown=this.__onMouseDown(),this.__evtHandlerMouseUp=this.__onMouseUp(),this.__evtHandlerTouchStart=this.__onTouchStart(),this.__evtHandlerTouchEndOrCancel=this.__onTouchEndOrCancel(),this.__evtHandlerDocumentMouseUp=this.__onDocumentMouseUp()}__previnit(){if(this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Template")[0],!this.__elementTemplateRoot)throw new Error("Invalid Template.html");if(this.__elementIcon=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Icon")[0],!this.__elementIcon)throw new Error("Invalid Template.html");if(this.__elementEvent=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Message")[0],!this.__elementEvent)throw new Error("Invalid Template.html");if(this.__elementButton=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Button")[0],!this.__elementButton)throw new Error("Invalid Template.html");this.__destroyLocalizationWatch=this.__localization.watch(data=>{if(data.error===TcHmi.Errors.NONE&&data.reader){this.__localizationReader=data.reader;for(const[element,info]of this.__localizedElements){let localizedText=data.reader.get(info.key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters)),element.setAttribute("title",tchmi_decode_control_characters(localizedText)),element.textContent=tchmi_decode_control_characters(localizedText)}}});const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.addEventListener("mouseenter",this.__evtHandlerMouseEnter,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mouseleave",this.__evtHandlerMouseLeave,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mousedown",this.__evtHandlerMouseDown,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mouseup",this.__evtHandlerMouseUp,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchcancel",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchstart",this.__evtHandlerTouchStart,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchend",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".onPressed",this.__onPressed())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized()));document.addEventListener("mouseup",this.__evtHandlerDocumentMouseUp,{passive:!0,capture:!1}),this.__updateSubscription()}__detach(){if(super.__detach(),this.__eventDestroyFunctions)for(let e of this.__eventDestroyFunctions)e();this.__eventDestroyFunctions=[],0!==this.__subscriptionId&&TcHmi.Server.unsubscribeEx(this.__subscriptionId,null,data=>{data.error!==TcHmi.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details))}),this.__subscriptionId=0;document.removeEventListener("mouseup",this.__evtHandlerDocumentMouseUp,{passive:!0,capture:!1})}destroy(){var _b;if(this.__keepAlive)return;const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.removeEventListener("mouseenter",this.__evtHandlerMouseEnter,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mouseleave",this.__evtHandlerMouseLeave,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mousedown",this.__evtHandlerMouseDown,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mouseup",this.__evtHandlerMouseUp,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchcancel",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchstart",this.__evtHandlerTouchStart,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchend",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),null===(_b=this.__destroyLocalizationWatch)||void 0===_b||_b.call(this),super.destroy()}__updateSubscription(){var _b,_c,_d,_e;TCHMI_DESIGNER||(0!==this.__subscriptionId&&TcHmi.Server.unsubscribeEx(this.__subscriptionId,null,data=>{data.error!==TcHmi.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details))}),this.__subscriptionId=0,this.__isAttached&&(this.__subscriptionId=null!==(_e=TcHmi.Server.subscribeEx([{commandOptions:["SendErrorMessage"],symbol:"ListEvents",limit:1,filter:null!==(_b=this.__filter)&&void 0!==_b?_b:void 0,orderBy:null===(_c=this.__sorting)||void 0===_c?void 0:_c.map(info=>{var _b;return(null!==(_b=info.name)&&void 0!==_b?_b:"{value}")+" "+("Descending"===info.order?"DESC":"ASC")}).join(", ")}],null!==(_d=this.__serverInterval)&&void 0!==_d?_d:TcHmi.Config.get().tcHmiServer.websocketIntervalTime,null,this.__serverResponseHandler()))&&void 0!==_e?_e:0))}__serverResponseHandler(){return data=>{var _b;return data.error!==TcHmi.Errors.NONE?(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details)),this.__removeLocalizedElement(this.__elementEvent),void this.__addLocalizedElement(this.__elementEvent,"Browser_Console_Could_Have_More_Information")):data.response?data.response.error?(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.response.error)),this.__removeLocalizedElement(this.__elementEvent),void this.__addLocalizedElement(this.__elementEvent,"Browser_Console_Could_Have_More_Information")):data.response.commands&&0!==data.response.commands.length?((null===(_b=data.response.commands[0].readValue)||void 0===_b?void 0:_b.length)>0?this.__event=TcHmi.Server.Events.parseServerEvent(data.response.commands[0].readValue[0]):this.__event=void 0,void this.__updateEventLine()):(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage({code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: '"+data.response.id+"'.",domain:this.__type})),this.__removeLocalizedElement(this.__elementEvent),void this.__addLocalizedElement(this.__elementEvent,"Browser_Console_Could_Have_More_Information")):(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()},Symbol=ListEvents] `+TcHmi.Log.buildMessage({code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:this.__type})),this.__removeLocalizedElement(this.__elementEvent),void this.__addLocalizedElement(this.__elementEvent,"Browser_Console_Could_Have_More_Information"))}}__updateEventLine(){var _b;if(TcHmi.Access.checkAccess(this,"observe"))if(this.__removeLocalizedElement(this.__elementEvent),this.__elementIcon.classList.remove("severity-verbose"),this.__elementIcon.classList.remove("severity-info"),this.__elementIcon.classList.remove("severity-warning"),this.__elementIcon.classList.remove("severity-error"),this.__elementIcon.classList.remove("severity-critical"),this.__event)if(TcHmi.Server.Events.isAlarm(this.__event)||TcHmi.Server.Events.isMessage(this.__event)){switch(this.__event.severity){case 1:this.__elementIcon.classList.add("severity-info");break;case 2:this.__elementIcon.classList.add("severity-warning");break;case 3:this.__elementIcon.classList.add("severity-error");break;case 4:this.__elementIcon.classList.add("severity-critical");break;default:this.__elementIcon.classList.add("severity-verbose")}let event=null!==(_b=TcHmi.Localization.formatDate(this.__event.timeRaised)+" | "+this.__event.domain+" | "+this.__event.text)&&void 0!==_b?_b:this.__event.name;this.__elementEvent.setAttribute("title",tchmi_decode_control_characters(event)),this.__elementEvent.innerText=event}else{let event=TcHmi.Localization.formatDate(this.__event.timeReceived)+" | "+this.__event.domain+" | "+this.__event.name;this.__elementEvent.setAttribute("title",tchmi_decode_control_characters(event)),this.__elementEvent.innerText=event}else this.__addLocalizedElement(this.__elementEvent,"NoEventsReceived")}__onPressed(){return event=>{this.__targetRegion&&this.__targetContent&&this.__targetRegion.setTargetContent(this.__targetContent)}}__onMouseUp(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onMouseEnter(){return event=>{if(this.getIsEnabled()&&this.__mouseDown){if(!TcHmi.Access.checkAccess(this,"operate"))return;this.__element.addClass("down")}}}__onMouseDown(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(this.__mouseDown=!0,this.__element.addClass("down"))}}__onMouseLeave(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onTouchStart(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.addClass("down")}}__onTouchEndOrCancel(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onDocumentMouseUp(){return event=>{this.__mouseDown=!1}}__onResized(){return event=>{let height=this.getRenderedHeight();height&&(this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.top&&(height-=this.__borderWidth.top),"None"!==this.__borderStyle.bottom&&(height-=this.__borderWidth.bottom)),this.__element[0].style.setProperty("--tchmi-icon-size",height+"px"))}}__addLocalizedElement(element,key,...parameters){let info={key:key};if(0!==parameters.length&&(info.parameters=parameters),this.__localizedElements.set(element,info),this.__localizationReader){let localizedText=this.__localizationReader.get(key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters)),element.setAttribute("title",tchmi_decode_control_characters(localizedText)),element.textContent=tchmi_decode_control_characters(localizedText)}}__removeLocalizedElement(element){this.__localizedElements.delete(element)}setServerInterval(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ServerInterval")),convertedValue!==this.__serverInterval&&(this.__serverInterval=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ServerInterval"}),this.__processServerInterval())}getServerInterval(){return this.__serverInterval}__processServerInterval(){this.__isAttached&&this.__updateSubscription()}setFilter(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Filter"));let resolverInfo=this.__objectResolvers.get("filter");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("filter",{resolver:resolver,watchCallback:this.__onResolverForFilterWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForFilterWatchCallback)})}getFilter(){return this.__filter}__processFilter(){this.__isAttached&&this.__updateSubscription()}setSorting(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew,this.getAttributeDefaultValueInternal("Sorting")),resolverInfo=this.__objectResolvers.get("sorting");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("sorting",{resolver:resolver,watchCallback:this.__onResolverForSortingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForSortingWatchCallback)})}getSorting(){return this.__sorting}__processSorting(){this.__updateSubscription()}setTargetRegion(valueNew){let convertedValue=valueNew instanceof TcHmi.Controls.System.TcHmiRegion?valueNew:null;null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetRegion")),convertedValue!==this.__targetRegion&&(this.__targetRegion=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetRegion"}),this.__processTargetRegion())}getTargetRegion(){return this.__targetRegion}__processTargetRegion(){this.__elementButton.style.display=this.__targetRegion&&this.__targetContent?"":"none"}setTargetContent(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetContent")),convertedValue!==this.__targetContent&&(this.__targetContent=valueNew,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetContent"}),this.__processTargetContent())}getTargetContent(){return this.__targetContent}__processTargetContent(){this.__processTargetRegion()}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){this.__elementEvent&&void 0!==this.__textColor&&TcHmi.StyleProvider.processTextColor(this.__elementEvent,this.__textColor)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){this.__elementEvent&&TcHmi.StyleProvider.processFontSize(this.__elementEvent,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){this.__elementEvent&&TcHmi.StyleProvider.processFontSize(this.__elementEvent,this.__textFontSize,this.__textFontSizeUnit)}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__elementEvent,this.__textFontFamily)}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementEvent,this.__textFontStyle)}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementEvent,this.__textFontWeight)}}_TcHmiEventLine_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiEventLine).name},Beckhoff.TcHmiEventLine=TcHmiEventLine}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiEventLine","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiEventLine);