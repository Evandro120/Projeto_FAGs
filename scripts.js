
var dif = document.querySelectorAll('.dif');
dif.forEach(function(dif) {
   dif.addEventListener('click', function() {
var conteudo = this.parentElement.nextElementSibling;
if (conteudo.classList.contains('txt1')) {
   dif.setAttribute("src", "imagens/icon-plus.svg");
   conteudo.classList.remove('txt1');
} else {
   conteudo.classList.add('txt1');
   dif.setAttribute("src", "imagens/icon-minus.svg");
}
})
});
