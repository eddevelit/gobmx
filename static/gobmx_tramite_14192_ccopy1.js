gx.evt.autoSkip=!1;
function gobmx_tramite_14192_ccopy1(){this.ServerClass="gobmx_tramite_14192_CCopy1";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Foliosinatec=function(){try{var a=gx.util.balloon.getNew("vFOLIOSINATEC");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.s122_client=function(){24==this.AV88TrtClaveN?(gx.fn.setCtrlProperty("COL_MD_4_CTA","Visible",1),gx.fn.setCtrlProperty("vDTRTOTUTLMBN",
"Enabled",!0)):(gx.fn.setCtrlProperty("COL_MD_4_CTA","Visible",0),gx.fn.setCtrlProperty("vDTRTOTUTLMBN","Enabled",!1))};this.e212n1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRNUMUNC","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption"," ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRNUMUNC",prop:"Class"}])};this.e222n1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vTRTCLAVEN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR",
"Caption"," ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vTRTCLAVEN",prop:"Class"}])};this.e232n1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRFECINID","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption"," ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRFECINID",prop:"Class"}])};this.e242n1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRFECFIND","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR",
"Caption"," ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRFECFIND",prop:"Class"}])};this.e252n1_client=function(){this.clearMessages();gx.fn.setCtrlProperty("vDTRNUMTRN","Class","form-control");gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption"," ");this.refreshOutputs([{ctrl:"LABELMENSAJEERROR",prop:"Caption"},{ctrl:"vDTRNUMTRN",prop:"Class"}])};this.e112n1_client=function(){this.clearMessages();this.s122_client();this.refreshOutputs([{ctrl:"vDTRTOTUTLMBN",prop:"Enabled"},
{ctrl:"COL_MD_4_CTA",prop:"Visible"}])};this.s152_client=function(){this.AV19Cont3=this.AV18Cont1;this.AV18Cont1=1;this.AV10Ban=0;this.AV5Mensaje="NO SE CARGARON LOS SIGUIENTES TRATAMIENTOS: ";for(gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption",'<div class="alert alert-warning">'+gx.text.trim(this.AV5Mensaje)+"</div>");this.AV18Cont1<=this.AV19Cont3;)this.AV75Numero=this.AV20Cont4[this.AV18Cont1-1],0!=this.AV75Numero&&(this.AV10Ban=1,this.AV5Mensaje=this.AV5Mensaje+" Rengl\u00f3n "+gx.text.trim(gx.num.str(this.AV75Numero,
10,0))+": ",this.AV5Mensaje=this.AV5Mensaje+this.AV57EmbDescc[this.AV18Cont1-1]+" ",this.AV5Mensaje=this.AV5Mensaje+this.AV84TemDescc[this.AV18Cont1-1]+", "),this.AV18Cont1+=1;1==this.AV10Ban?(gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption"," "),this.AV5Mensaje=this.AV68Mensaje1+" "+this.AV5Mensaje):this.AV5Mensaje=this.AV68Mensaje1;gx.fn.setCtrlProperty("LABELMENSAJEERROR","Caption",'<div class="alert alert-warning">'+gx.text.trim(this.AV5Mensaje)+"</div>")};this.e122n2_client=function(){this.executeServerEvent("'REGRESAR'",
!1)};this.e132n2_client=function(){this.executeServerEvent("'SIGUIENTE'",!1)};this.e182n2_client=function(a){this.executeServerEvent("VEDITAR.CLICK",!0,a)};this.e192n2_client=function(a){this.executeServerEvent("VBORRAR.CLICK",!0,a)};this.e142n2_client=function(){this.executeServerEvent("'EXCELL'",!1)};this.e152n2_client=function(){this.executeServerEvent("'NUEVO'",!1)};this.e262n2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e272n2_client=function(a){this.executeServerEvent("CANCEL",
!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[4,7,12,13,16,17,20,21,24,25,28,29,32,33,36,37,40,41,42,49,50,51,52,53,54,55,56,57,58,62,63,66,67,71,79,80,81];this.GXLastCtrlId=81;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",48,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gobmx_tramite_14192_ccopy1",[],!1,1,!1,!0,7,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addSingleLineEdit("Editar",49,"vEDITAR","","","editar","svchar",17,"px",100,80,"left","e182n2_client",
[],"Editar","editar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit("Borrar",50,"vBORRAR","","","borrar","svchar",17,"px",100,80,"left","e192n2_client",[],"Borrar","borrar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(556,51,"TRAMITE03043_CFOLIO","Folio Sinatec","","Tramite03043_CFolio","int",0,"px",18,18,"right",null,[],556,"Tramite03043_CFolio",!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(336,52,"GOBMX_03043ID","Gob MX_03043 Id","","GobMX_03043Id","int",0,"px",10,10,"right",null,[],336,"GobMX_03043Id",
!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(329,53,"GOBMX_03043NOMBRE","Nombre del Solicitante","","GobMX_03043Nombre","svchar",0,"px",100,80,"left",null,[],329,"GobMX_03043Nombre",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(330,54,"GOBMX_03043FOLIOINICIAL","Folio Inicial","","GobMX_03043FolioInicial","svchar",0,"px",10,10,"left",null,[],330,"GobMX_03043FolioInicial",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(331,55,"GOBMX_03043FOLIOFINAL","Folio Final","","GobMX_03043FolioFinal","svchar",
0,"px",10,10,"left",null,[],331,"GobMX_03043FolioFinal",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(332,56,"GOBMX_03043NUMEROPIEZAS","N\u00famero de Piezas","","GobMX_03043NumeroPiezas","decimal",0,"px",15,15,"right",null,[],332,"GobMX_03043NumeroPiezas",!0,3,!1,!1,"Attribute",1);b.addComboBox(333,57,"GOBMX_03043TIPOEMBALAJE","Tipo de Embalaje","GobMX_03043TipoEmbalaje","int",null,0,!0,!1,0,"px");b.addComboBox(334,58,"GOBMX_03043CONDICIONES","Condiciones de embalaje tratado","GobMX_03043Condiciones",
"int",null,0,!0,!1,0,"px");this.setGrid(b);var c=this.CAPTCHAContainer=gx.uc.getNew(this,74,13,"Captcha","CAPTCHAContainer","Captcha");c.setProp("Width","Width","140","str");c.setProp("Height","Height","39","str");c.setProp("ReloadImageText","Reloadimagetext","Recargar Imagen","str");c.setProp("ValidationResult","Validationresult",0,"num");c.setProp("Visible","Visible",!0,"bool");c.setC2ShowFunction(function(a){a.show()});this.setUserControl(c);this.GXValidFnc[4]={fld:"BREADCRUMBS",format:2,grid:0};
this.GXValidFnc[7]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[12]={fld:"LABELFE",format:1,grid:0};this.GXValidFnc[13]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECHAD",gxz:"ZV37DTrFechaD",gxold:"OV37DTrFechaD",gxvar:"AV37DTrFechaD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV37DTrFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV37DTrFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECHAD",
gx.O.AV37DTrFechaD,0)},c2v:function(){gx.O.AV37DTrFechaD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECHAD")},nac:function(){return!1}};this.GXValidFnc[16]={fld:"LABELNU",format:1,grid:0};this.GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e212n1_client,rgrid:[],fld:"vDTRNUMUNC",gxz:"ZV44DTrNumUnC",gxold:"OV44DTrNumUnC",gxvar:"AV44DTrNumUnC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV44DTrNumUnC=
gx.num.intval(a)},v2z:function(a){gx.O.ZV44DTrNumUnC=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vDTRNUMUNC",gx.O.AV44DTrNumUnC,0)},c2v:function(){gx.O.AV44DTrNumUnC=this.val()},val:function(){return gx.fn.getIntegerValue("vDTRNUMUNC",",")},nac:function(){return!1}};this.GXValidFnc[20]={fld:"LABELTA",format:1,grid:0};this.GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e222n1_client,rgrid:[],fld:"vTRTCLAVEN",gxz:"ZV88TrtClaveN",
gxold:"OV88TrtClaveN",gxvar:"AV88TrtClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV88TrtClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV88TrtClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setComboBoxValue("vTRTCLAVEN",gx.O.AV88TrtClaveN)},c2v:function(){gx.O.AV88TrtClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vTRTCLAVEN",",")},nac:function(){return!1}};this.GXValidFnc[24]={fld:"LABELFEI",format:1,grid:0};this.GXValidFnc[25]={lvl:0,type:"date",len:10,
dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRFECHTD",gxz:"ZV38DTrFechTD",gxold:"OV38DTrFechTD",gxvar:"AV38DTrFechTD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV38DTrFechTD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV38DTrFechTD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECHTD",gx.O.AV38DTrFechTD,0)},c2v:function(){gx.O.AV38DTrFechTD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECHTD")},nac:function(){return!1}};
this.GXValidFnc[28]={fld:"LABELFECINI",format:1,grid:0};this.GXValidFnc[29]={lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e232n1_client,fld:"vDTRFECINID",gxz:"ZV39DtrFecIniD",gxold:"OV39DtrFecIniD",gxvar:"AV39DtrFecIniD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV39DtrFecIniD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV39DtrFecIniD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECINID",gx.O.AV39DtrFecIniD,0)},
c2v:function(){gx.O.AV39DtrFecIniD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECINID")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"LABELFECFIN",format:1,grid:0};this.GXValidFnc[33]={lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e242n1_client,fld:"vDTRFECFIND",gxz:"ZV36DtrFecFinD",gxold:"OV36DtrFecFinD",gxvar:"AV36DtrFecFinD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV36DtrFecFinD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV36DtrFecFinD=
gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vDTRFECFIND",gx.O.AV36DtrFecFinD,0)},c2v:function(){gx.O.AV36DtrFecFinD=this.val()},val:function(){return gx.fn.getControlValue("vDTRFECFIND")},nac:function(){return!1}};this.GXValidFnc[36]={fld:"LABELNTA",format:1,grid:0};this.GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:this.e252n1_client,rgrid:[],fld:"vDTRNUMTRN",gxz:"ZV43DTrNumTrN",gxold:"OV43DTrNumTrN",gxvar:"AV43DTrNumTrN",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV43DTrNumTrN=gx.num.intval(a)},v2z:function(a){gx.O.ZV43DTrNumTrN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vDTRNUMTRN",gx.O.AV43DTrNumTrN,0)},c2v:function(){gx.O.AV43DTrNumTrN=this.val()},val:function(){return gx.fn.getIntegerValue("vDTRNUMTRN",",")},nac:function(){return!1}};this.GXValidFnc[40]={fld:"LABELCTA",format:1,grid:0};this.GXValidFnc[41]={lvl:0,type:"decimal",len:15,dec:3,sign:!1,pic:"ZZZZZZZZZZ9.999",ro:1,
grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vDTRTOTUTLMBN",gxz:"ZV51DtrTotUtlMBN",gxold:"OV51DtrTotUtlMBN",gxvar:"AV51DtrTotUtlMBN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV51DtrTotUtlMBN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV51DtrTotUtlMBN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vDTRTOTUTLMBN",gx.O.AV51DtrTotUtlMBN,3,".")},c2v:function(){gx.O.AV51DtrTotUtlMBN=this.val()},val:function(){return gx.fn.getDecimalValue("vDTRTOTUTLMBN",
",",".")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"LABELTITULOPANTALLADOS",format:1,grid:0};this.GXValidFnc[49]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vEDITAR",gxz:"ZV55editar",gxold:"OV55editar",gxvar:"AV55editar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV55editar=a},v2z:function(a){gx.O.ZV55editar=a},v2c:function(){gx.fn.setGridControlValue("vEDITAR",
gx.fn.currentGridRowImpl(48),gx.O.AV55editar,1)},c2v:function(){gx.O.AV55editar=this.val()},val:function(){return gx.fn.getGridControlValue("vEDITAR",gx.fn.currentGridRowImpl(48))},nac:function(){return!1}};this.GXValidFnc[50]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vBORRAR",gxz:"ZV15borrar",gxold:"OV15borrar",gxvar:"AV15borrar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV15borrar=
a},v2z:function(a){gx.O.ZV15borrar=a},v2c:function(){gx.fn.setGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(48),gx.O.AV15borrar,1)},c2v:function(){gx.O.AV15borrar=this.val()},val:function(){return gx.fn.getGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(48))},nac:function(){return!1}};this.GXValidFnc[51]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRAMITE03043_CFOLIO",gxz:"Z556Tramite03043_CFolio",
gxold:"O556Tramite03043_CFolio",gxvar:"A556Tramite03043_CFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A556Tramite03043_CFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z556Tramite03043_CFolio=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("TRAMITE03043_CFOLIO",gx.fn.currentGridRowImpl(48),gx.O.A556Tramite03043_CFolio,0)},c2v:function(){gx.O.A556Tramite03043_CFolio=this.val()},val:function(){return gx.fn.getGridIntegerValue("TRAMITE03043_CFOLIO",
gx.fn.currentGridRowImpl(48),",")},nac:function(){return!1}};this.GXValidFnc[52]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043ID",gxz:"Z336GobMX_03043Id",gxold:"O336GobMX_03043Id",gxvar:"A336GobMX_03043Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A336GobMX_03043Id=gx.num.intval(a)},v2z:function(a){gx.O.Z336GobMX_03043Id=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043ID",
gx.fn.currentGridRowImpl(48),gx.O.A336GobMX_03043Id,0)},c2v:function(){gx.O.A336GobMX_03043Id=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043ID",gx.fn.currentGridRowImpl(48),",")},nac:function(){return!1}};this.GXValidFnc[53]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043NOMBRE",gxz:"Z329GobMX_03043Nombre",gxold:"O329GobMX_03043Nombre",gxvar:"A329GobMX_03043Nombre",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A329GobMX_03043Nombre=a},v2z:function(a){gx.O.Z329GobMX_03043Nombre=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043NOMBRE",gx.fn.currentGridRowImpl(48),gx.O.A329GobMX_03043Nombre,0)},c2v:function(){gx.O.A329GobMX_03043Nombre=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043NOMBRE",gx.fn.currentGridRowImpl(48))},nac:function(){return!1}};this.GXValidFnc[54]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,
ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043FOLIOINICIAL",gxz:"Z330GobMX_03043FolioInicial",gxold:"O330GobMX_03043FolioInicial",gxvar:"A330GobMX_03043FolioInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A330GobMX_03043FolioInicial=a},v2z:function(a){gx.O.Z330GobMX_03043FolioInicial=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043FOLIOINICIAL",gx.fn.currentGridRowImpl(48),gx.O.A330GobMX_03043FolioInicial,
0)},c2v:function(){gx.O.A330GobMX_03043FolioInicial=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043FOLIOINICIAL",gx.fn.currentGridRowImpl(48))},nac:function(){return!1}};this.GXValidFnc[55]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043FOLIOFINAL",gxz:"Z331GobMX_03043FolioFinal",gxold:"O331GobMX_03043FolioFinal",gxvar:"A331GobMX_03043FolioFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
autoCorrect:"1",v2v:function(a){gx.O.A331GobMX_03043FolioFinal=a},v2z:function(a){gx.O.Z331GobMX_03043FolioFinal=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_03043FOLIOFINAL",gx.fn.currentGridRowImpl(48),gx.O.A331GobMX_03043FolioFinal,0)},c2v:function(){gx.O.A331GobMX_03043FolioFinal=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_03043FOLIOFINAL",gx.fn.currentGridRowImpl(48))},nac:function(){return!1}};this.GXValidFnc[56]={lvl:2,type:"decimal",len:15,dec:3,sign:!1,pic:"ZZZZZZZZZZ9.999",
ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_03043NUMEROPIEZAS",gxz:"Z332GobMX_03043NumeroPiezas",gxold:"O332GobMX_03043NumeroPiezas",gxvar:"A332GobMX_03043NumeroPiezas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A332GobMX_03043NumeroPiezas=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z332GobMX_03043NumeroPiezas=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_03043NUMEROPIEZAS",gx.fn.currentGridRowImpl(48),
gx.O.A332GobMX_03043NumeroPiezas,3,".")},c2v:function(){gx.O.A332GobMX_03043NumeroPiezas=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_03043NUMEROPIEZAS",gx.fn.currentGridRowImpl(48),",",".")},nac:function(){return!1}};this.GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043TIPOEMBALAJE",gxz:"Z333GobMX_03043TipoEmbalaje",gxold:"O333GobMX_03043TipoEmbalaje",gxvar:"A333GobMX_03043TipoEmbalaje",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A333GobMX_03043TipoEmbalaje=gx.num.intval(a)},v2z:function(a){gx.O.Z333GobMX_03043TipoEmbalaje=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_03043TIPOEMBALAJE",gx.fn.currentGridRowImpl(48),gx.O.A333GobMX_03043TipoEmbalaje)},c2v:function(){gx.O.A333GobMX_03043TipoEmbalaje=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043TIPOEMBALAJE",gx.fn.currentGridRowImpl(48),",")},
nac:function(){return!1}};this.GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_03043CONDICIONES",gxz:"Z334GobMX_03043Condiciones",gxold:"O334GobMX_03043Condiciones",gxvar:"A334GobMX_03043Condiciones",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A334GobMX_03043Condiciones=gx.num.intval(a)},v2z:function(a){gx.O.Z334GobMX_03043Condiciones=gx.num.intval(a)},
v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_03043CONDICIONES",gx.fn.currentGridRowImpl(48),gx.O.A334GobMX_03043Condiciones)},c2v:function(){gx.O.A334GobMX_03043Condiciones=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_03043CONDICIONES",gx.fn.currentGridRowImpl(48),",")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"LABELNPT",format:1,grid:0};this.GXValidFnc[63]={lvl:0,type:"decimal",len:12,dec:3,sign:!1,pic:"ZZ,ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"vNUMPIETOTN",gxz:"ZV76NumPieTotN",gxold:"OV76NumPieTotN",gxvar:"AV76NumPieTotN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV76NumPieTotN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV76NumPieTotN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vNUMPIETOTN",gx.O.AV76NumPieTotN,3,".")},c2v:function(){gx.O.AV76NumPieTotN=this.val()},val:function(){return gx.fn.getDecimalValue("vNUMPIETOTN",",",".")},nac:function(){return!1}};this.GXValidFnc[66]=
{fld:"LABELBI",format:1,grid:0};this.GXValidFnc[67]={lvl:0,type:"bitstr",len:1024,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vBLBARCHIVOC",gxz:"ZV14BlbArchivoC",gxold:"OV14BlbArchivoC",gxvar:"AV14BlbArchivoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV14BlbArchivoC=a},v2z:function(a){gx.O.ZV14BlbArchivoC=a},v2c:function(){gx.fn.setBlobValue("vBLBARCHIVOC",gx.O.AV14BlbArchivoC)},c2v:function(){gx.O.AV14BlbArchivoC=this.val()},val:function(){return gx.fn.getBlobValue("vBLBARCHIVOC")},
nac:function(){return!1}};this.GXValidFnc[71]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[79]={fld:"TBJAVASCRIPT",format:1,grid:0};this.GXValidFnc[80]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Foliosinatec,isvalid:null,rgrid:[this.Grid1Container],fld:"vFOLIOSINATEC",gxz:"ZV64FolioSinatec",gxold:"OV64FolioSinatec",gxvar:"AV64FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV64FolioSinatec=gx.num.intval(a)},
v2z:function(a){gx.O.ZV64FolioSinatec=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV64FolioSinatec,0)},c2v:function(){gx.O.AV64FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.GXValidFnc[81]={lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vPERSONA",gxz:"ZV78Persona",gxold:"OV78Persona",gxvar:"AV78Persona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV78Persona=
a},v2z:function(a){gx.O.ZV78Persona=a},v2c:function(){gx.fn.setControlValue("vPERSONA",gx.O.AV78Persona,0)},c2v:function(){gx.O.AV78Persona=this.val()},val:function(){return gx.fn.getControlValue("vPERSONA")},nac:function(){return!1}};this.AV37DTrFechaD=gx.date.nullDate();this.ZV37DTrFechaD=gx.date.nullDate();this.OV37DTrFechaD=gx.date.nullDate();this.OV88TrtClaveN=this.ZV88TrtClaveN=this.AV88TrtClaveN=this.OV44DTrNumUnC=this.ZV44DTrNumUnC=this.AV44DTrNumUnC=0;this.AV38DTrFechTD=gx.date.nullDate();
this.ZV38DTrFechTD=gx.date.nullDate();this.OV38DTrFechTD=gx.date.nullDate();this.AV39DtrFecIniD=gx.date.nullDate();this.ZV39DtrFecIniD=gx.date.nullDate();this.OV39DtrFecIniD=gx.date.nullDate();this.AV36DtrFecFinD=gx.date.nullDate();this.ZV36DtrFecFinD=gx.date.nullDate();this.OV36DtrFecFinD=gx.date.nullDate();this.OV51DtrTotUtlMBN=this.ZV51DtrTotUtlMBN=this.AV51DtrTotUtlMBN=this.OV43DTrNumTrN=this.ZV43DTrNumTrN=this.AV43DTrNumTrN=0;this.OV15borrar=this.ZV15borrar=this.OV55editar=this.ZV55editar="";
this.O336GobMX_03043Id=this.Z336GobMX_03043Id=this.O556Tramite03043_CFolio=this.Z556Tramite03043_CFolio=0;this.O331GobMX_03043FolioFinal=this.Z331GobMX_03043FolioFinal=this.O330GobMX_03043FolioInicial=this.Z330GobMX_03043FolioInicial=this.O329GobMX_03043Nombre=this.Z329GobMX_03043Nombre="";this.OV76NumPieTotN=this.ZV76NumPieTotN=this.AV76NumPieTotN=this.O334GobMX_03043Condiciones=this.Z334GobMX_03043Condiciones=this.O333GobMX_03043TipoEmbalaje=this.Z333GobMX_03043TipoEmbalaje=this.O332GobMX_03043NumeroPiezas=
this.Z332GobMX_03043NumeroPiezas=0;this.OV14BlbArchivoC=this.ZV14BlbArchivoC=this.AV14BlbArchivoC="";this.OV64FolioSinatec=this.ZV64FolioSinatec=this.AV64FolioSinatec=0;this.AV15borrar=this.AV55editar=this.OV78Persona=this.ZV78Persona=this.AV78Persona="";this.A336GobMX_03043Id=this.A556Tramite03043_CFolio=0;this.A331GobMX_03043FolioFinal=this.A330GobMX_03043FolioInicial=this.A329GobMX_03043Nombre="";this.A334GobMX_03043Condiciones=this.A333GobMX_03043TipoEmbalaje=this.A332GobMX_03043NumeroPiezas=
0;this.AV68Mensaje1="";this.AV84TemDescc=[];this.AV57EmbDescc=[];this.AV20Cont4=[];this.AV75Numero=0;this.AV5Mensaje="";this.AV19Cont3=this.AV18Cont1=this.AV10Ban=0;this.ServerEvents="e122n2_client e132n2_client e182n2_client e192n2_client e142n2_client e152n2_client e262n2_client e272n2_client".split(" ");this.VarControlMap.AV17Cont={id:"vCONT",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[80]);b.addRefreshingVar({rfrVar:"AV15borrar",rfrProp:"Value",gxAttId:"Borrar"});b.addRefreshingVar({rfrVar:"AV55editar",
rfrProp:"Value",gxAttId:"Editar"});b.addRefreshingVar({rfrVar:"AV17Cont"});this.SetStandaloneVars()}gobmx_tramite_14192_ccopy1.prototype=new gx.GxObject;gx.setParentObj(new gobmx_tramite_14192_ccopy1);
