function probarValidarEdades(){
    console.assert(
        validarEdades('1a') === 'Las edades solo pueden tener numeros positivos y enteros',
        'la funcion validar edades no valido que las edades sean solo numeros'
    )

    console.assert(
        validarEdades('-1') === 'Las edades solo pueden tener numeros positivos y enteros',
        'la funcion validar edades no valido que las edades sean numeros positivos'
    )

    console.assert(
        validarEdades('61') === '',
        'la funcion validar edades no funciono con edades correctas'
    )

    console.assert(
        validarEdades('12.5') === 'Las edades solo pueden tener numeros positivos y enteros',
        'la funcion validar edades no valido que las edades sean numeros enteros'
    )
}


function probarValidarSalarios(){
    console.assert(
        validarSalarios('1a') === 'Los salarios solo pueden tener numeros positivos y enteros',
        'la funcion validar salarios no valido que los salarios sean solo numeros'
    )

    console.assert(
        validarSalarios('-1') === 'Los salarios solo pueden tener numeros positivos y enteros',
        'la funcion validar salarios no valido que los salarios sean numeros positivos'
    )

    console.assert(
        validarSalarios('150000') === '',
        'la funcion validar salarios no funciono con salario correcto'
    )
}
