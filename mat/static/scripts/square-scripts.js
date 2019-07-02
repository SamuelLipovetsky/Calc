var b = document.getElementsByClassName('container_quadrado')[0];
              
                b.addEventListener('keyup',function(event){
                   if (event.keyCode==13){
                    event.preventDefault();
                       document.getElementsByClassName('butao1')[0].click();
                   }
               })
function area_quadrado() {
        
        var lado_quadrado= document.getElementById("lado_quadrado").value;
        if( lado_quadrado>0 ){ 
            document.getElementById('rep').innerHTML='Desenho da figura:'
            document.getElementById('error').innerHTML=''
        var area = lado_quadrado * lado_quadrado ;
        document.getElementById("res_area_quadrado").innerHTML =" Area = lado * lado " + lado_quadrado +"*" + lado_quadrado +"=" + area;

        var perimetro = lado_quadrado * 4 ;
        document.getElementById("res_perimetro_quadrado").innerHTML = "Perimeto = 4* lado = 4 *" +lado_quadrado+'='+ perimetro;

        var diagonal = lado_quadrado * Math.SQRT2;
        document.getElementById("res_diagonal_quadrado").innerHTML ="Diagonal= lado *√2 ="+ lado_quadrado  +"* √2" +"="+ (diagonal).toFixed(3);


        var canvas = document.getElementById('canvas');
        if (canvas.getContext) 
        {
         var ctx = canvas.getContext('2d');
        var lado_quadrado= document.getElementById("lado_quadrado").value;
            
        ctx.setLineDash([0,0])
        ctx.clearRect(0, 0, 300, 300);
       
        ctx.strokeRect(10, 10,230,230);
        ctx.beginPath(0,0);
        ctx.setLineDash([5,15])
        ctx.moveTo(10,10);
        ctx.lineTo(240,240);
        ctx.stroke();
        ctx.font = '20px serif';
        ctx.fillText("Lado="+ lado_quadrado, 96,230);
        ctx.fillText('Diagonal='+(diagonal).toFixed(3),90,90)
        }
        }
        else{
            document.getElementById('error').innerHTML='Insira um numero real e maior que 0'
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 300, 300);
            var div = document.getElementsByClassName('tr');

            for(var i=0;i<div.length;i++){
                if (div[i]!=undefined){
                div[i].innerHTML=''
                }
            }

        }
        }
