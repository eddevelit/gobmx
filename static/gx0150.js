gx.evt.autoSkip=!1;
function gx0150(){this.ServerClass="Gx0150";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV14pRBFFolioC=gx.fn.getControlValue("vPRBFFOLIOC")};this.e13292_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14291_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,
27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];this.GXLastCtrlId=61;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0150",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,53,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",
!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(376,54,"RBFFOLIOC","Folio","","RBFFolioC","char",0,"px",8,8,"left",null,[],376,"RBFFolioC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(480,55,"RBFDURACN","Duracion","Seleccionar","RBFDuracN","int",0,"px",2,2,"right",null,[],480,"RBFDuracN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(481,56,"RBFTIPOC","Tipo","","RBFTipoC","char",0,"px",20,20,"left",null,[],481,"RBFTipoC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(483,57,"RBFCOLONC","Colonia","",
"RBFColonC","svchar",0,"px",40,40,"left",null,[],483,"RBFColonC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(485,58,"RBFCODPLC","Postal","","RBFCodPlC","char",0,"px",5,5,"left",null,[],485,"RBFCodPlC",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",
ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",gxvar:"AV6cBITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKRBFFOLIOC",
format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCRBFFOLIOC",gxz:"ZV7cRBFFolioC",gxold:"OV7cRBFFolioC",gxvar:"AV7cRBFFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cRBFFolioC=a},v2z:function(a){gx.O.ZV7cRBFFolioC=a},v2c:function(){gx.fn.setControlValue("vCRBFFOLIOC",gx.O.AV7cRBFFolioC,0)},c2v:function(){gx.O.AV7cRBFFolioC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFFOLIOC")},
nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKRBFDURACN",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRBFDURACN",gxz:"ZV8cRBFDuracN",gxold:"OV8cRBFDuracN",gxvar:"AV8cRBFDuracN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cRBFDuracN=gx.num.intval(a)},v2z:function(a){gx.O.ZV8cRBFDuracN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCRBFDURACN",
gx.O.AV8cRBFDuracN,0)},c2v:function(){gx.O.AV8cRBFDuracN=this.val()},val:function(){return gx.fn.getIntegerValue("vCRBFDURACN",",")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"TEXTBLOCKRBFTIPOC",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCRBFTIPOC",gxz:"ZV9cRBFTipoC",gxold:"OV9cRBFTipoC",gxvar:"AV9cRBFTipoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9cRBFTipoC=a},v2z:function(a){gx.O.ZV9cRBFTipoC=
a},v2c:function(){gx.fn.setControlValue("vCRBFTIPOC",gx.O.AV9cRBFTipoC,0)},c2v:function(){gx.O.AV9cRBFTipoC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFTIPOC")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"TEXTBLOCKRBFCALLEC",format:0,grid:0};this.GXValidFnc[34]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCRBFCALLEC",gxz:"ZV10cRBFCalleC",gxold:"OV10cRBFCalleC",gxvar:"AV10cRBFCalleC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
v2v:function(a){gx.O.AV10cRBFCalleC=a},v2z:function(a){gx.O.ZV10cRBFCalleC=a},v2c:function(){gx.fn.setControlValue("vCRBFCALLEC",gx.O.AV10cRBFCalleC,0)},c2v:function(){gx.O.AV10cRBFCalleC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFCALLEC")},nac:function(){return!1}};this.GXValidFnc[37]={fld:"TEXTBLOCKRBFCOLONC",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCRBFCOLONC",gxz:"ZV11cRBFColonC",gxold:"OV11cRBFColonC",
gxvar:"AV11cRBFColonC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV11cRBFColonC=a},v2z:function(a){gx.O.ZV11cRBFColonC=a},v2c:function(){gx.fn.setControlValue("vCRBFCOLONC",gx.O.AV11cRBFColonC,0)},c2v:function(){gx.O.AV11cRBFColonC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFCOLONC")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKRBFLOCALC",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,fld:"vCRBFLOCALC",gxz:"ZV12cRBFLocalC",gxold:"OV12cRBFLocalC",gxvar:"AV12cRBFLocalC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV12cRBFLocalC=a},v2z:function(a){gx.O.ZV12cRBFLocalC=a},v2c:function(){gx.fn.setControlValue("vCRBFLOCALC",gx.O.AV12cRBFLocalC,0)},c2v:function(){gx.O.AV12cRBFLocalC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFLOCALC")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"GROUP2",grid:0};this.GXValidFnc[48]={fld:"TABLE3",
grid:0};this.GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},
c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(51))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV17Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[53]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",
gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(51),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[54]=
{lvl:2,type:"char",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFFOLIOC",gxz:"Z376RBFFolioC",gxold:"O376RBFFolioC",gxvar:"A376RBFFolioC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A376RBFFolioC=a},v2z:function(a){gx.O.Z376RBFFolioC=a},v2c:function(){gx.fn.setGridControlValue("RBFFOLIOC",gx.fn.currentGridRowImpl(51),gx.O.A376RBFFolioC,0)},c2v:function(){gx.O.A376RBFFolioC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFFOLIOC",
gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RBFDURACN",gxz:"Z480RBFDuracN",gxold:"O480RBFDuracN",gxvar:"A480RBFDuracN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A480RBFDuracN=gx.num.intval(a)},v2z:function(a){gx.O.Z480RBFDuracN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("RBFDURACN",
gx.fn.currentGridRowImpl(51),gx.O.A480RBFDuracN,0)},c2v:function(){gx.O.A480RBFDuracN=this.val()},val:function(){return gx.fn.getGridIntegerValue("RBFDURACN",gx.fn.currentGridRowImpl(51),",")},nac:function(){return!1}};this.GXValidFnc[56]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFTIPOC",gxz:"Z481RBFTipoC",gxold:"O481RBFTipoC",gxvar:"A481RBFTipoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",
v2v:function(a){gx.O.A481RBFTipoC=a},v2z:function(a){gx.O.Z481RBFTipoC=a},v2c:function(){gx.fn.setGridControlValue("RBFTIPOC",gx.fn.currentGridRowImpl(51),gx.O.A481RBFTipoC,0)},c2v:function(){gx.O.A481RBFTipoC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFTIPOC",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFCOLONC",gxz:"Z483RBFColonC",
gxold:"O483RBFColonC",gxvar:"A483RBFColonC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A483RBFColonC=a},v2z:function(a){gx.O.Z483RBFColonC=a},v2c:function(){gx.fn.setGridControlValue("RBFCOLONC",gx.fn.currentGridRowImpl(51),gx.O.A483RBFColonC,0)},c2v:function(){gx.O.A483RBFColonC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFCOLONC",gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[58]={lvl:2,type:"char",
len:5,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFCODPLC",gxz:"Z485RBFCodPlC",gxold:"O485RBFCodPlC",gxvar:"A485RBFCodPlC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A485RBFCodPlC=a},v2z:function(a){gx.O.Z485RBFCodPlC=a},v2c:function(){gx.fn.setGridControlValue("RBFCODPLC",gx.fn.currentGridRowImpl(51),gx.O.A485RBFCodPlC,0)},c2v:function(){gx.O.A485RBFCodPlC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFCODPLC",
gx.fn.currentGridRowImpl(51))},nac:function(){return!1}};this.GXValidFnc[61]={fld:"TABLE4",grid:0};this.OV7cRBFFolioC=this.ZV7cRBFFolioC=this.AV7cRBFFolioC=this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.OV8cRBFDuracN=this.ZV8cRBFDuracN=this.AV8cRBFDuracN=0;this.O376RBFFolioC=this.Z376RBFFolioC=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection=this.OV12cRBFLocalC=this.ZV12cRBFLocalC=this.AV12cRBFLocalC=this.OV11cRBFColonC=this.ZV11cRBFColonC=
this.AV11cRBFColonC=this.OV10cRBFCalleC=this.ZV10cRBFCalleC=this.AV10cRBFCalleC=this.OV9cRBFTipoC=this.ZV9cRBFTipoC=this.AV9cRBFTipoC="";this.O480RBFDuracN=this.Z480RBFDuracN=0;this.A376RBFFolioC=this.A45BITA_NUMERO=this.AV5LinkSelection=this.A482RBFCalleC=this.A484RBFLocalC=this.AV14pRBFFolioC=this.AV13pBITA_NUMERO=this.O485RBFCodPlC=this.Z485RBFCodPlC=this.O483RBFColonC=this.Z483RBFColonC=this.O481RBFTipoC=this.Z481RBFTipoC="";this.A480RBFDuracN=0;this.A485RBFCodPlC=this.A483RBFColonC=this.A481RBFTipoC=
"";this.ServerEvents=["e13292_client","e14291_client"];this.VarControlMap.AV13pBITA_NUMERO={id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV14pRBFFolioC={id:"vPRBFFOLIOC",grid:0,type:"char"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);b.addRefreshingVar(this.GXValidFnc[34]);b.addRefreshingVar(this.GXValidFnc[39]);b.addRefreshingVar(this.GXValidFnc[44]);this.SetStandaloneVars()}
gx0150.prototype=new gx.GxObject;gx.setParentObj(new gx0150);