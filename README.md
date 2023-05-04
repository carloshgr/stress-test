# stress-test

Repositório para a realização de um teste de estresse experimental.

## Diretórios e arquivos

* `server`: Mantém o backend de uma aplicação fictícia. Essa aplicação possui duas rotas que realizam ordenação de arrays. `/quicksort` utiliza o método `sort` de arrays, enquanto `/bubblesort` utiliza uma implementação do bubblesort.  
* `log`: Contém um script utilizado para coletar métricas da máquina servidora.  
* `data`: Contém um script de geração de dados utilizado para gerar as requisições.  
* `stress-test.jmx`: é o artefato do **Apache JMeter** que representa o teste propriamente dito.  