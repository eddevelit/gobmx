gx.evt.autoSkip=!1;
function enblanco(){this.ServerClass="enblanco";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV6LLavesesion=gx.fn.getIntegerValue("vLLAVESESION",",");this.AV5bita_numero=gx.fn.getControlValue("vBITA_NUMERO")};this.e12132_client=function(){this.executeServerEvent("ENTER",!0)};this.e13132_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.AV6LLavesesion=this.GXLastCtrlId=0;
this.AV5bita_numero="";this.ServerEvents=["e12132_client","e13132_client"];this.VarControlMap.AV6LLavesesion={id:"vLLAVESESION",grid:0,type:"int"};this.VarControlMap.AV5bita_numero={id:"vBITA_NUMERO",grid:0,type:"svchar"};this.SetStandaloneVars()}enblanco.prototype=new gx.GxObject;gx.setParentObj(new enblanco);