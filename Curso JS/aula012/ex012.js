var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
    console.log('bom dia')
}else if (hora < 18){
    console.log('boa tarde')
} if (hora > 18){
    console.log('Boa noite')
}