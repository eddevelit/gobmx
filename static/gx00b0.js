gx.evt.autoSkip=!1;
function gx00b0(){this.ServerClass="Gx00B0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV10pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV11pDocEntNum=gx.fn.getIntegerValue("vPDOCENTNUM",",")};this.e131f2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e141f1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,
24,27,29,32,33,37,38,39,40,41,44];this.GXLastCtrlId=44;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00b0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,38,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",!0,0,!1,!1,"Attribute",
1);b.addSingleLineEdit(95,39,"DOCENTNUM","N\u00famero de Entrada","","DocEntNum","int",0,"px",10,10,"right",null,[],95,"DocEntNum",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(96,40,"PROMRFC","RFC","Seleccionar","PromRFC","char",0,"px",16,16,"left",null,[],96,"PromRFC",!0,0,!1,!1,"Attribute",1);b.addComboBox(48,41,"TRAMCODN","C\u00f3digo del Tr\u00e1mite","Tramcodn","char",null,0,!0,!1,0,"px");this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]=
{fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",gxvar:"AV6cBITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=
this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKDOCENTNUM",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDOCENTNUM",gxz:"ZV7cDocEntNum",gxold:"OV7cDocEntNum",gxvar:"AV7cDocEntNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cDocEntNum=gx.num.intval(a)},v2z:function(a){gx.O.ZV7cDocEntNum=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCDOCENTNUM",gx.O.AV7cDocEntNum,0)},c2v:function(){gx.O.AV7cDocEntNum=this.val()},val:function(){return gx.fn.getIntegerValue("vCDOCENTNUM",",")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKPROMRFC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"char",len:16,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCPROMRFC",gxz:"ZV8cPromRFC",gxold:"OV8cPromRFC",gxvar:"AV8cPromRFC",ucs:[],op:[],ip:[],nacdep:[],
ctrltype:"edit",v2v:function(a){gx.O.AV8cPromRFC=a},v2z:function(a){gx.O.ZV8cPromRFC=a},v2c:function(){gx.fn.setControlValue("vCPROMRFC",gx.O.AV8cPromRFC,0)},c2v:function(){gx.O.AV8cPromRFC=this.val()},val:function(){return gx.fn.getControlValue("vCPROMRFC")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"TEXTBLOCKTRAMCODN",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCTRAMCODN",gxz:"ZV9cTramcodn",gxold:"OV9cTramcodn",
gxvar:"AV9cTramcodn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(a){gx.O.AV9cTramcodn=a},v2z:function(a){gx.O.ZV9cTramcodn=a},v2c:function(){gx.fn.setComboBoxValue("vCTRAMCODN",gx.O.AV9cTramcodn)},c2v:function(){gx.O.AV9cTramcodn=this.val()},val:function(){return gx.fn.getControlValue("vCTRAMCODN")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"GROUP2",grid:0};this.GXValidFnc[33]={fld:"TABLE3",grid:0};this.GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,
grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=
this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(36))},gxvar_GXI:"AV14Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[38]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],
op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(36),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[39]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,
isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DOCENTNUM",gxz:"Z95DocEntNum",gxold:"O95DocEntNum",gxvar:"A95DocEntNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A95DocEntNum=gx.num.intval(a)},v2z:function(a){gx.O.Z95DocEntNum=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("DOCENTNUM",gx.fn.currentGridRowImpl(36),gx.O.A95DocEntNum,0)},c2v:function(){gx.O.A95DocEntNum=this.val()},val:function(){return gx.fn.getGridIntegerValue("DOCENTNUM",
gx.fn.currentGridRowImpl(36),",")},nac:function(){return!1}};this.GXValidFnc[40]={lvl:2,type:"char",len:16,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"PROMRFC",gxz:"Z96PromRFC",gxold:"O96PromRFC",gxvar:"A96PromRFC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A96PromRFC=a},v2z:function(a){gx.O.Z96PromRFC=a},v2c:function(){gx.fn.setGridControlValue("PROMRFC",gx.fn.currentGridRowImpl(36),gx.O.A96PromRFC,
0)},c2v:function(){gx.O.A96PromRFC=this.val()},val:function(){return gx.fn.getGridControlValue("PROMRFC",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[41]={lvl:2,type:"char",len:2,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"TRAMCODN",gxz:"Z48Tramcodn",gxold:"O48Tramcodn",gxvar:"A48Tramcodn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A48Tramcodn=a},v2z:function(a){gx.O.Z48Tramcodn=a},
v2c:function(){gx.fn.setGridComboBoxValue("TRAMCODN",gx.fn.currentGridRowImpl(36),gx.O.A48Tramcodn)},c2v:function(){gx.O.A48Tramcodn=this.val()},val:function(){return gx.fn.getGridControlValue("TRAMCODN",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[44]={fld:"TABLE4",grid:0};this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.OV7cDocEntNum=this.ZV7cDocEntNum=this.AV7cDocEntNum=0;this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection=
this.OV9cTramcodn=this.ZV9cTramcodn=this.AV9cTramcodn=this.OV8cPromRFC=this.ZV8cPromRFC=this.AV8cPromRFC="";this.O95DocEntNum=this.Z95DocEntNum=0;this.AV10pBITA_NUMERO=this.O48Tramcodn=this.Z48Tramcodn=this.O96PromRFC=this.Z96PromRFC="";this.AV11pDocEntNum=0;this.A45BITA_NUMERO=this.AV5LinkSelection="";this.A95DocEntNum=0;this.A48Tramcodn=this.A96PromRFC="";this.ServerEvents=["e131f2_client","e141f1_client"];this.VarControlMap.AV10pBITA_NUMERO={id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV11pDocEntNum=
{id:"vPDOCENTNUM",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);this.SetStandaloneVars()}gx00b0.prototype=new gx.GxObject;gx.setParentObj(new gx00b0);