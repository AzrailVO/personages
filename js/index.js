//DOM Elements
const [...pers] = document.querySelectorAll('.site-personadzi-item')
const head = document.querySelector('.site-head')
const logo = document.querySelector('.site-head-logo')
const scene = document.getElementById('scene');
const bgGG = document.querySelector('.site-personadzi-GG')
const [...buttons] = document.querySelectorAll('.site-personadzi-item-button')
//Code
let colors = [ '#8B4513', '#B8860B', '#8B008B', '#9932CC', '#0000CD', '#191970', '#556B2F', '#043B39', '#954300', '#808000']
let color
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
pers.map(function (e) {
	let colorsE = colors
	color = randomInteger(0, colorsE.length - 1)
	console.log(colorsE)
	e.style.background = colorsE[color]
	colorsE.splice(color, 1)
	
})
const logo_mr_with_px = getComputedStyle(logo).marginRight
let logoMr = parseInt(logo_mr_with_px.replace(/\D+/g,""))
console.log(logoMr, logo.clientWidth, head)
bgGG.style.background = 'rgb(128, 0, 0)'
perses.map(function (elem) {
	if (elem.group == "гг") {
		GG.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang}
				</div>
			`)
	}
	if (elem.group == "друзья гг") {
		frGG.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "отряд в подземелье в начале") {
		dang.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "дриадалис") {
		driadalis.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "империя мосс") {
		moss.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "дэлос") {
		delos.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "остальные") {
		ost.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "кенр") {
		kenr.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "союз приксов") {
		sp.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (elem.group == "враги гг") {
		vGG.insertAdjacentHTML('beforeend', `
				<div class="col-lg-12 site-personadzi-vstavka">
					${elem.name} - ${elem.rang} (${elem.mesto})
				</div>
			`)
	}
	if (Array.isArray(elem.group)) {
		elem.group.forEach( function(groupEl) {
			if (groupEl == "враги гг") {
				vGG.insertAdjacentHTML('beforeend', `
						<div class="col-lg-12 site-personadzi-vstavka">
							${elem.name} - ${elem.rang} (${elem.mesto})
						</div>
					`)
			}
			if (groupEl == "друзья гг") {
					frGG.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "отряд в подземелье в начале") {
					dang.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "дриадалис") {
					driadalis.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "империя мосс") {
					moss.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "остальные") {
					ost.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "союз приксов") {
					sp.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "дэлос") {
					delos.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
				if (groupEl == "кенр") {
					kenr.insertAdjacentHTML('beforeend', `
							<div class="col-lg-12 site-personadzi-vstavka">
								${elem.name} - ${elem.rang} (${elem.mesto})
							</div>
						`)
				}
		});
	}
})
buttons.map(function (but) {
	but.onclick = () =>{
		let btnVal = but.getAttribute('data-id')
		but.classList.add(btnVal)
		let thisBtn = document.querySelector(`.${btnVal}`)
		if (btnVal == 'butGG') {
			GG.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butfrGG') {
			frGG.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butsp') {
			sp.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butvGG') {
			vGG.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butmoss') {
			moss.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butdriadalis') {
			driadalis.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butdelos') {
			delos.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butkenr') {
			kenr.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butdang') {
			dang.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		if (btnVal == 'butost') {
			ost.classList.add('active-item')
			thisBtn.classList.remove('disactive')
			thisBtn.classList.add('active')
		}
		
	}
})