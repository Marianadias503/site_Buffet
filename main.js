
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav ul a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

//DOMContentLoaded, usado para garantir que o script seja executado somente após o HTML ter sido completamente carregado
//links.forEach(function(link) {...});: Itera sobre todos os links encontrados na etapa anterior.
//e.preventDefault();: Impede o comportamento padrão do link, que seria navegar para outra página. Isso é feito para que o script possa controlar o comportamento do clique.
//var targetId = this.getAttribute('href').substring(1);= pega o atributo do href, e o SUBSTRING(1), remove o #do id e obtem apenas o id



