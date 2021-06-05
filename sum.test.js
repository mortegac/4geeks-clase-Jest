const { sumar } = require('./sum')

describe( 'GRUPO DE CASOS DE USO FUNCION SUMA', ()=>{

	// Primer caso de uso
	test( 'Sumar 14 + 9 es igual a 23', () =>{

		let total = sumar(14, 9) //23
	
		expect(total).toBe(23)
	})

	// Segundo caso de uso
	test( 'Sumar 2 + 3 es igual a 5', () =>{

		let total = sumar(2, 3) 
	
		expect(total).toBe(5)
	})


	test( 'objeto JSON', () =>{

		let obja ={
			name:"persona 1",
			age: 23
		}
		let objb ={
			name:"persona 1",
			age: 23
		}
	
		expect(obja).toEqual(objb)
	})

})
