gx.evt.autoSkip=!1;
function gx0170(){this.ServerClass="Gx0170";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV10pRBFFolioC=gx.fn.getControlValue("vPRBFFOLIOC");this.AV11pRFBLine=gx.fn.getIntegerValue("vPRFBLINE",",")};this.e132b2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e142b1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=
[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];this.GXLastCtrlId=38;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0170",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,33,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",
!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(376,34,"RBFFOLIOC","Folio","","RBFFolioC","char",0,"px",8,8,"left",null,[],376,"RBFFolioC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(396,35,"RFBLINE","Linea de RFB","","RFBLine","int",0,"px",6,6,"right",null,[],396,"RFBLine",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};
this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",gxvar:"AV6cBITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},
nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKRBFFOLIOC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCRBFFOLIOC",gxz:"ZV7cRBFFolioC",gxold:"OV7cRBFFolioC",gxvar:"AV7cRBFFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cRBFFolioC=a},v2z:function(a){gx.O.ZV7cRBFFolioC=a},v2c:function(){gx.fn.setControlValue("vCRBFFOLIOC",gx.O.AV7cRBFFolioC,0)},c2v:function(){gx.O.AV7cRBFFolioC=
this.val()},val:function(){return gx.fn.getControlValue("vCRBFFOLIOC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKRFBLINE",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRFBLINE",gxz:"ZV8cRFBLine",gxold:"OV8cRFBLine",gxvar:"AV8cRFBLine",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cRFBLine=gx.num.intval(a)},v2z:function(a){gx.O.ZV8cRFBLine=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCRFBLINE",gx.O.AV8cRFBLine,0)},c2v:function(){gx.O.AV8cRFBLine=this.val()},val:function(){return gx.fn.getIntegerValue("vCRFBLINE",",")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"GROUP2",grid:0};this.GXValidFnc[28]={fld:"TABLE3",grid:0};this.GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",
gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",
gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV14Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[33]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",
gx.fn.currentGridRowImpl(31),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(31))},nac:function(){return!1}};this.GXValidFnc[34]={lvl:2,type:"char",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFFOLIOC",gxz:"Z376RBFFolioC",gxold:"O376RBFFolioC",gxvar:"A376RBFFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",
v2v:function(a){gx.O.A376RBFFolioC=a},v2z:function(a){gx.O.Z376RBFFolioC=a},v2c:function(){gx.fn.setGridControlValue("RBFFOLIOC",gx.fn.currentGridRowImpl(31),gx.O.A376RBFFolioC,0)},c2v:function(){gx.O.A376RBFFolioC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFFOLIOC",gx.fn.currentGridRowImpl(31))},nac:function(){return!1}};this.GXValidFnc[35]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RFBLINE",
gxz:"Z396RFBLine",gxold:"O396RFBLine",gxvar:"A396RFBLine",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A396RFBLine=gx.num.intval(a)},v2z:function(a){gx.O.Z396RFBLine=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("RFBLINE",gx.fn.currentGridRowImpl(31),gx.O.A396RFBLine,0)},c2v:function(){gx.O.A396RFBLine=this.val()},val:function(){return gx.fn.getGridIntegerValue("RFBLINE",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[38]=
{fld:"TABLE4",grid:0};this.OV7cRBFFolioC=this.ZV7cRBFFolioC=this.AV7cRBFFolioC=this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.OV8cRFBLine=this.ZV8cRFBLine=this.AV8cRFBLine=0;this.O376RBFFolioC=this.Z376RBFFolioC=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection="";this.O396RFBLine=this.Z396RFBLine=0;this.AV10pRBFFolioC=this.AV9pBITA_NUMERO="";this.AV11pRFBLine=0;this.A376RBFFolioC=this.A45BITA_NUMERO=this.AV5LinkSelection="";this.A396RFBLine=
0;this.ServerEvents=["e132b2_client","e142b1_client"];this.VarControlMap.AV9pBITA_NUMERO={id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV10pRBFFolioC={id:"vPRBFFOLIOC",grid:0,type:"char"};this.VarControlMap.AV11pRFBLine={id:"vPRFBLINE",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);this.SetStandaloneVars()}gx0170.prototype=new gx.GxObject;gx.setParentObj(new gx0170);