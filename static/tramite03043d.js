gx.evt.autoSkip=!1;
function tramite03043d(){this.ServerClass="Tramite03043d";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV52LlaveSesion=gx.fn.getIntegerValue("vLLAVESESION",",");this.AV78Modo=gx.fn.getControlValue("vMODO")};this.e160q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRSOLTRC","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},
{ctrl:"vDTRSOLTRC",prop:"Class"}])};this.e170q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRFOLININ","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRFOLININ",prop:"Class"}])};this.e180q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRFOLFINN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",
prop:"Caption"},{ctrl:"vDTRFOLFINN",prop:"Class"}])};this.e190q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRNUMPIN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRNUMPIN",prop:"Class"}])};this.e200q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vEMBIDN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",
prop:"Caption"},{ctrl:"vEMBIDN",prop:"Class"}])};this.e210q1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vTEMIDN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption","  ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vTEMIDN",prop:"Class"}])};this.e120q2_client=function(){this.executeServerEvent("'CONFIRMAR'",!1)};this.e130q2_client=function(){this.executeServerEvent("'REGRESAR'",!0)};this.e140q2_client=function(){this.executeServerEvent("'CONTINUAR'",
!1)};this.e220q2_client=function(){this.executeServerEvent("ENTER",!0)};this.e230q2_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[4,8,10,12,17,18,19,22,23,24,27,28,29,34,35,36,39,40,41,44,45,46,49,51,53,55,57,61,62,65,67,68];this.GXLastCtrlId=68;this.GXValidFnc[4]={fld:"BREADCRUMBS",format:1,grid:0};this.GXValidFnc[8]={fld:"NOMBRETRAMITE",format:1,grid:0};this.GXValidFnc[10]={fld:"LABELMENSAJEERROR2",format:1,grid:0};this.GXValidFnc[12]={fld:"LABELTITULOPANTALLAUNO",
format:1,grid:0};this.GXValidFnc[17]={fld:"LABELRS",format:1,grid:0};this.GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e160q1_client,fld:"vDTRSOLTRC",gxz:"ZV36DtrSolTrC",gxold:"OV36DtrSolTrC",gxvar:"AV36DtrSolTrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV36DtrSolTrC=a},v2z:function(a){gx.O.ZV36DtrSolTrC=a},v2c:function(){gx.fn.setControlValue("vDTRSOLTRC",gx.O.AV36DtrSolTrC,0)},c2v:function(){gx.O.AV36DtrSolTrC=this.val()},
val:function(){return gx.fn.getControlValue("vDTRSOLTRC")},nac:function(){return!1}};this.GXValidFnc[19]={fld:"LABELRSERROR",format:1,grid:0};this.GXValidFnc[22]={fld:"LABELFI",format:1,grid:0};this.GXValidFnc[23]={lvl:0,type:"char",len:12,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e170q1_client,fld:"vDTRFOLININ",gxz:"ZV77DTrFolIniN",gxold:"OV77DTrFolIniN",gxvar:"AV77DTrFolIniN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV77DTrFolIniN=a},v2z:function(a){gx.O.ZV77DTrFolIniN=
a},v2c:function(){gx.fn.setControlValue("vDTRFOLININ",gx.O.AV77DTrFolIniN,0)},c2v:function(){gx.O.AV77DTrFolIniN=this.val()},val:function(){return gx.fn.getControlValue("vDTRFOLININ")},nac:function(){return!1}};this.GXValidFnc[24]={fld:"LABELFIERROR",format:1,grid:0};this.GXValidFnc[27]={fld:"LABELFF",format:1,grid:0};this.GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e180q1_client,fld:"vDTRFOLFINN",gxz:"ZV30DTrFolFinN",gxold:"OV30DTrFolFinN",
gxvar:"AV30DTrFolFinN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV30DTrFolFinN=a},v2z:function(a){gx.O.ZV30DTrFolFinN=a},v2c:function(){gx.fn.setControlValue("vDTRFOLFINN",gx.O.AV30DTrFolFinN,0)},c2v:function(){gx.O.AV30DTrFolFinN=this.val()},val:function(){return gx.fn.getControlValue("vDTRFOLFINN")},nac:function(){return!1}};this.GXValidFnc[29]={fld:"LABELFFERROR",format:1,grid:0};this.GXValidFnc[34]={fld:"LABELPIE",format:1,grid:0};this.GXValidFnc[35]={lvl:0,type:"decimal",
len:12,dec:3,sign:!1,pic:"ZZ,ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e190q1_client,fld:"vDTRNUMPIN",gxz:"ZV35DTrNumPiN",gxold:"OV35DTrNumPiN",gxvar:"AV35DTrNumPiN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV35DTrNumPiN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV35DTrNumPiN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vDTRNUMPIN",gx.O.AV35DTrNumPiN,3,".")},c2v:function(){gx.O.AV35DTrNumPiN=this.val()},val:function(){return gx.fn.getDecimalValue("vDTRNUMPIN",
",",".")},nac:function(){return!1}};this.GXValidFnc[36]={fld:"LABELPIEERROR",format:1,grid:0};this.GXValidFnc[39]={fld:"LABELTE",format:1,grid:0};this.GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e200q1_client,rgrid:[],fld:"vEMBIDN",gxz:"ZV44EmbIdn",gxold:"OV44EmbIdn",gxvar:"AV44EmbIdn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV44EmbIdn=gx.num.intval(a)},v2z:function(a){gx.O.ZV44EmbIdn=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vEMBIDN",
gx.O.AV44EmbIdn)},c2v:function(){gx.O.AV44EmbIdn=this.val()},val:function(){return gx.fn.getIntegerValue("vEMBIDN",",")},nac:function(){return!1}};this.GXValidFnc[41]={fld:"LABELTEERROR",format:1,grid:0};this.GXValidFnc[44]={fld:"LABELCE",format:1,grid:0};this.GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e210q1_client,rgrid:[],fld:"vTEMIDN",gxz:"ZV69TemIdn",gxold:"OV69TemIdn",gxvar:"AV69TemIdn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",
v2v:function(a){gx.O.AV69TemIdn=gx.num.intval(a)},v2z:function(a){gx.O.ZV69TemIdn=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vTEMIDN",gx.O.AV69TemIdn)},c2v:function(){gx.O.AV69TemIdn=this.val()},val:function(){return gx.fn.getIntegerValue("vTEMIDN",",")},nac:function(){return!1}};this.GXValidFnc[46]={fld:"LABELCEERROR",format:1,grid:0};this.GXValidFnc[49]={fld:"LABELMENSAJEERROR",format:0,grid:0};this.GXValidFnc[51]={fld:"SEPARADOR_1",format:1,grid:0};this.GXValidFnc[53]={fld:"LABELETIQUETAOBLIGATORIO",
format:1,grid:0};this.GXValidFnc[55]={fld:"SEPARADOR_2",format:1,grid:0};this.GXValidFnc[57]={fld:"BTN_DESCARTAR",format:1,grid:0};this.GXValidFnc[61]={fld:"TBJAVASCRIPT",format:1,grid:0};this.GXValidFnc[62]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOLIOSINATEC",gxz:"ZV75FolioSinatec",gxold:"OV75FolioSinatec",gxvar:"AV75FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV75FolioSinatec=
gx.num.intval(a)},v2z:function(a){gx.O.ZV75FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV75FolioSinatec,0)},c2v:function(){gx.O.AV75FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRNUMTRN",gxz:"ZV79DTrNumTrN",gxold:"OV79DTrNumTrN",gxvar:"AV79DTrNumTrN",ucs:[],
op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV79DTrNumTrN=gx.num.intval(a)},v2z:function(a){gx.O.ZV79DTrNumTrN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vDTRNUMTRN",gx.O.AV79DTrNumTrN,0)},c2v:function(){gx.O.AV79DTrNumTrN=this.val()},val:function(){return gx.fn.getIntegerValue("vDTRNUMTRN",",")},nac:function(){return!1}};this.GXValidFnc[67]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGOBMX_03043ID",
gxz:"ZV80GobMX_03043Id",gxold:"OV80GobMX_03043Id",gxvar:"AV80GobMX_03043Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV80GobMX_03043Id=gx.num.intval(a)},v2z:function(a){gx.O.ZV80GobMX_03043Id=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vGOBMX_03043ID",gx.O.AV80GobMX_03043Id,0)},c2v:function(){gx.O.AV80GobMX_03043Id=this.val()},val:function(){return gx.fn.getIntegerValue("vGOBMX_03043ID",",")},nac:function(){return!1}};this.GXValidFnc[68]={fld:"JSANALYTIX",format:1,
grid:0};this.OV30DTrFolFinN=this.ZV30DTrFolFinN=this.AV30DTrFolFinN=this.OV77DTrFolIniN=this.ZV77DTrFolIniN=this.AV77DTrFolIniN=this.OV36DtrSolTrC=this.ZV36DtrSolTrC=this.AV36DtrSolTrC="";this.AV52LlaveSesion=this.OV80GobMX_03043Id=this.ZV80GobMX_03043Id=this.AV80GobMX_03043Id=this.OV79DTrNumTrN=this.ZV79DTrNumTrN=this.AV79DTrNumTrN=this.OV75FolioSinatec=this.ZV75FolioSinatec=this.AV75FolioSinatec=this.OV69TemIdn=this.ZV69TemIdn=this.AV69TemIdn=this.OV44EmbIdn=this.ZV44EmbIdn=this.AV44EmbIdn=this.OV35DTrNumPiN=
this.ZV35DTrNumPiN=this.AV35DTrNumPiN=0;this.AV78Modo="";this.ServerEvents=["e120q2_client","e130q2_client","e140q2_client","e220q2_client","e230q2_client"];this.VarControlMap.AV52LlaveSesion={id:"vLLAVESESION",grid:0,type:"int"};this.VarControlMap.AV78Modo={id:"vMODO",grid:0,type:"char"};this.SetStandaloneVars()}tramite03043d.prototype=new gx.GxObject;gx.setParentObj(new tramite03043d);
