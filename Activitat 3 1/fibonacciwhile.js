function fibonacci(num){
	var a = 1, b = 0, temp;

	while (num >= 0){
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}

	return document.write(b);
	}
	var num = parseInt(prompt("Tria un número"));
	 
 fibonacci(num);