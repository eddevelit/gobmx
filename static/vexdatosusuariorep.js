gx.evt.autoSkip=!1;
function vexdatosusuariorep(){this.ServerClass="VEXDATOSUSUARIOREP";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Bgtramiteid=function(){try{var a=gx.util.balloon.getNew("BGTRAMITEID");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vccurp=function(){try{var a=gx.util.balloon.getNew("VCCURP");this.AnyError=0}catch(b){}try{return null==a?
!0:a.show()}catch(c){}return!0};this.Valid_Vcnombre=function(){try{var a=gx.util.balloon.getNew("VCNOMBRE");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vcapellido1=function(){try{var a=gx.util.balloon.getNew("VCAPELLIDO1");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vcapellido2=function(){try{var a=gx.util.balloon.getNew("VCAPELLIDO2");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};
this.Valid_Vccorreo=function(){gx.ajax.validSrvEvt("dyncall","valid_Vccorreo","gx.O.A2BGTRAMITEID gx.O.A17VCCURP gx.O.A9VCNOMBRE gx.O.A5VCAPELLIDO1 gx.O.A6VCAPELLIDO2 gx.O.A33VCCORREO".split(" "),["Gx_mode","Z2BGTRAMITEID","Z17VCCURP","Z9VCNOMBRE","Z5VCAPELLIDO1","Z6VCAPELLIDO2","Z33VCCORREO",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.e11033_client=function(){this.executeServerEvent("ENTER",!0)};this.e12033_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=
[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64];this.GXLastCtrlId=64;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",
grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",
grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKBGTRAMITEID",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bgtramiteid,isvalid:null,rgrid:[],fld:"BGTRAMITEID",gxz:"Z2BGTRAMITEID",gxold:"O2BGTRAMITEID",gxvar:"A2BGTRAMITEID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A2BGTRAMITEID=
gx.num.intval(a)},v2z:function(a){gx.O.Z2BGTRAMITEID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("BGTRAMITEID",gx.O.A2BGTRAMITEID,0)},c2v:function(){gx.O.A2BGTRAMITEID=this.val()},val:function(){return gx.fn.getIntegerValue("BGTRAMITEID",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKVCCURP",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vccurp,isvalid:null,fld:"VCCURP",gxz:"Z17VCCURP",gxold:"O17VCCURP",
gxvar:"A17VCCURP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A17VCCURP=a},v2z:function(a){gx.O.Z17VCCURP=a},v2c:function(){gx.fn.setControlValue("VCCURP",gx.O.A17VCCURP,0)},c2v:function(){gx.O.A17VCCURP=this.val()},val:function(){return gx.fn.getControlValue("VCCURP")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"TEXTBLOCKVCNOMBRE",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vcnombre,isvalid:null,
fld:"VCNOMBRE",gxz:"Z9VCNOMBRE",gxold:"O9VCNOMBRE",gxvar:"A9VCNOMBRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A9VCNOMBRE=a},v2z:function(a){gx.O.Z9VCNOMBRE=a},v2c:function(){gx.fn.setControlValue("VCNOMBRE",gx.O.A9VCNOMBRE,0)},c2v:function(){gx.O.A9VCNOMBRE=this.val()},val:function(){return gx.fn.getControlValue("VCNOMBRE")},nac:function(){return!1}};this.GXValidFnc[52]={fld:"TEXTBLOCKVCAPELLIDO1",format:0,grid:0};this.GXValidFnc[54]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,
ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Vcapellido1,isvalid:null,fld:"VCAPELLIDO1",gxz:"Z5VCAPELLIDO1",gxold:"O5VCAPELLIDO1",gxvar:"A5VCAPELLIDO1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A5VCAPELLIDO1=a},v2z:function(a){gx.O.Z5VCAPELLIDO1=a},v2c:function(){gx.fn.setControlValue("VCAPELLIDO1",gx.O.A5VCAPELLIDO1,0)},c2v:function(){gx.O.A5VCAPELLIDO1=this.val()},val:function(){return gx.fn.getControlValue("VCAPELLIDO1")},nac:function(){return!1}};this.GXValidFnc[57]=
{fld:"TEXTBLOCKVCAPELLIDO2",format:0,grid:0};this.GXValidFnc[59]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Vcapellido2,isvalid:null,fld:"VCAPELLIDO2",gxz:"Z6VCAPELLIDO2",gxold:"O6VCAPELLIDO2",gxvar:"A6VCAPELLIDO2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A6VCAPELLIDO2=a},v2z:function(a){gx.O.Z6VCAPELLIDO2=a},v2c:function(){gx.fn.setControlValue("VCAPELLIDO2",gx.O.A6VCAPELLIDO2,0)},c2v:function(){gx.O.A6VCAPELLIDO2=this.val()},
val:function(){return gx.fn.getControlValue("VCAPELLIDO2")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"TEXTBLOCKVCCORREO",format:0,grid:0};this.GXValidFnc[64]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Vccorreo,isvalid:null,fld:"VCCORREO",gxz:"Z33VCCORREO",gxold:"O33VCCORREO",gxvar:"A33VCCORREO",ucs:[],op:[],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A33VCCORREO=a},v2z:function(a){gx.O.Z33VCCORREO=a},v2c:function(){gx.fn.setControlValue("VCCORREO",
gx.O.A33VCCORREO,0)},c2v:function(){gx.O.A33VCCORREO=this.val()},val:function(){return gx.fn.getControlValue("VCCORREO")},nac:function(){return!1}};this.O2BGTRAMITEID=this.Z2BGTRAMITEID=this.A2BGTRAMITEID=0;this.O33VCCORREO=this.Z33VCCORREO=this.A33VCCORREO=this.O6VCAPELLIDO2=this.Z6VCAPELLIDO2=this.A6VCAPELLIDO2=this.O5VCAPELLIDO1=this.Z5VCAPELLIDO1=this.A5VCAPELLIDO1=this.O9VCNOMBRE=this.Z9VCNOMBRE=this.A9VCNOMBRE=this.O17VCCURP=this.Z17VCCURP=this.A17VCCURP="";this.ServerEvents=["e11033_client",
"e12033_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}vexdatosusuariorep.prototype=new gx.GxObject;gx.setParentObj(new vexdatosusuariorep);