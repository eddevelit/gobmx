gx.evt.autoSkip=!1;
function tramite03043c(){this.ServerClass="Tramite03043c";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Foliosinatec=function(){try{var a=gx.util.balloon.getNew("vFOLIOSINATEC");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.s142_client=function(){24==this.AV86TrtClaveN?(gx.fn.setCtrlProperty("COL_MD_4_CTA","Visible",1),gx.fn.setCtrlProperty("vDTRTOTUTLMBN","Enabled",
!0)):(gx.fn.setCtrlProperty("COL_MD_4_CTA","Visible",0),gx.fn.setCtrlProperty("vDTRTOTUTLMBN","Enabled",!1))};this.s152_client=function(){this.AV113PorcentajeNum=0;"FIS"==this.AV91Persona?(this.AV113PorcentajeNum=0>=this.AV44DTrNumUnC?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+8,this.AV113PorcentajeNum=0>=this.AV86TrtClaveN?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+8,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV39DtrFecIniD)||0==(new gx.date.gxdate("")).compare(this.AV39DtrFecIniD)?
this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+8,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV36DtrFecFinD)||0==(new gx.date.gxdate("")).compare(this.AV36DtrFecFinD)?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+8,this.AV113PorcentajeNum=0<=this.AV43DTrNumTrN?this.AV113PorcentajeNum+8:this.AV113PorcentajeNum+0,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV37DTrFechaD)||0==(new gx.date.gxdate("")).compare(this.AV37DTrFechaD)?this.AV113PorcentajeNum+
0:this.AV113PorcentajeNum+9):(this.AV113PorcentajeNum=0>=this.AV44DTrNumUnC?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+5,this.AV113PorcentajeNum=0>=this.AV86TrtClaveN?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+5,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV39DtrFecIniD)||0==(new gx.date.gxdate("")).compare(this.AV39DtrFecIniD)?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+6,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV36DtrFecFinD)||0==
(new gx.date.gxdate("")).compare(this.AV36DtrFecFinD)?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+6,this.AV113PorcentajeNum=0<=this.AV43DTrNumTrN?this.AV113PorcentajeNum+5:this.AV113PorcentajeNum+0,this.AV113PorcentajeNum=0==(new gx.date.gxdate("")).compare(this.AV37DTrFechaD)||0==(new gx.date.gxdate("")).compare(this.AV37DTrFechaD)?this.AV113PorcentajeNum+0:this.AV113PorcentajeNum+6);this.AV113PorcentajeNum+=this.AV111PorCalculado};this.e120p1_client=function(){this.clearMessages();this.refreshOutputs([])};
this.e110p1_client=function(){this.clearMessages();this.s142_client();this.refreshOutputs([{ctrl:"vDTRTOTUTLMBN",prop:"Enabled"},{ctrl:"COL_MD_4_CTA",prop:"Visible"}])};this.s202_client=function(){this.AV19Cont3=this.AV18Cont1;this.AV18Cont1=1;this.AV10Ban=0;this.AV5Mensaje="NO SE CARGARON LOS SIGUIENTES TRATAMIENTOS: ";for(gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption",'<div class="alert alert-warning">'+gx.text.trim(this.AV5Mensaje)+"</div>");this.AV18Cont1<=this.AV19Cont3;)this.AV74Numero=
this.AV20Cont4[this.AV18Cont1-1],0!=this.AV74Numero&&(this.AV10Ban=1,this.AV5Mensaje=this.AV5Mensaje+" Rengl\u00f3n "+gx.text.trim(gx.num.str(this.AV74Numero,10,0))+": ",this.AV5Mensaje=this.AV5Mensaje+this.AV57EmbDescc[this.AV18Cont1-1]+" ",this.AV5Mensaje=this.AV5Mensaje+this.AV82TemDescc[this.AV18Cont1-1]+", "),this.AV18Cont1+=1;1==this.AV10Ban?(gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption"," "),this.AV5Mensaje=this.AV67Mensaje1+" "+this.AV5Mensaje):this.AV5Mensaje=this.AV67Mensaje1;gx.fn.setCtrlProperty("LABELMENSAJEERROR",
"Caption",'<div class="alert alert-warning">'+gx.text.trim(this.AV5Mensaje)+"</div>")};this.e130p2_client=function(){this.executeServerEvent("VTIPOCARGA.ISVALID",!0)};this.e140p2_client=function(){this.executeServerEvent("VTIPOCARGA.CLICK",!0)};this.e150p2_client=function(){this.executeServerEvent("'GUARDAR'",!1)};this.e160p2_client=function(){this.executeServerEvent("'GUARDAR2'",!1)};this.e170p2_client=function(){this.executeServerEvent("'REGRESAR'",!0)};this.e230p2_client=function(a){this.executeServerEvent("VEDITAR.CLICK",
!0,a)};this.e240p2_client=function(a){this.executeServerEvent("VBORRAR.CLICK",!0,a)};this.e180p2_client=function(){this.executeServerEvent("'EXCELL'",!1)};this.e190p2_client=function(){this.executeServerEvent("'CONFIRMAR'",!1)};this.e200p2_client=function(){this.executeServerEvent("'CIERRE'",!0)};this.e270p2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e280p2_client=function(a){this.executeServerEvent("CANCEL",!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[4,8,9,11,12,13,14,16,21,27,
28,29,32,33,34,37,38,39,44,45,46,49,50,51,54,55,56,61,62,66,67,69,71,74,78,79,81,86,87,88,91,92,93,96,97,98,103,104,105,108,109,110,113,114,115,119,121,123,131,134,140,142,143,148,149,150,151,152,153,154,155,156,157,161,162,163,167,169,171,173,177,179,180,181,182,183,184,185];this.GXLastCtrlId=185;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",147,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tramite03043c",[],!1,1,!1,!0,7,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,
null,null,!1,"");b.addSingleLineEdit("Editar",148,"vEDITAR","","","editar","svchar",17,"px",100,80,"left","e230p2_client",[],"Editar","editar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit("Borrar",149,"vBORRAR","","","borrar","svchar",17,"px",100,80,"left","e240p2_client",[],"Borrar","borrar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(556,150,"TRAMITE03043_CFOLIO","Folio Sinatec","","Tramite03043_CFolio","int",0,"px",18,18,"right",null,[],556,"Tramite03043_CFolio",!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(336,
151,"GOBMX_03043ID","Gob MX_03043 Id","","GobMX_03043Id","int",0,"px",10,10,"right",null,[],336,"GobMX_03043Id",!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(329,152,"GOBMX_03043NOMBRE","Nombre o raz\u00f3n social del solicitante","","GobMX_03043Nombre","svchar",300,"px",100,80,"left",null,[],329,"GobMX_03043Nombre",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(330,153,"GOBMX_03043FOLIOINICIAL","Folio inicial","","GobMX_03043FolioInicial","svchar",0,"px",10,10,"left",null,[],330,"GobMX_03043FolioInicial",
!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(331,154,"GOBMX_03043FOLIOFINAL","Folio final","","GobMX_03043FolioFinal","svchar",0,"px",10,10,"left",null,[],331,"GobMX_03043FolioFinal",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(332,155,"GOBMX_03043NUMEROPIEZAS","N\u00famero de tratamientos aplicados","","GobMX_03043NumeroPiezas","decimal",100,"px",15,15,"right",null,[],332,"GobMX_03043NumeroPiezas",!0,3,!1,!1,"Attribute",1);b.addComboBox(333,156,"GOBMX_03043TIPOEMBALAJE","Tipo de embalaje","GobMX_03043TipoEmbalaje",
"int",null,0,!0,!1,0,"px");b.addComboBox(334,157,"GOBMX_03043CONDICIONES","Condiciones de embalaje tratado","GobMX_03043Condiciones","int",null,0,!0,!1,300,"px");this.setGrid(b);this.GXValidFnc[4]={fld:"BREADCRUMBS",format:1,grid:0};this.GXValidFnc[8]={fld:"LBLPASOS",format:1,grid:0};this.GXValidFnc[9]={fld:"NOMBRETRAMITE",format:1,grid:0};this.GXValidFnc[11]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[12]={fld:"ADVTRA",format:1,grid:0};this.GXValidFnc[13]={fld:"TOOLTIP",format:1,grid:0};
this.GXValidFnc[14]={fld:"LABELMENSAJEERROR2",format:1,grid:0};this.GXValidFnc[16]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[21]={fld:"LBLMX",format:1,grid:0};this.GXValidFnc[27]={fld:"LABELFE",format:1,grid:0};this.GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECHAD",gxz:"ZV37DTrFechaD",gxold:"OV37DTrFechaD",gxvar:"AV37DTrFechaD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV37DTrFechaD=gx.fn.toDatetimeValue(a)},
v2z:function(a){gx.O.ZV37DTrFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECHAD",gx.O.AV37DTrFechaD,0)},c2v:function(){gx.O.AV37DTrFechaD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECHAD")},nac:function(){return!1}};this.GXValidFnc[29]={fld:"LABELFEERROR",format:1,grid:0};this.GXValidFnc[32]={fld:"LABELNU",format:1,grid:0};this.GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRNUMUNC",
gxz:"ZV44DTrNumUnC",gxold:"OV44DTrNumUnC",gxvar:"AV44DTrNumUnC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV44DTrNumUnC=gx.num.intval(a)},v2z:function(a){gx.O.ZV44DTrNumUnC=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vDTRNUMUNC",gx.O.AV44DTrNumUnC,0)},c2v:function(){gx.O.AV44DTrNumUnC=this.val()},val:function(){return gx.fn.getIntegerValue("vDTRNUMUNC",",")},nac:function(){return!1}};this.GXValidFnc[34]={fld:"LABELNUERROR",format:1,grid:0};this.GXValidFnc[37]={fld:"LABELTA",
format:1,grid:0};this.GXValidFnc[38]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRTCLAVEN",gxz:"ZV86TrtClaveN",gxold:"OV86TrtClaveN",gxvar:"AV86TrtClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV86TrtClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV86TrtClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vTRTCLAVEN",gx.O.AV86TrtClaveN)},c2v:function(){gx.O.AV86TrtClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vTRTCLAVEN",
",")},nac:function(){return!1}};this.GXValidFnc[39]={fld:"LABELTAERROR",format:1,grid:0};this.GXValidFnc[44]={fld:"LABELFECINI",format:1,grid:0};this.GXValidFnc[45]={lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECINID",gxz:"ZV39DtrFecIniD",gxold:"OV39DtrFecIniD",gxvar:"AV39DtrFecIniD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV39DtrFecIniD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV39DtrFecIniD=gx.fn.toDatetimeValue(a)},
v2c:function(){gx.fn.setControlValue("vDTRFECINID",gx.O.AV39DtrFecIniD,0)},c2v:function(){gx.O.AV39DtrFecIniD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECINID")},nac:function(){return!1}};this.GXValidFnc[46]={fld:"LABELFECINIERROR",format:1,grid:0};this.GXValidFnc[49]={fld:"LABELFECFIN",format:1,grid:0};this.GXValidFnc[50]={lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECFIND",gxz:"ZV36DtrFecFinD",gxold:"OV36DtrFecFinD",gxvar:"AV36DtrFecFinD",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV36DtrFecFinD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV36DtrFecFinD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECFIND",gx.O.AV36DtrFecFinD,0)},c2v:function(){gx.O.AV36DtrFecFinD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECFIND")},nac:function(){return!1}};this.GXValidFnc[51]={fld:"LABELFECFINERROR",format:1,grid:0};this.GXValidFnc[54]={fld:"LABELNTA",format:1,grid:0};this.GXValidFnc[55]=
{lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRNUMTRN",gxz:"ZV43DTrNumTrN",gxold:"OV43DTrNumTrN",gxvar:"AV43DTrNumTrN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV43DTrNumTrN=gx.num.intval(a)},v2z:function(a){gx.O.ZV43DTrNumTrN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vDTRNUMTRN",gx.O.AV43DTrNumTrN,0)},c2v:function(){gx.O.AV43DTrNumTrN=this.val()},val:function(){return gx.fn.getIntegerValue("vDTRNUMTRN",
",")},nac:function(){return!1}};this.GXValidFnc[56]={fld:"LABELNTAERROR",format:1,grid:0};this.GXValidFnc[61]={fld:"LABELCTA",format:1,grid:0};this.GXValidFnc[62]={lvl:0,type:"decimal",len:15,dec:3,sign:!1,pic:"ZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRTOTUTLMBN",gxz:"ZV51DtrTotUtlMBN",gxold:"OV51DtrTotUtlMBN",gxvar:"AV51DtrTotUtlMBN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV51DtrTotUtlMBN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV51DtrTotUtlMBN=
gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vDTRTOTUTLMBN",gx.O.AV51DtrTotUtlMBN,3,".")},c2v:function(){gx.O.AV51DtrTotUtlMBN=this.val()},val:function(){return gx.fn.getDecimalValue("vDTRTOTUTLMBN",",",".")},nac:function(){return!1}};this.GXValidFnc[66]={fld:"LABELCTAERROR",format:1,grid:0};this.GXValidFnc[67]={fld:"SEPARADORGRD",format:1,grid:0};this.GXValidFnc[69]={fld:"LABELETIQUETAOBLIGATORIO",format:1,grid:0};this.GXValidFnc[71]={fld:"SEPARADORBTNGDR",format:1,grid:0};
this.GXValidFnc[74]={fld:"LABELTITULOPANTALLADOS",format:1,grid:0};this.GXValidFnc[78]={fld:"LBLTIPOCAPTURA",format:1,grid:0};this.GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e130p2_client,rgrid:[],fld:"vTIPOCARGA",gxz:"ZV115TipoCarga",gxold:"OV115TipoCarga",gxvar:"AV115TipoCarga",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(a){gx.O.AV115TipoCarga=gx.num.intval(a)},v2z:function(a){gx.O.ZV115TipoCarga=gx.num.intval(a)},
v2c:function(){gx.fn.setComboBoxValue("vTIPOCARGA",gx.O.AV115TipoCarga)},c2v:function(){gx.O.AV115TipoCarga=this.val()},val:function(){return gx.fn.getIntegerValue("vTIPOCARGA",",")},nac:function(){return!1}};this.GXValidFnc[81]={fld:"TITULOPANTALLAUNOTRA",format:1,grid:0};this.GXValidFnc[86]={fld:"LABELRS",format:1,grid:0};this.GXValidFnc[87]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRSOLTRC2",gxz:"ZV117DtrSolTrC2",gxold:"OV117DtrSolTrC2",gxvar:"AV117DtrSolTrC2",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV117DtrSolTrC2=a},v2z:function(a){gx.O.ZV117DtrSolTrC2=a},v2c:function(){gx.fn.setControlValue("vDTRSOLTRC2",gx.O.AV117DtrSolTrC2,0)},c2v:function(){gx.O.AV117DtrSolTrC2=this.val()},val:function(){return gx.fn.getControlValue("vDTRSOLTRC2")},nac:function(){return!1}};this.GXValidFnc[88]={fld:"LABELRSERROR",format:1,grid:0};this.GXValidFnc[91]={fld:"LABELFI",format:1,grid:0};this.GXValidFnc[92]={lvl:0,type:"char",len:12,dec:0,sign:!1,
ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFOLININ2",gxz:"ZV118DTrFolIniN2",gxold:"OV118DTrFolIniN2",gxvar:"AV118DTrFolIniN2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV118DTrFolIniN2=a},v2z:function(a){gx.O.ZV118DTrFolIniN2=a},v2c:function(){gx.fn.setControlValue("vDTRFOLININ2",gx.O.AV118DTrFolIniN2,0)},c2v:function(){gx.O.AV118DTrFolIniN2=this.val()},val:function(){return gx.fn.getControlValue("vDTRFOLININ2")},nac:function(){return!1}};this.GXValidFnc[93]={fld:"LABELFIERROR",
format:1,grid:0};this.GXValidFnc[96]={fld:"LABELFF",format:1,grid:0};this.GXValidFnc[97]={lvl:0,type:"char",len:12,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFOLFINN2",gxz:"ZV119DTrFolFinN2",gxold:"OV119DTrFolFinN2",gxvar:"AV119DTrFolFinN2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV119DTrFolFinN2=a},v2z:function(a){gx.O.ZV119DTrFolFinN2=a},v2c:function(){gx.fn.setControlValue("vDTRFOLFINN2",gx.O.AV119DTrFolFinN2,0)},c2v:function(){gx.O.AV119DTrFolFinN2=
this.val()},val:function(){return gx.fn.getControlValue("vDTRFOLFINN2")},nac:function(){return!1}};this.GXValidFnc[98]={fld:"LABELFFERROR",format:1,grid:0};this.GXValidFnc[103]={fld:"LABELPIE",format:1,grid:0};this.GXValidFnc[104]={lvl:0,type:"decimal",len:12,dec:3,sign:!1,pic:"ZZ,ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRNUMPIN2",gxz:"ZV120DTrNumPiN2",gxold:"OV120DTrNumPiN2",gxvar:"AV120DTrNumPiN2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV120DTrNumPiN2=
gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV120DTrNumPiN2=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vDTRNUMPIN2",gx.O.AV120DTrNumPiN2,3,".")},c2v:function(){gx.O.AV120DTrNumPiN2=this.val()},val:function(){return gx.fn.getDecimalValue("vDTRNUMPIN2",",",".")},nac:function(){return!1}};this.GXValidFnc[105]={fld:"LABELPIEERROR",format:1,grid:0};this.GXValidFnc[108]={fld:"LABELTE",format:1,grid:0};this.GXValidFnc[109]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",
ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMBIDN",gxz:"ZV58EmbIdn",gxold:"OV58EmbIdn",gxvar:"AV58EmbIdn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV58EmbIdn=gx.num.intval(a)},v2z:function(a){gx.O.ZV58EmbIdn=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vEMBIDN",gx.O.AV58EmbIdn)},c2v:function(){gx.O.AV58EmbIdn=this.val()},val:function(){return gx.fn.getIntegerValue("vEMBIDN",",")},nac:function(){return!1}};this.GXValidFnc[110]={fld:"LABELTEERROR",
format:1,grid:0};this.GXValidFnc[113]={fld:"LABELCE",format:1,grid:0};this.GXValidFnc[114]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEMIDN",gxz:"ZV114TemIdn",gxold:"OV114TemIdn",gxvar:"AV114TemIdn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV114TemIdn=gx.num.intval(a)},v2z:function(a){gx.O.ZV114TemIdn=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vTEMIDN",gx.O.AV114TemIdn)},c2v:function(){gx.O.AV114TemIdn=
this.val()},val:function(){return gx.fn.getIntegerValue("vTEMIDN",",")},nac:function(){return!1}};this.GXValidFnc[115]={fld:"LABELCEERROR",format:1,grid:0};this.GXValidFnc[119]={fld:"SEPARADOR_3",format:1,grid:0};this.GXValidFnc[121]={fld:"LABELETIQUETAOBLIGATORIO2",format:1,grid:0};this.GXValidFnc[123]={fld:"SEPARADOR_4",format:1,grid:0};this.GXValidFnc[131]={fld:"LABELBI",format:1,grid:0};this.GXValidFnc[134]={lvl:0,type:"bitstr",len:1024,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"vBLBARCHIVOC",gxz:"ZV14BlbArchivoC",gxold:"OV14BlbArchivoC",gxvar:"AV14BlbArchivoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV14BlbArchivoC=a},v2z:function(a){gx.O.ZV14BlbArchivoC=a},v2c:function(){gx.fn.setBlobValue("vBLBARCHIVOC",gx.O.AV14BlbArchivoC)},c2v:function(){gx.O.AV14BlbArchivoC=this.val()},val:function(){return gx.fn.getBlobValue("vBLBARCHIVOC")},nac:function(){return!1}};this.GXValidFnc[140]={fld:"SEPARADORSUPEXL",format:1,grid:0};this.GXValidFnc[142]={fld:"LABELETIQUETAACHIVO",
format:1,grid:0};this.GXValidFnc[143]={fld:"SEPARADORBTNEXL",format:1,grid:0};this.GXValidFnc[148]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vEDITAR",gxz:"ZV55editar",gxold:"OV55editar",gxvar:"AV55editar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV55editar=a},v2z:function(a){gx.O.ZV55editar=a},v2c:function(){gx.fn.setGridControlValue("vEDITAR",gx.fn.currentGridRowImpl(147),
gx.O.AV55editar,1)},c2v:function(){gx.O.AV55editar=this.val()},val:function(){return gx.fn.getGridControlValue("vEDITAR",gx.fn.currentGridRowImpl(147))},nac:function(){return!1}};this.GXValidFnc[149]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vBORRAR",gxz:"ZV15borrar",gxold:"OV15borrar",gxvar:"AV15borrar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV15borrar=a},v2z:function(a){gx.O.ZV15borrar=
a},v2c:function(){gx.fn.setGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(147),gx.O.AV15borrar,1)},c2v:function(){gx.O.AV15borrar=this.val()},val:function(){return gx.fn.getGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(147))},nac:function(){return!1}};this.GXValidFnc[150]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRAMITE03043_CFOLIO",gxz:"Z556Tramite03043_CFolio",gxold:"O556Tramite03043_CFolio",
gxvar:"A556Tramite03043_CFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A556Tramite03043_CFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z556Tramite03043_CFolio=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("TRAMITE03043_CFOLIO",gx.fn.currentGridRowImpl(147),gx.O.A556Tramite03043_CFolio,0)},c2v:function(){gx.O.A556Tramite03043_CFolio=this.val()},val:function(){return gx.fn.getGridIntegerValue("TRAMITE03043_CFOLIO",gx.fn.currentGridRowImpl(147),
",")},nac:function(){return!1}};this.GXValidFnc[151]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043ID",gxz:"Z336GobMX_03043Id",gxold:"O336GobMX_03043Id",gxvar:"A336GobMX_03043Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A336GobMX_03043Id=gx.num.intval(a)},v2z:function(a){gx.O.Z336GobMX_03043Id=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043ID",
gx.fn.currentGridRowImpl(147),gx.O.A336GobMX_03043Id,0)},c2v:function(){gx.O.A336GobMX_03043Id=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043ID",gx.fn.currentGridRowImpl(147),",")},nac:function(){return!1}};this.GXValidFnc[152]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043NOMBRE",gxz:"Z329GobMX_03043Nombre",gxold:"O329GobMX_03043Nombre",gxvar:"A329GobMX_03043Nombre",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A329GobMX_03043Nombre=a},v2z:function(a){gx.O.Z329GobMX_03043Nombre=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043NOMBRE",gx.fn.currentGridRowImpl(147),gx.O.A329GobMX_03043Nombre,0)},c2v:function(){gx.O.A329GobMX_03043Nombre=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043NOMBRE",gx.fn.currentGridRowImpl(147))},nac:function(){return!1}};this.GXValidFnc[153]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,
ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043FOLIOINICIAL",gxz:"Z330GobMX_03043FolioInicial",gxold:"O330GobMX_03043FolioInicial",gxvar:"A330GobMX_03043FolioInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A330GobMX_03043FolioInicial=a},v2z:function(a){gx.O.Z330GobMX_03043FolioInicial=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043FOLIOINICIAL",gx.fn.currentGridRowImpl(147),gx.O.A330GobMX_03043FolioInicial,
0)},c2v:function(){gx.O.A330GobMX_03043FolioInicial=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043FOLIOINICIAL",gx.fn.currentGridRowImpl(147))},nac:function(){return!1}};this.GXValidFnc[154]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043FOLIOFINAL",gxz:"Z331GobMX_03043FolioFinal",gxold:"O331GobMX_03043FolioFinal",gxvar:"A331GobMX_03043FolioFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A331GobMX_03043FolioFinal=a},v2z:function(a){gx.O.Z331GobMX_03043FolioFinal=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043FOLIOFINAL",gx.fn.currentGridRowImpl(147),gx.O.A331GobMX_03043FolioFinal,0)},c2v:function(){gx.O.A331GobMX_03043FolioFinal=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043FOLIOFINAL",gx.fn.currentGridRowImpl(147))},nac:function(){return!1}};this.GXValidFnc[155]={lvl:2,type:"decimal",len:15,
dec:3,sign:!1,pic:"ZZZZZZZZZZ9.999",ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043NUMEROPIEZAS",gxz:"Z332GobMX_03043NumeroPiezas",gxold:"O332GobMX_03043NumeroPiezas",gxvar:"A332GobMX_03043NumeroPiezas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A332GobMX_03043NumeroPiezas=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z332GobMX_03043NumeroPiezas=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_03043NUMEROPIEZAS",
gx.fn.currentGridRowImpl(147),gx.O.A332GobMX_03043NumeroPiezas,3,".")},c2v:function(){gx.O.A332GobMX_03043NumeroPiezas=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_03043NUMEROPIEZAS",gx.fn.currentGridRowImpl(147),",",".")},nac:function(){return!1}};this.GXValidFnc[156]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043TIPOEMBALAJE",gxz:"Z333GobMX_03043TipoEmbalaje",gxold:"O333GobMX_03043TipoEmbalaje",
gxvar:"A333GobMX_03043TipoEmbalaje",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A333GobMX_03043TipoEmbalaje=gx.num.intval(a)},v2z:function(a){gx.O.Z333GobMX_03043TipoEmbalaje=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_03043TIPOEMBALAJE",gx.fn.currentGridRowImpl(147),gx.O.A333GobMX_03043TipoEmbalaje)},c2v:function(){gx.O.A333GobMX_03043TipoEmbalaje=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043TIPOEMBALAJE",
gx.fn.currentGridRowImpl(147),",")},nac:function(){return!1}};this.GXValidFnc[157]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:147,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043CONDICIONES",gxz:"Z334GobMX_03043Condiciones",gxold:"O334GobMX_03043Condiciones",gxvar:"A334GobMX_03043Condiciones",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A334GobMX_03043Condiciones=gx.num.intval(a)},v2z:function(a){gx.O.Z334GobMX_03043Condiciones=
gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_03043CONDICIONES",gx.fn.currentGridRowImpl(147),gx.O.A334GobMX_03043Condiciones)},c2v:function(){gx.O.A334GobMX_03043Condiciones=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043CONDICIONES",gx.fn.currentGridRowImpl(147),",")},nac:function(){return!1}};this.GXValidFnc[161]={fld:"LABELNPT",format:1,grid:0};this.GXValidFnc[162]={lvl:0,type:"decimal",len:12,dec:3,sign:!1,pic:"ZZ,ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,fld:"vNUMPIETOTN",gxz:"ZV75NumPieTotN",gxold:"OV75NumPieTotN",gxvar:"AV75NumPieTotN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV75NumPieTotN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV75NumPieTotN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vNUMPIETOTN",gx.O.AV75NumPieTotN,3,".")},c2v:function(){gx.O.AV75NumPieTotN=this.val()},val:function(){return gx.fn.getDecimalValue("vNUMPIETOTN",",",".")},nac:function(){return!1}};
this.GXValidFnc[163]={fld:"LABELNPTERROR",format:1,grid:0};this.GXValidFnc[167]={fld:"SEPARADOR_1",format:1,grid:0};this.GXValidFnc[169]={fld:"SEPARADOR_2",format:1,grid:0};this.GXValidFnc[171]={fld:"BTN_DESCARTAR",format:1,grid:0};this.GXValidFnc[173]={fld:"LBLCIERRE",format:1,grid:0};this.GXValidFnc[177]={fld:"TBJAVASCRIPT",format:1,grid:0};this.GXValidFnc[179]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECHTD",gxz:"ZV38DTrFechTD",gxold:"OV38DTrFechTD",
gxvar:"AV38DTrFechTD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV38DTrFechTD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV38DTrFechTD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECHTD",gx.O.AV38DTrFechTD,0)},c2v:function(){gx.O.AV38DTrFechTD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECHTD")},nac:function(){return!1}};this.GXValidFnc[180]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,
fnc:this.Validv_Foliosinatec,isvalid:null,rgrid:[this.Grid1Container],fld:"vFOLIOSINATEC",gxz:"ZV64FolioSinatec",gxold:"OV64FolioSinatec",gxvar:"AV64FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV64FolioSinatec=gx.num.intval(a)},v2z:function(a){gx.O.ZV64FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV64FolioSinatec,0)},c2v:function(){gx.O.AV64FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",
",")},nac:function(){return!1}};this.GXValidFnc[181]={lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPERSONA",gxz:"ZV91Persona",gxold:"OV91Persona",gxvar:"AV91Persona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV91Persona=a},v2z:function(a){gx.O.ZV91Persona=a},v2c:function(){gx.fn.setControlValue("vPERSONA",gx.O.AV91Persona,0)},c2v:function(){gx.O.AV91Persona=this.val()},val:function(){return gx.fn.getControlValue("vPERSONA")},nac:function(){return!1}};
this.GXValidFnc[182]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMREG",gxz:"ZV109NumReg",gxold:"OV109NumReg",gxvar:"AV109NumReg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV109NumReg=gx.num.intval(a)},v2z:function(a){gx.O.ZV109NumReg=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vNUMREG",gx.O.AV109NumReg,0)},c2v:function(){gx.O.AV109NumReg=this.val()},val:function(){return gx.fn.getIntegerValue("vNUMREG",
",")},nac:function(){return!1}};this.GXValidFnc[183]={fld:"JSALANYTIX",format:1,grid:0};this.GXValidFnc[184]={fld:"JSENCUESTA",format:1,grid:0};this.GXValidFnc[185]={lvl:0,type:"bitstr",len:1024,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPRUEBAARCHIVOS",gxz:"ZV134PruebaArchivos",gxold:"OV134PruebaArchivos",gxvar:"AV134PruebaArchivos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV134PruebaArchivos=a},v2z:function(a){gx.O.ZV134PruebaArchivos=a},v2c:function(){gx.fn.setBlobValue("vPRUEBAARCHIVOS",
gx.O.AV134PruebaArchivos)},c2v:function(){gx.O.AV134PruebaArchivos=this.val()},val:function(){return gx.fn.getBlobValue("vPRUEBAARCHIVOS")},nac:function(){return!1}};this.AV37DTrFechaD=gx.date.nullDate();this.ZV37DTrFechaD=gx.date.nullDate();this.OV37DTrFechaD=gx.date.nullDate();this.OV86TrtClaveN=this.ZV86TrtClaveN=this.AV86TrtClaveN=this.OV44DTrNumUnC=this.ZV44DTrNumUnC=this.AV44DTrNumUnC=0;this.AV39DtrFecIniD=gx.date.nullDate();this.ZV39DtrFecIniD=gx.date.nullDate();this.OV39DtrFecIniD=gx.date.nullDate();
this.AV36DtrFecFinD=gx.date.nullDate();this.ZV36DtrFecFinD=gx.date.nullDate();this.OV36DtrFecFinD=gx.date.nullDate();this.OV115TipoCarga=this.ZV115TipoCarga=this.AV115TipoCarga=this.OV51DtrTotUtlMBN=this.ZV51DtrTotUtlMBN=this.AV51DtrTotUtlMBN=this.OV43DTrNumTrN=this.ZV43DTrNumTrN=this.AV43DTrNumTrN=0;this.OV119DTrFolFinN2=this.ZV119DTrFolFinN2=this.AV119DTrFolFinN2=this.OV118DTrFolIniN2=this.ZV118DTrFolIniN2=this.AV118DTrFolIniN2=this.OV117DtrSolTrC2=this.ZV117DtrSolTrC2=this.AV117DtrSolTrC2="";this.OV114TemIdn=
this.ZV114TemIdn=this.AV114TemIdn=this.OV58EmbIdn=this.ZV58EmbIdn=this.AV58EmbIdn=this.OV120DTrNumPiN2=this.ZV120DTrNumPiN2=this.AV120DTrNumPiN2=0;this.OV15borrar=this.ZV15borrar=this.OV55editar=this.ZV55editar=this.OV14BlbArchivoC=this.ZV14BlbArchivoC=this.AV14BlbArchivoC="";this.O336GobMX_03043Id=this.Z336GobMX_03043Id=this.O556Tramite03043_CFolio=this.Z556Tramite03043_CFolio=0;this.O331GobMX_03043FolioFinal=this.Z331GobMX_03043FolioFinal=this.O330GobMX_03043FolioInicial=this.Z330GobMX_03043FolioInicial=
this.O329GobMX_03043Nombre=this.Z329GobMX_03043Nombre="";this.OV75NumPieTotN=this.ZV75NumPieTotN=this.AV75NumPieTotN=this.O334GobMX_03043Condiciones=this.Z334GobMX_03043Condiciones=this.O333GobMX_03043TipoEmbalaje=this.Z333GobMX_03043TipoEmbalaje=this.O332GobMX_03043NumeroPiezas=this.Z332GobMX_03043NumeroPiezas=0;this.AV38DTrFechTD=gx.date.nullDate();this.ZV38DTrFechTD=gx.date.nullDate();this.OV38DTrFechTD=gx.date.nullDate();this.OV64FolioSinatec=this.ZV64FolioSinatec=this.AV64FolioSinatec=0;this.OV91Persona=
this.ZV91Persona=this.AV91Persona="";this.OV109NumReg=this.ZV109NumReg=this.AV109NumReg=0;this.AV15borrar=this.AV55editar=this.OV134PruebaArchivos=this.ZV134PruebaArchivos=this.AV134PruebaArchivos="";this.A336GobMX_03043Id=this.A556Tramite03043_CFolio=0;this.A331GobMX_03043FolioFinal=this.A330GobMX_03043FolioInicial=this.A329GobMX_03043Nombre="";this.A334GobMX_03043Condiciones=this.A333GobMX_03043TipoEmbalaje=this.A332GobMX_03043NumeroPiezas=0;this.A578Tramite03043_CDTrFechaD=gx.date.nullDate();this.A580Tramite03043_CTrtClaveN=
this.A579Tramite03043_CDTrNumUnC=0;this.A582Tramite03043_CDtrFecIniD=gx.date.nullDate();this.A583Tramite03043_CDtrFecFinD=gx.date.nullDate();this.A585Tramite03043_CDtrTotUtlMBN=this.A584Tramite03043_CDTrNumTrN=0;this.A737Tramite03043_CDTrResumenPDF="";this.AV113PorcentajeNum=this.AV111PorCalculado=0;this.AV67Mensaje1="";this.AV82TemDescc=[];this.AV57EmbDescc=[];this.AV20Cont4=[];this.AV74Numero=0;this.AV5Mensaje="";this.AV19Cont3=this.AV18Cont1=this.AV10Ban=0;this.ServerEvents="e130p2_client e140p2_client e150p2_client e160p2_client e170p2_client e230p2_client e240p2_client e180p2_client e190p2_client e200p2_client e270p2_client e280p2_client".split(" ");
b.addRefreshingVar(this.GXValidFnc[180]);b.addRefreshingVar({rfrVar:"AV15borrar",rfrProp:"Value",gxAttId:"Borrar"});b.addRefreshingVar({rfrVar:"AV55editar",rfrProp:"Value",gxAttId:"Editar"});b.addRefreshingVar({rfrVar:"A332GobMX_03043NumeroPiezas",rfrProp:"Value",gxAttId:"332"});b.addRefreshingVar(this.GXValidFnc[55]);b.addRefreshingVar(this.GXValidFnc[79]);this.SetStandaloneVars()}tramite03043c.prototype=new gx.GxObject;gx.setParentObj(new tramite03043c);
