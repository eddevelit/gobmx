gx.evt.autoSkip=!1;
function gx0140(){this.ServerClass="Gx0140";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV10pEspClaveN=gx.fn.getIntegerValue("vPESPCLAVEN",",");this.AV11pEspFltTramC=gx.fn.getControlValue("vPESPFLTTRAMC");this.AV12pEspFltProcC=gx.fn.getControlValue("vPESPFLTPROCC")};this.e13282_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e14281_client=function(){this.executeServerEvent("CANCEL",!0)};
this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,44];this.GXLastCtrlId=44;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0140",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(362,38,"ESPCLAVEN","Especie","","EspClaveN","int",0,"px",6,6,"right",null,
[],362,"EspClaveN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(364,39,"ESPFLTTRAMC","Filtro de Tr\u00e1mite","","EspFltTramC","char",0,"px",2,2,"left",null,[],364,"EspFltTramC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(381,40,"ESPFLTPROCC","Filtro de Proceso / Pantalla","","EspFltProcC","char",0,"px",30,30,"left",null,[],381,"EspFltProcC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(479,41,"ESPFLTSTATN","Stat N","Seleccionar","EspFltStatN","int",0,"px",4,4,"right",null,[],479,"EspFltStatN",
!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKESPCLAVEN",format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZ,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCESPCLAVEN",gxz:"ZV6cEspClaveN",gxold:"OV6cEspClaveN",gxvar:"AV6cEspClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cEspClaveN=
gx.num.intval(a)},v2z:function(a){gx.O.ZV6cEspClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCESPCLAVEN",gx.O.AV6cEspClaveN,0)},c2v:function(){gx.O.AV6cEspClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("vCESPCLAVEN",",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKESPFLTTRAMC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCESPFLTTRAMC",gxz:"ZV7cEspFltTramC",gxold:"OV7cEspFltTramC",
gxvar:"AV7cEspFltTramC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cEspFltTramC=a},v2z:function(a){gx.O.ZV7cEspFltTramC=a},v2c:function(){gx.fn.setControlValue("vCESPFLTTRAMC",gx.O.AV7cEspFltTramC,0)},c2v:function(){gx.O.AV7cEspFltTramC=this.val()},val:function(){return gx.fn.getControlValue("vCESPFLTTRAMC")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKESPFLTPROCC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"char",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,
fnc:null,isvalid:null,fld:"vCESPFLTPROCC",gxz:"ZV8cEspFltProcC",gxold:"OV8cEspFltProcC",gxvar:"AV8cEspFltProcC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cEspFltProcC=a},v2z:function(a){gx.O.ZV8cEspFltProcC=a},v2c:function(){gx.fn.setControlValue("vCESPFLTPROCC",gx.O.AV8cEspFltProcC,0)},c2v:function(){gx.O.AV8cEspFltProcC=this.val()},val:function(){return gx.fn.getControlValue("vCESPFLTPROCC")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"TEXTBLOCKESPFLTSTATN",format:0,
grid:0};this.GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCESPFLTSTATN",gxz:"ZV9cEspFltStatN",gxold:"OV9cEspFltStatN",gxvar:"AV9cEspFltStatN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9cEspFltStatN=gx.num.intval(a)},v2z:function(a){gx.O.ZV9cEspFltStatN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCESPFLTSTATN",gx.O.AV9cEspFltStatN,0)},c2v:function(){gx.O.AV9cEspFltStatN=
this.val()},val:function(){return gx.fn.getIntegerValue("vCESPFLTSTATN",",")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"GROUP2",grid:0};this.GXValidFnc[33]={fld:"TABLE3",grid:0};this.GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=
a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(36))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(36))},gxvar_GXI:"AV15Linkselection_GXI",
nac:function(){return!1}};this.GXValidFnc[38]={lvl:2,type:"int",len:5,dec:0,sign:!1,pic:"ZZ,ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ESPCLAVEN",gxz:"Z362EspClaveN",gxold:"O362EspClaveN",gxvar:"A362EspClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A362EspClaveN=gx.num.intval(a)},v2z:function(a){gx.O.Z362EspClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("ESPCLAVEN",gx.fn.currentGridRowImpl(36),
gx.O.A362EspClaveN,0)},c2v:function(){gx.O.A362EspClaveN=this.val()},val:function(){return gx.fn.getGridIntegerValue("ESPCLAVEN",gx.fn.currentGridRowImpl(36),",")},nac:function(){return!1}};this.GXValidFnc[39]={lvl:2,type:"char",len:2,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ESPFLTTRAMC",gxz:"Z364EspFltTramC",gxold:"O364EspFltTramC",gxvar:"A364EspFltTramC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A364EspFltTramC=
a},v2z:function(a){gx.O.Z364EspFltTramC=a},v2c:function(){gx.fn.setGridControlValue("ESPFLTTRAMC",gx.fn.currentGridRowImpl(36),gx.O.A364EspFltTramC,0)},c2v:function(){gx.O.A364EspFltTramC=this.val()},val:function(){return gx.fn.getGridControlValue("ESPFLTTRAMC",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[40]={lvl:2,type:"char",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"ESPFLTPROCC",gxz:"Z381EspFltProcC",gxold:"O381EspFltProcC",
gxvar:"A381EspFltProcC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A381EspFltProcC=a},v2z:function(a){gx.O.Z381EspFltProcC=a},v2c:function(){gx.fn.setGridControlValue("ESPFLTPROCC",gx.fn.currentGridRowImpl(36),gx.O.A381EspFltProcC,0)},c2v:function(){gx.O.A381EspFltProcC=this.val()},val:function(){return gx.fn.getGridControlValue("ESPFLTPROCC",gx.fn.currentGridRowImpl(36))},nac:function(){return!1}};this.GXValidFnc[41]={lvl:2,type:"int",len:4,
dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ESPFLTSTATN",gxz:"Z479EspFltStatN",gxold:"O479EspFltStatN",gxvar:"A479EspFltStatN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A479EspFltStatN=gx.num.intval(a)},v2z:function(a){gx.O.Z479EspFltStatN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("ESPFLTSTATN",gx.fn.currentGridRowImpl(36),gx.O.A479EspFltStatN,0)},c2v:function(){gx.O.A479EspFltStatN=
this.val()},val:function(){return gx.fn.getGridIntegerValue("ESPFLTSTATN",gx.fn.currentGridRowImpl(36),",")},nac:function(){return!1}};this.GXValidFnc[44]={fld:"TABLE4",grid:0};this.OV6cEspClaveN=this.ZV6cEspClaveN=this.AV6cEspClaveN=0;this.OV8cEspFltProcC=this.ZV8cEspFltProcC=this.AV8cEspFltProcC=this.OV7cEspFltTramC=this.ZV7cEspFltTramC=this.AV7cEspFltTramC="";this.OV9cEspFltStatN=this.ZV9cEspFltStatN=this.AV9cEspFltStatN=0;this.OV5LinkSelection=this.ZV5LinkSelection="";this.O362EspClaveN=this.Z362EspClaveN=
0;this.O381EspFltProcC=this.Z381EspFltProcC=this.O364EspFltTramC=this.Z364EspFltTramC="";this.AV10pEspClaveN=this.O479EspFltStatN=this.Z479EspFltStatN=0;this.AV5LinkSelection=this.AV12pEspFltProcC=this.AV11pEspFltTramC="";this.A362EspClaveN=0;this.A381EspFltProcC=this.A364EspFltTramC="";this.A479EspFltStatN=0;this.ServerEvents=["e13282_client","e14281_client"];this.VarControlMap.AV10pEspClaveN={id:"vPESPCLAVEN",grid:0,type:"int"};this.VarControlMap.AV11pEspFltTramC={id:"vPESPFLTTRAMC",grid:0,type:"char"};
this.VarControlMap.AV12pEspFltProcC={id:"vPESPFLTPROCC",grid:0,type:"char"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);b.addRefreshingVar(this.GXValidFnc[29]);this.SetStandaloneVars()}gx0140.prototype=new gx.GxObject;gx.setParentObj(new gx0140);
