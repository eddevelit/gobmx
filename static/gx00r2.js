gx.evt.autoSkip=!1;
function gx00r2(){this.ServerClass="Gx00R2";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11pGobMX_PredioFolio=gx.fn.getIntegerValue("vPGOBMX_PREDIOFOLIO",",");this.AV12pGobMX_PredioConsecutivo=gx.fn.getIntegerValue("vPGOBMX_PREDIOCONSECUTIVO",",");this.AV13pGobMX_PredioCooId=gx.fn.getIntegerValue("vPGOBMX_PREDIOCOOID",",")};this.e131u2_client=function(a){this.executeServerEvent("ENTER",!0,a)};this.e141u1_client=
function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,50,51,52,55];this.GXLastCtrlId=55;var b=this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00r2",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image");b.addSingleLineEdit(419,
43,"GOBMX_PREDIOCOOID","No.","","GobMX_PredioCooId","int",0,"px",10,10,"right",null,[],419,"GobMX_PredioCooId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(420,44,"GOBMX_PREDIOCOO_UTMCORDXC","X","Seleccionar","GobMX_PredioCoo_UTMCordxc","decimal",0,"px",18,18,"right",null,[],420,"GobMX_PredioCoo_UTMCordxc",!0,6,!1,!1,"Attribute",1);b.addSingleLineEdit(421,45,"GOBMX_PREDIOCOO_UTMCORDYC","Y","","GobMX_PredioCoo_UTMCordyc","decimal",0,"px",18,18,"right",null,[],421,"GobMX_PredioCoo_UTMCordyc",!0,6,
!1,!1,"Attribute",1);b.addSingleLineEdit(422,46,"GOBMX_PREDIOCOO_GEOLOYGN","Longitud Grados","","GobMX_PredioCoo_GEOLoYGN","int",0,"px",3,3,"right",null,[],422,"GobMX_PredioCoo_GEOLoYGN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(423,47,"GOBMX_PREDIOCOO_GEOLOYMN","Longitud Minutos","","GobMX_PredioCoo_GEOLoYMN","int",0,"px",3,3,"right",null,[],423,"GobMX_PredioCoo_GEOLoYMN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(424,48,"GOBMX_PREDIOCOO_GEOLOYSN","Longitud Segundos","","GobMX_PredioCoo_GEOLoYSN",
"decimal",0,"px",6,6,"right",null,[],424,"GobMX_PredioCoo_GEOLoYSN",!0,2,!1,!1,"Attribute",1);b.addSingleLineEdit(426,49,"GOBMX_PREDIOCOO_GEOLAYGN","Latitud Grados","","GobMX_PredioCoo_GEOLaYGN","int",0,"px",3,3,"right",null,[],426,"GobMX_PredioCoo_GEOLaYGN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(427,50,"GOBMX_PREDIOCOO_GEOLAYMN","Latitud Minutos","","GobMX_PredioCoo_GEOLaYMN","int",0,"px",3,3,"right",null,[],427,"GobMX_PredioCoo_GEOLaYMN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(413,
51,"GOBMX_PREDIOFOLIO","Folio Sinatec","","GobMX_PredioFolio","int",0,"px",18,18,"right",null,[],413,"GobMX_PredioFolio",!1,0,!1,!1,"Attribute",1);b.addSingleLineEdit(414,52,"GOBMX_PREDIOCONSECUTIVO","Consecutivo","","GobMX_PredioConsecutivo","int",0,"px",10,10,"right",null,[],414,"GobMX_PredioConsecutivo",!1,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLE1",grid:0};this.GXValidFnc[8]={fld:"GROUP1",grid:0};this.GXValidFnc[9]={fld:"TABLE2",grid:0};this.GXValidFnc[12]={fld:"TEXTBLOCKGOBMX_PREDIOCOOID",
format:0,grid:0};this.GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGOBMX_PREDIOCOOID",gxz:"ZV6cGobMX_PredioCooId",gxold:"OV6cGobMX_PredioCooId",gxvar:"AV6cGobMX_PredioCooId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV6cGobMX_PredioCooId=gx.num.intval(a)},v2z:function(a){gx.O.ZV6cGobMX_PredioCooId=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCGOBMX_PREDIOCOOID",
gx.O.AV6cGobMX_PredioCooId,0)},c2v:function(){gx.O.AV6cGobMX_PredioCooId=this.val()},val:function(){return gx.fn.getIntegerValue("vCGOBMX_PREDIOCOOID",",")},nac:function(){return!1}};this.GXValidFnc[17]={fld:"TEXTBLOCKGOBMX_PREDIOCOO_UTMCORDXC",format:0,grid:0};this.GXValidFnc[19]={lvl:0,type:"decimal",len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCGOBMX_PREDIOCOO_UTMCORDXC",gxz:"ZV7cGobMX_PredioCoo_UTMCordxc",gxold:"OV7cGobMX_PredioCoo_UTMCordxc",
gxvar:"AV7cGobMX_PredioCoo_UTMCordxc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV7cGobMX_PredioCoo_UTMCordxc=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.ZV7cGobMX_PredioCoo_UTMCordxc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vCGOBMX_PREDIOCOO_UTMCORDXC",gx.O.AV7cGobMX_PredioCoo_UTMCordxc,6,".")},c2v:function(){gx.O.AV7cGobMX_PredioCoo_UTMCordxc=this.val()},val:function(){return gx.fn.getDecimalValue("vCGOBMX_PREDIOCOO_UTMCORDXC",",",
".")},nac:function(){return!1}};this.GXValidFnc[22]={fld:"TEXTBLOCKGOBMX_PREDIOCOO_UTMCORDYC",format:0,grid:0};this.GXValidFnc[24]={lvl:0,type:"decimal",len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"vCGOBMX_PREDIOCOO_UTMCORDYC",gxz:"ZV8cGobMX_PredioCoo_UTMCordyc",gxold:"OV8cGobMX_PredioCoo_UTMCordyc",gxvar:"AV8cGobMX_PredioCoo_UTMCordyc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV8cGobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,
",",".")},v2z:function(a){gx.O.ZV8cGobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setDecimalValue("vCGOBMX_PREDIOCOO_UTMCORDYC",gx.O.AV8cGobMX_PredioCoo_UTMCordyc,6,".")},c2v:function(){gx.O.AV8cGobMX_PredioCoo_UTMCordyc=this.val()},val:function(){return gx.fn.getDecimalValue("vCGOBMX_PREDIOCOO_UTMCORDYC",",",".")},nac:function(){return!1}};this.GXValidFnc[27]={fld:"TEXTBLOCKGOBMX_PREDIOCOO_GEOLOYGN",format:0,grid:0};this.GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,
sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGOBMX_PREDIOCOO_GEOLOYGN",gxz:"ZV9cGobMX_PredioCoo_GEOLoYGN",gxold:"OV9cGobMX_PredioCoo_GEOLoYGN",gxvar:"AV9cGobMX_PredioCoo_GEOLoYGN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV9cGobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2z:function(a){gx.O.ZV9cGobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCGOBMX_PREDIOCOO_GEOLOYGN",gx.O.AV9cGobMX_PredioCoo_GEOLoYGN,
0)},c2v:function(){gx.O.AV9cGobMX_PredioCoo_GEOLoYGN=this.val()},val:function(){return gx.fn.getIntegerValue("vCGOBMX_PREDIOCOO_GEOLOYGN",",")},nac:function(){return!1}};this.GXValidFnc[32]={fld:"TEXTBLOCKGOBMX_PREDIOCOO_GEOLOYMN",format:0,grid:0};this.GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGOBMX_PREDIOCOO_GEOLOYMN",gxz:"ZV10cGobMX_PredioCoo_GEOLoYMN",gxold:"OV10cGobMX_PredioCoo_GEOLoYMN",gxvar:"AV10cGobMX_PredioCoo_GEOLoYMN",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.AV10cGobMX_PredioCoo_GEOLoYMN=gx.num.intval(a)},v2z:function(a){gx.O.ZV10cGobMX_PredioCoo_GEOLoYMN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("vCGOBMX_PREDIOCOO_GEOLOYMN",gx.O.AV10cGobMX_PredioCoo_GEOLoYMN,0)},c2v:function(){gx.O.AV10cGobMX_PredioCoo_GEOLoYMN=this.val()},val:function(){return gx.fn.getIntegerValue("vCGOBMX_PREDIOCOO_GEOLOYMN",",")},nac:function(){return!1}};this.GXValidFnc[37]={fld:"GROUP2",grid:0};this.GXValidFnc[38]=
{fld:"TABLE3",grid:0};this.GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.AV5LinkSelection=a},v2z:function(a){gx.O.ZV5LinkSelection=a},v2c:function(){gx.fn.setGridMultimediaValue("vLINKSELECTION",gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,
gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(){return gx.fn.getGridControlValue("vLINKSELECTION",gx.fn.currentGridRowImpl(41))},val_GXI:function(){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV16Linkselection_GXI",nac:function(){return!1}};this.GXValidFnc[43]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,
fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOOID",gxz:"Z419GobMX_PredioCooId",gxold:"O419GobMX_PredioCooId",gxvar:"A419GobMX_PredioCooId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A419GobMX_PredioCooId=gx.num.intval(a)},v2z:function(a){gx.O.Z419GobMX_PredioCooId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOOID",gx.fn.currentGridRowImpl(41),gx.O.A419GobMX_PredioCooId,0)},c2v:function(){gx.O.A419GobMX_PredioCooId=this.val()},
val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOOID",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[44]={lvl:2,type:"decimal",len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_UTMCORDXC",gxz:"Z420GobMX_PredioCoo_UTMCordxc",gxold:"O420GobMX_PredioCoo_UTMCordxc",gxvar:"A420GobMX_PredioCoo_UTMCordxc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A420GobMX_PredioCoo_UTMCordxc=
gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z420GobMX_PredioCoo_UTMCordxc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDXC",gx.fn.currentGridRowImpl(41),gx.O.A420GobMX_PredioCoo_UTMCordxc,6,".")},c2v:function(){gx.O.A420GobMX_PredioCoo_UTMCordxc=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDXC",gx.fn.currentGridRowImpl(41),",",".")},nac:function(){return!1}};this.GXValidFnc[45]={lvl:2,type:"decimal",
len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_UTMCORDYC",gxz:"Z421GobMX_PredioCoo_UTMCordyc",gxold:"O421GobMX_PredioCoo_UTMCordyc",gxvar:"A421GobMX_PredioCoo_UTMCordyc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A421GobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z421GobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDYC",
gx.fn.currentGridRowImpl(41),gx.O.A421GobMX_PredioCoo_UTMCordyc,6,".")},c2v:function(){gx.O.A421GobMX_PredioCoo_UTMCordyc=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDYC",gx.fn.currentGridRowImpl(41),",",".")},nac:function(){return!1}};this.GXValidFnc[46]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLOYGN",gxz:"Z422GobMX_PredioCoo_GEOLoYGN",gxold:"O422GobMX_PredioCoo_GEOLoYGN",
gxvar:"A422GobMX_PredioCoo_GEOLoYGN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A422GobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2z:function(a){gx.O.Z422GobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLOYGN",gx.fn.currentGridRowImpl(41),gx.O.A422GobMX_PredioCoo_GEOLoYGN,0)},c2v:function(){gx.O.A422GobMX_PredioCoo_GEOLoYGN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLOYGN",
gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[47]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLOYMN",gxz:"Z423GobMX_PredioCoo_GEOLoYMN",gxold:"O423GobMX_PredioCoo_GEOLoYMN",gxvar:"A423GobMX_PredioCoo_GEOLoYMN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A423GobMX_PredioCoo_GEOLoYMN=gx.num.intval(a)},v2z:function(a){gx.O.Z423GobMX_PredioCoo_GEOLoYMN=
gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLOYMN",gx.fn.currentGridRowImpl(41),gx.O.A423GobMX_PredioCoo_GEOLoYMN,0)},c2v:function(){gx.O.A423GobMX_PredioCoo_GEOLoYMN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLOYMN",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[48]={lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_GEOLOYSN",
gxz:"Z424GobMX_PredioCoo_GEOLoYSN",gxold:"O424GobMX_PredioCoo_GEOLoYSN",gxvar:"A424GobMX_PredioCoo_GEOLoYSN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A424GobMX_PredioCoo_GEOLoYSN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z424GobMX_PredioCoo_GEOLoYSN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_GEOLOYSN",gx.fn.currentGridRowImpl(41),gx.O.A424GobMX_PredioCoo_GEOLoYSN,2,".")},c2v:function(){gx.O.A424GobMX_PredioCoo_GEOLoYSN=
this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_GEOLOYSN",gx.fn.currentGridRowImpl(41),",",".")},nac:function(){return!1}};this.GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLAYGN",gxz:"Z426GobMX_PredioCoo_GEOLaYGN",gxold:"O426GobMX_PredioCoo_GEOLaYGN",gxvar:"A426GobMX_PredioCoo_GEOLaYGN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",
v2v:function(a){gx.O.A426GobMX_PredioCoo_GEOLaYGN=gx.num.intval(a)},v2z:function(a){gx.O.Z426GobMX_PredioCoo_GEOLaYGN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLAYGN",gx.fn.currentGridRowImpl(41),gx.O.A426GobMX_PredioCoo_GEOLaYGN,0)},c2v:function(){gx.O.A426GobMX_PredioCoo_GEOLaYGN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLAYGN",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[50]={lvl:2,type:"int",
len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLAYMN",gxz:"Z427GobMX_PredioCoo_GEOLaYMN",gxold:"O427GobMX_PredioCoo_GEOLaYMN",gxvar:"A427GobMX_PredioCoo_GEOLaYMN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A427GobMX_PredioCoo_GEOLaYMN=gx.num.intval(a)},v2z:function(a){gx.O.Z427GobMX_PredioCoo_GEOLaYMN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLAYMN",
gx.fn.currentGridRowImpl(41),gx.O.A427GobMX_PredioCoo_GEOLaYMN,0)},c2v:function(){gx.O.A427GobMX_PredioCoo_GEOLaYMN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLAYMN",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[51]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOFOLIO",gxz:"Z413GobMX_PredioFolio",gxold:"O413GobMX_PredioFolio",
gxvar:"A413GobMX_PredioFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A413GobMX_PredioFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z413GobMX_PredioFolio=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOFOLIO",gx.fn.currentGridRowImpl(41),gx.O.A413GobMX_PredioFolio,0)},c2v:function(){gx.O.A413GobMX_PredioFolio=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOFOLIO",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};
this.GXValidFnc[52]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCONSECUTIVO",gxz:"Z414GobMX_PredioConsecutivo",gxold:"O414GobMX_PredioConsecutivo",gxvar:"A414GobMX_PredioConsecutivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A414GobMX_PredioConsecutivo=gx.num.intval(a)},v2z:function(a){gx.O.Z414GobMX_PredioConsecutivo=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCONSECUTIVO",
gx.fn.currentGridRowImpl(41),gx.O.A414GobMX_PredioConsecutivo,0)},c2v:function(){gx.O.A414GobMX_PredioConsecutivo=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCONSECUTIVO",gx.fn.currentGridRowImpl(41),",")},nac:function(){return!1}};this.GXValidFnc[55]={fld:"TABLE4",grid:0};this.OV10cGobMX_PredioCoo_GEOLoYMN=this.ZV10cGobMX_PredioCoo_GEOLoYMN=this.AV10cGobMX_PredioCoo_GEOLoYMN=this.OV9cGobMX_PredioCoo_GEOLoYGN=this.ZV9cGobMX_PredioCoo_GEOLoYGN=this.AV9cGobMX_PredioCoo_GEOLoYGN=
this.OV8cGobMX_PredioCoo_UTMCordyc=this.ZV8cGobMX_PredioCoo_UTMCordyc=this.AV8cGobMX_PredioCoo_UTMCordyc=this.OV7cGobMX_PredioCoo_UTMCordxc=this.ZV7cGobMX_PredioCoo_UTMCordxc=this.AV7cGobMX_PredioCoo_UTMCordxc=this.OV6cGobMX_PredioCooId=this.ZV6cGobMX_PredioCooId=this.AV6cGobMX_PredioCooId=0;this.OV5LinkSelection=this.ZV5LinkSelection="";this.AV13pGobMX_PredioCooId=this.AV12pGobMX_PredioConsecutivo=this.AV11pGobMX_PredioFolio=this.O414GobMX_PredioConsecutivo=this.Z414GobMX_PredioConsecutivo=this.O413GobMX_PredioFolio=
this.Z413GobMX_PredioFolio=this.O427GobMX_PredioCoo_GEOLaYMN=this.Z427GobMX_PredioCoo_GEOLaYMN=this.O426GobMX_PredioCoo_GEOLaYGN=this.Z426GobMX_PredioCoo_GEOLaYGN=this.O424GobMX_PredioCoo_GEOLoYSN=this.Z424GobMX_PredioCoo_GEOLoYSN=this.O423GobMX_PredioCoo_GEOLoYMN=this.Z423GobMX_PredioCoo_GEOLoYMN=this.O422GobMX_PredioCoo_GEOLoYGN=this.Z422GobMX_PredioCoo_GEOLoYGN=this.O421GobMX_PredioCoo_UTMCordyc=this.Z421GobMX_PredioCoo_UTMCordyc=this.O420GobMX_PredioCoo_UTMCordxc=this.Z420GobMX_PredioCoo_UTMCordxc=
this.O419GobMX_PredioCooId=this.Z419GobMX_PredioCooId=0;this.AV5LinkSelection="";this.A414GobMX_PredioConsecutivo=this.A413GobMX_PredioFolio=this.A427GobMX_PredioCoo_GEOLaYMN=this.A426GobMX_PredioCoo_GEOLaYGN=this.A424GobMX_PredioCoo_GEOLoYSN=this.A423GobMX_PredioCoo_GEOLoYMN=this.A422GobMX_PredioCoo_GEOLoYGN=this.A421GobMX_PredioCoo_UTMCordyc=this.A420GobMX_PredioCoo_UTMCordxc=this.A419GobMX_PredioCooId=0;this.ServerEvents=["e131u2_client","e141u1_client"];this.VarControlMap.AV11pGobMX_PredioFolio=
{id:"vPGOBMX_PREDIOFOLIO",grid:0,type:"int"};this.VarControlMap.AV12pGobMX_PredioConsecutivo={id:"vPGOBMX_PREDIOCONSECUTIVO",grid:0,type:"int"};this.VarControlMap.AV13pGobMX_PredioCooId={id:"vPGOBMX_PREDIOCOOID",grid:0,type:"int"};this.VarControlMap.AV11pGobMX_PredioFolio={id:"vPGOBMX_PREDIOFOLIO",grid:0,type:"int"};this.VarControlMap.AV12pGobMX_PredioConsecutivo={id:"vPGOBMX_PREDIOCONSECUTIVO",grid:0,type:"int"};b.addRefreshingVar(this.GXValidFnc[14]);b.addRefreshingVar(this.GXValidFnc[19]);b.addRefreshingVar(this.GXValidFnc[24]);
b.addRefreshingVar(this.GXValidFnc[29]);b.addRefreshingVar(this.GXValidFnc[34]);b.addRefreshingVar({rfrVar:"AV11pGobMX_PredioFolio"});b.addRefreshingVar({rfrVar:"AV12pGobMX_PredioConsecutivo"});this.SetStandaloneVars()}gx00r2.prototype=new gx.GxObject;gx.setParentObj(new gx00r2);