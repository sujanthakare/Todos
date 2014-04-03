


function updateitem (){

	var itemid = this.id.replace('cb_',''); 
	var itemtext = document.getElementById('item_'+itemid);

	 if(this.checked) {
			
			itemtext.className='checked';
		}else
		{
			itemtext.className='';
		};
		


	
}


function renametext(){

	var newtext = prompt('write the item name');
	if (!newtext || newtext=="" || newtext==" ") {
		return false;
	};

	this.innerText = newtext;
     	


}



function removetext () {

		var spanid = this.id;
	    document.getElementById(spanid).style.display="none";
	// body...
}



function additem (list,innertext) {

	totalitem++;
	var listitem = document.createElement('li');
	listitem.id= 'li_'+totalitem;
	listitem.ondblclick = removetext;
	
	var checkBox = document.createElement('input');
	checkBox.type='checkbox';
	checkBox.id = 'cb_'+totalitem;
	checkBox.onclick= updateitem;


	var span = document.createElement('span');
	span.id = 'item_'+totalitem;
	span.innerText = innertext.value;
	span.onclick = renametext;
	
	listitem.appendChild(checkBox);
	listitem.appendChild(span);
	list.appendChild(listitem);
	
	
		innertext.focus();
		innertext.select();
	

	// body...
}

var totalitem=0;
var but1 = document.getElementById('but');
var innertext =document.getElementById('text');
innertext.focus();
but1.onclick = function(){
	
			if (!innertext.value || innertext.value == ' ') {	
			 return false;		
			};
			additem(document.getElementById('todolist'),innertext);
		

		
};

