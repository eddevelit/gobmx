gx.evt.autoSkip=!1;
function gx0110(){this.ServerClass="Gx0110";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pEspClaveN=gx.fn.getIntegerValue("vPESPCLAVEN",",");this.AV10pEspNumn=gx.fn.getIntegerValue("vPESPNUMN",",")};this.e13262_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14261_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,
27,28,32,33,34,35,38];this.GXLastCtrlId=38;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0110",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(362,33,"ESPCLAVEN","Especie","","EspClaveN","int",0,"px",6,6,"right",null,[],362,"EspClaveN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(365,
34,"ESPNUMN","Numero Especie Comun","","EspNumn","int",0,"px",4,4,"right",null,[],365,"EspNumn",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(360,35,"ESPNOMCOC","Nombre com\u00fan de la especie","Seleccionar","EspNomCoC","svchar",0,"px",80,80,"left",null,[],360,"EspNomCoC",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKESPCLAVEN",format:0,grid:0};
this.GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZ,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCESPCLAVEN",gxz:"ZV6cEspClaveN",gxold:"OV6cEspClaveN",gxvar:"AV6cEspClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cEspClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV6cEspClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCESPCLAVEN",gx.O.AV6cEspClaveN,0)},c2v:function(){gx.O.AV6cEspClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vCESPCLAVEN",
",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKESPNUMN",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCESPNUMN",gxz:"ZV7cEspNumn",gxold:"OV7cEspNumn",gxvar:"AV7cEspNumn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cEspNumn=gx.num.intval(a)},v2z:function(a){gx.O.ZV7cEspNumn=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCESPNUMN",
gx.O.AV7cEspNumn,0)},c2v:function(){gx.O.AV7cEspNumn=this.val()},val:function(){return gx.fn.getIntegerValue("vCESPNUMN",",")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKESPNOMCOC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCESPNOMCOC",gxz:"ZV8cEspNomCoC",gxold:"OV8cEspNomCoC",gxvar:"AV8cEspNomCoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cEspNomCoC=a},v2z:function(a){gx.O.ZV8cEspNomCoC=
a},v2c:function(){gx.fn.setControlValue("vCESPNOMCOC",gx.O.AV8cEspNomCoC,0)},c2v:function(){gx.O.AV8cEspNomCoC=this.val()},val:function(){return gx.fn.getControlValue("vCESPNOMCOC")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"GROUP2",grid:0};this.GXValidFnc[28]={fld:"TABLE3",grid:0};this.GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",
gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV13Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[33]={lvl:2,type:"int",len:5,dec:0,sign:!1,pic:"ZZ,ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ESPCLAVEN",gxz:"Z362EspClaveN",gxold:"O362EspClaveN",gxvar:"A362EspClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A362EspClaveN=gx.num.intval(a)},v2z:function(a){gx.O.Z362EspClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("ESPCLAVEN",
gx.fn.currentGridRowImpl(31),gx.O.A362EspClaveN,0)},c2v:function(){gx.O.A362EspClaveN=this.val()},val:function(){return gx.fn.getGridIntegerValue("ESPCLAVEN",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ESPNUMN",gxz:"Z365EspNumn",gxold:"O365EspNumn",gxvar:"A365EspNumn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A365EspNumn=gx.num.intval(a)},v2z:function(a){gx.O.Z365EspNumn=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("ESPNUMN",gx.fn.currentGridRowImpl(31),gx.O.A365EspNumn,0)},c2v:function(){gx.O.A365EspNumn=this.val()},val:function(){return gx.fn.getGridIntegerValue("ESPNUMN",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[35]={lvl:2,type:"svchar",len:80,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ESPNOMCOC",
gxz:"Z360EspNomCoC",gxold:"O360EspNomCoC",gxvar:"A360EspNomCoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A360EspNomCoC=a},v2z:function(a){gx.O.Z360EspNomCoC=a},v2c:function(){gx.fn.setGridControlValue("ESPNOMCOC",gx.fn.currentGridRowImpl(31),gx.O.A360EspNomCoC,0)},c2v:function(){gx.O.A360EspNomCoC=this.val()},val:function(){return gx.fn.getGridControlValue("ESPNOMCOC",gx.fn.currentGridRowImpl(31))},nac:function(){return!1}};this.GXValidFnc[38]=
{fld:"TABLE4",grid:0};this.OV7cEspNumn=this.ZV7cEspNumn=this.AV7cEspNumn=this.OV6cEspClaveN=this.ZV6cEspClaveN=this.AV6cEspClaveN=0;this.OV5LinkSelection=this.ZV5LinkSelection=this.OV8cEspNomCoC=this.ZV8cEspNomCoC=this.AV8cEspNomCoC="";this.O365EspNumn=this.Z365EspNumn=this.O362EspClaveN=this.Z362EspClaveN=0;this.O360EspNomCoC=this.Z360EspNomCoC="";this.AV10pEspNumn=this.AV9pEspClaveN=0;this.AV5LinkSelection="";this.A365EspNumn=this.A362EspClaveN=0;this.A360EspNomCoC="";this.ServerEvents=["e13262_client",
"e14261_client"];this.VarControlMap.AV9pEspClaveN={id:"vPESPCLAVEN",grid:0,type:"int"};this.VarControlMap.AV10pEspNumn={id:"vPESPNUMN",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);this.SetStandaloneVars()}gx0110.prototype=new gx.GxObject;gx.setParentObj(new gx0110);
