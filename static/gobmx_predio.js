gx.evt.autoSkip=!1;
function gobmx_predio(){this.ServerClass="GobMX_Predio";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Gobmx_prediofolio=function(){try{var a=gx.util.balloon.getNew("GOBMX_PREDIOFOLIO");this.AnyError=0}catch(b){}try{return null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_predioconsecutivo=function(){gx.ajax.validSrvEvt("dyncall","valid_Gobmx_predioconsecutivo","gx.O.A413GobMX_PredioFolio gx.O.A414GobMX_PredioConsecutivo gx.O.A432GobMX_Predio_PredNomc gx.O.A415GobMX_Predio_PredNNumC gx.O.A433GobMX_Predio_TCoClaveN gx.O.A434GobMX_Predio_Datnum gx.O.A435GobMX_Predio_ZonaUTM gx.O.A436GobMX_Predio_NoCoordN".split(" "),
["A432GobMX_Predio_PredNomc","A415GobMX_Predio_PredNNumC","A433GobMX_Predio_TCoClaveN","A434GobMX_Predio_Datnum","A435GobMX_Predio_ZonaUTM","A436GobMX_Predio_NoCoordN","Gx_mode","Z413GobMX_PredioFolio","Z414GobMX_PredioConsecutivo","Z432GobMX_Predio_PredNomc","Z415GobMX_Predio_PredNNumC","Z433GobMX_Predio_TCoClaveN","Z434GobMX_Predio_Datnum","Z435GobMX_Predio_ZonaUTM","Z436GobMX_Predio_NoCoordN","Gridgobmx_predio_coo",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]);return!0};this.Valid_Gobmx_prediocooid=
function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOOID",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81);this.standaloneModal0Q27();this.standaloneNotModal0Q27();gx.fn.gridDuplicateKey(82)&&(a.setError(gx.text.format(gx.getMessage("GXM_1004"),"Coo","","","","","","","","")),this.AnyError=1)}catch(b){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_prediocoo_geoloygn=
function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLOYGN",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81)}catch(b){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_prediocoo_geoloymn=function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLOYMN",gx.fn.currentGridRowImpl(81));this.AnyError=
0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81)}catch(b){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_prediocoo_geoloysn=function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLOYSN",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81);try{this.A425GobMX_PredioCoo_GEOLongC=gx.text.trim(gx.num.str(this.A422GobMX_PredioCoo_GEOLoYGN,
3,0))+"\u00b0 "+gx.text.trim(gx.num.str(this.A423GobMX_PredioCoo_GEOLoYMN,3,0))+"' "+gx.text.trim(gx.num.str(this.A424GobMX_PredioCoo_GEOLoYSN,6,2))+"''"}catch(b){}}catch(c){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(d){}return!0};this.Valid_Gobmx_prediocoo_geolaygn=function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLAYGN",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,
81)}catch(b){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_prediocoo_geolaymn=function(){try{if(0===gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLAYMN",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81)}catch(b){}try{return this.Gx_mode=this.sMode27,null==a?!0:a.show()}catch(c){}return!0};this.Valid_Gobmx_prediocoo_geolaysn=function(){try{if(0===
gx.fn.currentGridRowImpl(81))return!0;var a=gx.util.balloon.getNew("GOBMX_PREDIOCOO_GEOLAYSN",gx.fn.currentGridRowImpl(81));this.AnyError=0;this.sMode27=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(27,81);try{this.A429GobMX_PredioCoo_GEOLatiC=gx.text.trim(gx.num.str(this.A426GobMX_PredioCoo_GEOLaYGN,3,0))+"\u00b0 "+gx.text.trim(gx.num.str(this.A427GobMX_PredioCoo_GEOLaYMN,3,0))+"' "+gx.text.trim(gx.num.str(this.A428GobMX_PredioCoo_GEOLaYSN,6,2))+"''"}catch(b){}}catch(c){}try{return this.Gx_mode=
this.sMode27,null==a?!0:a.show()}catch(d){}return!0};this.standaloneModal0Q27=function(){try{"INS"!=this.Gx_mode?gx.fn.setCtrlProperty("GOBMX_PREDIOCOOID","Enabled",0):gx.fn.setCtrlProperty("GOBMX_PREDIOCOOID","Enabled",1)}catch(a){}return!0};this.standaloneNotModal0Q27=function(){return!0};this.e110q26_client=function(){this.executeServerEvent("ENTER",!0)};this.e120q26_client=function(){this.executeServerEvent("CANCEL",!0)};this.GXValidFnc=[];this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,
21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,80,82,83,84,85,86,87,88,89,90,91,92];this.GXLastCtrlId=92;var b=this.Gridgobmx_predio_cooContainer=new gx.grid.grid(this,27,"Coo",81,"Gridgobmx_predio_coo","Gridgobmx_predio_coo","Gridgobmx_predio_cooContainer",this.CmpContext,this.IsMasterPage,"gobmx_predio",[419],!1,1,!1,!0,5,!1,!1,!1,"",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"");b.addSingleLineEdit(419,82,"GOBMX_PREDIOCOOID","No.","","GobMX_PredioCooId","int",0,"px",10,
10,"right",null,[],419,"GobMX_PredioCooId",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(420,83,"GOBMX_PREDIOCOO_UTMCORDXC","X","","GobMX_PredioCoo_UTMCordxc","decimal",0,"px",18,18,"right",null,[],420,"GobMX_PredioCoo_UTMCordxc",!0,6,!1,!1,"Attribute",1);b.addSingleLineEdit(421,84,"GOBMX_PREDIOCOO_UTMCORDYC","Y","","GobMX_PredioCoo_UTMCordyc","decimal",0,"px",18,18,"right",null,[],421,"GobMX_PredioCoo_UTMCordyc",!0,6,!1,!1,"Attribute",1);b.addSingleLineEdit(422,85,"GOBMX_PREDIOCOO_GEOLOYGN","Longitud Grados",
"","GobMX_PredioCoo_GEOLoYGN","int",0,"px",3,3,"right",null,[],422,"GobMX_PredioCoo_GEOLoYGN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(423,86,"GOBMX_PREDIOCOO_GEOLOYMN","Longitud Minutos","","GobMX_PredioCoo_GEOLoYMN","int",0,"px",3,3,"right",null,[],423,"GobMX_PredioCoo_GEOLoYMN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(424,87,"GOBMX_PREDIOCOO_GEOLOYSN","Longitud Segundos","","GobMX_PredioCoo_GEOLoYSN","decimal",0,"px",6,6,"right",null,[],424,"GobMX_PredioCoo_GEOLoYSN",!0,2,!1,!1,"Attribute",
1);b.addSingleLineEdit(425,88,"GOBMX_PREDIOCOO_GEOLONGC","Longitud","","GobMX_PredioCoo_GEOLongC","svchar",0,"px",40,40,"left",null,[],425,"GobMX_PredioCoo_GEOLongC",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(426,89,"GOBMX_PREDIOCOO_GEOLAYGN","Latitud Grados","","GobMX_PredioCoo_GEOLaYGN","int",0,"px",3,3,"right",null,[],426,"GobMX_PredioCoo_GEOLaYGN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(427,90,"GOBMX_PREDIOCOO_GEOLAYMN","Latitud Minutos","","GobMX_PredioCoo_GEOLaYMN","int",0,"px",3,3,
"right",null,[],427,"GobMX_PredioCoo_GEOLaYMN",!0,0,!1,!1,"Attribute",1);b.addSingleLineEdit(428,91,"GOBMX_PREDIOCOO_GEOLAYSN","Latitud Segundos","","GobMX_PredioCoo_GEOLaYSN","decimal",0,"px",6,6,"right",null,[],428,"GobMX_PredioCoo_GEOLaYSN",!0,2,!1,!1,"Attribute",1);b.addSingleLineEdit(429,92,"GOBMX_PREDIOCOO_GEOLATIC","Latitud","","GobMX_PredioCoo_GEOLatiC","svchar",0,"px",40,40,"left",null,[],429,"GobMX_PredioCoo_GEOLatiC",!0,0,!1,!1,"Attribute",1);this.setGrid(b);this.GXValidFnc[2]={fld:"TABLEMAIN",
grid:0};this.GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};this.GXValidFnc[9]={fld:"BTN_FIRST",grid:0};this.GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};this.GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};this.GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};this.GXValidFnc[13]={fld:"BTN_NEXT",grid:0};this.GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};this.GXValidFnc[15]={fld:"BTN_LAST",grid:0};this.GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};this.GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
this.GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};this.GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};this.GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};this.GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};this.GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};this.GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};this.GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};this.GXValidFnc[27]={fld:"GROUPDATA",grid:0};this.GXValidFnc[28]={fld:"TABLE1",grid:0};this.GXValidFnc[34]={fld:"TABLE2",grid:0};this.GXValidFnc[37]=
{fld:"TEXTBLOCKGOBMX_PREDIOFOLIO",format:0,grid:0};this.GXValidFnc[39]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gobmx_prediofolio,isvalid:null,rgrid:[this.Gridgobmx_predio_cooContainer],fld:"GOBMX_PREDIOFOLIO",gxz:"Z413GobMX_PredioFolio",gxold:"O413GobMX_PredioFolio",gxvar:"A413GobMX_PredioFolio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A413GobMX_PredioFolio=gx.num.intval(a)},v2z:function(a){gx.O.Z413GobMX_PredioFolio=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIOFOLIO",gx.O.A413GobMX_PredioFolio,0)},c2v:function(){gx.O.A413GobMX_PredioFolio=this.val()},val:function(){return gx.fn.getIntegerValue("GOBMX_PREDIOFOLIO",",")},nac:function(){return!1}};this.GXValidFnc[42]={fld:"TEXTBLOCKGOBMX_PREDIOCONSECUTIVO",format:0,grid:0};this.GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gobmx_predioconsecutivo,isvalid:null,rgrid:[this.Gridgobmx_predio_cooContainer],
fld:"GOBMX_PREDIOCONSECUTIVO",gxz:"Z414GobMX_PredioConsecutivo",gxold:"O414GobMX_PredioConsecutivo",gxvar:"A414GobMX_PredioConsecutivo",ucs:[],op:[74,69,64,59,54,49],ip:[74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A414GobMX_PredioConsecutivo=gx.num.intval(a)},v2z:function(a){gx.O.Z414GobMX_PredioConsecutivo=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIOCONSECUTIVO",gx.O.A414GobMX_PredioConsecutivo,0)},c2v:function(){gx.O.A414GobMX_PredioConsecutivo=
this.val()},val:function(){return gx.fn.getIntegerValue("GOBMX_PREDIOCONSECUTIVO",",")},nac:function(){return!1}};this.GXValidFnc[47]={fld:"TEXTBLOCKGOBMX_PREDIO_PREDNOMC",format:0,grid:0};this.GXValidFnc[49]={lvl:0,type:"svchar",len:600,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"GOBMX_PREDIO_PREDNOMC",gxz:"Z432GobMX_Predio_PredNomc",gxold:"O432GobMX_Predio_PredNomc",gxvar:"A432GobMX_Predio_PredNomc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A432GobMX_Predio_PredNomc=
a},v2z:function(a){gx.O.Z432GobMX_Predio_PredNomc=a},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_PREDNOMC",gx.O.A432GobMX_Predio_PredNomc,0)},c2v:function(){gx.O.A432GobMX_Predio_PredNomc=this.val()},val:function(){return gx.fn.getControlValue("GOBMX_PREDIO_PREDNOMC")},nac:function(){return!1}};this.GXValidFnc[52]={fld:"TEXTBLOCKGOBMX_PREDIO_PREDNNUMC",format:0,grid:0};this.GXValidFnc[54]={lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,
fld:"GOBMX_PREDIO_PREDNNUMC",gxz:"Z415GobMX_Predio_PredNNumC",gxold:"O415GobMX_Predio_PredNNumC",gxvar:"A415GobMX_Predio_PredNNumC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A415GobMX_Predio_PredNNumC=a},v2z:function(a){gx.O.Z415GobMX_Predio_PredNNumC=a},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_PREDNNUMC",gx.O.A415GobMX_Predio_PredNNumC,0)},c2v:function(){gx.O.A415GobMX_Predio_PredNNumC=this.val()},val:function(){return gx.fn.getControlValue("GOBMX_PREDIO_PREDNNUMC")},
nac:function(){return!1}};this.GXValidFnc[57]={fld:"TEXTBLOCKGOBMX_PREDIO_TCOCLAVEN",format:0,grid:0};this.GXValidFnc[59]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIO_TCOCLAVEN",gxz:"Z433GobMX_Predio_TCoClaveN",gxold:"O433GobMX_Predio_TCoClaveN",gxvar:"A433GobMX_Predio_TCoClaveN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A433GobMX_Predio_TCoClaveN=gx.num.intval(a)},v2z:function(a){gx.O.Z433GobMX_Predio_TCoClaveN=
gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_TCOCLAVEN",gx.O.A433GobMX_Predio_TCoClaveN,0)},c2v:function(){gx.O.A433GobMX_Predio_TCoClaveN=this.val()},val:function(){return gx.fn.getIntegerValue("GOBMX_PREDIO_TCOCLAVEN",",")},nac:function(){return!1}};this.GXValidFnc[62]={fld:"TEXTBLOCKGOBMX_PREDIO_DATNUM",format:0,grid:0};this.GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"GOBMX_PREDIO_DATNUM",gxz:"Z434GobMX_Predio_Datnum",
gxold:"O434GobMX_Predio_Datnum",gxvar:"A434GobMX_Predio_Datnum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A434GobMX_Predio_Datnum=a},v2z:function(a){gx.O.Z434GobMX_Predio_Datnum=a},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_DATNUM",gx.O.A434GobMX_Predio_Datnum,0)},c2v:function(){gx.O.A434GobMX_Predio_Datnum=this.val()},val:function(){return gx.fn.getControlValue("GOBMX_PREDIO_DATNUM")},nac:function(){return!1}};this.GXValidFnc[67]={fld:"TEXTBLOCKGOBMX_PREDIO_ZONAUTM",
format:0,grid:0};this.GXValidFnc[69]={lvl:0,type:"char",len:6,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,fld:"GOBMX_PREDIO_ZONAUTM",gxz:"Z435GobMX_Predio_ZonaUTM",gxold:"O435GobMX_Predio_ZonaUTM",gxvar:"A435GobMX_Predio_ZonaUTM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A435GobMX_Predio_ZonaUTM=a},v2z:function(a){gx.O.Z435GobMX_Predio_ZonaUTM=a},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_ZONAUTM",gx.O.A435GobMX_Predio_ZonaUTM,0)},c2v:function(){gx.O.A435GobMX_Predio_ZonaUTM=
this.val()},val:function(){return gx.fn.getControlValue("GOBMX_PREDIO_ZONAUTM")},nac:function(){return!1}};this.GXValidFnc[72]={fld:"TEXTBLOCKGOBMX_PREDIO_NOCOORDN",format:0,grid:0};this.GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GOBMX_PREDIO_NOCOORDN",gxz:"Z436GobMX_Predio_NoCoordN",gxold:"O436GobMX_Predio_NoCoordN",gxvar:"A436GobMX_Predio_NoCoordN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(a){gx.O.A436GobMX_Predio_NoCoordN=
gx.num.intval(a)},v2z:function(a){gx.O.Z436GobMX_Predio_NoCoordN=gx.num.intval(a)},v2c:function(){gx.fn.setControlValue("GOBMX_PREDIO_NOCOORDN",gx.O.A436GobMX_Predio_NoCoordN,0)},c2v:function(){gx.O.A436GobMX_Predio_NoCoordN=this.val()},val:function(){return gx.fn.getIntegerValue("GOBMX_PREDIO_NOCOORDN",",")},nac:function(){return!1}};this.GXValidFnc[77]={fld:"TABLE3",grid:0};this.GXValidFnc[80]={fld:"TITLECOO",format:0,grid:0};this.GXValidFnc[82]={lvl:27,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",
ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocooid,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOOID",gxz:"Z419GobMX_PredioCooId",gxold:"O419GobMX_PredioCooId",gxvar:"A419GobMX_PredioCooId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A419GobMX_PredioCooId=gx.num.intval(a)},v2z:function(a){gx.O.Z419GobMX_PredioCooId=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOOID",gx.fn.currentGridRowImpl(81),
gx.O.A419GobMX_PredioCooId,0)},c2v:function(){gx.O.A419GobMX_PredioCooId=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOOID",gx.fn.currentGridRowImpl(81),",")},nac:function(){return!1}};this.GXValidFnc[83]={lvl:27,type:"decimal",len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_UTMCORDXC",gxz:"Z420GobMX_PredioCoo_UTMCordxc",gxold:"O420GobMX_PredioCoo_UTMCordxc",gxvar:"A420GobMX_PredioCoo_UTMCordxc",
ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A420GobMX_PredioCoo_UTMCordxc=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z420GobMX_PredioCoo_UTMCordxc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDXC",gx.fn.currentGridRowImpl(81),gx.O.A420GobMX_PredioCoo_UTMCordxc,6,".")},c2v:function(){gx.O.A420GobMX_PredioCoo_UTMCordxc=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDXC",
gx.fn.currentGridRowImpl(81),",",".")},nac:function(){return!1}};this.GXValidFnc[84]={lvl:27,type:"decimal",len:17,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_UTMCORDYC",gxz:"Z421GobMX_PredioCoo_UTMCordyc",gxold:"O421GobMX_PredioCoo_UTMCordyc",gxvar:"A421GobMX_PredioCoo_UTMCordyc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A421GobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,
",",".")},v2z:function(a){gx.O.Z421GobMX_PredioCoo_UTMCordyc=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDYC",gx.fn.currentGridRowImpl(81),gx.O.A421GobMX_PredioCoo_UTMCordyc,6,".")},c2v:function(){gx.O.A421GobMX_PredioCoo_UTMCordyc=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_UTMCORDYC",gx.fn.currentGridRowImpl(81),",",".")},nac:function(){return!1}};this.GXValidFnc[85]={lvl:27,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",
ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geoloygn,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLOYGN",gxz:"Z422GobMX_PredioCoo_GEOLoYGN",gxold:"O422GobMX_PredioCoo_GEOLoYGN",gxvar:"A422GobMX_PredioCoo_GEOLoYGN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A422GobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2z:function(a){gx.O.Z422GobMX_PredioCoo_GEOLoYGN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLOYGN",
gx.fn.currentGridRowImpl(81),gx.O.A422GobMX_PredioCoo_GEOLoYGN,0)},c2v:function(){gx.O.A422GobMX_PredioCoo_GEOLoYGN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLOYGN",gx.fn.currentGridRowImpl(81),",")},nac:function(){return!1}};this.GXValidFnc[86]={lvl:27,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geoloymn,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLOYMN",gxz:"Z423GobMX_PredioCoo_GEOLoYMN",
gxold:"O423GobMX_PredioCoo_GEOLoYMN",gxvar:"A423GobMX_PredioCoo_GEOLoYMN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A423GobMX_PredioCoo_GEOLoYMN=gx.num.intval(a)},v2z:function(a){gx.O.Z423GobMX_PredioCoo_GEOLoYMN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLOYMN",gx.fn.currentGridRowImpl(81),gx.O.A423GobMX_PredioCoo_GEOLoYMN,0)},c2v:function(){gx.O.A423GobMX_PredioCoo_GEOLoYMN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLOYMN",
gx.fn.currentGridRowImpl(81),",")},nac:function(){return!1}};this.GXValidFnc[87]={lvl:27,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geoloysn,isvalid:null,fld:"GOBMX_PREDIOCOO_GEOLOYSN",gxz:"Z424GobMX_PredioCoo_GEOLoYSN",gxold:"O424GobMX_PredioCoo_GEOLoYSN",gxvar:"A424GobMX_PredioCoo_GEOLoYSN",ucs:[],op:[88],ip:[88,87,86,85],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A424GobMX_PredioCoo_GEOLoYSN=
gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z424GobMX_PredioCoo_GEOLoYSN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_GEOLOYSN",gx.fn.currentGridRowImpl(81),gx.O.A424GobMX_PredioCoo_GEOLoYSN,2,".")},c2v:function(){gx.O.A424GobMX_PredioCoo_GEOLoYSN=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_GEOLOYSN",gx.fn.currentGridRowImpl(81),",",".")},nac:function(){return!1}};this.GXValidFnc[88]={lvl:27,type:"svchar",len:40,
dec:0,sign:!1,ro:1,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_GEOLONGC",gxz:"Z425GobMX_PredioCoo_GEOLongC",gxold:"O425GobMX_PredioCoo_GEOLongC",gxvar:"A425GobMX_PredioCoo_GEOLongC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A425GobMX_PredioCoo_GEOLongC=a},v2z:function(a){gx.O.Z425GobMX_PredioCoo_GEOLongC=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLONGC",gx.fn.currentGridRowImpl(81),
gx.O.A425GobMX_PredioCoo_GEOLongC,0)},c2v:function(){gx.O.A425GobMX_PredioCoo_GEOLongC=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_PREDIOCOO_GEOLONGC",gx.fn.currentGridRowImpl(81))},nac:function(){return!1}};this.GXValidFnc[89]={lvl:27,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geolaygn,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLAYGN",gxz:"Z426GobMX_PredioCoo_GEOLaYGN",gxold:"O426GobMX_PredioCoo_GEOLaYGN",
gxvar:"A426GobMX_PredioCoo_GEOLaYGN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A426GobMX_PredioCoo_GEOLaYGN=gx.num.intval(a)},v2z:function(a){gx.O.Z426GobMX_PredioCoo_GEOLaYGN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLAYGN",gx.fn.currentGridRowImpl(81),gx.O.A426GobMX_PredioCoo_GEOLaYGN,0)},c2v:function(){gx.O.A426GobMX_PredioCoo_GEOLaYGN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLAYGN",
gx.fn.currentGridRowImpl(81),",")},nac:function(){return!1}};this.GXValidFnc[90]={lvl:27,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geolaymn,isvalid:null,rgrid:[],fld:"GOBMX_PREDIOCOO_GEOLAYMN",gxz:"Z427GobMX_PredioCoo_GEOLaYMN",gxold:"O427GobMX_PredioCoo_GEOLaYMN",gxvar:"A427GobMX_PredioCoo_GEOLaYMN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A427GobMX_PredioCoo_GEOLaYMN=
gx.num.intval(a)},v2z:function(a){gx.O.Z427GobMX_PredioCoo_GEOLaYMN=gx.num.intval(a)},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLAYMN",gx.fn.currentGridRowImpl(81),gx.O.A427GobMX_PredioCoo_GEOLaYMN,0)},c2v:function(){gx.O.A427GobMX_PredioCoo_GEOLaYMN=this.val()},val:function(){return gx.fn.getGridIntegerValue("GOBMX_PREDIOCOO_GEOLAYMN",gx.fn.currentGridRowImpl(81),",")},nac:function(){return!1}};this.GXValidFnc[91]={lvl:27,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,isacc:1,
grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:this.Valid_Gobmx_prediocoo_geolaysn,isvalid:null,fld:"GOBMX_PREDIOCOO_GEOLAYSN",gxz:"Z428GobMX_PredioCoo_GEOLaYSN",gxold:"O428GobMX_PredioCoo_GEOLaYSN",gxvar:"A428GobMX_PredioCoo_GEOLaYSN",ucs:[],op:[92],ip:[92,91,90,89],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(a){gx.O.A428GobMX_PredioCoo_GEOLaYSN=gx.fn.toDecimalValue(a,",",".")},v2z:function(a){gx.O.Z428GobMX_PredioCoo_GEOLaYSN=gx.fn.toDecimalValue(a,",",".")},v2c:function(){gx.fn.setGridDecimalValue("GOBMX_PREDIOCOO_GEOLAYSN",
gx.fn.currentGridRowImpl(81),gx.O.A428GobMX_PredioCoo_GEOLaYSN,2,".")},c2v:function(){gx.O.A428GobMX_PredioCoo_GEOLaYSN=this.val()},val:function(){return gx.fn.getGridDecimalValue("GOBMX_PREDIOCOO_GEOLAYSN",gx.fn.currentGridRowImpl(81),",",".")},nac:function(){return!1}};this.GXValidFnc[92]={lvl:27,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:1,grid:81,gxgrid:this.Gridgobmx_predio_cooContainer,fnc:null,isvalid:null,fld:"GOBMX_PREDIOCOO_GEOLATIC",gxz:"Z429GobMX_PredioCoo_GEOLatiC",gxold:"O429GobMX_PredioCoo_GEOLatiC",
gxvar:"A429GobMX_PredioCoo_GEOLatiC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(a){gx.O.A429GobMX_PredioCoo_GEOLatiC=a},v2z:function(a){gx.O.Z429GobMX_PredioCoo_GEOLatiC=a},v2c:function(){gx.fn.setGridControlValue("GOBMX_PREDIOCOO_GEOLATIC",gx.fn.currentGridRowImpl(81),gx.O.A429GobMX_PredioCoo_GEOLatiC,0)},c2v:function(){gx.O.A429GobMX_PredioCoo_GEOLatiC=this.val()},val:function(){return gx.fn.getGridControlValue("GOBMX_PREDIOCOO_GEOLATIC",gx.fn.currentGridRowImpl(81))},
nac:function(){return!1}};this.O414GobMX_PredioConsecutivo=this.Z414GobMX_PredioConsecutivo=this.A414GobMX_PredioConsecutivo=this.O413GobMX_PredioFolio=this.Z413GobMX_PredioFolio=this.A413GobMX_PredioFolio=0;this.O415GobMX_Predio_PredNNumC=this.Z415GobMX_Predio_PredNNumC=this.A415GobMX_Predio_PredNNumC=this.O432GobMX_Predio_PredNomc=this.Z432GobMX_Predio_PredNomc=this.A432GobMX_Predio_PredNomc="";this.O433GobMX_Predio_TCoClaveN=this.Z433GobMX_Predio_TCoClaveN=this.A433GobMX_Predio_TCoClaveN=0;this.O435GobMX_Predio_ZonaUTM=
this.Z435GobMX_Predio_ZonaUTM=this.A435GobMX_Predio_ZonaUTM=this.O434GobMX_Predio_Datnum=this.Z434GobMX_Predio_Datnum=this.A434GobMX_Predio_Datnum="";this.O424GobMX_PredioCoo_GEOLoYSN=this.Z424GobMX_PredioCoo_GEOLoYSN=this.O423GobMX_PredioCoo_GEOLoYMN=this.Z423GobMX_PredioCoo_GEOLoYMN=this.O422GobMX_PredioCoo_GEOLoYGN=this.Z422GobMX_PredioCoo_GEOLoYGN=this.O421GobMX_PredioCoo_UTMCordyc=this.Z421GobMX_PredioCoo_UTMCordyc=this.O420GobMX_PredioCoo_UTMCordxc=this.Z420GobMX_PredioCoo_UTMCordxc=this.O419GobMX_PredioCooId=
this.Z419GobMX_PredioCooId=this.O436GobMX_Predio_NoCoordN=this.Z436GobMX_Predio_NoCoordN=this.A436GobMX_Predio_NoCoordN=0;this.O425GobMX_PredioCoo_GEOLongC=this.Z425GobMX_PredioCoo_GEOLongC="";this.O428GobMX_PredioCoo_GEOLaYSN=this.Z428GobMX_PredioCoo_GEOLaYSN=this.O427GobMX_PredioCoo_GEOLaYMN=this.Z427GobMX_PredioCoo_GEOLaYMN=this.O426GobMX_PredioCoo_GEOLaYGN=this.Z426GobMX_PredioCoo_GEOLaYGN=0;this.O429GobMX_PredioCoo_GEOLatiC=this.Z429GobMX_PredioCoo_GEOLatiC="";this.A419GobMX_PredioCooId=0;this.A425GobMX_PredioCoo_GEOLongC=
this.A429GobMX_PredioCoo_GEOLatiC="";this.A428GobMX_PredioCoo_GEOLaYSN=this.A427GobMX_PredioCoo_GEOLaYMN=this.A426GobMX_PredioCoo_GEOLaYGN=this.A424GobMX_PredioCoo_GEOLoYSN=this.A423GobMX_PredioCoo_GEOLoYMN=this.A422GobMX_PredioCoo_GEOLoYGN=this.A421GobMX_PredioCoo_UTMCordyc=this.A420GobMX_PredioCoo_UTMCordxc=0;this.ServerEvents=["e110q26_client","e120q26_client"];this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.VarControlMap.Gx_mode={id:"vMODE",grid:0,type:"char"};this.SetStandaloneVars()}
gobmx_predio.prototype=new gx.GxObject;gx.setParentObj(new gobmx_predio);
