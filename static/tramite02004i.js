gx.evt.autoSkip=!1;
function tramite02004i(){this.ServerClass="Tramite02004i";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV50Bannew=gx.fn.getDecimalValue("vBANNEW",",",".")};this.Validv_Gobmx_material_id=function(){try{var a=gx.util.balloon.getNew("vGOBMX_MATERIAL_ID");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.e15121_client=function(){this.clearMessages();gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption",
"");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"}])};this.e12122_client=function(){this.executeServerEvent("'REGRESAR'",!1)};this.e13122_client=function(){this.executeServerEvent("'GUARDAR'",!1)};this.e16122_client=function(){this.executeServerEvent("ENTER",!0)};this.e17122_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[5,7,9,11,14,19,20,21,26,27,29,33,34,35,38];this.GXLastCtrlId=38;this.GXValidFnc[5]={fld:"BREADCRUMBS",format:2,grid:0};
this.GXValidFnc[7]={fld:"LABELPASOSFORM",format:1,grid:0};this.GXValidFnc[9]={fld:"TITULO",format:1,grid:0};this.GXValidFnc[11]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[14]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[19]={fld:"LABELMD",format:1,grid:0};this.GXValidFnc[20]={lvl:0,type:"svchar",len:250,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:this.e15121_client,fld:"vRBFMATREC",gxz:"ZV43RBFMatReC",gxold:"OV43RBFMatReC",gxvar:"AV43RBFMatReC",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV43RBFMatReC=a},v2z:function(a){gx.O.ZV43RBFMatReC=a},v2c:function(){gx.fn.setControlValue("vRBFMATREC",gx.O.AV43RBFMatReC,0)},c2v:function(){gx.O.AV43RBFMatReC=this.val()},val:function(){return gx.fn.getControlValue("vRBFMATREC")},nac:function(){return!1}};this.GXValidFnc[21]={fld:"LABELERRORMAT",format:1,grid:0};this.GXValidFnc[26]={fld:"SEPARADOROB",format:1,grid:0};this.GXValidFnc[27]={fld:"LABETETIQUETAOBLOGATORIO",format:1,grid:0};
this.GXValidFnc[29]={fld:"SEPARADOR_2",format:1,grid:0};this.GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gobmx_material_id,isvalid:null,rgrid:[],fld:"vGOBMX_MATERIAL_ID",gxz:"ZV48GobMX_Material_Id",gxold:"OV48GobMX_Material_Id",gxvar:"AV48GobMX_Material_Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV48GobMX_Material_Id=gx.num.intval(a)},v2z:function(a){gx.O.ZV48GobMX_Material_Id=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vGOBMX_MATERIAL_ID",
gx.O.AV48GobMX_Material_Id,0)},c2v:function(){gx.O.AV48GobMX_Material_Id=this.val()},val:function(){return gx.fn.getIntegerValue("vGOBMX_MATERIAL_ID",",")},nac:function(){return!1}};this.GXValidFnc[34]={fld:"TBJAVASCRIPT",format:1,grid:0};this.GXValidFnc[35]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOLIOSINATEC",gxz:"ZV45FolioSinatec",gxold:"OV45FolioSinatec",gxvar:"AV45FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.AV45FolioSinatec=gx.num.intval(a)},v2z:function(a){gx.O.ZV45FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV45FolioSinatec,0)},c2v:function(){gx.O.AV45FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.GXValidFnc[38]={fld:"JAVASCRIPTJSANALYTIX",format:1,grid:0};this.OV43RBFMatReC=this.ZV43RBFMatReC=this.AV43RBFMatReC="";this.A666Tramite02004_EFolio=this.A667Tramite02004_EMaterialId=
this.AV50Bannew=this.OV45FolioSinatec=this.ZV45FolioSinatec=this.AV45FolioSinatec=this.OV48GobMX_Material_Id=this.ZV48GobMX_Material_Id=this.AV48GobMX_Material_Id=0;this.A668Tramite02004_ERBFMatReC="";this.ServerEvents=["e12122_client","e13122_client","e16122_client","e17122_client"];this.VarControlMap.AV50Bannew={id:"vBANNEW",grid:0,type:"decimal"};this.SetStandaloneVars()}tramite02004i.prototype=new gx.GxObject;gx.setParentObj(new tramite02004i);