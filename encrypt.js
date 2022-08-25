document.getElementById("tb-decrypt").style.display = "none";
document.getElementById("bt-copiar").style.display = "none";


       
    
function shownonemessage(){
        if ((screen.width>768)){
            document.getElementById("mueco").style.display = "block";
        }
        document.getElementById("tx-ningun").style.display = "block";
        document.getElementById("tx-ingresa").style.display = "block";
        document.getElementById("tb-decrypt").style.display = "none";
        document.getElementById("bt-copiar").style.display = "none";
    
}

function hideshownonemessage(){
         document.getElementById("mueco").style.display = "none";
       document.getElementById("tx-ningun").style.display = "none";
       document.getElementById("tx-ingresa").style.display = "none";
        document.getElementById("tb-decrypt").style.display = "block";
        document.getElementById("bt-copiar").style.display = "block";
}
    
function encrypt(){   
   encryptedstr = document.getElementById("tb-encrypt").value.toLowerCase();
   //alert(mytb);
   if(encryptedstr===""){
        shownonemessage();
        document.getElementById("tb-decrypt").value="";
   }
   else{
            hideshownonemessage();
       
            decryptedstr = encryptedstr.replace(/[\eiaou]/g, function (m) {
        return {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        }[m];
    });
        document.getElementById("tb-decrypt").value=decryptedstr;
        document.getElementById("tb-encrypt").value="Ingrese el texto aqui";   
   }
}
    String.prototype.mapReplace = function(map) {
    var regex = [];
    for(var key in map)
        regex.push(key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"));
    return this.replace(new RegExp(regex.join('|'),"g"),function(word){
        return map[word];
    });
};
    
function decrypt(){
    
   decryptedstr = document.getElementById("tb-decrypt").value.toLowerCase();
   if(encryptedstr===""){
        shownonemessage();
        document.getElementById("tb-encrypt").value="";
    }
    else{
        hideshownonemessage();
        encryptedstr=decryptedstr.mapReplace({"enter":"e","imes":"i","ai":"a","ober":"o","ufat":"u"});
        document.getElementById("tb-encrypt").value=encryptedstr;
        document.getElementById("tb-decrypt").value="";
    }
}

function copy(){
        
          var copyTextarea = document.querySelector('#tb-decrypt');
          copyTextarea.focus();
          copyTextarea.select();

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
          } catch (err) {
            console.log('Oops, unable to copy');
          }
           // alert(successful);   
    }
