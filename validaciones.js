function validarEdades(edad){
    if (!/^[0-9]+$/.test(edad)){
        return 'Las edades solo pueden tener numeros positivos y enteros'
    }else{
        return '';
    }
}

function validarSalarios(salario){
    if (!/^[0-9]+$/.test(salario)){
        return 'Los salarios solo pueden tener numeros positivos y enteros'
    }else{
        return '';
    }
}
