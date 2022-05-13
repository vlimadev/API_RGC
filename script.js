// caminho para o banco de dados
const uri = 'http://localhost:3000/produtos'

// função que faz o GET no banco e apresenta resultado na tela
 const carregarProdutos = async()=>{

 
    const uriFazGet = await fetch (uri)
    const dados = await uriFazGet.json() //tranforma os dados obtidos em json
    console.log (dados)
   
    // transforma os dados em  itens
    dados.forEach(item => {
   
       const containerProdutoItem = document.getElementById ('container-produtos')
       const template = document.getElementById('temp_produtos')
       const ProdutoItem = document.importNode(template.content, true)
       const itensProduto = ProdutoItem.querySelectorAll('span')
   
       //insere cada item em um campo no html
       itensProduto[0].innerText = item.id
       itensProduto[1].innerText = item.codigo
       itensProduto[2].innerText = item.descrição   
       itensProduto[3].innerText = item.valor
   
       containerProdutoItem.append(ProdutoItem)
        
    });
    
   }
  

   const _codigo = document.getElementById('prod')
   const _descricao = document.getElementById('desc')
   const _valor = document.getElementById('val')
   const _id = document.getElementById('id')


// faz o POST de um novo produto
const novoProduto =  async() =>{
   
    // fromatção enviada para o banco de dados
    const produtos = {
        
        id :_id.value,
        codigo : _codigo.value,
        descrição : _descricao.value,
        valor : Number (_valor.value)       

    }

    // chama o método POST 
    const init = {
        method: 'POST',
        headers:{"Content-Type" : 'application/json; charset=utf-8'},

        body: JSON.stringify(produtos) //envia o corpo como JSON
    }
    
    const resposta = await fetch (uri , init)
   
}

// configurações do botão de enviar
const btnEnvia = document.getElementById('enviar') 
btnEnvia.onclick = novoProduto

// função que edita o produto
const alteraProduto = async ( ) =>{

    // corpo enviado para o banco de dados
    const produtos = {
        
        id :_id.value,
        codigo : _codigo.value,
        descrição : _descricao.value,
        valor : Number (_valor.value)
    }

    //chama o método PUT e passa o ID digitado para edição
    const response = await fetch(uri +"/"+_id.value, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(produtos)
    });
 
   const data = await response.json( );
 
    console.log(data);
 };
 
 // configurações do botão alterar
 const btnAltera = document.getElementById('alterar')
 btnAltera.onclick = alteraProduto

//função que faça o DELETE
 const remove = async () => {

    //Chama o DELETE e passa o ID como chave para exclusão
    await fetch(uri + "/" + _id.value ,{

      method: 'DELETE',
     
 })}

 //configurações do botão de apagar
 const btnApagar = document.getElementById('apagar')
 btnApagar.onclick = remove
 
 //chamando função 
 carregarProdutos(uri)







