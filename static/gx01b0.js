gx.evt.autoSkip=!1;
function gx01b0(){this.ServerClass="Gx01B0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV14pDTrFolioC=gx.fn.getControlValue("vPDTRFOLIOC")};this.e132g2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e142g1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,
27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];this.GXLastCtrlId=63;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01b0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,53,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",
!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(206,54,"DTRFOLIOC","Folio","","DTrFolioC","char",0,"px",8,8,"left",null,[],206,"DTrFolioC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(501,55,"DTRNUMOFC","Of C","Seleccionar","DTrNumOfC","svchar",0,"px",30,30,"left",null,[],501,"DTrNumOfC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(203,56,"DTRFECHAD","Fecha","","DTrFechaD","date",0,"px",10,10,"right",null,[],203,"DTrFechaD",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(211,57,"DTRNUMUNC","N\u00famero \u00fanico",
"","DTrNumUnC","int",0,"px",4,4,"right",null,[],211,"DTrNumUnC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(502,58,"DTRNUMTRC","Tr C","","DTrNumTrC","svchar",0,"px",10,10,"left",null,[],502,"DTrNumTrC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(204,59,"DTRFECHTD","Fecha","","DTrFechTD","date",0,"px",10,10,"right",null,[],204,"DTrFechTD",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(324,60,"DTRNUMUTC","N\u00famero \u00fanico","","DTrNumUTC","svchar",0,"px",7,7,"left",null,[],324,"DTrNumUTC",!0,
0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",gxvar:"AV6cBITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=
a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKDTRFOLIOC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDTRFOLIOC",gxz:"ZV7cDTrFolioC",gxold:"OV7cDTrFolioC",gxvar:"AV7cDTrFolioC",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cDTrFolioC=a},v2z:function(a){gx.O.ZV7cDTrFolioC=a},v2c:function(){gx.fn.setControlValue("vCDTRFOLIOC",gx.O.AV7cDTrFolioC,0)},c2v:function(){gx.O.AV7cDTrFolioC=this.val()},val:function(){return gx.fn.getControlValue("vCDTRFOLIOC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKDTRNUMOFC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDTRNUMOFC",
gxz:"ZV8cDTrNumOfC",gxold:"OV8cDTrNumOfC",gxvar:"AV8cDTrNumOfC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cDTrNumOfC=a},v2z:function(a){gx.O.ZV8cDTrNumOfC=a},v2c:function(){gx.fn.setControlValue("vCDTRNUMOFC",gx.O.AV8cDTrNumOfC,0)},c2v:function(){gx.O.AV8cDTrNumOfC=this.val()},val:function(){return gx.fn.getControlValue("vCDTRNUMOFC")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"TEXTBLOCKDTRFECHAD",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,
sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDTRFECHAD",gxz:"ZV9cDTrFechaD",gxold:"OV9cDTrFechaD",gxvar:"AV9cDTrFechaD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9cDTrFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV9cDTrFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vCDTRFECHAD",gx.O.AV9cDTrFechaD,0)},c2v:function(){gx.O.AV9cDTrFechaD=this.val()},val:function(){return gx.fn.getControlValue("vCDTRFECHAD")},
nac:function(){return!1}};this.GXValidFnc[32]={fld:"TEXTBLOCKDTRNUMUNC",format:0,grid:0};this.GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDTRNUMUNC",gxz:"ZV10cDTrNumUnC",gxold:"OV10cDTrNumUnC",gxvar:"AV10cDTrNumUnC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV10cDTrNumUnC=gx.num.intval(a)},v2z:function(a){gx.O.ZV10cDTrNumUnC=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCDTRNUMUNC",
gx.O.AV10cDTrNumUnC,0)},c2v:function(){gx.O.AV10cDTrNumUnC=this.val()},val:function(){return gx.fn.getIntegerValue("vCDTRNUMUNC",",")},nac:function(){return!1}};this.GXValidFnc[37]={fld:"TEXTBLOCKDTRNUMTRC",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"svchar",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDTRNUMTRC",gxz:"ZV11cDTrNumTrC",gxold:"OV11cDTrNumTrC",gxvar:"AV11cDTrNumTrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV11cDTrNumTrC=a},
v2z:function(a){gx.O.ZV11cDTrNumTrC=a},v2c:function(){gx.fn.setControlValue("vCDTRNUMTRC",gx.O.AV11cDTrNumTrC,0)},c2v:function(){gx.O.AV11cDTrNumTrC=this.val()},val:function(){return gx.fn.getControlValue("vCDTRNUMTRC")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKDTRFECHTD",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCDTRFECHTD",gxz:"ZV12cDTrFechTD",gxold:"OV12cDTrFechTD",gxvar:"AV12cDTrFechTD",
dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV12cDTrFechTD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV12cDTrFechTD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vCDTRFECHTD",gx.O.AV12cDTrFechTD,0)},c2v:function(){gx.O.AV12cDTrFechTD=this.val()},val:function(){return gx.fn.getControlValue("vCDTRFECHTD")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"GROUP2",grid:0};this.GXValidFnc[48]={fld:"TABLE3",
grid:0};this.GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},
c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(51))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV17Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[53]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",
gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(51),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[54]=
{lvl:2,type:"char",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRFOLIOC",gxz:"Z206DTrFolioC",gxold:"O206DTrFolioC",gxvar:"A206DTrFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A206DTrFolioC=a},v2z:function(a){gx.O.Z206DTrFolioC=a},v2c:function(){gx.fn.setGridControlValue("DTRFOLIOC",gx.fn.currentGridRowImpl(51),gx.O.A206DTrFolioC,0)},c2v:function(){gx.O.A206DTrFolioC=this.val()},val:function(){return gx.fn.getGridControlValue("DTRFOLIOC",
gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRNUMOFC",gxz:"Z501DTrNumOfC",gxold:"O501DTrNumOfC",gxvar:"A501DTrNumOfC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A501DTrNumOfC=a},v2z:function(a){gx.O.Z501DTrNumOfC=a},v2c:function(){gx.fn.setGridControlValue("DTRNUMOFC",gx.fn.currentGridRowImpl(51),
gx.O.A501DTrNumOfC,0)},c2v:function(){gx.O.A501DTrNumOfC=this.val()},val:function(){return gx.fn.getGridControlValue("DTRNUMOFC",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRFECHAD",gxz:"Z203DTrFechaD",gxold:"O203DTrFechaD",gxvar:"A203DTrFechaD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A203DTrFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z203DTrFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setGridControlValue("DTRFECHAD",gx.fn.currentGridRowImpl(51),gx.O.A203DTrFechaD,0)},c2v:function(){gx.O.A203DTrFechaD=this.val()},val:function(){return gx.fn.getGridControlValue("DTRFECHAD",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,
fnc:null,isvalid:null,rgrid:[],fld:"DTRNUMUNC",gxz:"Z211DTrNumUnC",gxold:"O211DTrNumUnC",gxvar:"A211DTrNumUnC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A211DTrNumUnC=gx.num.intval(a)},v2z:function(a){gx.O.Z211DTrNumUnC=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("DTRNUMUNC",gx.fn.currentGridRowImpl(51),gx.O.A211DTrNumUnC,0)},c2v:function(){gx.O.A211DTrNumUnC=this.val()},val:function(){return gx.fn.getGridIntegerValue("DTRNUMUNC",gx.fn.currentGridRowImpl(51),
",")},nac:function(){return!1}};this.GXValidFnc[58]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRNUMTRC",gxz:"Z502DTrNumTrC",gxold:"O502DTrNumTrC",gxvar:"A502DTrNumTrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A502DTrNumTrC=a},v2z:function(a){gx.O.Z502DTrNumTrC=a},v2c:function(){gx.fn.setGridControlValue("DTRNUMTRC",gx.fn.currentGridRowImpl(51),gx.O.A502DTrNumTrC,0)},
c2v:function(){gx.O.A502DTrNumTrC=this.val()},val:function(){return gx.fn.getGridControlValue("DTRNUMTRC",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRFECHTD",gxz:"Z204DTrFechTD",gxold:"O204DTrFechTD",gxvar:"A204DTrFechTD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A204DTrFechTD=
gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z204DTrFechTD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setGridControlValue("DTRFECHTD",gx.fn.currentGridRowImpl(51),gx.O.A204DTrFechTD,0)},c2v:function(){gx.O.A204DTrFechTD=this.val()},val:function(){return gx.fn.getGridControlValue("DTRFECHTD",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[60]={lvl:2,type:"svchar",len:7,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"DTRNUMUTC",
gxz:"Z324DTrNumUTC",gxold:"O324DTrNumUTC",gxvar:"A324DTrNumUTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A324DTrNumUTC=a},v2z:function(a){gx.O.Z324DTrNumUTC=a},v2c:function(){gx.fn.setGridControlValue("DTRNUMUTC",gx.fn.currentGridRowImpl(51),gx.O.A324DTrNumUTC,0)},c2v:function(){gx.O.A324DTrNumUTC=this.val()},val:function(){return gx.fn.getGridControlValue("DTRNUMUTC",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[63]=
{fld:"TABLE4",grid:0};this.OV8cDTrNumOfC=this.ZV8cDTrNumOfC=this.AV8cDTrNumOfC=this.OV7cDTrFolioC=this.ZV7cDTrFolioC=this.AV7cDTrFolioC=this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.AV9cDTrFechaD=gx.date.nullDate();this.ZV9cDTrFechaD=gx.date.nullDate();this.OV9cDTrFechaD=gx.date.nullDate();this.OV10cDTrNumUnC=this.ZV10cDTrNumUnC=this.AV10cDTrNumUnC=0;this.OV11cDTrNumTrC=this.ZV11cDTrNumTrC=this.AV11cDTrNumTrC="";this.AV12cDTrFechTD=gx.date.nullDate();this.ZV12cDTrFechTD=gx.date.nullDate();
this.OV12cDTrFechTD=gx.date.nullDate();this.O501DTrNumOfC=this.Z501DTrNumOfC=this.O206DTrFolioC=this.Z206DTrFolioC=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection="";this.Z203DTrFechaD=gx.date.nullDate();this.O203DTrFechaD=gx.date.nullDate();this.O211DTrNumUnC=this.Z211DTrNumUnC=0;this.O502DTrNumTrC=this.Z502DTrNumTrC="";this.Z204DTrFechTD=gx.date.nullDate();this.O204DTrFechTD=gx.date.nullDate();this.A501DTrNumOfC=this.A206DTrFolioC=this.A45BITA_NUMERO=this.AV5LinkSelection=
this.AV14pDTrFolioC=this.AV13pBITA_NUMERO=this.O324DTrNumUTC=this.Z324DTrNumUTC="";this.A203DTrFechaD=gx.date.nullDate();this.A211DTrNumUnC=0;this.A502DTrNumTrC="";this.A204DTrFechTD=gx.date.nullDate();this.A324DTrNumUTC="";this.ServerEvents=["e132g2_client","e142g1_client"];this.VarControlMap.AV13pBITA_NUMERO={id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV14pDTrFolioC={id:"vPDTRFOLIOC",grid:0,type:"char"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);
b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);b.addRefreshingVar(this.GXValidFnc[34]);b.addRefreshingVar(this.GXValidFnc[39]);b.addRefreshingVar(this.GXValidFnc[44]);this.SetStandaloneVars()}gx01b0.prototype=new gx.GxObject;gx.setParentObj(new gx01b0);