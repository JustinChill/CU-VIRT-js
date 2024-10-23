var price = 10;
var tax = 1.07;
var shipping = 5;
const element = document.getElementById("total");
	
function totalCost(){
	var total = (price+shipping)*tax;
	var quantity = document.getElementById("quantity").value;
	var subtotal = total*quantity;
	element.innerHTML = subtotal;
	alert(subtotal);
}