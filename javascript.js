var json = 
{ "pedidos":
  [
    {
    "NumeroPedido": 2548,
    "Status": "Entregue",
    "DataCompra": "01-01-2020",
    "preco": "R$ 23,00"
    },
     {
    "NumeroPedido": 4489,
    "Status": "Postado",
    "DataCompra": "14-02-2020",
    "preco": "R$ 163,00"
    },
    {
    "NumeroPedido": 4987,
    "Status": "Postado",
    "DataCompra": "28-02-2020",
    "preco": "R$ 45,00"
    },
    {
    "NumeroPedido": 8856,
    "Status": "Aguardando Pagamento",
    "DataCompra": "20-03-2020",
    "preco": "R$ 200,00"
    },
   {
    "NumeroPedido": 9698,
    "Status": "Cancelado",
    "DataCompra": "30-04-2020",
    "preco": "R$39,90"
    }
  ]
}

//CRIANDO PEDIDOS
console.log(json.pedidos[0].preco)

var pedidos = document.querySelector(".pedidos")
for(let i = 0; i < json.pedidos.length; i++){
  pedidos.innerHTML += `            <div class="pedido">
  <table>
      <tr>
          <th>Pedido:</th>
          <td>${json.pedidos[i].NumeroPedido}</td>
      </tr>
      <tr>
          <th>Status:</th>
          <td>${json.pedidos[i].Status}</td>
      </tr>
      <tr>
          <th>DATA:</th>
          <td>${json.pedidos[i].DataCompra}</td>
      </tr>
      <tr>
          <th>PREÇO:</th>
          <td>${json.pedidos[i].preco}</td>
      </tr>
  </table>
  </div><!--PEDIDO-->`
  
}

// CRIANDO AS SOLICITAÇÕES 
      let out1 = "";
      out1 = jsonPath(json, "$.pedidos[*].DataCompra");
      //out1 = JSON.stringify(out1);
      
      let out2 = "";
      out2 = jsonPath(json, "$.pedidos[0].Status").toString() + "\n";
       
      let out3 = "";
      out3 = jsonPath(json, "$.pedidos[?(@.Status != 'Cancelado')].NumeroPedido");
      console.dir(out3)


      let out4 = "";
      out4 = jsonPath(json, "$.pedidos[*].preco");
// FIM DAS SOLICITAÇÕES
      
//IMPRIMINDO SOLICITAÇÕES
var jsonPath1 = document.querySelector('#jsonPath1')
for(let i = 0; i < out1.length; i++){
  jsonPath1.innerHTML += `${i+1}º Pedido ${out1[i]}<br>`
}

var jsonPath2 = document.querySelector('#jsonPath2')
jsonPath2.innerHTML += `${out2}`

var jsonPath3 = document.querySelector('#jsonPath3')
for(let i = 0; i < out3.length; i++){
  jsonPath3.innerHTML += `Pedido: ${out3[i]} <br>`
}


var jsonPath4 = document.querySelector('#jsonPath4')
for(let i = 0; i < out4.length; i++){
  jsonPath4.innerHTML += `${i+1}º Pedido ${out4[i]}<br>`
}

//FIM IMPRIMINDO SOLICITAÇÕES

//EVENTO

var botao1 = document.querySelector("#botaoCD1")
botao1.addEventListener('click',(event)=>{
  
  jsonPath1.classList.toggle("jsonDisplay")
  if(jsonPath1.classList.contains("jsonDisplay")){
    botao1.value = "VOLTAR"
  }else{botao1.value = "VEJA"}
  
  console.log("cliclou")

})

var botao2 = document.querySelector("#botaoCD2")
botao2.addEventListener('click',(event)=>{
  
  jsonPath2.classList.toggle("jsonDisplay")
  if(jsonPath2.classList.contains("jsonDisplay")){
    botao2.value = "VOLTAR"
  }else{botao2.value = "VEJA"}
  
  console.log("cliclou")

})

var botao3 = document.querySelector("#botaoCD3")
botao3.addEventListener('click',(event)=>{
  
  jsonPath3.classList.toggle("jsonDisplay")
  if(jsonPath3.classList.contains("jsonDisplay")){
    botao3.value = "VOLTAR"
  }else{botao3.value = "VEJA"}
  
  console.log("cliclou")

})

var botao4 = document.querySelector("#botaoCD4")
botao4.addEventListener('click',(event)=>{
  
  jsonPath4.classList.toggle("jsonDisplay")
  if(jsonPath4.classList.contains("jsonDisplay")){
    botao4.value = "VOLTAR"
  }else{botao4.value = "VEJA"}
  
  console.log("cliclou")

})