![capa](https://user-images.githubusercontent.com/102002212/179225344-4bea210b-6779-4bd9-b3e0-04ebbdedca8b.png)

<H3>🔖 Requisitos funcionais</H3>

<H4>Cadastro de Personagens</H4>
<ul>
 <li>Deve poder cadastrar um personagem com as características conforme tabela abaixo:</li>
 <li>Deve retornar o id do personagem ao realizar o cadastro</li>
 <li>Não deve cadastrar personagem com nome duplicado</li>
 <li>Com exceção da idade, todos os campos são obrigatórios</li>
 </ul>
 <table>
 
 <tr>
    <th>Campos</th>
    <th>Descrição</th>
    <th>Tipo</th>
    <th>Obrigatótio</th>
  </tr>
 <tr>
    <td>name</td>
    <td>nome do personagem</td>
    <td>texto</td>
    <td>sim</td>
  </tr>
 <tr>
    <td>age</td>
    <td>idade</td>
    <td>inteiro</td>
    <td>não</td>
  </tr>
  <tr>
    <td>alias</td>
    <td>codinome</td>
    <td>texto</td>
    <td>sim</td>
  </tr>
   <tr>
    <td>team</td>
    <td>afiliações (vingadores, x-men, etc..)</td>
    <td>lista</td>
    <td>sim</td>
  </tr>
  <tr>
    <td>active</td>
    <td>se o personagem está ativo ou não</td>
    <td>booleano</td>
    <td>sim</td>
  </tr>  
 </table>

<H3>Busca de Personagens</H3>
<ul>
 <li>Deve retornar uma lista de personagens cadastrados</li>
 <li>Deve poder buscar por personagem por nome</li>
 <li>Deve poder buscar personagem pelo id</li>
 <li>Deve retornar 404 ao buscar por id não cadastrado</li>
</ul>

<H3>Remover Personagem</H3>
<ul>
 <li>Deve poder remover por id, um personagem cadastrado</li>
 <li>Deve retornar não encontrado ao remover por id não cadastrado</li>
</ul>

<H3>🚀 Tecnologias</H3>
<ul>
 <li>[Node.js] - plataforma de desenvolvimento</li>
 <li>[Express] - framework onde a API foi construída</li>
 <li>[Cypress] - framework de testes automatizados</li>
 <li>[MongoDB] - Banco de dados (Não relacional)</li>
</ul>

<H3>👨🏻‍💻 Como executar o projeto</H3>
<a href="https://nodejs.org/en/">Node.js</a> v16 ou superior para executar.

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="cd vdt-season1-marvel-api
npm i
npx cypress run"><pre><span class="pl-c1">cd</span> vdt-season1-marvel-api
npm i
npx cypress run</pre></div>
