gx.evt.autoSkip=!1;
function vexdatostramite(){this.ServerClass="VEXDATOSTRAMITE";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Bgtramiteid=function(){try{var a=gx.util.balloon.getNew("BGTRAMITEID");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Dtfecharegistro=function(){try{var a=gx.util.balloon.getNew("DTFECHAREGISTRO");this.AnyError=0}catch(b){}try{return null==
a?!0:a.show()}catch(c){}return!0};this.Valid_Bgid_tramite_lk=function(){try{var a=gx.util.balloon.getNew("BGID_TRAMITE_LK");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vcclave_tramite=function(){try{var a=gx.util.balloon.getNew("VCCLAVE_TRAMITE");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vcnombre=function(){try{var a=gx.util.balloon.getNew("VCNOMBRE");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};
this.Valid_Vcapellido1=function(){try{var a=gx.util.balloon.getNew("VCAPELLIDO1");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Vcapellido2=function(){gx.ajax.validSrvEvt("dyncall","valid_Vcapellido2",'gx.O.A2BGTRAMITEID gx.date.urlDateTime(gx.O.A3DTFECHAREGISTRO,"MDY4") gx.O.A1BGID_TRAMITE_LK gx.O.A8VCCLAVE_TRAMITE gx.O.A9VCNOMBRE gx.O.A5VCAPELLIDO1 gx.O.A6VCAPELLIDO2 gx.O.A7VCBITACORA gx.O.A10VCPROYECTO gx.O.A11VCREFERENCIA gx.O.A4MONTO_CONREDONDEO'.split(" "),
["A7VCBITACORA","A10VCPROYECTO","A11VCREFERENCIA","A4MONTO_CONREDONDEO","Gx_mode","Z2BGTRAMITEID","Z3DTFECHAREGISTRO","Z1BGID_TRAMITE_LK","Z8VCCLAVE_TRAMITE","Z9VCNOMBRE","Z5VCAPELLIDO1","Z6VCAPELLIDO2","Z7VCBITACORA","Z10VCPROYECTO","Z11VCREFERENCIA","Z4MONTO_CONREDONDEO",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.e11011_client=function(){this.executeServerEvent("ENTER",!0)};this.e12011_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=
[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89];this.GXLastCtrlId=89;this.GXValidFnc[2]={fld:"TABLEMAIN",grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]=
{fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]=
{fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]={fld:"TEXTBLOCKBGTRAMITEID",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bgtramiteid,isvalid:null,rgrid:[],fld:"BGTRAMITEID",gxz:"Z2BGTRAMITEID",gxold:"O2BGTRAMITEID",gxvar:"A2BGTRAMITEID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.A2BGTRAMITEID=gx.num.intval(a)},v2z:function(a){gx.O.Z2BGTRAMITEID=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("BGTRAMITEID",gx.O.A2BGTRAMITEID,0)},c2v:function(){gx.O.A2BGTRAMITEID=this.val()},val:function(){return gx.fn.getIntegerValue("BGTRAMITEID",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKDTFECHAREGISTRO",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dtfecharegistro,isvalid:null,
fld:"DTFECHAREGISTRO",gxz:"Z3DTFECHAREGISTRO",gxold:"O3DTFECHAREGISTRO",gxvar:"A3DTFECHAREGISTRO",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A3DTFECHAREGISTRO=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z3DTFECHAREGISTRO=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("DTFECHAREGISTRO",gx.O.A3DTFECHAREGISTRO,0)},c2v:function(){gx.O.A3DTFECHAREGISTRO=this.val()},val:function(){return gx.fn.getDateTimeValue("DTFECHAREGISTRO")},
nac:function(){return!1}};this.GXValidFnc[47]={fld:"TEXTBLOCKBGID_TRAMITE_LK",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bgid_tramite_lk,isvalid:null,rgrid:[],fld:"BGID_TRAMITE_LK",gxz:"Z1BGID_TRAMITE_LK",gxold:"O1BGID_TRAMITE_LK",gxvar:"A1BGID_TRAMITE_LK",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A1BGID_TRAMITE_LK=gx.num.intval(a)},v2z:function(a){gx.O.Z1BGID_TRAMITE_LK=gx.num.intval(a)},
v2c:function(){gx.fn.setControlValue("BGID_TRAMITE_LK",gx.O.A1BGID_TRAMITE_LK,0)},c2v:function(){gx.O.A1BGID_TRAMITE_LK=this.val()},val:function(){return gx.fn.getIntegerValue("BGID_TRAMITE_LK",",")},nac:function(){return!1}};this.GXValidFnc[52]={fld:"TEXTBLOCKVCCLAVE_TRAMITE",format:0,grid:0};this.GXValidFnc[54]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vcclave_tramite,isvalid:null,fld:"VCCLAVE_TRAMITE",gxz:"Z8VCCLAVE_TRAMITE",gxold:"O8VCCLAVE_TRAMITE",gxvar:"A8VCCLAVE_TRAMITE",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A8VCCLAVE_TRAMITE=a},v2z:function(a){gx.O.Z8VCCLAVE_TRAMITE=a},v2c:function(){gx.fn.setControlValue("VCCLAVE_TRAMITE",gx.O.A8VCCLAVE_TRAMITE,0)},c2v:function(){gx.O.A8VCCLAVE_TRAMITE=this.val()},val:function(){return gx.fn.getControlValue("VCCLAVE_TRAMITE")},nac:function(){return!1}};this.GXValidFnc[57]={fld:"TEXTBLOCKVCBITACORA",format:0,grid:0};this.GXValidFnc[59]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,fld:"VCBITACORA",gxz:"Z7VCBITACORA",gxold:"O7VCBITACORA",gxvar:"A7VCBITACORA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A7VCBITACORA=a},v2z:function(a){gx.O.Z7VCBITACORA=a},v2c:function(){gx.fn.setControlValue("VCBITACORA",gx.O.A7VCBITACORA,0)},c2v:function(){gx.O.A7VCBITACORA=this.val()},val:function(){return gx.fn.getControlValue("VCBITACORA")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"TEXTBLOCKVCPROYECTO",format:0,grid:0};this.GXValidFnc[64]=
{lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCPROYECTO",gxz:"Z10VCPROYECTO",gxold:"O10VCPROYECTO",gxvar:"A10VCPROYECTO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A10VCPROYECTO=a},v2z:function(a){gx.O.Z10VCPROYECTO=a},v2c:function(){gx.fn.setControlValue("VCPROYECTO",gx.O.A10VCPROYECTO,0)},c2v:function(){gx.O.A10VCPROYECTO=this.val()},val:function(){return gx.fn.getControlValue("VCPROYECTO")},nac:function(){return!1}};this.GXValidFnc[67]=
{fld:"TEXTBLOCKVCNOMBRE",format:0,grid:0};this.GXValidFnc[69]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vcnombre,isvalid:null,fld:"VCNOMBRE",gxz:"Z9VCNOMBRE",gxold:"O9VCNOMBRE",gxvar:"A9VCNOMBRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A9VCNOMBRE=a},v2z:function(a){gx.O.Z9VCNOMBRE=a},v2c:function(){gx.fn.setControlValue("VCNOMBRE",gx.O.A9VCNOMBRE,0)},c2v:function(){gx.O.A9VCNOMBRE=this.val()},val:function(){return gx.fn.getControlValue("VCNOMBRE")},
nac:function(){return!1}};this.GXValidFnc[72]={fld:"TEXTBLOCKVCAPELLIDO1",format:0,grid:0};this.GXValidFnc[74]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Vcapellido1,isvalid:null,fld:"VCAPELLIDO1",gxz:"Z5VCAPELLIDO1",gxold:"O5VCAPELLIDO1",gxvar:"A5VCAPELLIDO1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A5VCAPELLIDO1=a},v2z:function(a){gx.O.Z5VCAPELLIDO1=a},v2c:function(){gx.fn.setControlValue("VCAPELLIDO1",gx.O.A5VCAPELLIDO1,
0)},c2v:function(){gx.O.A5VCAPELLIDO1=this.val()},val:function(){return gx.fn.getControlValue("VCAPELLIDO1")},nac:function(){return!1}};this.GXValidFnc[77]={fld:"TEXTBLOCKVCAPELLIDO2",format:0,grid:0};this.GXValidFnc[79]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Vcapellido2,isvalid:null,fld:"VCAPELLIDO2",gxz:"Z6VCAPELLIDO2",gxold:"O6VCAPELLIDO2",gxvar:"A6VCAPELLIDO2",ucs:[],op:[89,84,64,59],ip:[89,84,64,59,79,74,69,54,49,44,39],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.A6VCAPELLIDO2=a},v2z:function(a){gx.O.Z6VCAPELLIDO2=a},v2c:function(){gx.fn.setControlValue("VCAPELLIDO2",gx.O.A6VCAPELLIDO2,0)},c2v:function(){gx.O.A6VCAPELLIDO2=this.val()},val:function(){return gx.fn.getControlValue("VCAPELLIDO2")},nac:function(){return!1}};this.GXValidFnc[82]={fld:"TEXTBLOCKVCREFERENCIA",format:0,grid:0};this.GXValidFnc[84]={lvl:0,type:"char",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"VCREFERENCIA",gxz:"Z11VCREFERENCIA",gxold:"O11VCREFERENCIA",
gxvar:"A11VCREFERENCIA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A11VCREFERENCIA=a},v2z:function(a){gx.O.Z11VCREFERENCIA=a},v2c:function(){gx.fn.setControlValue("VCREFERENCIA",gx.O.A11VCREFERENCIA,0)},c2v:function(){gx.O.A11VCREFERENCIA=this.val()},val:function(){return gx.fn.getControlValue("VCREFERENCIA")},nac:function(){return!1}};this.GXValidFnc[87]={fld:"TEXTBLOCKMONTO_CONREDONDEO",format:0,grid:0};this.GXValidFnc[89]={lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",
ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTO_CONREDONDEO",gxz:"Z4MONTO_CONREDONDEO",gxold:"O4MONTO_CONREDONDEO",gxvar:"A4MONTO_CONREDONDEO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A4MONTO_CONREDONDEO=gx.num.intval(a)},v2z:function(a){gx.O.Z4MONTO_CONREDONDEO=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("MONTO_CONREDONDEO",gx.O.A4MONTO_CONREDONDEO,0)},c2v:function(){gx.O.A4MONTO_CONREDONDEO=this.val()},val:function(){return gx.fn.getIntegerValue("MONTO_CONREDONDEO",
",")},nac:function(){return!1}};this.O2BGTRAMITEID=this.Z2BGTRAMITEID=this.A2BGTRAMITEID=0;this.A3DTFECHAREGISTRO=gx.date.nullDate();this.Z3DTFECHAREGISTRO=gx.date.nullDate();this.O3DTFECHAREGISTRO=gx.date.nullDate();this.O1BGID_TRAMITE_LK=this.Z1BGID_TRAMITE_LK=this.A1BGID_TRAMITE_LK=0;this.O11VCREFERENCIA=this.Z11VCREFERENCIA=this.A11VCREFERENCIA=this.O6VCAPELLIDO2=this.Z6VCAPELLIDO2=this.A6VCAPELLIDO2=this.O5VCAPELLIDO1=this.Z5VCAPELLIDO1=this.A5VCAPELLIDO1=this.O9VCNOMBRE=this.Z9VCNOMBRE=this.A9VCNOMBRE=
this.O10VCPROYECTO=this.Z10VCPROYECTO=this.A10VCPROYECTO=this.O7VCBITACORA=this.Z7VCBITACORA=this.A7VCBITACORA=this.O8VCCLAVE_TRAMITE=this.Z8VCCLAVE_TRAMITE=this.A8VCCLAVE_TRAMITE="";this.O4MONTO_CONREDONDEO=this.Z4MONTO_CONREDONDEO=this.A4MONTO_CONREDONDEO=0;this.ServerEvents=["e11011_client","e12011_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}vexdatostramite.prototype=new gx.GxObject;
gx.setParentObj(new vexdatostramite);
