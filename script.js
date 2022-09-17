function carregar(){
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `Agora são ${hora} horas <br> Hora de escutar essa maravilha aqui`
	if(hora >= 0 && hora < 12){
		img.src = 'imagens/vessel.jpg'
		document.body.style.background = 'linear-gradient(to right, white, gray) no-repeat fixed'
	}else if(hora > 12 && hora <= 18){
		img.src = 'imagens/Blurryface.jpg'
		document.body.style.background = 'linear-gradient(to right, black, red) no-repeat fixed'
	}else{
		img.src = 'imagens/trench.jpg'
		document.body.style.background = 'linear-gradient(to right, black, yellow) no-repeat fixed'
	}
}








