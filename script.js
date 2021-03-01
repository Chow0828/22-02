function calcularPreco(component){
    if(component.val() < 0 || component.val() === ""){
      component.val(0);
    }

    var preco = component.data('preco');
    var quantidade = component.val();
    var id = component.data('id');

    var subtotal = preco * quantidade;

    $('#sub'+id).text(subtotal.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));

    var total = 
    ($('#1').data('preco') * $('#1').val()) +
    ($('#2').data('preco') * $('#2').val());

    $('#total').text(total.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
