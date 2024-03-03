// Função para mudar o idioma da página
// Função para mudar o idioma da página
function changeLanguage(language) {
    // Textos do menu em diferentes idiomas
    var textosMenu = {
        'pt-br': ['Página Inicial', 'Sobre', 'Contato', 'Quartos', 'Serviços', 'Reserve agora'],
        'en': ['Home', 'About', 'Contact', 'Rooms', 'Services', 'Book Now'],
        'es': ['Inicio', 'Acerca de', 'Contacto', 'Habitaciones', 'Servicios', 'Reservar ahora']
    };

    // Atualiza o conteúdo do menu
    var menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(function(item, index) {
        item.textContent = textosMenu[language][index];
    });

    // Atualiza o conteúdo da página
    var pageTitle = document.getElementById("pageTitle");
    var sobreTitle = document.getElementById("sobreTitle");

    if (language === 'en') {
        pageTitle.textContent = "Welcome to Hostel Di Castela";
        sobreTitle.textContent = "Welcome to our Hostel! A Spanish family, consisting of one brother and two sisters, decided to bring a little bit of Segovia to Brazil. United by culture and a passion for travel, the idea of the Hostel was born during a pilgrimage on the Camino de Santiago de Compostela and materialized after an inspiring visit to Morro Branco. We are excited to share our hospitality and create unforgettable memories with you.";
    } else if (language === 'es') {
        pageTitle.textContent = "Bien ";
        sobreTitle.textContent = "¡Bienvenidos a nuestro Hostel! Una familia española, compuesta por un hermano y dos hermanas, decidió traer un poco de Segovia a Brasil. Unidos por la cultura y la pasión por viajar, la idea del Hostel surgió durante una peregrinación en el Camino de Santiago de Compostela y se materializó después de una visita inspiradora a Morro Branco. Estamos emocionados de compartir nuestra hospitalidad y crear recuerdos inolvidables contigo.";
    } else {
        pageTitle.textContent = "Hostel Di Castela";
        sobreTitle.textContent = "Sejam todos bem-vindos ao nosso Hostel! Uma família espanhola, formada por um irmão e duas irmãs, decidiu trazer um pouco de Segóvia para o Brasil. Unidos pela cultura e pela paixão por viagens, a ideia do Hostel nasceu durante uma peregrinação no Caminho de Santiago de Compostela e se concretizou após uma inspiradora visita a Morro Branco. Estamos ansiosos para compartilhar nossa hospitalidade e criar memórias inesquecíveis com vocês.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtém o botão de idioma e o menu suspenso
    var languageButton = document.getElementById("languageButton");
    var languageDropdown = document.querySelector(".languageDropdown");

    // Adiciona um evento de clique ao botão de idioma
    languageButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que o clique no botão se propague para outros elementos
        // Verifica se o menu suspenso está visível
        if (languageDropdown.style.display === "block") {
            // Se estiver visível, oculta o menu suspenso
            languageDropdown.style.display = "none";
        } else {
            // Se estiver oculto, exibe o menu suspenso
            languageDropdown.style.display = "block";
        }
    });
});


