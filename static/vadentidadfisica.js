gx.evt.autoSkip=!1;
function vadentidadfisica(){this.ServerClass="VADENTIDADFISICA";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Inentidadid=function(){gx.ajax.validSrvEvt("dyncall","valid_Inentidadid","gx.O.A717INENTIDADID gx.O.A29VCRFC gx.O.A719DTFECHA gx.O.A9VCNOMBRE gx.O.A17VCCURP gx.O.A718VCNOMBRECOMPLETO".split(" "),["A29VCRFC","A719DTFECHA","A9VCNOMBRE","A17VCCURP","A718VCNOMBRECOMPLETO",
"Gx_mode","Z717INENTIDADID","Z29VCRFC","Z719DTFECHA","Z9VCNOMBRE","Z17VCCURP","Z718VCNOMBRECOMPLETO",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.e111x82_client=function(){this.executeServerEvent("ENTER",!0)};this.e121x82_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64];this.GXLastCtrlId=64;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]=
{fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",
grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKINENTIDADID",format:0,
grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Inentidadid,isvalid:null,rgrid:[],fld:"INENTIDADID",gxz:"Z717INENTIDADID",gxold:"O717INENTIDADID",gxvar:"A717INENTIDADID",ucs:[],op:[64,59,54,49,44],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A717INENTIDADID=gx.num.intval(a)},v2z:function(a){gx.O.Z717INENTIDADID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("INENTIDADID",gx.O.A717INENTIDADID,
0)},c2v:function(){gx.O.A717INENTIDADID=this.val()},val:function(){return gx.fn.getIntegerValue("INENTIDADID",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKVCRFC",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCRFC",gxz:"Z29VCRFC",gxold:"O29VCRFC",gxvar:"A29VCRFC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A29VCRFC=a},v2z:function(a){gx.O.Z29VCRFC=a},v2c:function(){gx.fn.setControlValue("VCRFC",
gx.O.A29VCRFC,0)},c2v:function(){gx.O.A29VCRFC=this.val()},val:function(){return gx.fn.getControlValue("VCRFC")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"TEXTBLOCKDTFECHA",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DTFECHA",gxz:"Z719DTFECHA",gxold:"O719DTFECHA",gxvar:"A719DTFECHA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A719DTFECHA=gx.num.intval(a)},v2z:function(a){gx.O.Z719DTFECHA=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("DTFECHA",gx.O.A719DTFECHA,0)},c2v:function(){gx.O.A719DTFECHA=this.val()},val:function(){return gx.fn.getIntegerValue("DTFECHA",",")},nac:function(){return!1}};this.GXValidFnc[52]={fld:"TEXTBLOCKVCNOMBRE",format:0,grid:0};this.GXValidFnc[54]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCNOMBRE",gxz:"Z9VCNOMBRE",gxold:"O9VCNOMBRE",gxvar:"A9VCNOMBRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.A9VCNOMBRE=a},v2z:function(a){gx.O.Z9VCNOMBRE=a},v2c:function(){gx.fn.setControlValue("VCNOMBRE",gx.O.A9VCNOMBRE,0)},c2v:function(){gx.O.A9VCNOMBRE=this.val()},val:function(){return gx.fn.getControlValue("VCNOMBRE")},nac:function(){return!1}};this.GXValidFnc[57]={fld:"TEXTBLOCKVCCURP",format:0,grid:0};this.GXValidFnc[59]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCCURP",gxz:"Z17VCCURP",gxold:"O17VCCURP",gxvar:"A17VCCURP",ucs:[],
op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A17VCCURP=a},v2z:function(a){gx.O.Z17VCCURP=a},v2c:function(){gx.fn.setControlValue("VCCURP",gx.O.A17VCCURP,0)},c2v:function(){gx.O.A17VCCURP=this.val()},val:function(){return gx.fn.getControlValue("VCCURP")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"TEXTBLOCKVCNOMBRECOMPLETO",format:0,grid:0};this.GXValidFnc[64]={lvl:0,type:"svchar",len:302,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCNOMBRECOMPLETO",
gxz:"Z718VCNOMBRECOMPLETO",gxold:"O718VCNOMBRECOMPLETO",gxvar:"A718VCNOMBRECOMPLETO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A718VCNOMBRECOMPLETO=a},v2z:function(a){gx.O.Z718VCNOMBRECOMPLETO=a},v2c:function(){gx.fn.setControlValue("VCNOMBRECOMPLETO",gx.O.A718VCNOMBRECOMPLETO,0)},c2v:function(){gx.O.A718VCNOMBRECOMPLETO=this.val()},val:function(){return gx.fn.getControlValue("VCNOMBRECOMPLETO")},nac:function(){return!1}};this.O717INENTIDADID=this.Z717INENTIDADID=this.A717INENTIDADID=
0;this.O29VCRFC=this.Z29VCRFC=this.A29VCRFC="";this.O719DTFECHA=this.Z719DTFECHA=this.A719DTFECHA=0;this.O718VCNOMBRECOMPLETO=this.Z718VCNOMBRECOMPLETO=this.A718VCNOMBRECOMPLETO=this.O17VCCURP=this.Z17VCCURP=this.A17VCCURP=this.O9VCNOMBRE=this.Z9VCNOMBRE=this.A9VCNOMBRE="";this.ServerEvents=["e111x82_client","e121x82_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}
vadentidadfisica.prototype=new gx.GxObject;gx.setParentObj(new vadentidadfisica);