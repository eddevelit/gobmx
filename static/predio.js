gx.evt.autoSkip=!1;
function predio(){this.ServerClass="Predio";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Bita_numero=function(){gx.ajax.validSrvEvt("dyncall","valid_Bita_numero",["gx.O.A45BITA_NUMERO"],[]);return!0};this.Valid_Prednumc=function(){gx.ajax.validSrvEvt("dyncall","valid_Prednumc","gx.O.A45BITA_NUMERO gx.O.A252PredNumc gx.O.A380PredNomc gx.O.A385PredLocc gx.O.A269PredConPrC gx.O.A41EntIdc gx.O.A43MunIdc".split(" "),["A380PredNomc",
"A385PredLocc","A41EntIdc","A269PredConPrC","A43MunIdc","Gx_mode","Z45BITA_NUMERO","Z252PredNumc","Z380PredNomc","Z385PredLocc","Z41EntIdc","Z269PredConPrC","Z43MunIdc",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.Valid_Entidc=function(){gx.ajax.validSrvEvt("dyncall","valid_Entidc",["gx.O.A41EntIdc","gx.O.A43MunIdc"],["A43MunIdc"]);return!0};this.Valid_Munidc=function(){gx.ajax.validSrvEvt("dyncall","valid_Munidc",["gx.O.A41EntIdc","gx.O.A43MunIdc"],[]);return!0};this.e110x34_client=
function(){this.executeServerEvent("ENTER",!0)};this.e120x34_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69];this.GXLastCtrlId=69;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",
grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",
grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bita_numero,isvalid:null,fld:"BITA_NUMERO",
gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("BITA_NUMERO",gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("BITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKPREDNUMC",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"char",
len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Prednumc,isvalid:null,fld:"PREDNUMC",gxz:"Z252PredNumc",gxold:"O252PredNumc",gxvar:"A252PredNumc",ucs:[],op:[64,59,69,54,49],ip:[64,59,69,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A252PredNumc=a},v2z:function(a){gx.O.Z252PredNumc=a},v2c:function(){gx.fn.setControlValue("PREDNUMC",gx.O.A252PredNumc,0)},c2v:function(){gx.O.A252PredNumc=this.val()},val:function(){return gx.fn.getControlValue("PREDNUMC")},nac:function(){return!1}};
this.GXValidFnc[47]={fld:"TEXTBLOCKPREDNOMC",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"svchar",len:600,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"PREDNOMC",gxz:"Z380PredNomc",gxold:"O380PredNomc",gxvar:"A380PredNomc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A380PredNomc=a},v2z:function(a){gx.O.Z380PredNomc=a},v2c:function(){gx.fn.setControlValue("PREDNOMC",gx.O.A380PredNomc,0)},c2v:function(){gx.O.A380PredNomc=this.val()},val:function(){return gx.fn.getControlValue("PREDNOMC")},
nac:function(){return!1}};this.GXValidFnc[52]={fld:"TEXTBLOCKPREDLOCC",format:0,grid:0};this.GXValidFnc[54]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"PREDLOCC",gxz:"Z385PredLocc",gxold:"O385PredLocc",gxvar:"A385PredLocc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A385PredLocc=a},v2z:function(a){gx.O.Z385PredLocc=a},v2c:function(){gx.fn.setControlValue("PREDLOCC",gx.O.A385PredLocc,0)},c2v:function(){gx.O.A385PredLocc=
this.val()},val:function(){return gx.fn.getControlValue("PREDLOCC")},nac:function(){return!1}};this.GXValidFnc[57]={fld:"TEXTBLOCKENTIDC",format:0,grid:0};this.GXValidFnc[59]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entidc,isvalid:null,fld:"ENTIDC",gxz:"Z41EntIdc",gxold:"O41EntIdc",gxvar:"A41EntIdc",ucs:[],op:[64],ip:[64,59],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.A41EntIdc=a},v2z:function(a){gx.O.Z41EntIdc=a},v2c:function(){gx.fn.setComboBoxValue("ENTIDC",
gx.O.A41EntIdc)},c2v:function(){gx.O.A41EntIdc=this.val()},val:function(){return gx.fn.getControlValue("ENTIDC")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"TEXTBLOCKMUNIDC",format:0,grid:0};this.GXValidFnc[64]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Munidc,isvalid:null,fld:"MUNIDC",gxz:"Z43MunIdc",gxold:"O43MunIdc",gxvar:"A43MunIdc",ucs:[],op:[],ip:[64,59],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.A43MunIdc=a},v2z:function(a){gx.O.Z43MunIdc=
a},v2c:function(){gx.fn.setComboBoxValue("MUNIDC",gx.O.A43MunIdc)},c2v:function(){gx.O.A43MunIdc=this.val()},val:function(){return gx.fn.getControlValue("MUNIDC")},nac:function(){return!1}};this.GXValidFnc[67]={fld:"TEXTBLOCKPREDCONPRC",format:0,grid:0};this.GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"PREDCONPRC",gxz:"Z269PredConPrC",gxold:"O269PredConPrC",gxvar:"A269PredConPrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(a){gx.O.A269PredConPrC=
a},v2z:function(a){gx.O.Z269PredConPrC=a},v2c:function(){gx.fn.setComboBoxValue("PREDCONPRC",gx.O.A269PredConPrC)},c2v:function(){gx.O.A269PredConPrC=this.val()},val:function(){return gx.fn.getControlValue("PREDCONPRC")},nac:function(){return!1}};this.O269PredConPrC=this.Z269PredConPrC=this.A269PredConPrC=this.O43MunIdc=this.Z43MunIdc=this.A43MunIdc=this.O41EntIdc=this.Z41EntIdc=this.A41EntIdc=this.O385PredLocc=this.Z385PredLocc=this.A385PredLocc=this.O380PredNomc=this.Z380PredNomc=this.A380PredNomc=
this.O252PredNumc=this.Z252PredNumc=this.A252PredNumc=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.A45BITA_NUMERO="";this.ServerEvents=["e110x34_client","e120x34_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}predio.prototype=new gx.GxObject;gx.setParentObj(new predio);