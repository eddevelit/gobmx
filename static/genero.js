gx.evt.autoSkip=!1;
function genero(){this.ServerClass="Genero";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Genclaven=function(){gx.ajax.validSrvEvt("dyncall","valid_Genclaven",["gx.O.A363GenClaveN","gx.O.A361GenDescrC","gx.O.A473GenMaderC"],["A361GenDescrC","A473GenMaderC","Gx_mode","Z363GenClaveN","Z361GenDescrC","Z473GenMaderC",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};
this.e111138_client=function(){this.executeServerEvent("ENTER",!0)};this.e121138_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49];this.GXLastCtrlId=49;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",
grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",
grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKGENCLAVEN",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Genclaven,isvalid:null,rgrid:[],
fld:"GENCLAVEN",gxz:"Z363GenClaveN",gxold:"O363GenClaveN",gxvar:"A363GenClaveN",ucs:[],op:[49,44],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A363GenClaveN=gx.num.intval(a)},v2z:function(a){gx.O.Z363GenClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GENCLAVEN",gx.O.A363GenClaveN,0)},c2v:function(){gx.O.A363GenClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("GENCLAVEN",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKGENDESCRC",format:0,
grid:0};this.GXValidFnc[44]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"GENDESCRC",gxz:"Z361GenDescrC",gxold:"O361GenDescrC",gxvar:"A361GenDescrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A361GenDescrC=a},v2z:function(a){gx.O.Z361GenDescrC=a},v2c:function(){gx.fn.setControlValue("GENDESCRC",gx.O.A361GenDescrC,0)},c2v:function(){gx.O.A361GenDescrC=this.val()},val:function(){return gx.fn.getControlValue("GENDESCRC")},nac:function(){return!1}};
this.GXValidFnc[47]={fld:"TEXTBLOCKGENMADERC",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENMADERC",gxz:"Z473GenMaderC",gxold:"O473GenMaderC",gxvar:"A473GenMaderC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A473GenMaderC=gx.num.intval(a)},v2z:function(a){gx.O.Z473GenMaderC=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GENMADERC",gx.O.A473GenMaderC,0)},c2v:function(){gx.O.A473GenMaderC=
this.val()},val:function(){return gx.fn.getIntegerValue("GENMADERC",",")},nac:function(){return!1}};this.O363GenClaveN=this.Z363GenClaveN=this.A363GenClaveN=0;this.O361GenDescrC=this.Z361GenDescrC=this.A361GenDescrC="";this.O473GenMaderC=this.Z473GenMaderC=this.A473GenMaderC=0;this.ServerEvents=["e111138_client","e121138_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}genero.prototype=new gx.GxObject;
gx.setParentObj(new genero);
