
var button = document.querySelectorAll('.conteudo button');
button.forEach(function(button) {
button.addEventListener('click', function() {
var conteudo = this.parentElement.nextElementSibling;
if (conteudo.classList.contains('txt1')) {

conteudo.classList.remove('txt1');
} else {
conteudo.classList.add('txt1');
}
})
});

var dif = document.querySelector("button.dif");
var dif2 = document.querySelector("button.dif2");
var diff = document.querySelector("button.diff");
var diff2 = document.querySelector("button.diff2");
var diif = document.querySelector("button.diif");
var diif2 = document.querySelector("button.diif2");
var ddif = document.querySelector("button.ddif");
var ddif2 = document.querySelector("button.ddif2");

   function PM(){

    if(dif.classList.contains('adiciona')){
       dif.classList.remove('adiciona');
       
    }
    else{
       dif.classList.add('adiciona');
       dif2.classList.remove('adiciona');
    }
    }
    function PM2(){

        
        if(dif2.classList.contains('adiciona')){
           dif2.classList.remove('adiciona');
           
        }
        else{
           dif2.classList.add('adiciona');
           dif.classList.remove('adiciona');
        }
        }
        function PM3(){

            if(diff.classList.contains('adiciona')){
               diff.classList.remove('adiciona');
               
            }
            else{
               diff.classList.add('adiciona');
               diff2.classList.remove('adiciona');
            }
            }
            function PM4(){
        
                
                if(diff2.classList.contains('adiciona')){
                   diff2.classList.remove('adiciona');
                   
                }
                else{
                   diff2.classList.add('adiciona');
                   diff.classList.remove('adiciona');
                }
                }
                function PM5(){

                    if(diif.classList.contains('adiciona')){
                       diif.classList.remove('adiciona');
                       
                    }
                    else{
                       diif.classList.add('adiciona');
                       diif2.classList.remove('adiciona');
                    }
                    }
                    function PM6(){
                
                        
                        if(diif2.classList.contains('adiciona')){
                           diif2.classList.remove('adiciona');
                           
                        }
                        else{
                           diif2.classList.add('adiciona');
                           diif.classList.remove('adiciona');
                        }
                        }
                        function PM7(){

                            if(ddif.classList.contains('adiciona')){
                               ddif.classList.remove('adiciona');
                               
                            }
                            else{
                               ddif.classList.add('adiciona');
                               ddif2.classList.remove('adiciona');
                            }
                            }
                            function PM8(){
                        
                                
                                if(ddif2.classList.contains('adiciona')){
                                   ddif2.classList.remove('adiciona');
                                   
                                }
                                else{
                                   ddif2.classList.add('adiciona');
                                   ddif.classList.remove('adiciona');
                                }
                                }