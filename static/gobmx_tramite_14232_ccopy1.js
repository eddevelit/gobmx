gx.evt.autoSkip=!1;
function gobmx_tramite_14232_ccopy1(){this.ServerClass="gobmx_tramite_14232_CCopy1";this.PackageName="";this.setObjectType("web");this.skipOnEnter=this.hasEnterEvent=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Valid_Gobmx_especiefolio=function(){try{if(0===gx.fn.currentGridRowImpl(17))return!0;var a=gx.util.balloon.getNew("GOBMX_ESPECIEFOLIO",gx.fn.currentGridRowImpl(17));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};
this.Validv_Gobmx_especie_espclaven=function(){try{var a=gx.util.balloon.getNew("vGOBMX_ESPECIE_ESPCLAVEN");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Validv_Foliosinatec=function(){try{var a=gx.util.balloon.getNew("vFOLIOSINATEC");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.e112t2_client=function(){this.executeServerEvent("'AGREGARESPECIE'",!1)};this.e122t2_client=function(){this.executeServerEvent("'AGREGARMATERIAL'",!1)};
this.e132t2_client=function(){this.executeServerEvent("'SIGUIENTE'",!1)};this.e142t2_client=function(){this.executeServerEvent("'REGRESAR'",!1)};this.e202t2_client=function(a){this.executeServerEvent("VEDITAR.CLICK",!0,a)};this.e212t2_client=function(a){this.executeServerEvent("VBORRAR.CLICK",!0,a)};this.e152t2_client=function(a){this.executeServerEvent("VEDITAR1.CLICK",!0,a)};this.e162t2_client=function(a){this.executeServerEvent("VBORRAR1.CLICK",!0,a)};this.e222t2_client=function(a){this.executeServerEvent("ENTER",
!0,a)};this.e232t2_client=function(a){this.executeServerEvent("CANCEL",!0,a)};this.GXValidFnc=[];this.GXCtrlIds=[4,7,13,18,19,20,21,22,23,24,25,26,27,31,36,37,38,39,40,43,48];this.GXLastCtrlId=48;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gobmx_tramite_14232_ccopy1",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Nueva fila",!1,!1,!1,null,null,!1,"");b.addSingleLineEdit("Editar",18,"vEDITAR","","","Editar","svchar",17,"px",
100,80,"left","e202t2_client",[],"Editar","Editar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit("Borrar",19,"vBORRAR","","","Borrar","svchar",17,"px",100,80,"left","e212t2_client",[],"Borrar","Borrar",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(454,20,"GOBMX_ESPECIEFOLIO","Folio Sinatec","","GobMX_EspecieFolio","int",0,"px",18,18,"right",null,[],454,"GobMX_EspecieFolio",!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(519,21,"GOBMX_ESPECIE_ID","Gob MX_Especie_Id","","GobMX_Especie_Id","int",0,"px",
8,8,"right",null,[],519,"GobMX_Especie_Id",!1,0,!1,!1,"Attribute",1);b.addComboBox("Gobmx_especie_espclaven",22,"vGOBMX_ESPECIE_ESPCLAVEN","Especie","GobMX_Especie_EspClaveN","int",null,1,!0,!1,0,"px");b.addComboBox("Gobmx_especie_espnumn",23,"vGOBMX_ESPECIE_ESPNUMN","Nombre Comun","GobMX_Especie_EspNumn","int",null,0,!0,!1,0,"px");b.addComboBox("Gobmx_especie_rbfprednuc",24,"vGOBMX_ESPECIE_RBFPREDNUC","Predio","GobMX_Especie_RBFPredNuC","char",null,0,!0,!1,0,"px");b.addComboBox(500,25,"GOBMX_ESPECIE_RECURSOSID",
"Recurso","GobMX_Especie_RecursosId","int",null,0,!0,!1,0,"px");b.addSingleLineEdit(399,26,"GOBMX_ESPECIE_RBFCANTIN","Cantidad","","GobMX_Especie_RBFCantiN","decimal",0,"px",14,14,"right",null,[],399,"GobMX_Especie_RBFCantiN",!0,3,!1,!1,"Attribute",1);b.addComboBox(400,27,"GOBMX_ESPECIE_UNIMEDIDN","Unidad de Medida","GobMX_Especie_UniMedIdn","int",null,0,!0,!1,0,"px");this.setGrid(b);var c=this.Grid2Container=new gx.grid.grid(this,7,"WbpLvl7",35,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,
"gobmx_tramite_14232_ccopy1",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Nueva fila",!1,!1,!1,null,null,!1,"");c.addSingleLineEdit("Editar1",36,"vEDITAR1","","","Editar1","svchar",17,"px",100,80,"left","e152t2_client",[],"Editar1","Editar1",!0,0,!1,!1,"Attribute",1);c.addSingleLineEdit("Borrar1",37,"vBORRAR1","","","Borrar1","svchar",17,"px",100,80,"left","e162t2_client",[],"Borrar1","Borrar1",!0,0,!1,!1,"Attribute",1);c.addSingleLineEdit(497,38,"GOBMX_MATERIALFOLIO","Folio Sinatec","","GobMX_MaterialFolio",
"int",0,"px",18,18,"right",null,[],497,"GobMX_MaterialFolio",!1,0,!1,!1,"Attribute",1);c.addSingleLineEdit(520,39,"GOBMX_MATERIAL_ID","Gob MX_Material_Id","","GobMX_Material_Id","int",0,"px",4,4,"right",null,[],520,"GobMX_Material_Id",!1,0,!1,!1,"Attribute",1);c.addSingleLineEdit(498,40,"GOBMX_MATERIAL_RBFMATREC","Material de Recolecci\u00f3n","","GobMX_Material_RBFMatReC","svchar",0,"px",250,80,"left",null,[],498,"GobMX_Material_RBFMatReC",!0,0,!1,!1,"Attribute",1);this.setGrid(c);this.GXValidFnc[4]=
{fld:"BREADCRUMBS",format:1,grid:0};this.GXValidFnc[7]={fld:"LABELTITULOPANTALLAUNO",format:1,grid:0};this.GXValidFnc[13]={fld:"LEBELTITULOGRID1",format:1,grid:0};this.GXValidFnc[18]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vEDITAR",gxz:"ZV7Editar",gxold:"OV7Editar",gxvar:"AV7Editar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV7Editar=a},v2z:function(a){gx.O.ZV7Editar=
a},v2c:function(){gx.fn.setGridControlValue("vEDITAR",gx.fn.currentGridRowImpl(17),gx.O.AV7Editar,1)},c2v:function(){gx.O.AV7Editar=this.val()},val:function(){return gx.fn.getGridControlValue("vEDITAR",gx.fn.currentGridRowImpl(17))},nac:function(){return!1}};this.GXValidFnc[19]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vBORRAR",gxz:"ZV5Borrar",gxold:"OV5Borrar",gxvar:"AV5Borrar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",
inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV5Borrar=a},v2z:function(a){gx.O.ZV5Borrar=a},v2c:function(){gx.fn.setGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(17),gx.O.AV5Borrar,1)},c2v:function(){gx.O.AV5Borrar=this.val()},val:function(){return gx.fn.getGridControlValue("vBORRAR",gx.fn.currentGridRowImpl(17))},nac:function(){return!1}};this.GXValidFnc[20]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:this.Valid_Gobmx_especiefolio,
isvalid:null,rgrid:[],fld:"GOBMX_ESPECIEFOLIO",gxz:"Z454GobMX_EspecieFolio",gxold:"O454GobMX_EspecieFolio",gxvar:"A454GobMX_EspecieFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A454GobMX_EspecieFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z454GobMX_EspecieFolio=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_ESPECIEFOLIO",gx.fn.currentGridRowImpl(17),gx.O.A454GobMX_EspecieFolio,0)},c2v:function(){gx.O.A454GobMX_EspecieFolio=this.val()},
val:function(){return gx.fn.getGridIntegerValue("GOBMX_ESPECIEFOLIO",gx.fn.currentGridRowImpl(17),",")},nac:function(){return!1}};this.GXValidFnc[21]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_ESPECIE_ID",gxz:"Z519GobMX_Especie_Id",gxold:"O519GobMX_Especie_Id",gxvar:"A519GobMX_Especie_Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A519GobMX_Especie_Id=gx.num.intval(a)},
v2z:function(a){gx.O.Z519GobMX_Especie_Id=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_ESPECIE_ID",gx.fn.currentGridRowImpl(17),gx.O.A519GobMX_Especie_Id,0)},c2v:function(){gx.O.A519GobMX_Especie_Id=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_ESPECIE_ID",gx.fn.currentGridRowImpl(17),",")},nac:function(){return!1}};this.GXValidFnc[22]={lvl:2,type:"int",len:5,dec:0,sign:!1,pic:"99999",ro:0,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:this.Validv_Gobmx_especie_espclaven,
isvalid:null,rgrid:[],fld:"vGOBMX_ESPECIE_ESPCLAVEN",gxz:"ZV15GobMX_Especie_EspClaveN",gxold:"OV15GobMX_Especie_EspClaveN",gxvar:"AV15GobMX_Especie_EspClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.AV15GobMX_Especie_EspClaveN=gx.num.intval(a)},v2z:function(a){gx.O.ZV15GobMX_Especie_EspClaveN=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("vGOBMX_ESPECIE_ESPCLAVEN",gx.fn.currentGridRowImpl(17),gx.O.AV15GobMX_Especie_EspClaveN)},c2v:function(){gx.O.AV15GobMX_Especie_EspClaveN=
this.val()},val:function(){return gx.fn.getGridIntegerValue("vGOBMX_ESPECIE_ESPCLAVEN",gx.fn.currentGridRowImpl(17),",")},nac:function(){return!1}};this.GXValidFnc[23]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vGOBMX_ESPECIE_ESPNUMN",gxz:"ZV14GobMX_Especie_EspNumn",gxold:"OV14GobMX_Especie_EspNumn",gxvar:"AV14GobMX_Especie_EspNumn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.AV14GobMX_Especie_EspNumn=
gx.num.intval(a)},v2z:function(a){gx.O.ZV14GobMX_Especie_EspNumn=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("vGOBMX_ESPECIE_ESPNUMN",gx.fn.currentGridRowImpl(17),gx.O.AV14GobMX_Especie_EspNumn)},c2v:function(){gx.O.AV14GobMX_Especie_EspNumn=this.val()},val:function(){return gx.fn.getGridIntegerValue("vGOBMX_ESPECIE_ESPNUMN",gx.fn.currentGridRowImpl(17),",")},nac:function(){return!1}};this.GXValidFnc[24]={lvl:2,type:"char",len:8,dec:0,sign:!1,ro:0,isacc:0,grid:17,gxgrid:this.Grid1Container,
fnc:null,isvalid:null,fld:"vGOBMX_ESPECIE_RBFPREDNUC",gxz:"ZV11GobMX_Especie_RBFPredNuC",gxold:"OV11GobMX_Especie_RBFPredNuC",gxvar:"AV11GobMX_Especie_RBFPredNuC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.AV11GobMX_Especie_RBFPredNuC=a},v2z:function(a){gx.O.ZV11GobMX_Especie_RBFPredNuC=a},v2c:function(){gx.fn.setGridComboBoxValue("vGOBMX_ESPECIE_RBFPREDNUC",gx.fn.currentGridRowImpl(17),gx.O.AV11GobMX_Especie_RBFPredNuC)},c2v:function(){gx.O.AV11GobMX_Especie_RBFPredNuC=
this.val()},val:function(){return gx.fn.getGridControlValue("vGOBMX_ESPECIE_RBFPREDNUC",gx.fn.currentGridRowImpl(17))},nac:function(){return!1}};this.GXValidFnc[25]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_ESPECIE_RECURSOSID",gxz:"Z500GobMX_Especie_RecursosId",gxold:"O500GobMX_Especie_RecursosId",gxvar:"A500GobMX_Especie_RecursosId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(a){gx.O.A500GobMX_Especie_RecursosId=
gx.num.intval(a)},v2z:function(a){gx.O.Z500GobMX_Especie_RecursosId=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_ESPECIE_RECURSOSID",gx.fn.currentGridRowImpl(17),gx.O.A500GobMX_Especie_RecursosId)},c2v:function(){gx.O.A500GobMX_Especie_RecursosId=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_ESPECIE_RECURSOSID",gx.fn.currentGridRowImpl(17),",")},nac:function(){return!1}};this.GXValidFnc[26]={lvl:2,type:"decimal",len:12,dec:3,sign:!1,pic:"ZZ,ZZZ,ZZ9.999",
ro:1,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_ESPECIE_RBFCANTIN",gxz:"Z399GobMX_Especie_RBFCantiN",gxold:"O399GobMX_Especie_RBFCantiN",gxvar:"A399GobMX_Especie_RBFCantiN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A399GobMX_Especie_RBFCantiN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z399GobMX_Especie_RBFCantiN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_ESPECIE_RBFCANTIN",gx.fn.currentGridRowImpl(17),
gx.O.A399GobMX_Especie_RBFCantiN,3,".")},c2v:function(){gx.O.A399GobMX_Especie_RBFCantiN=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_ESPECIE_RBFCANTIN",gx.fn.currentGridRowImpl(17),",",".")},nac:function(){return!1}};this.GXValidFnc[27]={lvl:2,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_ESPECIE_UNIMEDIDN",gxz:"Z400GobMX_Especie_UniMedIdn",gxold:"O400GobMX_Especie_UniMedIdn",gxvar:"A400GobMX_Especie_UniMedIdn",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:"text",v2v:function(a){gx.O.A400GobMX_Especie_UniMedIdn=gx.num.intval(a)},v2z:function(a){gx.O.Z400GobMX_Especie_UniMedIdn=gx.num.intval(a)},v2c:function(){gx.fn.setGridComboBoxValue("GOBMX_ESPECIE_UNIMEDIDN",gx.fn.currentGridRowImpl(17),gx.O.A400GobMX_Especie_UniMedIdn)},c2v:function(){gx.O.A400GobMX_Especie_UniMedIdn=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_ESPECIE_UNIMEDIDN",gx.fn.currentGridRowImpl(17),",")},
nac:function(){return!1}};this.GXValidFnc[31]={fld:"LEBELTITULOGRID2",format:1,grid:0};this.GXValidFnc[36]={lvl:7,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.Grid2Container,fnc:null,isvalid:null,fld:"vEDITAR1",gxz:"ZV8Editar1",gxold:"OV8Editar1",gxvar:"AV8Editar1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV8Editar1=a},v2z:function(a){gx.O.ZV8Editar1=a},v2c:function(){gx.fn.setGridControlValue("vEDITAR1",gx.fn.currentGridRowImpl(35),
gx.O.AV8Editar1,1)},c2v:function(){gx.O.AV8Editar1=this.val()},val:function(){return gx.fn.getGridControlValue("vEDITAR1",gx.fn.currentGridRowImpl(35))},nac:function(){return!1}};this.GXValidFnc[37]={lvl:7,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.Grid2Container,fnc:null,isvalid:null,fld:"vBORRAR1",gxz:"ZV6Borrar1",gxold:"OV6Borrar1",gxvar:"AV6Borrar1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.AV6Borrar1=a},v2z:function(a){gx.O.ZV6Borrar1=
a},v2c:function(){gx.fn.setGridControlValue("vBORRAR1",gx.fn.currentGridRowImpl(35),gx.O.AV6Borrar1,1)},c2v:function(){gx.O.AV6Borrar1=this.val()},val:function(){return gx.fn.getGridControlValue("vBORRAR1",gx.fn.currentGridRowImpl(35))},nac:function(){return!1}};this.GXValidFnc[38]={lvl:7,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_MATERIALFOLIO",gxz:"Z497GobMX_MaterialFolio",gxold:"O497GobMX_MaterialFolio",
gxvar:"A497GobMX_MaterialFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A497GobMX_MaterialFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z497GobMX_MaterialFolio=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_MATERIALFOLIO",gx.fn.currentGridRowImpl(35),gx.O.A497GobMX_MaterialFolio,0)},c2v:function(){gx.O.A497GobMX_MaterialFolio=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_MATERIALFOLIO",gx.fn.currentGridRowImpl(35),",")},
nac:function(){return!1}};this.GXValidFnc[39]={lvl:7,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_MATERIAL_ID",gxz:"Z520GobMX_Material_Id",gxold:"O520GobMX_Material_Id",gxvar:"A520GobMX_Material_Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A520GobMX_Material_Id=gx.num.intval(a)},v2z:function(a){gx.O.Z520GobMX_Material_Id=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_MATERIAL_ID",
gx.fn.currentGridRowImpl(35),gx.O.A520GobMX_Material_Id,0)},c2v:function(){gx.O.A520GobMX_Material_Id=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_MATERIAL_ID",gx.fn.currentGridRowImpl(35),",")},nac:function(){return!1}};this.GXValidFnc[40]={lvl:7,type:"svchar",len:250,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid2Container,fnc:null,isvalid:null,fld:"GOBMX_MATERIAL_RBFMATREC",gxz:"Z498GobMX_Material_RBFMatReC",gxold:"O498GobMX_Material_RBFMatReC",gxvar:"A498GobMX_Material_RBFMatReC",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A498GobMX_Material_RBFMatReC=a},v2z:function(a){gx.O.Z498GobMX_Material_RBFMatReC=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_MATERIAL_RBFMATREC",gx.fn.currentGridRowImpl(35),gx.O.A498GobMX_Material_RBFMatReC,0)},c2v:function(){gx.O.A498GobMX_Material_RBFMatReC=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_MATERIAL_RBFMATREC",gx.fn.currentGridRowImpl(35))},nac:function(){return!1}};
this.GXValidFnc[43]={fld:"LABELMENSAJEERROR",format:1,grid:0};this.GXValidFnc[48]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Foliosinatec,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"vFOLIOSINATEC",gxz:"ZV9FolioSinatec",gxold:"OV9FolioSinatec",gxvar:"AV9FolioSinatec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9FolioSinatec=gx.num.intval(a)},v2z:function(a){gx.O.ZV9FolioSinatec=gx.num.intval(a)},
v2c:function(){gx.fn.setControlValue("vFOLIOSINATEC",gx.O.AV9FolioSinatec,0)},c2v:function(){gx.O.AV9FolioSinatec=this.val()},val:function(){return gx.fn.getIntegerValue("vFOLIOSINATEC",",")},nac:function(){return!1}};this.OV5Borrar=this.ZV5Borrar=this.OV7Editar=this.ZV7Editar="";this.OV14GobMX_Especie_EspNumn=this.ZV14GobMX_Especie_EspNumn=this.OV15GobMX_Especie_EspClaveN=this.ZV15GobMX_Especie_EspClaveN=this.O519GobMX_Especie_Id=this.Z519GobMX_Especie_Id=this.O454GobMX_EspecieFolio=this.Z454GobMX_EspecieFolio=
0;this.OV11GobMX_Especie_RBFPredNuC=this.ZV11GobMX_Especie_RBFPredNuC="";this.O400GobMX_Especie_UniMedIdn=this.Z400GobMX_Especie_UniMedIdn=this.O399GobMX_Especie_RBFCantiN=this.Z399GobMX_Especie_RBFCantiN=this.O500GobMX_Especie_RecursosId=this.Z500GobMX_Especie_RecursosId=0;this.OV6Borrar1=this.ZV6Borrar1=this.OV8Editar1=this.ZV8Editar1="";this.O520GobMX_Material_Id=this.Z520GobMX_Material_Id=this.O497GobMX_MaterialFolio=this.Z497GobMX_MaterialFolio=0;this.O498GobMX_Material_RBFMatReC=this.Z498GobMX_Material_RBFMatReC=
"";this.OV9FolioSinatec=this.ZV9FolioSinatec=this.AV9FolioSinatec=0;this.AV6Borrar1=this.AV8Editar1="";this.A520GobMX_Material_Id=this.A497GobMX_MaterialFolio=0;this.A498GobMX_Material_RBFMatReC="";this.A455GobMX_Especie_EspNumn=this.A397GobMX_Especie_EspClaveN=0;this.AV5Borrar=this.AV7Editar=this.A398GobMX_Especie_RBFPredNuC="";this.AV14GobMX_Especie_EspNumn=this.AV15GobMX_Especie_EspClaveN=this.A519GobMX_Especie_Id=this.A454GobMX_EspecieFolio=0;this.AV11GobMX_Especie_RBFPredNuC="";this.A413GobMX_PredioFolio=
this.A400GobMX_Especie_UniMedIdn=this.A399GobMX_Especie_RBFCantiN=this.A500GobMX_Especie_RecursosId=0;this.A415GobMX_Predio_PredNNumC="";this.A362EspClaveN=this.A414GobMX_PredioConsecutivo=0;this.A360EspNomCoC="";this.A365EspNumn=0;this.A359EspNomCiC="";this.ServerEvents="e112t2_client e122t2_client e132t2_client e142t2_client e202t2_client e212t2_client e152t2_client e162t2_client e222t2_client e232t2_client".split(" ");this.VarControlMap.A398GobMX_Especie_RBFPredNuC={id:"GOBMX_ESPECIE_RBFPREDNUC",
grid:0,type:"char"};this.VarControlMap.A455GobMX_Especie_EspNumn={id:"GOBMX_ESPECIE_ESPNUMN",grid:0,type:"int"};this.VarControlMap.A360EspNomCoC={id:"ESPNOMCOC",grid:0,type:"svchar"};this.VarControlMap.A365EspNumn={id:"ESPNUMN",grid:0,type:"int"};this.VarControlMap.A397GobMX_Especie_EspClaveN={id:"GOBMX_ESPECIE_ESPCLAVEN",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[48]);b.addRefreshingVar({rfrVar:"AV11GobMX_Especie_RBFPredNuC",rfrProp:"Value",gxAttId:"Gobmx_especie_rbfprednuc"});b.addRefreshingVar({rfrVar:"AV15GobMX_Especie_EspClaveN",
rfrProp:"Value",gxAttId:"Gobmx_especie_espclaven"});b.addRefreshingVar({rfrVar:"AV15GobMX_Especie_EspClaveN",rfrProp:"Enabled",gxAttId:"Gobmx_especie_espclaven"});b.addRefreshingVar({rfrVar:"AV5Borrar",rfrProp:"Value",gxAttId:"Borrar"});b.addRefreshingVar({rfrVar:"AV7Editar",rfrProp:"Value",gxAttId:"Editar"});b.addRefreshingVar({rfrVar:"A398GobMX_Especie_RBFPredNuC"});b.addRefreshingVar({rfrVar:"A455GobMX_Especie_EspNumn"});b.addRefreshingVar({rfrVar:"A360EspNomCoC"});b.addRefreshingVar({rfrVar:"A365EspNumn"});
b.addRefreshingVar({rfrVar:"A397GobMX_Especie_EspClaveN"});c.addRefreshingVar(this.GXValidFnc[48]);c.addRefreshingVar({rfrVar:"AV6Borrar1",rfrProp:"Value",gxAttId:"Borrar1"});c.addRefreshingVar({rfrVar:"AV8Editar1",rfrProp:"Value",gxAttId:"Editar1"});this.SetStandaloneVars()}gobmx_tramite_14232_ccopy1.prototype=new gx.GxObject;gx.setParentObj(new gobmx_tramite_14232_ccopy1);