gx.evt.autoSkip=!1;
function gx0120(){this.ServerClass="Gx0120";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pGenClaveN=gx.fn.getIntegerValue("vPGENCLAVEN",",")};this.e13252_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14251_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];this.GXLastCtrlId=38;var b=this.Grid1Container=
new gx.grid.grid(this,2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0120",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(363,33,"GENCLAVEN","Identificador del tipo de genero","","GenClaveN","int",0,"px",5,5,"right",null,[],363,"GenClaveN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(361,34,"GENDESCRC","Descripci\u00f3n de tipos de genero",
"Seleccionar","GenDescrC","svchar",0,"px",80,80,"left",null,[],361,"GenDescrC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(473,35,"GENMADERC","Mader C","","GenMaderC","int",0,"px",4,4,"right",null,[],473,"GenMaderC",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKGENCLAVEN",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:!1,
pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGENCLAVEN",gxz:"ZV6cGenClaveN",gxold:"OV6cGenClaveN",gxvar:"AV6cGenClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cGenClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV6cGenClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCGENCLAVEN",gx.O.AV6cGenClaveN,0)},c2v:function(){gx.O.AV6cGenClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vCGENCLAVEN",",")},
nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKGENDESCRC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCGENDESCRC",gxz:"ZV7cGenDescrC",gxold:"OV7cGenDescrC",gxvar:"AV7cGenDescrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cGenDescrC=a},v2z:function(a){gx.O.ZV7cGenDescrC=a},v2c:function(){gx.fn.setControlValue("vCGENDESCRC",gx.O.AV7cGenDescrC,0)},c2v:function(){gx.O.AV7cGenDescrC=
this.val()},val:function(){return gx.fn.getControlValue("vCGENDESCRC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKGENMADERC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGENMADERC",gxz:"ZV8cGenMaderC",gxold:"OV8cGenMaderC",gxvar:"AV8cGenMaderC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cGenMaderC=gx.num.intval(a)},v2z:function(a){gx.O.ZV8cGenMaderC=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCGENMADERC",gx.O.AV8cGenMaderC,0)},c2v:function(){gx.O.AV8cGenMaderC=this.val()},val:function(){return gx.fn.getIntegerValue("vCGENMADERC",",")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"GROUP2",grid:0};this.GXValidFnc[28]={fld:"TABLE3",grid:0};this.GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",
gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(31))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",
gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV12Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[33]={lvl:2,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GENCLAVEN",gxz:"Z363GenClaveN",gxold:"O363GenClaveN",gxvar:"A363GenClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A363GenClaveN=gx.num.intval(a)},v2z:function(a){gx.O.Z363GenClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GENCLAVEN",
gx.fn.currentGridRowImpl(31),gx.O.A363GenClaveN,0)},c2v:function(){gx.O.A363GenClaveN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GENCLAVEN",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};this.GXValidFnc[34]={lvl:2,type:"svchar",len:80,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GENDESCRC",gxz:"Z361GenDescrC",gxold:"O361GenDescrC",gxvar:"A361GenDescrC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",
v2v:function(a){gx.O.A361GenDescrC=a},v2z:function(a){gx.O.Z361GenDescrC=a},v2c:function(){gx.fn.setGridControlValue("GENDESCRC",gx.fn.currentGridRowImpl(31),gx.O.A361GenDescrC,0)},c2v:function(){gx.O.A361GenDescrC=this.val()},val:function(){return gx.fn.getGridControlValue("GENDESCRC",gx.fn.currentGridRowImpl(31))},nac:function(){return!1}};this.GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GENMADERC",
gxz:"Z473GenMaderC",gxold:"O473GenMaderC",gxvar:"A473GenMaderC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A473GenMaderC=gx.num.intval(a)},v2z:function(a){gx.O.Z473GenMaderC=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GENMADERC",gx.fn.currentGridRowImpl(31),gx.O.A473GenMaderC,0)},c2v:function(){gx.O.A473GenMaderC=this.val()},val:function(){return gx.fn.getGridIntegerValue("GENMADERC",gx.fn.currentGridRowImpl(31),",")},nac:function(){return!1}};
this.GXValidFnc[38]={fld:"TABLE4",grid:0};this.OV6cGenClaveN=this.ZV6cGenClaveN=this.AV6cGenClaveN=0;this.OV7cGenDescrC=this.ZV7cGenDescrC=this.AV7cGenDescrC="";this.OV8cGenMaderC=this.ZV8cGenMaderC=this.AV8cGenMaderC=0;this.OV5LinkSelection=this.ZV5LinkSelection="";this.O363GenClaveN=this.Z363GenClaveN=0;this.O361GenDescrC=this.Z361GenDescrC="";this.AV9pGenClaveN=this.O473GenMaderC=this.Z473GenMaderC=0;this.AV5LinkSelection="";this.A363GenClaveN=0;this.A361GenDescrC="";this.A473GenMaderC=0;this.ServerEvents=
["e13252_client","e14251_client"];this.VarControlMap.AV9pGenClaveN={id:"vPGENCLAVEN",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);this.SetStandaloneVars()}gx0120.prototype=new gx.GxObject;gx.setParentObj(new gx0120);