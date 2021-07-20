function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if(fano.value.length == 0 || fano.value > ano){
     window.alert('Erro. Verifique se inseriu todos os dados novamente.')
 }else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - fano.value
   var gênero = ' '
   var img =document.createElement ('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked){
       gênero = 'Homem'
       //if(idade>=0 && idade < 10){
           //criança
          // img.setAttribute('src', 'manhã.png')
      // }else if(idade >= 10 && idade <60){
           //adolescente/adulto
           ///img.setAttribute('src', 'noite.png')
      // }else (idade > 60)
           //idoso
          // img.setAttribute('src', 'tarde.png')
       
   }else if (fsex[1].checked){
    gênero = 'Mulher'
      // if(idade>=0 && idade < 10){
           //criança
           //img.setAttribute('src', 'manhã.png')
      // }else if(idade >= 10 && idade <60){
           //adolescente/adulto
          // img.setAttribute('src', 'noite.png')
      // }else (idade > 60)
           //idoso
          // img.setAttribute('src', 'tarde.png')
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   res.appendChild(img)
 }
}