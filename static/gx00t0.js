gx.evt.autoSkip=!1;
function gx00t0(){this.ServerClass="Gx00T0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV8pBITA_NUMERO=gx.fn.getControlValue("vPBITA_NUMERO");this.AV9pRBFFolObC=gx.fn.getControlValue("vPRBFFOLOBC")};this.e131w2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e141w1_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,
28,29,32];this.GXLastCtrlId=32;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00t0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(45,28,"BITA_NUMERO","Bit\u00e1cora","","BITA_NUMERO","svchar",0,"px",25,25,"left",null,[],45,"BITA_NUMERO",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(388,
29,"RBFFOLOBC","Folio","","RBFFolObC","char",0,"px",8,8,"left",null,[],388,"RBFFolObC",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKBITA_NUMERO",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCBITA_NUMERO",gxz:"ZV6cBITA_NUMERO",gxold:"OV6cBITA_NUMERO",gxvar:"AV6cBITA_NUMERO",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cBITA_NUMERO=a},v2z:function(a){gx.O.ZV6cBITA_NUMERO=a},v2c:function(){gx.fn.setControlValue("vCBITA_NUMERO",gx.O.AV6cBITA_NUMERO,0)},c2v:function(){gx.O.AV6cBITA_NUMERO=this.val()},val:function(){return gx.fn.getControlValue("vCBITA_NUMERO")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKRBFFOLOBC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"vCRBFFOLOBC",gxz:"ZV7cRBFFolObC",gxold:"OV7cRBFFolObC",gxvar:"AV7cRBFFolObC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cRBFFolObC=a},v2z:function(a){gx.O.ZV7cRBFFolObC=a},v2c:function(){gx.fn.setControlValue("vCRBFFOLOBC",gx.O.AV7cRBFFolObC,0)},c2v:function(){gx.O.AV7cRBFFolObC=this.val()},val:function(){return gx.fn.getControlValue("vCRBFFOLOBC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"GROUP2",grid:0};this.GXValidFnc[23]={fld:"TABLE3",grid:0};this.GXValidFnc[27]=
{lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=
this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(26))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(26))},gxvar_GXI:"AV12Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[28]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"BITA_NUMERO",gxz:"Z45BITA_NUMERO",gxold:"O45BITA_NUMERO",
gxvar:"A45BITA_NUMERO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A45BITA_NUMERO=a},v2z:function(a){gx.O.Z45BITA_NUMERO=a},v2c:function(){gx.fn.setGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(26),gx.O.A45BITA_NUMERO,0)},c2v:function(){gx.O.A45BITA_NUMERO=this.val()},val:function(){return gx.fn.getGridControlValue("BITA_NUMERO",gx.fn.currentGridRowImpl(26))},nac:function(){return!1}};this.GXValidFnc[29]={lvl:2,type:"char",len:8,dec:0,
sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"RBFFOLOBC",gxz:"Z388RBFFolObC",gxold:"O388RBFFolObC",gxvar:"A388RBFFolObC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A388RBFFolObC=a},v2z:function(a){gx.O.Z388RBFFolObC=a},v2c:function(){gx.fn.setGridControlValue("RBFFOLOBC",gx.fn.currentGridRowImpl(26),gx.O.A388RBFFolObC,0)},c2v:function(){gx.O.A388RBFFolObC=this.val()},val:function(){return gx.fn.getGridControlValue("RBFFOLOBC",
gx.fn.currentGridRowImpl(26))},nac:function(){return!1}};this.GXValidFnc[32]={fld:"TABLE4",grid:0};this.A388RBFFolObC=this.A45BITA_NUMERO=this.AV5LinkSelection=this.AV9pRBFFolObC=this.AV8pBITA_NUMERO=this.O388RBFFolObC=this.Z388RBFFolObC=this.O45BITA_NUMERO=this.Z45BITA_NUMERO=this.OV5LinkSelection=this.ZV5LinkSelection=this.OV7cRBFFolObC=this.ZV7cRBFFolObC=this.AV7cRBFFolObC=this.OV6cBITA_NUMERO=this.ZV6cBITA_NUMERO=this.AV6cBITA_NUMERO="";this.ServerEvents=["e131w2_client","e141w1_client"];this.VarControlMap.AV8pBITA_NUMERO=
{id:"vPBITA_NUMERO",grid:0,type:"svchar"};this.VarControlMap.AV9pRBFFolObC={id:"vPRBFFOLOBC",grid:0,type:"char"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);this.SetStandaloneVars()}gx00t0.prototype=new gx.GxObject;gx.setParentObj(new gx00t0);
