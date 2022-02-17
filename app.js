var interromper_saque = false, parar = false, cancelar5 = false
var zerar_valor = false
var sacarNovamente

start()

function start(){
    var saldo = parseFloat(prompt("Digite um valor para sacar").replace(",","."))
	console.log(saldo%2)
    if(saldo <= 0 || saldo == 1 || saldo == 3){
        if(confirm("Não é possível sacar R$" + saldo + ".\nPressione OK para digitar outro valor")){
            start()
        }
    }else if(saldo%2 != 0 && saldo%2 != 1){
		if(confirm("Não é possível sacar valores decimais ("+ saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
		+ "). \nPressione OK para digitar outro valor")){
            start()
        }
	}
	else{
        contadorNotas(saldo)
	}

}

function contadorNotas(valor)
	{
		if(valor >= 200){
			if(valor == 201 || valor == 203){
				nota100(valor)
			}else{
				nota200(valor)
			}
		} else if(valor >= 100){
			if(valor == 101 || valor == 103){
				nota50(valor)
			}else {
				nota100(valor)
			}
		} else if(valor >= 50){
			if(valor == 51 || valor == 53){
				nota20(valor)
			}else{
				nota50(valor)
			}
		} else if(valor >= 20){
			if(valor == 21 || valor == 23){
				nota10(valor)
			}else{
				nota20(valor)
			}
		} else{
				nota10(valor)
		}
	}
	function nota200(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0
			while(valor >= 200){
				if(valor == 201 || valor == 203){
					parar = true
					nota100(valor)
				}
				valor = valor - 200
				nota = nota + 1
                if(!parar){
                    if(nota > 0){
                        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J_LT_xqIeXO2WYaIaUzp6ME2m7q7gMI2oyQ9Z1SEQOr2CnvK8_YZflm1-cYtye4PgSw&usqp=CAU" width="250px"/>')
                    }
            }
			}
            nota100(valor)
	}
	function nota100(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0
			while(valor >= 100){
				if(valor == 101 || valor == 103){
					parar = true
                    valor = valor - 50
                    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/50_Brazil_real_First_Obverse.jpg" width="250px"/>')
					nota50(valor)
				}
				valor = valor - 100
				nota = nota + 1
                if(!parar){
                    if(nota > 0){
                        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/100_Brazil_real_Second_Obverse.jpg" width="250px"/>')
                    }
            }
			}
            nota50(valor)
	}
	function nota50(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0
			while(valor >= 50){
				if(valor == 51 || valor == 53){
                    parar = false
					nota20(valor)
				}
				valor = valor - 50
				nota = nota + 1
                if(!parar){
                    if(nota > 0){
                        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/50_Brazil_real_First_Obverse.jpg" width="250px"/>')
                    }
            }
			}
            nota20(valor)
	}
	function nota20(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0
			while(valor >= 20){
				if(valor == 21 || valor == 23){
					nota10(valor)
				}
				valor = valor - 20
				nota = nota + 1
				if(valor == 11 || valor == 13){
                    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/20_Brazil_real_First_Obverse.jpg" width="250px"/>')
					nota10(valor)
				}
				if(valor == 21 || valor == 23){
					nota = 1
                    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/20_Brazil_real_First_Obverse.jpg" width="250px"/>')
					nota10(valor)
				}
                if(!parar){
                    if(nota > 0){
                        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/20_Brazil_real_First_Obverse.jpg" width="250px"/>')
                    }
            }				
			}
            nota10(valor)
	}
	function nota10(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0		
		if(valor == 11 || valor == 13){
			nota2(valor)
		}
		if(!interromper_saque){
			while(valor >= 10){
				if(valor == 21 || valor == 23){
					nota = 1
					document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/10_Brazil_real_Second_Obverse.jpg" width="250px"/>')
					valor = valor - 10
					nota2(valor)
					valor = valor - 21
				}
				if(!parar){
					valor = valor - 10
					nota = nota + 1
                    if(nota > 0){
                        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/10_Brazil_real_Second_Obverse.jpg" width="250px"/>')
                    }
                
                }
			}
            nota5(valor)
		}
	}
	function nota5(valor){
        if(zerar_valor){
            valor = 0
        }
		nota = 0
			while(valor >= 5){
				if(valor == 6 || valor == 8){
					cancelar5 = true
					nota2(valor)
					if (valor == 6) {
						valor = valor - 6
					}
					if (valor == 8) {
						valor = valor - 8
					}
				}
				if (!cancelar5){
				valor = valor - 5
				nota = nota + 1
                    if(nota > 0){
                        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/8/80/5_Brazil_real_Second_Obverse.jpg" width="250px"/>')
                    }
                }
			}
            nota2(valor)
	}
	function nota2(valor){
		nota = 0
			if(valor == 11 || valor == 13) {
				while(valor > 2 && valor != 5){
					valor = valor - 2
					nota = nota + 1
                    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/2_Brazil_real_Second_Obverse.jpg" width="250px"/>')
				}
				valor = valor - 5
				document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/8/80/5_Brazil_real_Second_Obverse.jpg" width="250px"/>')
				interromper_saque = true
				parar = true
                zerar_valor = true
		
			}
		if(!interromper_saque){
			while(valor >= 2){
				valor = valor - 2
				nota = nota + 1
                if(nota > 0){
                    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/2_Brazil_real_Second_Obverse.jpg" width="250px"/>')
                }	
			}
            return valor
		}
        return valor
    }
