$(document).ready(function () {

	try {

		$('.video a').fancybox({
			autoPlay: true
		})
		window.onload = function () {
			$('.video a').trigger('click');
		}
	} catch (error) {
		
	}

	try {
		if($(document).find('.homepage').length > 0) {
			Mapping.mapElements.from('.canhcam-footer-1 article.footer-wrapper').to('.home-5 .news').use('insertAfter');
		}
	} catch (error) {
		
	}

	//Fullpage

	if ($(window).width() < 992) {
	} else {
		$('#fullpage').fullpage({
			licenseKey: 'A3DA879C-B1254377-8A906973-AAE812EA',
			navigation: true,
			navigationPosition: 'right',
			paddingBottom: 0,
			paddingTop: 0,
			anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']
		});
	}

	//methods

	//Header search toggle button
	$('.search-toggle').on('click', function (e) {
		$(e.currentTarget).toggleClass('active');
		$('.canhcam-header-1 .searchbox').toggleClass('active');
	})

	$('.sidemenu-backdrop').on('click', function (e) {
		$('.canhcam-header-1 .hamburger').removeClass('is-active')
		$('.sidemenu-wrapper').removeClass('active')
		$('.sidemenu-backdrop').removeClass('active')
	})

	//Header sidemenu toggle button
	$('.canhcam-header-1 .hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.canhcam-header-1 .sidemenu-wrapper').toggleClass('active')
		$('.canhcam-header-1 .sidemenu-backdrop').toggleClass('active')
	})

	headerZoneMapping();
	headerSearchMapping();
	headerSocialMapping();
	headerLanguageMapping();

	//Home Banner Initialization
	const homeBannerInit = new Swiper('.banner-trangchu .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 500,
		pagination: {
			el: '.swiper-pagination',
			bulletActiveClass: 'active',
			bulletClass: 'dot',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
	});
})

const headerZoneMapping = () => {
	try {
		return new MappingListener({
			selector: '.zone-nav',
			mobileWrapper: '.sidemenu-wrapper',
			mobileMethod: 'appendTo',
			desktopWrapper: '.nav-wrapper',
			desktopMethod: 'appendTo',
			breakpoint: 992
		}).watch();
	} catch (error) {
	}
}

const headerSearchMapping = () => {
	try {
		return new MappingListener({
			selector: '.searchbox',
			mobileWrapper: '.sidemenu-wrapper',
			mobileMethod: 'appendTo',
			desktopWrapper: '.search',
			desktopMethod: 'appendTo',
			breakpoint: 992
		}).watch();
	} catch (error) {
	}
}

const headerSocialMapping = () => {
	try {
		return new MappingListener({
			selector: '.social',
			mobileWrapper: '.sidemenu-tools-nav',
			mobileMethod: 'prependTo',
			desktopWrapper: '.tool-nav',
			desktopMethod: 'appendTo',
			breakpoint: 992
		}).watch();
	} catch (error) {
	}
}

const headerLanguageMapping = () => {
	try {
		return new MappingListener({
			selector: '.language',
			mobileWrapper: '.sidemenu-tools-nav',
			mobileMethod: 'prependTo',
			desktopWrapper: '.tool-nav',
			desktopMethod: 'appendTo',
			breakpoint: 992
		}).watch();
	} catch (error) {
	}
}
