gx.evt.autoSkip=!1;
function gx00s0(){this.ServerClass="Gx00S0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV12pAneFolioC=gx.fn.getControlValue("vPANEFOLIOC")};this.e131v2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e141v1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,
27,29,32,34,37,38,42,43,44,45,46,47,48,51];this.GXLastCtrlId=51;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00s0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,43,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",!0,0,!1,!1,"Attribute",
1);b.addSingleLineEdit(189,44,"ANEFOLIOC","Folio","","AneFolioC","char",0,"px",8,8,"left",null,[],189,"AneFolioC",!0,0,!1,!1,"Attribute",1);b.addBlob(437,45,"ANEACRFILE","Archivo de Acreditaci\u00f3n","AneAcrFile","bitstr",0,60,0,"px","px",!0,!1);b.addBlob(438,46,"ANECONFILE","Archivo de Concentimiento","AneConFile","bitstr",0,60,0,"px","px",!0,!1);b.addSingleLineEdit(456,47,"ANENUMOFC","No. de oficio","","AneNumOfC","svchar",0,"px",30,30,"left",null,[],456,"AneNumOfC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(457,
48,"ANEFECHAD","Fecha","","AneFechaD","date",0,"px",10,10,"right",null,[],457,"AneFechaD",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",
gxvar:"AV6cBITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKANEFOLIOC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,fld:"vCANEFOLIOC",gxz:"ZV7cAneFolioC",gxold:"OV7cAneFolioC",gxvar:"AV7cAneFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cAneFolioC=a},v2z:function(a){gx.O.ZV7cAneFolioC=a},v2c:function(){gx.fn.setControlValue("vCANEFOLIOC",gx.O.AV7cAneFolioC,0)},c2v:function(){gx.O.AV7cAneFolioC=this.val()},val:function(){return gx.fn.getControlValue("vCANEFOLIOC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKANENUMOFC",format:0,grid:0};this.GXValidFnc[24]=
{lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCANENUMOFC",gxz:"ZV8cAneNumOfC",gxold:"OV8cAneNumOfC",gxvar:"AV8cAneNumOfC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cAneNumOfC=a},v2z:function(a){gx.O.ZV8cAneNumOfC=a},v2c:function(){gx.fn.setControlValue("vCANENUMOFC",gx.O.AV8cAneNumOfC,0)},c2v:function(){gx.O.AV8cAneNumOfC=this.val()},val:function(){return gx.fn.getControlValue("vCANENUMOFC")},nac:function(){return!1}};this.GXValidFnc[27]=
{fld:"TEXTBLOCKANEFECHAD",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCANEFECHAD",gxz:"ZV9cAneFechaD",gxold:"OV9cAneFechaD",gxvar:"AV9cAneFechaD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9cAneFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.ZV9cAneFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setControlValue("vCANEFECHAD",gx.O.AV9cAneFechaD,
0)},c2v:function(){gx.O.AV9cAneFechaD=this.val()},val:function(){return gx.fn.getControlValue("vCANEFECHAD")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"TEXTBLOCKANECODIDC",format:0,grid:0};this.GXValidFnc[34]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCANECODIDC",gxz:"ZV10cAneCodIdC",gxold:"OV10cAneCodIdC",gxvar:"AV10cAneCodIdC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV10cAneCodIdC=a},v2z:function(a){gx.O.ZV10cAneCodIdC=
a},v2c:function(){gx.fn.setControlValue("vCANECODIDC",gx.O.AV10cAneCodIdC,0)},c2v:function(){gx.O.AV10cAneCodIdC=this.val()},val:function(){return gx.fn.getControlValue("vCANECODIDC")},nac:function(){return!1}};this.GXValidFnc[37]={fld:"GROUP2",grid:0};this.GXValidFnc[38]={fld:"TABLE3",grid:0};this.GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(41))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",
gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV15Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[43]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",
gx.fn.currentGridRowImpl(41),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[44]={lvl:2,type:"char",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ANEFOLIOC",gxz:"Z189AneFolioC",gxold:"O189AneFolioC",gxvar:"A189AneFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",
v2v:function(a){gx.O.A189AneFolioC=a},v2z:function(a){gx.O.Z189AneFolioC=a},v2c:function(){gx.fn.setGridControlValue("ANEFOLIOC",gx.fn.currentGridRowImpl(41),gx.O.A189AneFolioC,0)},c2v:function(){gx.O.A189AneFolioC=this.val()},val:function(){return gx.fn.getGridControlValue("ANEFOLIOC",gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[45]={lvl:2,type:"bitstr",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ANEACRFILE",gxz:"Z437AneAcrFile",
gxold:"O437AneAcrFile",gxvar:"A437AneAcrFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A437AneAcrFile=a},v2z:function(a){gx.O.Z437AneAcrFile=a},v2c:function(){gx.fn.setGridControlValue("ANEACRFILE",gx.fn.currentGridRowImpl(41),gx.O.A437AneAcrFile,0)},c2v:function(){gx.O.A437AneAcrFile=this.val()},val:function(){return gx.fn.getGridControlValue("ANEACRFILE",gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[46]={lvl:2,type:"bitstr",len:1024,
dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ANECONFILE",gxz:"Z438AneConFile",gxold:"O438AneConFile",gxvar:"A438AneConFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A438AneConFile=a},v2z:function(a){gx.O.Z438AneConFile=a},v2c:function(){gx.fn.setGridControlValue("ANECONFILE",gx.fn.currentGridRowImpl(41),gx.O.A438AneConFile,0)},c2v:function(){gx.O.A438AneConFile=this.val()},val:function(){return gx.fn.getGridControlValue("ANECONFILE",
gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[47]={lvl:2,type:"svchar",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ANENUMOFC",gxz:"Z456AneNumOfC",gxold:"O456AneNumOfC",gxvar:"A456AneNumOfC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A456AneNumOfC=a},v2z:function(a){gx.O.Z456AneNumOfC=a},v2c:function(){gx.fn.setGridControlValue("ANENUMOFC",gx.fn.currentGridRowImpl(41),
gx.O.A456AneNumOfC,0)},c2v:function(){gx.O.A456AneNumOfC=this.val()},val:function(){return gx.fn.getGridControlValue("ANENUMOFC",gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[48]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ANEFECHAD",gxz:"Z457AneFechaD",gxold:"O457AneFechaD",gxvar:"A457AneFechaD",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A457AneFechaD=gx.fn.toDatetimeValue(a)},v2z:function(a){gx.O.Z457AneFechaD=gx.fn.toDatetimeValue(a)},v2c:function(){gx.fn.setGridControlValue("ANEFECHAD",gx.fn.currentGridRowImpl(41),gx.O.A457AneFechaD,0)},c2v:function(){gx.O.A457AneFechaD=this.val()},val:function(){return gx.fn.getGridControlValue("ANEFECHAD",gx.fn.currentGridRowImpl(41))},nac:function(){return!1}};this.GXValidFnc[51]={fld:"TABLE4",grid:0};this.OV8cAneNumOfC=this.ZV8cAneNumOfC=this.AV8cAneNumOfC=this.OV7cAneFolioC=
this.ZV7cAneFolioC=this.AV7cAneFolioC=this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.AV9cAneFechaD=gx.date.nullDate();this.ZV9cAneFechaD=gx.date.nullDate();this.OV9cAneFechaD=gx.date.nullDate();this.O456AneNumOfC=this.Z456AneNumOfC=this.O438AneConFile=this.Z438AneConFile=this.O437AneAcrFile=this.Z437AneAcrFile=this.O189AneFolioC=this.Z189AneFolioC=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection=this.OV10cAneCodIdC=this.ZV10cAneCodIdC=this.AV10cAneCodIdC=
"";this.Z457AneFechaD=gx.date.nullDate();this.O457AneFechaD=gx.date.nullDate();this.A456AneNumOfC=this.A438AneConFile=this.A437AneAcrFile=this.A189AneFolioC=this.A45BITA_NUMERO=this.AV5LinkSelection=this.A458AneCodIdC=this.AV12pAneFolioC=this.AV11pBITA_NUMERO="";this.A457AneFechaD=gx.date.nullDate();this.ServerEvents=["e131v2_client","e141v1_client"];this.VarControlMap.AV11pBITA_NUMERO={id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV12pAneFolioC={id:"vPANEFOLIOC",grid:0,type:"char"};
b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);b.addRefreshingVar(this.GXValidFnc[34]);this.SetStandaloneVars()}gx00s0.prototype=new gx.GxObject;gx.setParentObj(new gx00s0);