gx.evt.autoSkip=!1;
function tipoasentamiento(){this.ServerClass="TIPOASENTAMIENTO";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Cve_tipo_asen=function(){gx.ajax.validSrvEvt("dyncall","valid_Cve_tipo_asen",["gx.O.A715CVE_TIPO_ASEN","gx.O.A716Nombre"],["A716Nombre","Gx_mode","Z715CVE_TIPO_ASEN","Z716Nombre",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.e111w81_client=
function(){this.executeServerEvent("ENTER",!0)};this.e121w81_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44];this.GXLastCtrlId=44;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]=
{fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]=
{fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKCVE_TIPO_ASEN",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"char",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cve_tipo_asen,isvalid:null,fld:"CVE_TIPO_ASEN",gxz:"Z715CVE_TIPO_ASEN",
gxold:"O715CVE_TIPO_ASEN",gxvar:"A715CVE_TIPO_ASEN",ucs:[],op:[44],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A715CVE_TIPO_ASEN=a},v2z:function(a){gx.O.Z715CVE_TIPO_ASEN=a},v2c:function(){gx.fn.setControlValue("CVE_TIPO_ASEN",gx.O.A715CVE_TIPO_ASEN,0)},c2v:function(){gx.O.A715CVE_TIPO_ASEN=this.val()},val:function(){return gx.fn.getControlValue("CVE_TIPO_ASEN")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKNOMBRE",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"svchar",
len:255,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"NOMBRE",gxz:"Z716Nombre",gxold:"O716Nombre",gxvar:"A716Nombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A716Nombre=a},v2z:function(a){gx.O.Z716Nombre=a},v2c:function(){gx.fn.setControlValue("NOMBRE",gx.O.A716Nombre,0)},c2v:function(){gx.O.A716Nombre=this.val()},val:function(){return gx.fn.getControlValue("NOMBRE")},nac:function(){return!1}};this.O716Nombre=this.Z716Nombre=this.A716Nombre=
this.O715CVE_TIPO_ASEN=this.Z715CVE_TIPO_ASEN=this.A715CVE_TIPO_ASEN="";this.ServerEvents=["e111w81_client","e121w81_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}tipoasentamiento.prototype=new gx.GxObject;gx.setParentObj(new tipoasentamiento);