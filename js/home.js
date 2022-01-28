function aumentar(obj) {
    obj.height=obj.height*1.3; // aumenta sem sair da div 
    obj.width=obj.width*1.3;
    document.getElementById('para_paragrafo1').style.visibility="hidden";
    document.getElementById('mini_img1').style.opacity="0.3";
    document.getElementById('middle1').style.opacity="1";         
}
function diminuir(obj) {
    obj.height=obj.height/1.3; // volta a proporção estabelecida na <img>
    obj.width=obj.width/1.3;
    document.getElementById('para_paragrafo1').style.visibility="visible"; 
    document.getElementById('mini_img1').style.opacity="1";
    document.getElementById('middle1').style.opacity="0";   
}
function aumentar1(obj) {
    obj.height=obj.height*1.3; // aumenta sem sair da div 
    obj.width=obj.width*1.3;
    document.getElementById('para_paragrafo2').style.visibility="hidden";
    document.getElementById('mini_img2').style.opacity="0.3";
    document.getElementById('middle2').style.opacity="1";            
}
function diminuir1(obj) {
    obj.height=obj.height/1.3; // volta a proporção estabelecida na <img>
    obj.width=obj.width/1.3;
    document.getElementById('para_paragrafo2').style.visibility="visible";
    document.getElementById('mini_img2').style.opacity="1";
    document.getElementById('middle2').style.opacity="0"; 
}
function aumentar2(obj) {
    obj.height=obj.height*1.3; // aumenta sem sair da div 
    obj.width=obj.width*1.3;
    document.getElementById('para_paragrafo3').style.visibility="hidden"; 
    document.getElementById('mini_img3').style.opacity="0.3";
    document.getElementById('middle3').style.opacity="1";           
}
function diminuir2(obj) {
    obj.height=obj.height/1.3; // volta a proporção estabelecida na <img>
    obj.width=obj.width/1.3;
    document.getElementById('para_paragrafo3').style.visibility="visible";
    document.getElementById('mini_img3').style.opacity="1";
    document.getElementById('middle3').style.opacity="0"; 
}