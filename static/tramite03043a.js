gx.evt.autoSkip=!1;
function tramite03043a(){this.ServerClass="Tramite03043a";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Foliosinatec=function(){try{var a=gx.util.balloon.getNew("vFOLIOSINATEC");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.s132_client=function(){this.AV48PorCalculado=0;this.AV48PorCalculado="FIS"==this.AV44Persona?""==this.AV19DSoRazSoC||""==this.AV19DSoRazSoC||
""==this.AV19DSoRazSoC?0:this.AV48PorCalculado+50:""==this.AV19DSoRazSoC||""==this.AV19DSoRazSoC||""==this.AV19DSoRazSoC?0:this.AV48PorCalculado+33};this.e120n2_client=function(){this.executeServerEvent("'GUARDAR'",!1)};this.e130n2_client=function(){this.executeServerEvent("'CONTINUAR'",!1)};this.e150n2_client=function(){this.executeServerEvent("ENTER",!0)};this.e160n2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[4,8,9,11,13,18,19,22,23,26,27,30,31,34,
35,38,39,42,43,46,47,50,51,54,55,58,59,63,65,68,69,70,71,72];this.GXLastCtrlId=72;this.GXValidFnc[4]={fld:"BREADCRUMBS",format:1,grid:0};this.GXValidFnc[8]={fld:"LBLPASOS",format:1,grid:0};this.GXValidFnc[9]={fld:"NOMBRETRAMITE",format:1,grid:0};this.GXValidFnc[11]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[13]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[18]={fld:"LABELCURP",format:1,grid:0};this.GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,
grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOCURPCC",gxz:"ZV39DSoCURPCC",gxold:"OV39DSoCURPCC",gxvar:"AV39DSoCURPCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV39DSoCURPCC=a},v2z:function(a){gx.O.ZV39DSoCURPCC=a},v2c:function(){gx.fn.setControlValue("vDSOCURPCC",gx.O.AV39DSoCURPCC,0)},c2v:function(){gx.O.AV39DSoCURPCC=this.val()},val:function(){return gx.fn.getControlValue("vDSOCURPCC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"LABELRFC",format:1,grid:0};this.GXValidFnc[23]=
{lvl:0,type:"svchar",len:16,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSORFCCCC",gxz:"ZV21DSoRFCCCC",gxold:"OV21DSoRFCCCC",gxvar:"AV21DSoRFCCCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV21DSoRFCCCC=a},v2z:function(a){gx.O.ZV21DSoRFCCCC=a},v2c:function(){gx.fn.setControlValue("vDSORFCCCC",gx.O.AV21DSoRFCCCC,0)},c2v:function(){gx.O.AV21DSoRFCCCC=this.val()},val:function(){return gx.fn.getControlValue("vDSORFCCCC")},nac:function(){return!1}};
this.GXValidFnc[26]={fld:"LABELRS",format:1,grid:0};this.GXValidFnc[27]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSORAZSOC",gxz:"ZV19DSoRazSoC",gxold:"OV19DSoRazSoC",gxvar:"AV19DSoRazSoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV19DSoRazSoC=a},v2z:function(a){gx.O.ZV19DSoRazSoC=a},v2c:function(){gx.fn.setControlValue("vDSORAZSOC",gx.O.AV19DSoRazSoC,0)},c2v:function(){gx.O.AV19DSoRazSoC=this.val()},val:function(){return gx.fn.getControlValue("vDSORAZSOC")},
nac:function(){return!1}};this.GXValidFnc[30]={fld:"LABELTEL",format:1,grid:0};this.GXValidFnc[31]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOTELEFC",gxz:"ZV23DSoTelefC",gxold:"OV23DSoTelefC",gxvar:"AV23DSoTelefC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV23DSoTelefC=a},v2z:function(a){gx.O.ZV23DSoTelefC=a},v2c:function(){gx.fn.setControlValue("vDSOTELEFC",gx.O.AV23DSoTelefC,0)},c2v:function(){gx.O.AV23DSoTelefC=this.val()},
val:function(){return gx.fn.getControlValue("vDSOTELEFC")},nac:function(){return!1}};this.GXValidFnc[34]={fld:"LABELCE",format:1,grid:0};this.GXValidFnc[35]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOCORREC",gxz:"ZV13DSoCorreC",gxold:"OV13DSoCorreC",gxvar:"AV13DSoCorreC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV13DSoCorreC=a},v2z:function(a){gx.O.ZV13DSoCorreC=a},v2c:function(){gx.fn.setControlValue("vDSOCORREC",gx.O.AV13DSoCorreC,
0)},c2v:function(){gx.O.AV13DSoCorreC=this.val()},val:function(){return gx.fn.getControlValue("vDSOCORREC")},nac:function(){return!1}};this.GXValidFnc[38]={fld:"LABELCP",format:1,grid:0};this.GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:!1,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOCODPOC",gxz:"ZV11DSoCodPoC",gxold:"OV11DSoCodPoC",gxvar:"AV11DSoCodPoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV11DSoCodPoC=a},v2z:function(a){gx.O.ZV11DSoCodPoC=
a},v2c:function(){gx.fn.setControlValue("vDSOCODPOC",gx.O.AV11DSoCodPoC,0)},c2v:function(){gx.O.AV11DSoCodPoC=this.val()},val:function(){return gx.fn.getControlValue("vDSOCODPOC")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"LABELESTADO",format:1,grid:0};this.GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vENTDESCC",gxz:"ZV24EntDescc",gxold:"OV24EntDescc",gxvar:"AV24EntDescc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV24EntDescc=
a},v2z:function(a){gx.O.ZV24EntDescc=a},v2c:function(){gx.fn.setControlValue("vENTDESCC",gx.O.AV24EntDescc,0)},c2v:function(){gx.O.AV24EntDescc=this.val()},val:function(){return gx.fn.getControlValue("vENTDESCC")},nac:function(){return!1}};this.GXValidFnc[46]={fld:"LABELMUN",format:1,grid:0};this.GXValidFnc[47]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vMUNDESCC",gxz:"ZV28MunDescc",gxold:"OV28MunDescc",gxvar:"AV28MunDescc",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",v2v:function(a){gx.O.AV28MunDescc=a},v2z:function(a){gx.O.ZV28MunDescc=a},v2c:function(){gx.fn.setControlValue("vMUNDESCC",gx.O.AV28MunDescc,0)},c2v:function(){gx.O.AV28MunDescc=this.val()},val:function(){return gx.fn.getControlValue("vMUNDESCC")},nac:function(){return!1}};this.GXValidFnc[50]={fld:"LABELDOMICILIO",format:1,grid:0};this.GXValidFnc[51]={lvl:0,type:"svchar",len:255,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOCALLE",gxz:"ZV52DSoCalle",gxold:"OV52DSoCalle",
gxvar:"AV52DSoCalle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV52DSoCalle=a},v2z:function(a){gx.O.ZV52DSoCalle=a},v2c:function(){gx.fn.setControlValue("vDSOCALLE",gx.O.AV52DSoCalle,0)},c2v:function(){gx.O.AV52DSoCalle=this.val()},val:function(){return gx.fn.getControlValue("vDSOCALLE")},nac:function(){return!1}};this.GXValidFnc[54]={fld:"LABELNUMEXT",format:1,grid:0};this.GXValidFnc[55]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"vDSONUMEXT",gxz:"ZV53DsoNumExt",gxold:"OV53DsoNumExt",gxvar:"AV53DsoNumExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV53DsoNumExt=a},v2z:function(a){gx.O.ZV53DsoNumExt=a},v2c:function(){gx.fn.setControlValue("vDSONUMEXT",gx.O.AV53DsoNumExt,0)},c2v:function(){gx.O.AV53DsoNumExt=this.val()},val:function(){return gx.fn.getControlValue("vDSONUMEXT")},nac:function(){return!1}};this.GXValidFnc[58]={fld:"LABELNUMINT",format:1,grid:0};this.GXValidFnc[59]={lvl:0,type:"svchar",
len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSONUMINT",gxz:"ZV54DsoNumInt",gxold:"OV54DsoNumInt",gxvar:"AV54DsoNumInt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV54DsoNumInt=a},v2z:function(a){gx.O.ZV54DsoNumInt=a},v2c:function(){gx.fn.setControlValue("vDSONUMINT",gx.O.AV54DsoNumInt,0)},c2v:function(){gx.O.AV54DsoNumInt=this.val()},val:function(){return gx.fn.getControlValue("vDSONUMINT")},nac:function(){return!1}};this.GXValidFnc[63]={fld:"SEPARADOR_1",
format:1,grid:0};this.GXValidFnc[65]={fld:"BTN_DESCARTAR",format:1,grid:0};this.GXValidFnc[68]={lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPERSONA",gxz:"ZV44Persona",gxold:"OV44Persona",gxvar:"AV44Persona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV44Persona=a},v2z:function(a){gx.O.ZV44Persona=a},v2c:function(){gx.fn.setControlValue("vPERSONA",gx.O.AV44Persona,0)},c2v:function(){gx.O.AV44Persona=this.val()},val:function(){return gx.fn.getControlValue("vPERSONA")},
nac:function(){return!1}};this.GXValidFnc[69]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Foliosinatec,isvalid:null,rgrid:[],fld:"vFOLIOSINATEC",gxz:"ZV37FolioSinatec",gxold:"OV37FolioSinatec",gxvar:"AV37FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV37FolioSinatec=gx.num.intval(a)},v2z:function(a){gx.O.ZV37FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV37FolioSinatec,
0)},c2v:function(){gx.O.AV37FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.GXValidFnc[70]={fld:"JAVASCRIPTCIERRA",format:1,grid:0};this.GXValidFnc[71]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORCALCULADO",gxz:"ZV48PorCalculado",gxold:"OV48PorCalculado",gxvar:"AV48PorCalculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV48PorCalculado=
gx.num.intval(a)},v2z:function(a){gx.O.ZV48PorCalculado=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vPORCALCULADO",gx.O.AV48PorCalculado,0)},c2v:function(){gx.O.AV48PorCalculado=this.val()},val:function(){return gx.fn.getIntegerValue("vPORCALCULADO",",")},nac:function(){return!1}};this.GXValidFnc[72]={fld:"JSANALYTIX",format:1,grid:0};this.OV44Persona=this.ZV44Persona=this.AV44Persona=this.OV54DsoNumInt=this.ZV54DsoNumInt=this.AV54DsoNumInt=this.OV53DsoNumExt=this.ZV53DsoNumExt=this.AV53DsoNumExt=
this.OV52DSoCalle=this.ZV52DSoCalle=this.AV52DSoCalle=this.OV28MunDescc=this.ZV28MunDescc=this.AV28MunDescc=this.OV24EntDescc=this.ZV24EntDescc=this.AV24EntDescc=this.OV11DSoCodPoC=this.ZV11DSoCodPoC=this.AV11DSoCodPoC=this.OV13DSoCorreC=this.ZV13DSoCorreC=this.AV13DSoCorreC=this.OV23DSoTelefC=this.ZV23DSoTelefC=this.AV23DSoTelefC=this.OV19DSoRazSoC=this.ZV19DSoRazSoC=this.AV19DSoRazSoC=this.OV21DSoRFCCCC=this.ZV21DSoRFCCCC=this.AV21DSoRFCCCC=this.OV39DSoCURPCC=this.ZV39DSoCURPCC=this.AV39DSoCURPCC=
"";this.A2BGTRAMITEID=this.OV48PorCalculado=this.ZV48PorCalculado=this.AV48PorCalculado=this.OV37FolioSinatec=this.ZV37FolioSinatec=this.AV37FolioSinatec=0;this.A39VCNOMBRE_ENTIDAD_FEDERATIVA_LK=this.A38VCNOMBRE_DELEG_MUNICIPIO_LK=this.A23VCID_ENTIDAD_FEDERATIVA_LK=this.A22VCID_DELEGACION_MUNICIPIO_LK=this.A33VCCORREO="";this.A13BGCVE_TIPO_VIAL_LK=0;this.A30VCTIPOASENTAMIENTO=this.A18VCD_ASENTA_LK=this.A19VCD_CODIGO_LK=this.A25VCNOMBREVIALIDAD=this.A26VCNUMEXTERIOR=this.A27VCNUMINTERIOR=this.A17VCCURP=
this.A28VCRAZONSOCIAL=this.A16VCAPELLIDOPATERNO=this.A15VCAPELLIDOMATERNO=this.A9VCNOMBRE=this.A32VCTIPOPERSONA=this.A29VCRFC=this.A37VCDESCRIPCION_LK="";this.A557Tramite03043_AFolio=0;this.A701Tramite03043_ADSoNumInt=this.A702TRamite03043_AdsoNumExt=this.A700Tramite03043_ADSoCalle=this.A567Tramite03043_ADsoNoFaxC=this.A566Tramite03043_ADSoTelefC=this.A565Tramite03043_AMunIdc=this.A564Tramite03043_AEntIdc=this.A563Tramite03043_ADSoCorreC=this.A562Tramite03043_ADSoCodPoC=this.A561Tramite03043_ADSoCalleC=
this.A560Tramite03043_ADSoIDOfiC=this.A559Tramite03043_ADSoRFCCCC=this.A558Tramite03043_ADSoRazSoC="";this.ServerEvents=["e120n2_client","e130n2_client","e150n2_client","e160n2_client"];this.SetStandaloneVars()}tramite03043a.prototype=new gx.GxObject;gx.setParentObj(new tramite03043a);
