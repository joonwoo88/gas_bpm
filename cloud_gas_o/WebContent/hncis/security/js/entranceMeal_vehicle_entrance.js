var gridParam;
var gridName1 = "htmlTable";
var cn = ["Start", "End", "Vehicle Model", "Renavam", "Color", "Plate", "Driver Name", "Driver License", "Category", "CNH Exp", "Seq",
          "eeno", "apply_date", "purpose", "parking_area", "corp_company", "biz_number", "activity", "charge", "phone", "address", "pgs_st_cd", "if_id", "pgs_st_nm", "reason", "remark", "doc_no", ""];
var datarow = {start_ymd:"", end_ymd:"", model:"", renavam:"", color:"", plate:"", driver_name:"", driver_lic:"", category:"", cnh_exp:"", seq:"", 
			   eeno:"", apply_date:"", purpose:"", parking_area:"", corp_company:"", biz_number:"", activity:"", charge:"", phone:"", address:"", pgs_st_cd:"", if_id:"", pgs_st_nm:"", reason:"", remark:"", doc_no:"", snb_rson_sbc:""};
var cm = [
	{name:"start_ymd",	index:"start_ymd"	, sortable:false,	formatter:"string",		width:85,	align:"left",	editable:false,	frozen : false,
		editoptions: {
			readonly : true,
            dataInit: function(element) {
     		    $(element).datepicker({
     		    	dateFormat: 'dd/mm/yy',
     		    	onSelect: function(dataText, inst){
     		    	}
		    	});
            }
		}
	},
	{name:"end_ymd",	index:"end_ymd"	, sortable:false,	formatter:"string",		width:85,	align:"left",	editable:false,	frozen : false,
		editoptions: {
			readonly : true,
            dataInit: function(element) {
     		    $(element).datepicker({
     		    	dateFormat: 'dd/mm/yy',
     		    	onSelect: function(dataText, inst){
     		    	}
		    	});
            }
		}
	},
//	{name:"start_ymd",		index:"start_ymd"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
//	{name:"end_ymd",		index:"end_ymd"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"model",			index:"model"			, sortable:false,		formatter:"string",		width:190,	align:"left",	editable:false},
	{name:"renavam",		index:"renavam"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"color",			index:"color"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"plate",			index:"plate"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"driver_name",	index:"driver_name"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"driver_lic",		index:"driver_lic"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"category",		index:"category"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},
	{name:"cnh_exp",		index:"cnh_exp"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false},	
	{name:"seq",			index:"seq"				, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"eeno",			index:"eeno"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"apply_date",		index:"apply_date"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"purpose",		index:"purpose"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"parking_area",	index:"parking_area"	, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"corp_company",	index:"corp_company"	, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"biz_number",		index:"biz_number"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"activity",		index:"activity"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"charge",			index:"charge"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"phone",			index:"phone"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"address",		index:"address"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"pgs_st_cd",		index:"pgs_st_cd"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"if_id",			index:"if_id"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"pgs_st_nm",		index:"pgs_st_nm"		, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"reason",			index:"reason"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"remark",			index:"remark"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"doc_no",			index:"doc_no"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true},
	{name:"snb_rson_sbc",	index:"snb_rson_sbc"			, sortable:false,		formatter:"string",		width:85,	align:"left",	editable:false, hidden:true}
];
				
function initSub(){
	var apply_date_temp = "";
	if(parent.$("#eeno_temp").val() == "" || parent.$("#eeno_temp").val() != parent.$("#eeno").val()){
		apply_date_temp = "";
	}else{
		apply_date_temp = dateConversionKr(parent.$("#apply_date").val());
	}
	
	var params = {
		eeno	     : parent.$("#eeno").val(),
		apply_date 	 : apply_date_temp,
		doc_no 		 : parent.$("#hid_doc_no").val(),
		type		 : "1"
	};

	//set grid parameter
	gridParam = { 
		viewEdit : [{
			gridName     : gridName1,
			url          : "doSearchSecurityRequestVehicle.do",
//			url          : "/doSearchToEmpty.do",
			colNames     : cn,
			colModel     : cm,
			height       : "100%",
			sortname     : "",
			sortorder    : "",
			rownumbers   : true,
			multiselect  : false,
			cellEdit     : false,
			fnMerge      : false,
			paramJson    : params,
			completeFc   : "addGridRow(5);loadDataSet();"
		}]
	};
	
	commonJqGridInit(gridParam);
}

function loadDataSet(){
	parent.$("#apply_date").val(getColValue("apply_date", 1));
	parent.$("#purpose").val(getColValue("purpose", 1));
	parent.$("#reason").val(getColValue("reason", 1));
	parent.$("#pgs_st_cd").val(getColValue("pgs_st_cd", 1));
	parent.$("#pgs_st_nm").val(getColValue("pgs_st_nm", 1));
	if(getColValue("doc_no", 1) != ""){
		parent.$("#doc_no").val(getColValue("doc_no", 1));
		parent.$("#hid_doc_no").val(getColValue("doc_no", 1));
	}
	parent.$("#snb_rson_sbc").val(getColValue("snb_rson_sbc", 1));

	$("#parking_area").val(getColValue("parking_area", 1));
	$("#corp_company").val(getColValue("corp_company", 1));
	$("#biz_number").val(getColValue("biz_number", 1));
	$("#activity").val(getColValue("activity", 1));
	$("#charge").val(getColValue("charge", 1));
	$("#phone").val(getColValue("phone", 1));
	$("#address").val(getColValue("address", 1));
	
	resizeIframe();
	
	parent.sbcReadonlySet();
	if(getColValue("if_id", 1)!= ""){
		parent.doSearchRequestInfo(getColValue("if_id", 1));
	}
	
	doSaerchSecurityRemark();
}

function doSaerchSecurityRemark(){
	var keyData = { 
		doc_no : parent.$("#doc_no").val() 
	};
	
	paramData = {
		paramJson : util.jsonToString(keyData)
	};
	
	doCommonAjax("doSaerchSecurityRemark.do", paramData, "searchRemarkCallBack(jsonData.sendResult)");
}

function searchRemarkCallBack(result){
	parent.$("#remark").val(result.remark);
}


function gridRowAdd(){
	var gridRowId = jQuery("#htmlTable").getDataIDs().length;
	jQuery("#htmlTable").jqGrid("addRowData", gridRowId+1, datarow); 

	resizeIframe();
}

function doCudAction(gubun) {
	var url = "";
	var callBack = "actionCallBack(jsonData.sendResult);";
	var params = [];
	var ids = jQuery("#"+gridName1).getDataIDs();
	
	if(gubun == "save"){
		if(!validation(gubun))return;
		
		url = "doInsertSecurityRequestVehicle.do";
	}else if(gubun == "delete"){
		if(sess_mstu != "M" && sess_auth != 5 && parent.$("#eeno").val() != sess_empno && $("#pgs_st_cd").val() != "0"){
			alertUI("삭제할 수 없습니다.");
			return;
		}
		url = "doDeleteSecurityRequestVehicle.do";
	}
	
	var d= new Date();
	var m = d.getMonth() +1;
	var day = d.getDate();
	if(m < 10){ m = "0" + m; }
	if(day < 10){ day = "0" + day; }
	var app_dt = d.getFullYear() + "/" + m + "/" + day;
	if(parent.$("#apply_date").val() != ""){
		app_dt = dateConversionKr(parent.$("#apply_date").val());
	}
	
	if(gubun == "delete"){
		list = {
			eeno     		: parent.$("#eeno").val(),
			apply_date		: app_dt,
			doc_no			: parent.$("#hid_doc_no").val(),
			type			: "1"
		};
		params.push(list);
	}else{
		for(var i = 0; i < ids.length; i++){
			rowId = ids[i];
			if(rowId){
				if(getColValue("start_ymd", rowId) != "" && getColValue("end_ymd", rowId) != ""){
					if(getColValue("model", rowId) == ""){
						alertUI(rowId + " line : Please enter Vehicle Model!");
						return;
					}
					
					list = {
						seq				: $.trim(getColValue("seq", rowId)),
						eeno     		: parent.$("#eeno").val(),
						doc_no			: parent.$("#hid_doc_no").val(),
						apply_date		: app_dt,
						type			: "1",
						purpose 		: parent.$("#purpose").val(),
						parking_area    : $("#parking_area").val(),
						corp_company    : $("#corp_company").val(),
						biz_number      : $("#biz_number").val(),
						activity		: $("#activity").val(),
						charge			: $("#charge").val(),
						phone   		: $("#phone").val(),
						address			: $("#address").val(),
						start_ymd   	: getColValue("start_ymd", rowId),
						end_ymd   		: getColValue("end_ymd", rowId),
						model   		: getColValue("model", rowId),
						renavam   		: getColValue("renavam", rowId),
						color   		: getColValue("color", rowId),
						plate   		: getColValue("plate", rowId),
						driver_name		: getColValue("driver_name", rowId),
						driver_lic 		: getColValue("driver_lic", rowId),
						category   		: getColValue("category", rowId),
						cnh_exp   		: getColValue("cnh_exp", rowId),
						pgs_st_cd   	: "0",
						reason			: parent.$("#reason").val(),
						remark			: overLineHtml(changeToUni(parent.$("#remark").val())),
						ipe_eeno    	: sess_empno,
						updr_eeno   	: sess_empno
					};
					params.push(list);
				}
			}
		}
	}
	
	if(params.length == 0){
		alertUI("Please enter Start, End, Vehicle Model!");
		return;
	}
	
	confirmUI("Do you want to "+gubun+"?");
	$("#pop_yes").click(function(){
		$.unblockUI({
			onUnblock: function(){
				var paramData = {
						paramJson : util.jsonToList(params)
					};
					doCommonAjax(url, paramData, callBack);
			}
		});
	});
}

function actionCallBack(result){
	setBottomMsg(result.message, true);
	parent.$("#hid_doc_no").val(result.code1);
	parent.$("#doc_no").val(result.code1);
	if(null != result.code2 && result.code2 != ""){
		parent.$("#eeno").val(result.code2);
		parent.$("#eeno_temp").val(result.code2);
	}
	if(null != result.code && result.code != ""){
		parent.$("#apply_date").val(result.code.substring(8,10)+"/"+result.code.substring(5,7)+"/"+result.code.substring(0,4));
	}
	
	parent.SubmitClear();
	
	doSearch("N");
}

function doSearch(msgFlag){
	var apply_date_temp = "";
	
	if(parent.$("#eeno_temp").val() == "" || parent.$("#eeno_temp").val() != parent.$("#eeno").val()){
		apply_date_temp = "";
	}else{
		apply_date_temp = dateConversionKr(parent.$("#apply_date").val());
	}
	
	var params = {
		eeno	     : parent.$("#eeno").val(),
		doc_no		 : parent.$("#hid_doc_no").val(),
		apply_date 	 : apply_date_temp,
		type		 : "1"
	};
	doCommonSearch("doSearchSecurityRequestVehicle.do", util.jsonToString(params), "addGridRow(5);loadDataSet();", gridName1, msgFlag);
}

function doApprove(gubun){
	var url = "";
	var callBack = "";
	var pgs_st_cd = "";
	if(gubun == "request"){
		url = "doApproveSecurityRequest.do";
		callBack = "approveCallBack('"+gubun+"', jsonData.sendResult);";
		pgs_st_cd = "A";
	}else if(gubun == "requestCancel"){
		url = "doApproveCancelSecurityRequest.do";
		callBack = "approveCallBack('"+gubun+"', jsonData.sendResult);";
	}
	
	var bsicInfo;
	if(gubun == "request"){
		bsicInfo = {
			key_mode      : gubun,
			key_eeno      : parent.$("#eeno").val(),
			key_req_date  : dateConversionKr(parent.$("#apply_date").val()),
			key_pgs_st_cd : pgs_st_cd,
			doc_no		  : parent.$("#hid_doc_no").val(),
			type		  : "1",
			updr_eeno     : sess_empno
		};
	}else{
		bsicInfo = {
			if_id     : getColValue("if_id", 1),
			updr_eeno : sess_empno
		};
	}
	confirmUI("Do you want to "+gubun+"?");
	$("#pop_yes").click(function(){
		$.unblockUI({
			onUnblock: function(){
				var paramData = {
						bsicInfo : util.jsonToString(bsicInfo)
					};
					doCommonAjax(url, paramData, callBack);
			}
		});
	});
}
 
function approveCallBack(gubun, result){
	setBottomMsg(result.message, true);
	parent.SubmitClear();
	doSearch("N");
}

function doConfirm(){
	var bsicInfo = {
		key_mode      : "confirm",
		key_eeno      : parent.$("#eeno").val(),
		key_req_date  : dateConversionKr(parent.$("#apply_date").val()),
		key_pgs_st_cd : "3",
		type		  : "1",
		doc_no		  : parent.$("#hid_doc_no").val(),
		updr_eeno     : sess_empno
	};
	
	confirmUI("확정 하시겠습니까?");
	$("#pop_yes").click(function(){
		$.unblockUI({
			onUnblock: function(){
				var paramData = {
						bsicInfo : util.jsonToString(bsicInfo)
					};
					doCommonAjax("doConfirmSecurityRequestVehicle.do", paramData, "confirmCallBack(jsonData.sendResult);");
			}
		});
	});
}

function doConfirmCancel(){
	if($("#rq_imtr_sbc").val() == ""){
		alertUI("Please enter the reason for confirm cancel in Note.");
		return;
	}
	
	var bsicInfo = {
		key_mode      : "confirmCancel",
		key_eeno      : parent.$("#eeno").val(),
		key_req_date  : dateConversionKr(parent.$("#apply_date").val()),
		key_pgs_st_cd : "0",
		type		  : "1",
		doc_no		  : parent.$("#hid_doc_no").val(),
		snb_rson_sbc  : parent.$("#snb_rson_sbc").val(),
		updr_eeno     : sess_empno
	};
	
	confirmUI("신청 취소사유를 입력하세요.\n신청 취소하시겠습니까?");
	$("#pop_yes").click(function(){
		$.unblockUI({
			onUnblock: function(){
				var paramData = {
						bsicInfo : util.jsonToString(bsicInfo)
					};
					doCommonAjax("doConfirmCancelSecurityRequestVehicle.do", paramData, "confirmCallBack(jsonData.sendResult);");
			}
		});
	});
}

function confirmCallBack(result){
	setBottomMsg(result.message, true);
	parent.SubmitClear();
	doSearch("N");
}

function validation(gubun){
	if(parent.$("#eeno").val().length < 7){
		alertUI("Please enter your Id number!");
		$("#eeno").focus();
		return false;
	}
//	if(parent.$("#purpose").val() == ""){
//		alertUI("Please enter Purpose!");
//		parent.$("#purpose").focus();
//		return false;
//	}
	if($("#parking_area").val() == ""){
		alertUI("Please enter Parking area!");
		$("#parking_area").focus();
		return false;
	}
	if($("#corp_company").val() == ""){
		alertUI("Please enter Corporate Name of the Company!");
		$("#corp_company").focus();
		return false;
	}
	if($("#biz_number").val() == ""){
		alertUI("Please enter Biz Number!");
		$("#biz_number").focus();
		return false;
	}
	if($("#activity").val() == ""){
		alertUI("Please enter Main Activity!");
		$("#activity").focus();
		return false;
	}
	if($("#charge").val() == ""){
		alertUI("Please enter Person in Charge for!");
		$("#charge").focus();
		return false;
	}
	if($("#phone").val() == ""){
		alertUI("Please enter Phone!");
		$("#phone").focus();
		return false;
	}
	if($("#address").val() == ""){
		alertUI("Please enter address!");
		$("#address").focus();
		return false;
	}
	return true;
}

function resizeIframe(){
	var doc = document.getElementById("contents");
	parent.document.getElementById("ifra").height = doc.offsetHeight + "px";
}

var win;
function doFileAttach(){
	if(win != null){ win.close(); }
	var url = "xve_file.gas", width = "460", height = "453";
	
	if(parent.$("#hid_doc_no").val() == ""){
		$("#file_doc_no").val(parent.$("#temp_doc_no").val());
	}else{
		$("#file_doc_no").val(parent.$("#hid_doc_no").val());
	}
	$("#file_eeno").val("00000000");

	if($("#work_auth").val() < 5 && sess_mstu != "M"){ 
		if( $("#pgs_st_cd").val() == ""){
			$("#hid_use_yn").val("Y"); 
		}else if(sess_empno == $("#eeno").val()){
			if($("#pgs_st_cd").val() == "0"){
				$("#hid_use_yn").val("Y"); 
			}else{
				$("#hid_use_yn").val("N");   
			}
		}else{
			$("#hid_use_yn").val("N");  
		}
	}else{
		$("#hid_use_yn").val("Y");
	}

	win = newPopWin("about:blank", width, height, "win_file");
	document.fileForm.hid_csrfToken.value = $("#csrfToken").val();
	document.fileForm.action = url;
	document.fileForm.target = "win_file"; 
	document.fileForm.method = "post"; 
	document.fileForm.submit();
}

function fnCopy(gubun) {
	if(parent.$("#pgs_st_cd").val() == ""){
		alertUI("can't copy");
		return;
	}
	var url = "doInsertSecurityRequestVehicleCopy.do";
	var callBack = "actionCallBack(jsonData.sendResult);";
	var params = [];
	var ids = jQuery("#"+gridName1).getDataIDs();
	
	var d= new Date();
	var m = d.getMonth() +1;
	var day = d.getDate();
	if(m < 10){ m = "0" + m; }
	if(day < 10){ day = "0" + day; }
	var app_dt = d.getFullYear() + "/" + m + "/" + day;
	
	for(var i = 0; i < ids.length; i++){
		rowId = ids[i];
		if(rowId){
			if(getColValue("start_ymd", rowId) != "" && getColValue("end_ymd", rowId) != "" && getColValue("model", rowId) != ""){
				list = {
					seq				: "",
					eeno     		: parent.$("#eeno").val(),
					doc_no			: "",
					apply_date		: app_dt,
					type			: "1",
					purpose 		: parent.$("#purpose").val(),
					parking_area    : $("#parking_area").val(),
					corp_company    : $("#corp_company").val(),
					biz_number      : $("#biz_number").val(),
					activity		: $("#activity").val(),
					charge			: $("#charge").val(),
					phone   		: $("#phone").val(),
					address			: $("#address").val(),
					start_ymd   	: getColValue("start_ymd", rowId),
					end_ymd   		: getColValue("end_ymd", rowId),
					model   		: getColValue("model", rowId),
					renavam   		: getColValue("renavam", rowId),
					color   		: getColValue("color", rowId),
					plate   		: getColValue("plate", rowId),
					driver_name		: getColValue("driver_name", rowId),
					driver_lic 		: getColValue("driver_lic", rowId),
					category   		: getColValue("category", rowId),
					cnh_exp   		: getColValue("cnh_exp", rowId),
					pgs_st_cd   	: "0",
					reason			: parent.$("#reason").val(),
					remark			: overLineHtml(changeToUni(parent.$("#remark").val())),
					ipe_eeno    	: sess_empno,
					updr_eeno   	: sess_empno
				};
				params.push(list);
			}
		}
	}
	
	confirmUI("복사 하시겠습니까?");
	$("#pop_yes").click(function(){
		$.unblockUI({
			onUnblock: function(){
				var paramData = {
						paramJson : util.jsonToList(params)
					};
					doCommonAjax(url, paramData, callBack);
			}
		});
	});
}
