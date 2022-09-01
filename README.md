# Criando-chamadas-com-JsonPath

## Chamadas JsonPath

 1. $.pedidos[*].DataCompra para Data de Compra de todos os pedidos
 2. $.pedidos[0].Status para Status do 1º pedido da lista
 3. $.pedidos[?(@.Status != "Cancelado")].NumeroPedido para Número dos pedidos com status diferente de cancelado
 4. $.pedidos[*].preco para Preço dos pedidos postados


