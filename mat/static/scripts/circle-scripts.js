var b = document.getElementsByClassName('container_quadrado')[0];
              
                b.addEventListener('keyup',function(event){
                   if (event.keyCode==13){
                    event.preventDefault();
                       document.getElementsByClassName('butao1')[0].click();
                   }
               })
function area_circle() {
           
            const raio = document.getElementById("raio").value;
            if (raio>0){
                document.getElementById('rep').innerHTML='Desenho da figura:'
            document.getElementById('error').innerHTML=''
            var area = Math.PI*raio*raio
            document.getElementById("res_area_circulo").innerHTML = 'Área = π*Raio² = π *'+raio+'² ='+(area).toFixed(3)

            
        
    
            var perimetro = Math.PI*raio*2
            document.getElementById("res_perimetro_circulo").innerHTML ='Perímetro = 2*π*Raio = 2 *π* raio ='+ (perimetro).toFixed(3);

       
           
            var c = document.getElementById("canvas_circ");
            var ctx = c.getContext("2d");
            ctx.setLineDash([0,0])
            ctx.clearRect(0, 0, 300, 300);
            ctx.beginPath();
            ctx.arc(150, 150, 140, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.setLineDash([5,10])
            ctx.beginPath(); 
            ctx.moveTo(150,150);
            ctx.lineTo(290,150);
            ctx.stroke();
            ctx.font = '40px serif';
            ctx.fillText("R=" +raio, 140,140);
        }
        else{
            document.getElementById('error').innerHTML='Insira um numero real e maior que 0'
            var c = document.getElementById("canvas_circ");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, 300, 300);
            var div = document.getElementsByClassName('tr');
            for(var i=0;i<div.length;i++){
                div[i].innerHTML=''
            }
        }
        }
    