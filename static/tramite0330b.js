gx.evt.autoSkip=!1;
function tramite0330b(){this.ServerClass="Tramite0330b";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Entidc=function(){gx.ajax.validSrvEvt("dyncall","validv_Entidc",["gx.O.AV18EntIdc","gx.O.AV27MunIdc","gx.O.AV68localidad","gx.O.AV55Colonia"],["AV27MunIdc","AV68localidad","AV55Colonia"]);return!0};this.Validv_Munidc=function(){gx.ajax.validSrvEvt("dyncall","validv_Munidc",["gx.O.AV27MunIdc",
"gx.O.AV18EntIdc","gx.O.AV68localidad","gx.O.AV55Colonia"],["AV68localidad","AV55Colonia"]);return!0};this.Validv_Foliosinatec=function(){try{var a=gx.util.balloon.getNew("vFOLIOSINATEC");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.s122_client=function(){this.AV60PCalculado=0;this.AV60PCalculado+=49;this.AV60PCalculado+=this.AV61PorCalculado};this.e11091_client=function(){this.clearMessages();this.refreshOutputs([])};this.e13092_client=function(){this.executeServerEvent("'REGRESAR'",
!1)};this.e14092_client=function(){this.executeServerEvent("'GUARDAR'",!1)};this.e15092_client=function(){this.executeServerEvent("'CIERRE'",!0)};this.e17092_client=function(){this.executeServerEvent("ENTER",!0)};this.e18092_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[4,5,9,11,13,18,19,20,23,24,25,28,29,30,35,36,39,40,41,44,45,46,51,52,53,56,57,58,61,62,66,68,69,71,72,76,77,78,79,81,83,84,85,86,87];this.GXLastCtrlId=87;this.GXValidFnc[4]={fld:"BREADCRUMBS",
format:1,grid:0};this.GXValidFnc[5]={fld:"LBLPASOS",format:1,grid:0};this.GXValidFnc[9]={fld:"NOMBRETRAMITE",format:1,grid:0};this.GXValidFnc[11]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[13]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[18]={fld:"LABELEN",format:1,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entidc,isvalid:null,fld:"vENTIDC",gxz:"ZV18EntIdc",gxold:"OV18EntIdc",gxvar:"AV18EntIdc",ucs:[],
op:[36,29,24],ip:[36,29,24,19],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV18EntIdc=a},v2z:function(a){gx.O.ZV18EntIdc=a},v2c:function(){gx.fn.setComboBoxValue("vENTIDC",gx.O.AV18EntIdc)},c2v:function(){gx.O.AV18EntIdc=this.val()},val:function(){return gx.fn.getControlValue("vENTIDC")},nac:function(){return!1}};this.GXValidFnc[20]={fld:"LABELENERROR",format:1,grid:0};this.GXValidFnc[23]={fld:"LABELMUN",format:1,grid:0};this.GXValidFnc[24]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,
gxgrid:null,fnc:this.Validv_Munidc,isvalid:null,fld:"vMUNIDC",gxz:"ZV27MunIdc",gxold:"OV27MunIdc",gxvar:"AV27MunIdc",ucs:[],op:[36,29],ip:[36,29,19,24],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV27MunIdc=a},v2z:function(a){gx.O.ZV27MunIdc=a},v2c:function(){gx.fn.setComboBoxValue("vMUNIDC",gx.O.AV27MunIdc)},c2v:function(){gx.O.AV27MunIdc=this.val()},val:function(){return gx.fn.getControlValue("vMUNIDC")},nac:function(){return!1}};this.GXValidFnc[25]={fld:"LABELMUNERROR",format:1,grid:0};
this.GXValidFnc[28]={fld:"LABELLO",format:1,grid:0};this.GXValidFnc[29]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vLOCALIDAD",gxz:"ZV68localidad",gxold:"OV68localidad",gxvar:"AV68localidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV68localidad=a},v2z:function(a){gx.O.ZV68localidad=a},v2c:function(){gx.fn.setComboBoxValue("vLOCALIDAD",gx.O.AV68localidad)},c2v:function(){gx.O.AV68localidad=this.val()},val:function(){return gx.fn.getControlValue("vLOCALIDAD")},
nac:function(){return!1}};this.GXValidFnc[30]={fld:"LABELLOERROR",format:1,grid:0};this.GXValidFnc[35]={fld:"LABELPC",format:1,grid:0};this.GXValidFnc[36]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCOLONIA",gxz:"ZV55Colonia",gxold:"OV55Colonia",gxvar:"AV55Colonia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV55Colonia=a},v2z:function(a){gx.O.ZV55Colonia=a},v2c:function(){gx.fn.setComboBoxValue("vCOLONIA",gx.O.AV55Colonia)},
c2v:function(){gx.O.AV55Colonia=this.val()},val:function(){return gx.fn.getControlValue("vCOLONIA")},nac:function(){return!1}};this.GXValidFnc[39]={fld:"LABELPA",format:1,grid:0};this.GXValidFnc[40]={lvl:0,type:"svchar",len:400,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vARPPARAJC",gxz:"ZV12ArPParajC",gxold:"OV12ArPParajC",gxvar:"AV12ArPParajC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV12ArPParajC=a},v2z:function(a){gx.O.ZV12ArPParajC=a},v2c:function(){gx.fn.setControlValue("vARPPARAJC",
gx.O.AV12ArPParajC,0)},c2v:function(){gx.O.AV12ArPParajC=this.val()},val:function(){return gx.fn.getControlValue("vARPPARAJC")},nac:function(){return!1}};this.GXValidFnc[41]={fld:"LABELPAERROR",format:1,grid:0};this.GXValidFnc[44]={fld:"LABELPRE",format:1,grid:0};this.GXValidFnc[45]={lvl:0,type:"svchar",len:400,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vARNOMPRED",gxz:"ZV7ArNomPred",gxold:"OV7ArNomPred",gxvar:"AV7ArNomPred",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7ArNomPred=
a},v2z:function(a){gx.O.ZV7ArNomPred=a},v2c:function(){gx.fn.setControlValue("vARNOMPRED",gx.O.AV7ArNomPred,0)},c2v:function(){gx.O.AV7ArNomPred=this.val()},val:function(){return gx.fn.getControlValue("vARNOMPRED")},nac:function(){return!1}};this.GXValidFnc[46]={fld:"LABELPREERROR",format:1,grid:0};this.GXValidFnc[51]={fld:"LABELFECHATRAMITE",format:1,grid:0};this.GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDSOFECHAD",gxz:"ZV37DSoFechaD",
gxold:"OV37DSoFechaD",gxvar:"AV37DSoFechaD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV37DSoFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV37DSoFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDSOFECHAD",gx.O.AV37DSoFechaD,0)},c2v:function(){gx.O.AV37DSoFechaD=this.val()},val:function(){return gx.fn.getControlValue("vDSOFECHAD")},nac:function(){return!1}};this.GXValidFnc[53]={fld:"LABELFECHATRAMITEERROR",
format:1,grid:0};this.GXValidFnc[56]={fld:"LABELTIPOPERSONA",format:1,grid:0};this.GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPECLAVEN",gxz:"ZV38TPeClaveN",gxold:"OV38TPeClaveN",gxvar:"AV38TPeClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV38TPeClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV38TPeClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vTPECLAVEN",gx.O.AV38TPeClaveN)},
c2v:function(){gx.O.AV38TPeClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vTPECLAVEN",",")},nac:function(){return!1}};this.GXValidFnc[58]={fld:"LABELTIPOPERSONAERROR",format:1,grid:0};this.GXValidFnc[61]={fld:"LABELOB",format:1,grid:0};this.GXValidFnc[62]={lvl:0,type:"svchar",len:400,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vAROBSERVA",gxz:"ZV8ArObserva",gxold:"OV8ArObserva",gxvar:"AV8ArObserva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8ArObserva=
a},v2z:function(a){gx.O.ZV8ArObserva=a},v2c:function(){gx.fn.setControlValue("vAROBSERVA",gx.O.AV8ArObserva,0)},c2v:function(){gx.O.AV8ArObserva=this.val()},val:function(){return gx.fn.getControlValue("vAROBSERVA")},nac:function(){return!1}};this.GXValidFnc[66]={fld:"SEPARADOR_1",format:1,grid:0};this.GXValidFnc[68]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vNOMBREARCHIVOSATELITAL",gxz:"ZV107NombreArchivoSatelital",gxold:"OV107NombreArchivoSatelital",
gxvar:"AV107NombreArchivoSatelital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV107NombreArchivoSatelital=a},v2z:function(a){gx.O.ZV107NombreArchivoSatelital=a},v2c:function(){gx.fn.setControlValue("vNOMBREARCHIVOSATELITAL",gx.O.AV107NombreArchivoSatelital,0)},c2v:function(){gx.O.AV107NombreArchivoSatelital=this.val()},val:function(){return gx.fn.getControlValue("vNOMBREARCHIVOSATELITAL")},nac:function(){return!1}};this.GXValidFnc[69]={fld:"LABELETIQUETAOBLIGATORIO",format:1,
grid:0};this.GXValidFnc[71]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vNOMARCHPDF",gxz:"ZV51NomArchPdf",gxold:"OV51NomArchPdf",gxvar:"AV51NomArchPdf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV51NomArchPdf=a},v2z:function(a){gx.O.ZV51NomArchPdf=a},v2c:function(){gx.fn.setControlValue("vNOMARCHPDF",gx.O.AV51NomArchPdf,0)},c2v:function(){gx.O.AV51NomArchPdf=this.val()},val:function(){return gx.fn.getControlValue("vNOMARCHPDF")},
nac:function(){return!1}};this.GXValidFnc[72]={fld:"SEPARADOR_2",format:1,grid:0};this.GXValidFnc[76]={fld:"LBLCIERRE",format:1,grid:0};this.GXValidFnc[77]={fld:"LABELCOLERROR",format:1,grid:0};this.GXValidFnc[78]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPCALCULADO",gxz:"ZV60PCalculado",gxold:"OV60PCalculado",gxvar:"AV60PCalculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV60PCalculado=gx.num.intval(a)},v2z:function(a){gx.O.ZV60PCalculado=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vPCALCULADO",gx.O.AV60PCalculado,0)},c2v:function(){gx.O.AV60PCalculado=this.val()},val:function(){return gx.fn.getIntegerValue("vPCALCULADO",",")},nac:function(){return!1}};this.GXValidFnc[79]={fld:"TBJAVASCRIPT",format:1,grid:0};this.GXValidFnc[81]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Foliosinatec,isvalid:null,rgrid:[],fld:"vFOLIOSINATEC",gxz:"ZV20FolioSinatec",gxold:"OV20FolioSinatec",
gxvar:"AV20FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV20FolioSinatec=gx.num.intval(a)},v2z:function(a){gx.O.ZV20FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV20FolioSinatec,0)},c2v:function(){gx.O.AV20FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.GXValidFnc[83]={fld:"CSS",format:1,grid:0};this.GXValidFnc[84]={fld:"JSANALYTIX",format:1,grid:0};
this.GXValidFnc[85]={fld:"JSENCUESTA",format:1,grid:0};this.GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORCALCULADO",gxz:"ZV61PorCalculado",gxold:"OV61PorCalculado",gxvar:"AV61PorCalculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV61PorCalculado=gx.num.intval(a)},v2z:function(a){gx.O.ZV61PorCalculado=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vPORCALCULADO",gx.O.AV61PorCalculado,
0)},c2v:function(){gx.O.AV61PorCalculado=this.val()},val:function(){return gx.fn.getIntegerValue("vPORCALCULADO",",")},nac:function(){return!1}};this.GXValidFnc[87]={lvl:0,type:"bitstr",len:1024,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPRUEBAARCHIVO",gxz:"ZV95PruebaArchivo",gxold:"OV95PruebaArchivo",gxvar:"AV95PruebaArchivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV95PruebaArchivo=a},v2z:function(a){gx.O.ZV95PruebaArchivo=a},v2c:function(){gx.fn.setBlobValue("vPRUEBAARCHIVO",
gx.O.AV95PruebaArchivo)},c2v:function(){gx.O.AV95PruebaArchivo=this.val()},val:function(){return gx.fn.getBlobValue("vPRUEBAARCHIVO")},nac:function(){return!1}};this.OV7ArNomPred=this.ZV7ArNomPred=this.AV7ArNomPred=this.OV12ArPParajC=this.ZV12ArPParajC=this.AV12ArPParajC=this.OV55Colonia=this.ZV55Colonia=this.AV55Colonia=this.OV68localidad=this.ZV68localidad=this.AV68localidad=this.OV27MunIdc=this.ZV27MunIdc=this.AV27MunIdc=this.OV18EntIdc=this.ZV18EntIdc=this.AV18EntIdc="";this.AV37DSoFechaD=gx.date.nullDate();
this.ZV37DSoFechaD=gx.date.nullDate();this.OV37DSoFechaD=gx.date.nullDate();this.OV38TPeClaveN=this.ZV38TPeClaveN=this.AV38TPeClaveN=0;this.OV51NomArchPdf=this.ZV51NomArchPdf=this.AV51NomArchPdf=this.OV107NombreArchivoSatelital=this.ZV107NombreArchivoSatelital=this.AV107NombreArchivoSatelital=this.OV8ArObserva=this.ZV8ArObserva=this.AV8ArObserva="";this.OV61PorCalculado=this.ZV61PorCalculado=this.AV61PorCalculado=this.OV20FolioSinatec=this.ZV20FolioSinatec=this.AV20FolioSinatec=this.OV60PCalculado=
this.ZV60PCalculado=this.AV60PCalculado=0;this.OV95PruebaArchivo=this.ZV95PruebaArchivo=this.AV95PruebaArchivo="";this.A545Tramite03030AFolio=0;this.A551Tramite03030AArPLocalC=this.A550Tramite03030AArPParajC=this.A549Tramite03030AArNomPred=this.A548Tramite03030AArPColonC=this.A547Tramite03030AMunIdc=this.A546Tramite03030AEntIdc="";this.A553Tramite03030ATPeClaveN=0;this.A733Tramite03030AArReportePDF=this.A554Tramite03030AArObserva="";this.ServerEvents=["e13092_client","e14092_client","e15092_client",
"e17092_client","e18092_client"];this.SetStandaloneVars()}tramite0330b.prototype=new gx.GxObject;gx.setParentObj(new tramite0330b);
