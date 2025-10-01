const colorsPallete = document.querySelectorAll('.color-pallete li span');
const wheelsCollection = document.querySelectorAll('.wheels-collection li span');
const carSelected = document.querySelector('.image-car img');

// Pega o nome do carro da página atual (do título, URL, ou atributo data)
function getCarName() {
    // Opção 1: Do título da página
    const title = document.title.toLowerCase();
    if (title.includes('911')) return '911';
    if (title.includes('718')) return '718';
    if (title.includes('macan')) return 'macan';
    if (title.includes('taycan')) return 'taycan';
    if (title.includes('panamera')) return 'panamera';
    if (title.includes('cayenne')) return 'cayenne';
    
    // Opção 2: Do data-attribute no body (RECOMENDADO)
    const bodyCar = document.body.getAttribute('data-car');
    if (bodyCar) return bodyCar;
    
    // Opção 3: Padrão
    return '911';
}

let colorsSelected = 'br';
let wheelsSelected = 'r1';
const currentCar = getCarName();

console.log('Carro detectado:', currentCar);

colorsPallete.forEach(li => {
    li.addEventListener('click', () => {
        colorsPallete.forEach(span => {
            span.classList.remove('selected');
        });

        li.classList.add('selected');
        colorsSelected = li.classList[0];
        handleShowCar();
    });
});

wheelsCollection.forEach(li => {
    li.addEventListener('click', () => {
        wheelsCollection.forEach(span => {
            span.classList.remove('selected');
        });
        li.classList.add('selected');
        
        wheelsSelected = li.classList[0];
        handleShowCar();
    });
});

function handleShowCar() {
    const currentImage = carSelected;
    const newImage = new Image();
    
    // MODIFICAÇÃO AQUI: Inclui o nome do carro no caminho
    const imagePath = `../public/assets/${currentCar}-${colorsSelected}-${wheelsSelected}.png`;
    
    console.log('Tentando carregar:', imagePath);
    
    currentImage.classList.add('fade-out');
    newImage.src = imagePath;
    
    newImage.onload = function() {
        setTimeout(() => {
            currentImage.src = imagePath;
            currentImage.classList.remove('fade-out');
            currentImage.classList.add('fade-in');
            
            setTimeout(() => {
                currentImage.classList.remove('fade-in');
            }, 500);
        }, 250);
    };

    newImage.onerror = function() {
        console.error('Imagem não encontrada:', imagePath);
        currentImage.classList.remove('fade-out');
    };
}