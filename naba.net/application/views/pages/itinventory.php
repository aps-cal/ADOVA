<!DOCTYPE html>

<div class="content">
    <fieldset id="ListIT"><legend>Equipment List</legend>
        <form name="computers" id="computers" action="/" method="post"><input name="ListOrder" type="hidden" id="ListOrder" value="Location" />
<table>
<thead>
<tr><th><input id="New" type="button" value="NEW" />&nbsp;<input id="ExportData" type="button" value="Export" /> [<span id="ITS_User"></span>]</th><th colspan="7">To edit a record select the radio button to left of its status or click [New] to add a new record. The list may be ordered by clicking headings and filtered using dropdowns.</th></tr>
<tr id="Heading"><!--<th><input type="button" value="ALTag" onclick="Reorder('AL_TAG');" width="100%" /></th>--><th><input type="button" value="Status" onclick="Reorder('Status, Location');" style="width: 100%;" /></th><th><input type="button" value="Location" onclick="Reorder('Location,User');" style="width: 100%;" /></th><th><input type="button" value="User" onclick="Reorder('User,Location');" style="width: 100%;" /></th><th><input type="button" value="Type" onclick="Reorder('Type,Make,Model,Serial_No');" style="width: 100%;" /></th><th><input type="button" value="Make" onclick="Reorder('Make,Model,Serial_No');" style="width: 100%;" /></th><th><input type="button" value="Model" onclick="Reorder('Model,Serial_No');" style="width: 100%;" /></th><th><input type="button" value="Serial No" onclick="Reorder('Serial_No');" style="width: 100%;" /></th><th><input type="button" value="Device Name" onclick="Reorder('Type,Computer_Name');" style="width: 100%;" /></th><!--<th><input type="button" value="Tag No." onclick="Reorder('Tag_No');" style="width:100%; /></th>--></tr>
<tr><!--<td>&nbsp;</td>-->
<td><select class="Filter" name="Status" id="Status">
<option></option>
</select></td>
<td><select class="Filter" name="Location" id="Location">
<option></option>
</select></td>
<td><select class="Filter" name="User" id="User">
<option></option>
</select></td>
<td><select class="Filter" name="Type" id="Type">
<option></option>
</select></td>
<td><select class="Filter" name="Make" id="Make">
<option></option>
</select></td>
<td><select class="Filter" name="Model" id="Model">
<option></option>
</select></td>
<td><select class="Filter" name="Serial_No" id="Serial_No">
<option></option>
</select></td>
<td><select class="Filter" name="Computer_Name" id="Computer_Name">
<option></option>
</select></td>
<!-- <td><select class="Filter" name="Tag_No" id="Tag_No">
              <option></option>
</select> </td>--></tr>
</thead>
<tbody id="Computers"></tbody>
<tfoot></tfoot>
</table>
<div id="Message"></div>
<span id="SQL"></span>
</form></fieldset>
<fieldset id="EditIT" style="border-width: 1px; border-style: line; border-color: #000000; visbility: hidden; display:none;"><legend>Equipment Record</legend><form id="equipment" name="equipment" action="/" method="post"><input name="ALTag" type="hidden" id="ALTag" />
<table id="tblequipment" style="border: 1px #000000; margin: 2px;">
<tbody>
<tr>
<td>Type</td>
<td><input id="txtType" name="Type" type="text" /></td>
<td>Location</td>
<td><input id="txtLocation" name="Location" type="text" /></td>
</tr>
<tr>
<td>Make</td>
<td><input id="txtMake" name="Make" type="text" /></td>
<td>User/Usage</td>
<td><input id="txtUser" name="User" type="text" /></td>
</tr>
<tr>
<td>Model</td>
<td><input id="txtModel" name="Model" type="text" /></td>
<td>Status</td>
<td><input id="txtStatus" name="Status" type="text" /></td>
</tr>
<tr>
<td>Serial_No</td>
<td><input id="txtSerial_No" name="Serial_No" type="text" /></td>
<td>Tag No</td>
<td><input id="txtTag_No" name="Tag_No" type="text" /></td>
</tr>
<tr>
<td>OS</td>
<td><input id="txtOS" name="OS" type="text" /></td>
<td>Computer Name</td>
<td><input id="txtComputer_Name" name="Computer_Name" type="text" /></td>
</tr>
<tr>
<td>ITS Managed</td>
<td><input id="txtITS" name="txtITS" type="text" /></td>
<td>ITS Std Image</td>
<td><input id="txtStd_Image" name="txtStd_Image" type="text" /></td>
</tr>
<tr>
<td>Description</td>
<td colspan="3"><input class="Notes" id="txtDescription" name="txtDescription" type="text" style="width: 100%;" /></td>
</tr>
<tr>
<td>Notes</td>
<td colspan="3"><input class="Notes" id="txtNotes" name="txtNotes" type="text" style="width: 100%;" /></td>
</tr>
<tr></tr>
<tr>
<td nowrap="nowrap">Entered Date/By</td>
<td nowrap="nowrap"><input class="Logging" id="EnteredDate" name="EnteredDate" type="text" /> <input class="Logging" id="EnteredBy" name="EnteredBy" type="text" /></td>
<td nowrap="nowrap">Dumped Date/By</td>
<td nowrap="nowrap"><input class="Logging" id="DumpedDate" name="DumpedDate" type="text" /> <input class="Logging" id="DumpedBy" name="DumpedBy" type="text" /></td>
</tr>
<tr>
<td nowrap="nowrap">Audited Date/By</td>
<td nowrap="nowrap"><input class="Logging" id="CheckedDate" name="CheckedDate" type="text" /> <input class="Logging" id="CheckedBy" name="CheckedBy" type="text" /></td>
<td nowrap="nowrap">Updated Date/By</td>
<td nowrap="nowrap"><input class="Logging" id="UpdatedDate" name="UpdatedDate" type="text" /> <input class="Logging" id="UpdatedBy" name="UpdatedBy" type="text" /></td>
</tr>
<tr>
<td colspan="4"><hr /></td>
</tr>
<tr>
<td>&nbsp;</td>
<td nowrap="nowrap">Quick Actions</td>
<td nowrap="nowrap"><input id="New" type="button" value="*New" /> <input id="ToDump" type="button" value="To Dump" /> <input id="Dumped" type="button" value="DUMPED" /> <input id="Move" type="button" value="Move" /> <input id="Edit" type="button" value="Edit" /></td>
<td align="right"><input id="Cancel" type="button" value="Cancel" /> <input id="Save" type="button" value="SAVE" /></td>
</tr>
</tbody>
</table>
</form></fieldset></div>
<!-- End Content -->
<script type="text/javascript" src="https://aldb.warwick.ac.uk/application/scripts/itinventory.js">// <![CDATA[

// ]]></script>
<script language="javascript" type="text/javascript">// <![CDATA[
function ShowOnlyRow(TableID,RowID){
   //alert(TableID);
   var t = document.getElementById(TableID);
   //alert(t.id);
   var l = t.rows.length;
   //alert(l);
   for(i=0; i<=l; i++){
      //alert(t.rows[i].id);
      if(String(t.rows[i].id).substring(0,6)=='Detail'){
         t.rows[i].style.display='none';
         //alert(String(t.rows[i].id).substring(6));
         if(String(t.rows[i].id).substring(6)==RowID){
            t.rows[i].style.display='';
         }
      }
   }
}
function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }   
}
/*
var hide= true;
function ShowhideRows(tableId){
var t = document.getElementById(tableId);
var len = t.rows.length;
var rowStyle = (hide)? "none":"";
for(i=1 ; i< len; i++){
t.rows[i].style.display = rowStyle;
}
}
*/
// ]]></script>
<script type="text/javascript">// <![CDATA[
/*********
	* Toggle *
	*********/
	function Toggle(field,value) {
		var item, opts = {};
		var result='<select class="Toggle" id="txt'+field+'" >';	
		result+='<option value="N">No</option><option value="Y">Yes</option></select>';
		return(result);
	}
	/********
	* Alist * Little pair of functions to create and work a Combo class 
	********/
	function Alist(field,options,value) {
		var item, opts = {};
		if(typeof(value) == "undefined"){value='';}
		var result='<input class="Alist" type="text" id="txt'+field+'" name="txt'+field+'" value="'+value+'" onchange="oAlist(this);" style="display:none;"/>'
			+'<select class="Alist" id="lst'+field+'" onChange="oAlist(this);" >';
		opts = options;
		for (index = 0; index < opts.length; ++index) {
			opt = opts[index];
			fld = opt[field];
			result+="<option>"+fld+"</option>";
		}
		result+="<option>Other...</option>";
		result+='</select>';
		return(result);
	}
	function oAlist(obj) {
		$obj = obj.id;
		btn = "#btn"+$obj.substr(3);
		txt = "#txt"+$obj.substr(3);
		lst = "#lst"+$obj.substr(3);
		// Which object called the function?
		if(obj.id.substr(0,3) === 'txt'){
			if($(txt).val()!='Other...' && $(txt).val()!=''){
				//$(btn).height($(txt).height());
				//$(lst).width($(txt).width()+$(btn).width()+2);
				//$(lst).children().height($(txt).height());
				$(lst).show();
				$val = $(txt).val();
				$(lst).append("<option>"+$val+"</option>");
				$(lst).val($val);
				$(lst).focus();
				$(txt).hide();
				//$(btn).hide();
			}		
		}
		if(obj.id.substr(0,3) === 'lst'){
			if($(lst).val()=='Other...'){
				$(txt).height($(lst).height());
				$(txt).width($(lst).width());
				$(txt).show();
				$val = $(lst).val();
				$(txt).val($val);
				$(txt).focus();
				$(lst).hide();
				//$(btn).show();
			} else {
				$val = $(lst).val();
				$(txt).val($val);
			}
		}
	}	
	/********
	* COMBO * Little pair of functions to create and work a Combo class 
	********/
	function Combo(field,options,value) {
		var item, opts = {};
		if(typeof(value) == "undefined"){value='';}
		var result='<input class="Combo" type="text" id="txt'+field+'" name="txt'+field+'" value="'+value+'"/>'
			   +'<input class="Combo" type="button" id="btn'+field+'" value="V" onclick="oCombo(this);" />'
		+'<select class="Combo"id="lst'+field+'" onchange="oCombo(this);" style="display:none;">';	
		opts = options;
		for (index = 0; index < opts.length; ++index) {
			opt = opts[index];
			fld = opt[field];
			result+="<option>"+fld+"</option>";
		}
		//for(var i in opts){
		//	result+='<option>'+opts[i]+'</option>';
	//	}		   
		result+='</select>';
		return(result);
	}
	function oCombo(obj) {
		$obj = obj.id;
		btn = "#btn"+$obj.substr(3);
		txt = "#txt"+$obj.substr(3);
		lst = "#lst"+$obj.substr(3);
		// Which object called the function?
		if(obj.id.substr(0,3) === 'btn'){
			$(btn).height($(txt).height());
			$(lst).width($(txt).width()+$(btn).width()+2);
			$(lst).children().height($(txt).height());
			$(lst).show();
			$val = $(txt).val();
			$(lst).val($val);
			$(lst).focus();
			$(txt).hide();
			$(btn).hide();
		}
		if(obj.id.substr(0,3) === 'lst'){
			$(btn).height($(lst).height());
			//$(txt).width($(lst).width()-$(btn).width());
			$(txt).show();
			$val = $(lst).val();
			$(txt).val($val);
			$(txt).focus();
			$(lst).hide();
			$(btn).show();
		}
	}	
	function Options(field,options,value) {
		var item, opts = {};
//		var result='<input class="Combo" type="text" id="txt'+field+'" name="'+field+'" value="'+value+'"/>'
//			   +'<input class="Combo" type="button" id="btn'+field+'" value="V" onclick="oCombo(this);" />'
//		+'<select class="Combo"id="lst'+field+'" onchange="oCombo(this);" style="display:none;">';	
		opts = options;
		var result = '<option/>';
		for (index = 0; index < opts.length; ++index) {
			opt = opts[index];
			fld = opt[field];
			result+="<option>"+fld+"</option>";
		}
//		result+='</select>';
		return(result);
	}
// ]]></script>
<script type="text/javascript">// <![CDATA[
$(document).ready(function(){
		//var data = {}, user = {};	
		$.ajax({
			type: 'GET',
			url: '//aldb.warwick.ac.uk/jsonp/computers',
			//data: {field: 'value'},
			dataType: 'jsonp',
			crossDomain: true,
			jsonp: 'data',
			jsonpCallback: 'data',
			xhrFields: {// If you want to carry over the SSO token
				withCredentials: true 
			}
    	}).done(function(data){
        	//alert(JSON.stringify(data,'',2));
		//	user = data.UserData;
		//	$("#ITS").append('<b>'+user.user+'</b>');
			$.fn.loaddata(data);	
    	}).fail(function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				alert("External content loaded successfully!");
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});
	
	$.fn.loaddata = function( data ) {
		var rowSummary = '', rowDetail = '';
		var YesNo = ['Y','N'];
		//alert(JSON.stringify(data,'',2));
		//$("#Academic_Year").val(data.Academic_Year);
		//$("#Academic_Term").val(data.Academic_Term);
		$("#ListOrder").val(data.ListOrder);
		//$("#ITS_User").append('.');
//		$("#SQL").empty().append('<p> SQL: '+data.sql+'</p>');
                if(data.message){
                   $("#Message").empty().append('<p>'+data.message+'</p>')
                   //.append('<p> Error: '+data.error+'</p>');
                }
		// Load Filter Dropdowns 
		$html = Options("Status",data.statuses,data.Status);
		$("#Status").empty().append($html).val(data.Status);
		$html = Options("Location",data.locations,data.Location);
		$("#Location").empty().append($html).val(data.Location);
		$html = Options("User",data.users,data.User);
		$("#User").empty().append($html).val(data.User);
		$html = Options("Type",data.types,data.Type);
		$("#Type").empty().append($html).val(data.Type);
		$html = Options("Make",data.makes,data.Make);
		$("#Make").empty().append($html).val(data.Make);
		$html = Options("Model",data.models,data.Model);
		$("#Model").empty().append($html).val(data.Model);
		$html = Options("Serial_No",data.serials,data.Serial_No);
		$("#Serial_No").empty().append($html).val(data.Serial_No);
		$html = Options("Computer_Name",data.compnames,data.Computer_Name);
		$("#Computer_Name").empty().append($html).val(data.Computer_Name);
		//$html = Options("Tag_No",data.tags,data.Tag_No);
		//$("#Tag_No").empty().append($html).val(data.Tag_No);
		$('#Computers').empty();
		for (index = 0; index < data.computers.length; ++index) {
    		cpu = data.computers[index];
			rowSummary = '<tr id="Summary">'
			+'<td align="left"><input name="AL_Tag" value="'+cpu['ALTAG']+'" type="radio"/>'
			+ '  '+cpu['Status'] + '</td>' 
			+ '<td>'+cpu['Location'] + '</td>'
			+ '<td>'+cpu['User'] + '</td>'
      		+ '<td>'+cpu['Type'] + '</td>'
			+ '<td>'+cpu['Make'] + '</td>'
      		+ '<td>'+cpu['Model'] + '</td>'
			+ '<td>'+cpu['Serial_No'] + '</td>'
			+ '<td>'+cpu['Computer_Name'] + '</td>'
      		//+ '<td>'+cpu['Tag_No'] + '</td>'		
      		+'</tr>';
			$('#Computers').append(rowSummary);	
		}
		$("input:radio").click(function(){getEquip();});
	};
		
	function Reorder($cols){
		if($('#ListOrder').val() == $cols){
			if($cols.indexOf(',')>0){
				$cols = $cols.substring(0,$cols.indexOf(','));
			}
			$cols+=' DESC';
		} 
		$('#ListOrder').val($cols);
		$.fn.submitForm();
	}
	$(".Filter").change(function(e){
		$.fn.submitForm();					 
	});
	/* attach a submit handler to the form */
//   $("form").submit(function(event) {
// 		/* stop form from submitting normally */
//        event.preventDefault();
//		$.fn.submitform(data);
//	});

	
	$.fn.submitForm = function(){
		//var data = {}, user = {};
		
		var formdata = $("#computers").serialize();
		//alert($("#computers").serializeObject());
		//var formData = JSON.stringify($("#computers").serializeObject());
		formdata = '&'+formdata
		
		//alert(formdata);
		$.ajax({
			type: 'GET',
			url: '//aldb.warwick.ac.uk/jsonp/computers',
			data: formdata, //'&ListOrder=Serial_No&Location=S1.84', //&User=&Type=&Make=&Model=&Serial_No=&Tag_No=&Status=', //'', //formdata,
			// Note: it looks like there is a problem caused by empty entries being returned
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'jsonp',
			crossDomain: true,
			jsonp: 'data',
			jsonpCallback: 'data',
			xhrFields: {// If you want to carry over the SSO token
				withCredentials: true 
			}
		}).success(function(data){
			//alert(JSON.stringify(data,'',2));
			$.fn.loaddata(data);	
		}).fail(function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				alert("External content loaded successfully!");
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	};
	
	$("#New").click(function(e){
		//Clear the Selected Record
		$("input[name='AL_Tag']").prop("checked",false);
		$("input[name='AL_Tag']").val(0);
		getEquip();
	});

        $("#ExportData").click(function(e){
		//Clear the Selected Record
		//$("input[name='AL_Tag']").prop("checked",false);
		//$("input[name='AL_Tag']").val(0);
                //alert("Clicked");
		getExport();
	});

        function getExport(){
		//var data = {}, user = {};
		
		var formdata = $("#computers").serialize();
		//alert($("#computers").serializeObject());
		//var formData = JSON.stringify($("#computers").serializeObject());
		formdata = '&'+formdata
		
		//alert(formdata);
		$.ajax({
			type: 'GET',
			url: '//aldb.warwick.ac.uk/jsonp/export',
			data: formdata, //'&ListOrder=Serial_No&Location=S1.84', //&User=&Type=&Make=&Model=&Serial_No=&Tag_No=&Status=', //'', //formdata,
			// Note: it looks like there is a problem caused by empty entries being returned
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'jsonp',
			crossDomain: true,
			jsonp: 'data',
			jsonpCallback: 'data',
			xhrFields: {// If you want to carry over the SSO token
				withCredentials: true 
			}
		}).success(function(data){
			//alert(JSON.stringify(data,'',2));
			//$.fn.exportData(data);
                        exportData(data);
                        //$("#computers").hide();	
                        //$.fn.loaddata(data);	
		}).fail(function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				alert("External content loaded successfully!");
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	};

        function exportData(data){
	//$.fn.exportData = function( data ) {
           //$csvfile = fopen("php://IT_Inventory_Export_".date("Ymd").".csv",'w');
           //$csvfile = fopen("php://IT_Inventory_Export.csv",'w');
           
           $csv = "";
           $firstLineFields = '';
           for (index = 0; index < data.computers.length; ++index) {
              $line = data.computers[index];
           //$lines = data.computers;
           //foreach($lines as $line){
              if($firstLineFields==''){
                 $firstLineFields = array_keys($line);
                 $csv+=implode(", ",$firstLineFields);
                 //fputcsv($csvfile,firstLineFields);
                 $firstLineFields = array_flip($firstLineFields);
                 // Alternative to the above might be ... 
                 // using reset to move array pointer back to start.
                 // fputcsv($csvfile,array_keys(reset($line));
                 // But would still need to add $firstLineFields = true;
              }
              $csv+=implode(", ",array_merge($firstLineFields,$line));
              //fputscv($csvfile, array_merge($firstLineFields,$line));
           }
           // Move file point to the begiining
           //rewind($csvfile);
           //$fstat = fstat($csvfile);
           //setHeader($csvfile,$fstat['size']);
           //fclose($csvfile);
           window.open("data:text/csv;charset=utf-8,"+escape($csv));
        };


        function setHeader($filename, $filesize){
           // disable caching
           $now = gmdate("D, d M Y H:i:s");
           header("Expires: Tue, 01 Jan 2001 00:00:01 GMT");
           header("Cache-Control: max-age-0, no-cache, must-revalidate, proxy-revalidate");
           header("Last-Modified: {$now} GMT");

           // force download
           header("Content-Type: application/force-download");
           header("Content-Type: application/octet-stream");
           header("Content-Type: application/download");
           header("Content-Type: text/x-csv");

           // disposition / encoding on response body
           if(isset($filename) && strlen($filename) > 0)
              header("Content-Disposition: attachment; filename={$filename}");
           if(isset($filesize))
              header("Content-Length: ".$filesize);
           header("Content-Transfer-Encoding: binary");
           header("Connection: close");
        }
	
	function getEquip(){
		var alTag = $("input[name='AL_Tag']:checked").val();
		if(alTag){//alert("alTag = "+alTag+" ");
		} else {alTag = 0;}
		
		//var formdata = $("#equipment").serialize();
		//alert($("#equipment").serializeObject());
		//var formData = JSON.stringify($("#equipment").serializeObject());
		var formdata = $("#computers").serialize();
		formdata = '&'+formdata+'&ALTag='+alTag;
			//alert(formdata);
			$.ajax({
				type: 'GET',
				url: '//aldb.warwick.ac.uk/jsonp/getequipment',
				data: formdata, 
				contentType: 'application/x-www-form-urlencoded',
				dataType: 'jsonp',
				crossDomain: true,
				jsonp: 'data',
				jsonpCallback: 'data',
				xhrFields: {// If you want to carry over the SSO token
					withCredentials: true 
				}
			}).success(function(data){
				$("#ListIT").hide();
				$("#EditIT").show();
				$("fieldset#EditIT").show();
				$.fn.loadequip(data);	
			}).fail(function(responseTxt, statusTxt, xhr){
				$("#ListIT").show();
				$("#EditIT").show();
				$("fieldset#EditIT").show();
				if(statusTxt == "success")
					alert("External content loaded successfully!");
				if(statusTxt == "error")
					alert("Error: " + xhr.status + ": " + xhr.statusText);
			});
		//}
	};
	
	$.fn.loadequip = function( data ) {
		var rowSummary = '', rowDetail = '';
		var equip = data.equip;
		//alert(JSON.stringify(data,'',2));
		//$("#Academic_Year").val(data.Academic_Year);
		//$("#Academic_Term").val(data.Academic_Term);
		
		
		//alert($html);
		// This more complex code was supposed to handle replace HTML where there was more than one child
		//$('input#txtType').clone().wrap('<span>').parent().html($html);

		$("#ALTag").val(data.equip.ALTag);
		
		// Combos
		//$html = Combo("Type",data.types,data.equip.Type);
		//$("input#txtType").parent().html($html);
		//$html = Combo("Make",data.makes,data.equip.Make);
		//$("input#txtMake").parent().html($html);
		$html = Combo("Model",data.models,data.equip.Model);
		$("input#txtModel").parent().html($html);
		$html = Combo("Location",data.locations,data.equip.Location);
		$("input#txtLocation").parent().html($html);
		$html = Combo("User",data.users,data.equip.User);
		$("input#txtUser").parent().html($html);
		//$html = Combo("Status",data.statuses,data.equip.Status);
		//$("input#txtStatus").parent().html($html);
		$html = Combo("Serial_No",data.serials,data.equip.Serial_No);
		$("input#txtSerial_No").parent().html($html);
		$html = Combo("Tag_No",data.tags,data.equip.Tag_No);
		$("input#txtTag_No").parent().html($html);
		//$html = Combo("OS",data.oss,data.equip.OS);
		//$("input#txtOS").parent().html($html);
		$html = Combo("Computer_Name",data.compnames,data.equip.Computer_Name);
		$("input#txtComputer_Name").parent().html($html);
		// AddLists
		$html = Alist("Type",data.types,data.equip.Type);
		$("input#txtType").parent().html($html);
		$("#lstType").val(data.equip.Type).prop('disabled', true);
		$html = Alist("Make",data.makes,data.equip.Make);
		$("input#txtMake").parent().html($html);
		$("#lstMake").val(data.equip.Make).prop('disabled', true);
		//$html = Alist("Model",data.models,data.equip.Model);
		//$("input#txtModel").parent().html($html);
		//$("#lstModel").val(data.equip.Model).prop('disabled', true);
		//$html = Alist("Location",data.locations,data.equip.Location);
		//$("input#txtLocation").parent().html($html);
		//$("select#lstLocation.Alist").val(data.equip.Location).prop('disabled', true);
		//$html = Alist("User",data.users,data.equip.User);
		//$("input#txtUser").parent().html($html);
		//$("select#lstUser.Alist").val(data.equip.User).prop('disabled', true);
		$html = Alist("Status",data.statuses,data.equip.Status);
		$("input#txtStatus").parent().html($html);
		$("select#lstStatus.Alist").val(data.equip.Status).prop('disabled', true);
		//$html = Alist("Serial_No",data.serials,data.equip.Serial_No);
		//$("input#txtSerial_No").parent().html($html);
		//$("#lstSerial_No").val(data.equip.Serial_No).prop('disabled', true);
		//$html = Alist("Tag_No",data.tags,data.equip.Tag_No);
		//$("input#txtTag_No").parent().html($html);
		//$("#lstTag_No").val(data.equip.Tag_No).prop('disabled', true);
		$html = Alist("OS",data.oss,data.equip.OS);
		$("input#txtOS").parent().html($html);
		$("#lstOS").val(data.equip.OS).prop('disabled', true);
		//$html = Alist("Computer_Name",data.compnames,data.equip.Computer_Name);
		//$("input#txtComputer_Name").parent().html($html);
		//$("#lstComputer_Name").val(data.equip.Computer_Name).prop('disabled', true);
	
		
		
		// Toggles
		$html = Toggle("Std_Image",data.Std_Image);
		$("input#txtStd_Image").parent().html($html);
		$html = Toggle("ITS",data.ITS);
		$("input#txtITS").empty().parent().html($html);
		$("#Description").val(data.equip.Description).prop('disabled', true);
		$("#Notes").val(data.equip.Notes).prop('disabled', true);
		$("#EnteredDate").val(data.equip.Entered_Date).prop('disabled', true);
		$("#EnteredBy").val(data.equip.Entered_By).prop('disabled', true);
		$("#DumpedDate").val(data.equip.Dumped_Date).prop('disabled', true);
		$("#DumpedBy").val(data.equip.Dumped_By).prop('disabled', true);
		$("#CheckedDate").val(data.equip.Checked_Date).prop('disabled', true);
		$("#CheckedBy").val(data.equip.Checked_By).prop('disabled', true);
		$("#UpdatedDate").val(data.equip.Updated_Date).prop('disabled', true);
		$("#UpdatedBy").val(data.equip.Updated_By).prop('disabled', true);
		$(".Combo").prop('disabled', true);
		$(".Alist").prop('disabled', true);
		$(".Toggle").prop('disabled', true);
	};
	
	$("input#Move").click(function(e){
		$("#txtLocation").prop('disabled', false);
		$("#btnLocation").prop('disabled', false);
		$("#lstLocation").prop('disabled', false);
		$("#txtUser").prop('disabled', false);
		$("#btnUser").prop('disabled', false);
		$("#lstUser").prop('disabled', false);
		$("#txtLocation").focus();
			
	});
	$("input#ToDump").click(function(e){
		if(confirm('Are you sure this item is to be dumped?')){
			$(".Combo").prop('disabled', false);
			$(".Alist").prop('disabled', false);
			$(".Toggle").prop('disabled', false);
			$(".Notes").prop('disabled', false);	
			$("#txtStatus").val('To Dump');
			$(":radio").prop('checked',false);
			$.fn.submitEdit();
		}
	});
	$("input#Dumped").click(function(e){
		if(confirm('Are you sure this item HAS ALREADY been dumped?')){
			$(".Combo").prop('disabled', false);
			$(".Alist").prop('disabled', false);
			$(".Toggle").prop('disabled', false);
			$(".Notes").prop('disabled', false);	
			$("#txtStatus").val('Dumped');
			$(":radio").prop('checked',false);
			$.fn.submitEdit();
		}
	});$("input#Edit").click(function(e){
		$(".Combo").prop('disabled', false);
		$(".Alist").prop('disabled', false);
		$(".Toggle").prop('disabled', false);
		$(".Notes").prop('disabled', false);	
	});
	$("input#Cancel").click(function(e){
		$(":radio").prop('checked',false);
		$("#ListIT").show();
		$("#EditIT").hide();
			
	});
	$("input#Save").click(function(e){
		$(":radio").prop('checked',false);
		$(".Combo").prop('disabled', false);
		$(".Alist").prop('disabled', false);
		$(".Toggle").prop('disabled', false);
		$(".Notes").prop('disabled', false);
		//$(".Logging").prop('disabled', false);
		$.fn.submitEdit();
		//$("#computers").show();
		//$("#equipment").hide();
	});
	
	$.fn.submitEdit = function(){
		var equipdata = '&'+ $("form#equipment input").serialize();
		//alert(equipdata);
		$.ajax({
			type: 'GET',
			url: '//aldb.warwick.ac.uk/jsonp/setequipment',
			data: equipdata, 
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'jsonp',
			crossDomain: true,
			jsonp: 'data',
			jsonpCallback: 'data',
			xhrFields: {// If you want to carry over the SSO token
				withCredentials: true 
			}
		}).success(function(data){
			$("#ListIT").show();
			//$("#equipment").hide();
			$("fieldset#EditIT").hide();
			$.fn.loaddata(data);	
		}).fail(function(responseTxt, statusTxt, xhr){
			$("#ListIT").hide();
			$("fieldset#EditIT").show();
			//$("#EditIT").show();
			if(statusTxt == "success")
				alert("External content loaded successfully!");
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	};
	

	
		
	
	
/*
	$.fn.serializeObject = function(){
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
*/
// ]]></script>