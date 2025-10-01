document.addEventListener('DOMContentLoaded', function() {
    // Lista de carros
    const carros = [
        { id: 1, nome: "911 Carrera S", url: "http://127.0.0.1:5500/pages/911.html" },
        { id: 2, nome: "Cayman 718", url: "http://127.0.0.1:5500/pages/718.html" },
        { id: 3, nome: "Macan SUV", url: "http://127.0.0.1:5500/pages/Macan.html" },
        { id: 4, nome: "Taycan", url: "http://127.0.0.1:5500/pages/taycan.html" },
        { id: 5, nome: "Panamera", url: "http://127.0.0.1:5500/pages/panamera.html" },
        { id: 6, nome: "Cayenne S", url: "http://127.0.0.1:5500/pages/cayenne.html" }
    ];

    const carSearch = document.getElementById('car-search');
    const results = document.getElementById('results');

    // Verifica se os elementos existem
    if (!carSearch || !results) {
        console.error('Elementos não encontrados!');
        return;
    }

    // Função de pesquisa
    function pesquisarCarros(termo) {
        if (!termo) {
            return [];
        }
        
        return carros.filter(carro => 
            carro.nome.toLowerCase().includes(termo.toLowerCase())
        );
    }

    // Mostrar resultados
    function mostrarResultados(carrosEncontrados) {
        results.innerHTML = '';
        
        if (carrosEncontrados.length === 0 && carSearch.value.trim()) {
            results.innerHTML = '<div class="result-item">Nenhum carro encontrado</div>';
            results.style.display = 'block';
            return;
        }
        
        if (carrosEncontrados.length > 0) {
            carrosEncontrados.forEach(carro => {
                const item = document.createElement('div');
                item.className = 'result-item';
                item.textContent = carro.nome;
                
                item.addEventListener('click', () => {
                    window.location.href = carro.url;
                });
                
                results.appendChild(item);
            });
            results.style.display = 'block';
        } else {
            results.style.display = 'none';
        }
    }

    // Eventos
    carSearch.addEventListener('input', (e) => {
        const resultados = pesquisarCarros(e.target.value);
        mostrarResultados(resultados);
    });

    // Fechar resultados ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            results.style.display = 'none';
        }
    });

    // Pesquisar ao pressionar Enter
    carSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const termo = carSearch.value.trim();
            if (termo) {
                const resultados = pesquisarCarros(termo);
                if (resultados.length > 0) {
                    window.location.href = resultados[0].url;
                }
            }
        }
    });
});