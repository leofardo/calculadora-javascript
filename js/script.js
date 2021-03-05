class Numeros {
	constructor(){
		let display = document.getElementById('display')
	}

	adicionarValor(valor){

		if (display.innerHTML == 0) {
			if(display.innerHTML.includes('.')){
				display.innerHTML += valor
			}else {
				display.innerHTML = valor
			}
		}else {
			if (display.innerHTML.length > 9) {
				display.innerHTML = display.innerHTML
			}else {
				display.innerHTML += valor
			}
		}
	}

	apagarValor() {
		display.innerHTML = 0
	}

	adicionarPonto(valor) {
		if(display.innerHTML.includes(valor)){
			display.innerHTML = display.innerHTML	
		}else{
			display.innerHTML += valor
		}
	}

	backspace() {
		if (display.innerHTML == 'NaN'){
			display.innerHTML = 0
		}else {
			if(display.innerHTML == 0){
			display.innerHTML = display.innerHTML
			}else if (display.innerHTML.length == 1){
				display.innerHTML = 0
			}else {
				let qtde_Char = display.innerHTML.length

				if (qtde_Char == 2 && display.innerHTML.includes('-')){
					display.innerHTML = 0;
				}else {
					display.innerHTML = display.innerHTML.substr(0, qtde_Char-1)		
				}
			}
		}
	}

	maisMenos() {
		display.innerHTML = parseFloat(display.innerHTML) * -1
	}

	somar(){
		this.soma1 = parseFloat(display.innerHTML)
		this.somaBool = true
		display.innerHTML = 0
	}

	subtrair(){
		this.sub1 = parseFloat(display.innerHTML)
		this.subBool = true
		display.innerHTML = 0
	}

	multiplicar(){
		this.mult1 = parseFloat(display.innerHTML)
		this.multBool = true
		display.innerHTML = 0
	}

	dividir(){
		this.divi1 = parseFloat(display.innerHTML)
		this.diviBool = true
		display.innerHTML = 0
	}

	igual() {
		if(this.somaBool === true){
			this.soma2 = parseFloat(display.innerHTML)
			display.innerHTML = this.soma1 + this.soma2

			if(display.innerHTML.length > 9){
				display.innerHTML = display.innerHTML.substr(0, 9)
			}else{
				display.innerHTML = display.innerHTML
			}

			this.somaBool = false
		}

		else if(this.subBool === true){
			this.sub2 = parseFloat(display.innerHTML)
			display.innerHTML = this.sub1 - this.sub2

			if(display.innerHTML.length > 9){
				display.innerHTML = display.innerHTML.substr(0, 9)
			}else{
				display.innerHTML = display.innerHTML
			}

			this.subBool = false
		}

		else if(this.multBool === true){
			this.mult2 = parseFloat(display.innerHTML)
			display.innerHTML = this.mult1 * this.mult2

			if(display.innerHTML.length > 9){
				display.innerHTML = display.innerHTML.substr(0, 9)
			}else{
				display.innerHTML = display.innerHTML
			}

			this.multBool = false
		}

		else if(this.diviBool === true){
			this.divi2 = parseFloat(display.innerHTML)
			display.innerHTML = this.divi1 / this.divi2

			if(display.innerHTML.length > 9){
				display.innerHTML = display.innerHTML.substr(0, 9)
			}else{
				display.innerHTML = display.innerHTML
			}
			
			this.diviBool = false
		}
	}

	raizQuadrada(){
		display.innerHTML = Math.sqrt(display.innerHTML)
		display.innerHTML = display.innerHTML.substr(0, 9)

		if(display.innerHTML > 9){
			display.innerHTML = display.innerHTML.substr(0, 9)
		}else{
			display.innerHTML = display.innerHTML
		}
	}

	porcentagem() {
		if(this.multBool === true){
			this.mult2 = parseFloat(display.innerHTML) / 100
			display.innerHTML = this.mult1 * this.mult2
			this.multBool = false
		}
	}
}

let numeros = new Numeros()
