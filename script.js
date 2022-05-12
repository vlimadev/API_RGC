
const uri = 'http://localhost:3000/produtos'


 const carregarProdutos = async()=>{

 
    const uriFazGet = await fetch (uri)
    const dados = await uriFazGet.json()
    console.log (dados)
   
    dados.forEach(item => {
   
       const containerProdutoItem = document.getElementById ('container-produtos')
   
       const template = document.getElementById('temp_produtos')
   
       const ProdutoItem = document.importNode(template.content, true)
   
       const itensProduto = ProdutoItem.querySelectorAll('span')
   
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



const novoProduto =  async() =>{
   
    
    const produtos = {
        
        id :_id.value,
        codigo : _codigo.value,
        descrição : _descricao.value,
        valor : Number (_valor.value)       

    }

    const init = {
        method: 'POST',
        headers:{"Content-Type" : 'application/json; charset=utf-8'},

        body: JSON.stringify(produtos)
    }
    
    const resposta = await fetch (uri , init)
   
    

}

const btnEnvia = document.getElementById('enviar')
btnEnvia.onclick = novoProduto

const alteraProduto = async ( ) =>{

    const produtos = {
        
        id :_id.value,
        codigo : _codigo.value,
        descrição : _descricao.value,
        valor : Number (_valor.value)
    }

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
 
 const btnAltera = document.getElementById('alterar')
 btnAltera.onclick = alteraProduto

 const remove = async () => {

    await fetch(uri + "/" + _id.value ,{

      method: 'DELETE',
     
 })}

 const btnApagar = document.getElementById('apagar')
 btnApagar.onclick = remove
 
 
 carregarProdutos(uri)







