const nav = document.getElementById('nav');
const navButton = document.getElementById('nav__button');
navButton.addEventListener('click', function() {
	nav.classList.toggle('active');
});

const feature = document.querySelector('.feature');
const featureTrack = document.querySelector('.feature__track');
const featureItems = document.querySelectorAll('.feature__item');
const featureBg = document.querySelectorAll('.feature__bg');
const featureImgs = document.querySelectorAll('.feature__img');
let featureSlidesToShow = 4;
let featureSlidesToScroll = 1;
if (window.innerWidth < 450) {
	featureSlidesToShow = 1;
} else if (window.innerWidth < 576) {
	featureSlidesToShow = 2;
} else {
	featureSlidesToShow = 3;
}
let featureItemWidth = feature.clientWidth / featureSlidesToShow;
featureItems.forEach(function(item) {
	item.style.minWidth = featureItemWidth + 'px';
});
for (i = 0; i < featureItems.length; i++) {
	featureBg[i].style.background = 'url(' + featureImgs[i].src + ') center no-repeat';
	featureBg[i].style.backgroundSize = 'cover';
	featureImgs[i].style.display = 'none';
};
let featureX1 = null;
let featureX2 = null;
let featureX0 = null;
let featureXFlag = 0;
let featurePosition = 4;
featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
feature.addEventListener('mousedown', function() {
	featureX1 = event.clientX;
	featureXFlag = 1;
});
feature.addEventListener('mousemove', function() {
	if (featureXFlag == 0) {return false;};
	featureX0 = event.clientX;
	featureTrack.style.transition = 'none';
	featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth + (featureX0 - featureX1)) + 'px)';
});
window.addEventListener('mouseup', function() {
	if (featureXFlag == 0) {return false;};
	featureX2 = event.clientX;
	featureXFlag = 0;
	featurePosition -= Math.round((featureX2 - featureX1) / featureItemWidth);
	featureTrack.style.transition = 'transform 0.2s linear';
	featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
	if (featurePosition < 4) {
		featurePosition = featurePosition + 4;
		setTimeout(function() {
			featureTrack.style.transition = 'none';
			featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
		}, 200);	
	} else if (featurePosition > 7) {
		featurePosition = featurePosition - 4;
		setTimeout(function() {
			featureTrack.style.transition = 'none';
			featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
		}, 200);	
	}
});
feature.addEventListener('touchstart', function() {
	featureX1 = event.touches[0].clientX;
	featureXFlag = 1;
});
feature.addEventListener('touchmove', function() {
	if (featureXFlag == 0) {return false;};
	featureX0 = event.changedTouches[0].clientX;
	featureTrack.style.transition = 'none';
	featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth + (featureX0 - featureX1)) + 'px)';
});
window.addEventListener('touchend', function() {
	if (featureXFlag == 0) {return false;};
	featureX2 = event.changedTouches[0].clientX;
	featureXFlag = 0;
	featurePosition -= Math.round((featureX2 - featureX1) / featureItemWidth);
	featureTrack.style.transition = 'transform 0.2s linear';
	featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
	if (featurePosition < 4) {
		featurePosition = featurePosition + 4;
		setTimeout(function() {
			featureTrack.style.transition = 'none';
			featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
		}, 200);	
	} else if (featurePosition > 7) {
		featurePosition = featurePosition - 4;
		setTimeout(function() {
			featureTrack.style.transition = 'none';
			featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
		}, 200);	
	}
});

let testimonialsSlidesToShow = 1;
let testimonialsPosition = 1;
const testimonials = document.querySelector('.testimonials');
const testimonialsTrack = document.querySelector('.testimonials__track');
const testimonialsItem = document.querySelectorAll('.testimonials__item');
const testimonialsPagination = document.querySelectorAll('.testimonials__bullet');
let testimonialsItemWidth = testimonials.clientWidth / testimonialsSlidesToShow;
testimonialsItem.forEach(function(item) {
	item.style.width = testimonialsItemWidth + 'px';
});
testimonialsTrack.style.transform = 'translateX(' + (-testimonialsItemWidth * testimonialsPosition) + 'px)';
let testimonialsX1 = null;
let testimonialsX0 = null;
let testimonialsX2 = null;
let testimonialsXFlag = 0;
testimonials.addEventListener('mousedown', function() {
	testimonials.style.cursor = 'grabbing';
	testimonialsXFlag = 1;
	testimonialsX1 = event.clientX;
});
testimonials.addEventListener('mousemove', function() {
	if (testimonialsXFlag == 0) {return false};
	testimonialsX0 = event.clientX;
	testimonialsTrack.style.transition = 'none';
	testimonialsTrack.style.transform = 'translateX(' + (-testimonialsPosition * testimonialsItemWidth + (testimonialsX0 - testimonialsX1)) + 'px)';
});
window.addEventListener('mouseup', function() {
	testimonials.style.cursor = 'grab';
	if (testimonialsXFlag == 0) {return false};
	testimonialsX2 = event.clientX;
	testimonialsTrack.style.transition = 'transform 0.2s linear';
	if (testimonialsX2 - testimonialsX1 > 100) {
		testimonialsTrack.style.transform = 'translateX(' + (-(--testimonialsPosition) * testimonialsItemWidth) + 'px)';
	} else if (testimonialsX2 - testimonialsX1 < -100) {
		testimonialsTrack.style.transform = 'translateX(' + (-(++testimonialsPosition) * testimonialsItemWidth) + 'px)';
	} else {
		testimonialsTrack.style.transform = 'translateX(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
	}
	console.log(testimonialsX2 - testimonialsX1);
	if (testimonialsPosition < 1) {
		testimonialsPosition = 4;
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');	
		setTimeout(function() {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translate(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
		}, 200);
	} else if (testimonialsPosition > 4) {
		testimonialsPosition = 1;
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');	
		setTimeout(function() {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translate(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
		}, 200);
	} else {
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');
	}
	testimonialsXFlag = 0;
	testimonialsX1 = null;
	testimonialsX2 = null;
    testimonialsX0 = null;
});

testimonials.addEventListener('touchstart', function() {
	testimonialsXFlag = 1;
	testimonialsX1 = event.touches[0].clientX;
});
testimonials.addEventListener('touchmove', function() {
	if (testimonialsXFlag == 0) {return false};
	testimonialsX0 = event.changedTouches[0].clientX;
	testimonialsTrack.style.transition = 'none';
	testimonialsTrack.style.transform = 'translateX(' + (-testimonialsPosition * testimonialsItemWidth + (testimonialsX0 - testimonialsX1)) + 'px)';
});
window.addEventListener('touchend', function() {
	if (testimonialsXFlag == 0) {return false};
	testimonialsX2 = event.changedTouches[0].clientX;
	testimonialsTrack.style.transition = 'transform 0.2s linear';
	if (testimonialsX2 - testimonialsX1 > 100) {
		testimonialsTrack.style.transform = 'translateX(' + (-(--testimonialsPosition) * testimonialsItemWidth) + 'px)';
	} else if (testimonialsX2 - testimonialsX1 < -100) {
		testimonialsTrack.style.transform = 'translateX(' + (-(++testimonialsPosition) * testimonialsItemWidth) + 'px)';
	} else {
		testimonialsTrack.style.transform = 'translateX(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
	}
	console.log(testimonialsX2 - testimonialsX1);
	if (testimonialsPosition < 1) {
		testimonialsPosition = 4;
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');	
		setTimeout(function() {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translate(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
		}, 200);
	} else if (testimonialsPosition > 4) {
		testimonialsPosition = 1;
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');	
		setTimeout(function() {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translate(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
		}, 200);
	} else {
		testimonialsPagination.forEach(function(item) {
			item.classList.remove('active');
		});
		testimonialsPagination[testimonialsPosition - 1].classList.add('active');
	}
	testimonialsXFlag = 0;
	testimonialsX1 = null;
	testimonialsX2 = null;
    testimonialsX0 = null;
});

window.onresize = function() {
	if (window.innerWidth > 576) {nav.classList.remove('active');};

	if (window.innerWidth < 450) {
		featureSlidesToShow = 1;
	} else if (window.innerWidth < 576) {
		featureSlidesToShow = 2;
	} else {
		featureSlidesToShow = 3;
	}
	featureItemWidth = feature.clientWidth / featureSlidesToShow;
	featureTrack.style.transition = 'none';
	featureTrack.style.transform = 'translateX(' + (-featurePosition * featureItemWidth) + 'px)';
	featureItems.forEach(function(item) {
		item.style.minWidth = featureItemWidth + 'px';
	});

	testimonialsItemWidth = testimonials.clientWidth / testimonialsSlidesToShow;
	testimonialsTrack.style.transition = 'none';
	testimonialsTrack.style.transform = 'translateX(' + (-testimonialsPosition * testimonialsItemWidth) + 'px)';
	testimonialsItem.forEach(function(item) {
		item.style.minWidth = testimonialsItemWidth + 'px';
	});
};