$(document).ready(function () {

	// Adding the Privacy Policy and Terms & Conditions link below the GDPR consent on Contact Page
	// const gdprElem = document.querySelector('.contact-form form._form ._form_element:nth-last-child(2) ._checkbox-radio span')
	// const spanTag = document.createElement('span')
	// spanTag.innerHTML = '<a class="color-green-2" href="privacy-policy.php">Privacy policy</a> and <a class="color-green-2" href="terms-conditions.php">Terms & Conditions</a>'
	// gdprElem.appendChild(spanTag)

	const radioCheckboxes = document.querySelectorAll('.contact-form form._form ._form_element ._checkbox-radio');
    let targetRadioCheckbox = null;
    let targetRadioSpan = null;
    
    radioCheckboxes.forEach(checkbox => {
        const siblingInput = checkbox.previousElementSibling;

        if (siblingInput && siblingInput.tagName === 'INPUT' && siblingInput.getAttribute('data-name') === 'gdpr_consent') {
            targetRadioCheckbox = checkbox;
            targetRadioSpan = checkbox.querySelector('span');
        }
    });

    if (targetRadioCheckbox && targetRadioSpan) {
    	targetRadioCheckbox.style.alignItems = 'normal'
        const spanTag = document.createElement('span')
		spanTag.innerHTML = '<a class="color-green-2" href="privacy-policy.php">Privacy policy</a> and <a class="color-green-2" href="terms-conditions.php">Terms & Conditions</a>'
    	targetRadioSpan.appendChild(spanTag)
    } else {
        console.log('No matching checkbox found');
    }

	// Adding the Privacy Policy and Terms & Conditions link below the GDPR consent on Contact Page


	$(".office-loc .loc-link").click(function () {

		$(".office-loc .loc-link").removeClass('active');

		if ($(this).data('loc') == 'bengaluru') {

			$(this).addClass('active');

			$('#office-map-loc').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.231831054878!2d77.63466132922628!3d12.912392499430927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14920b989363%3A0x3b557a1988140983!2s17th%20Cross%20Road%20%26%209th%20Main%20Rd%2C%20Sector%207%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1614111093557!5m2!1sen!2sin');

			$('.office-add-box #state').text('Bengaluru, India');

			$('.office-add-box #location').text('No. 16, 9th Main, 17th Cross, Agara, HSR Layout, Sector-7, Bangalore, Karnataka-560102');

			// } else if ($(this).data('loc') == 'stuttgart') {

			// 	$(this).addClass('active');

			// 	$('#office-map-loc').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.7974348739326!2d9.188014364734162!3d48.69023739952176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c293d3bf6795%3A0x4d9e2fd258437918!2sParking+P4%2C+70629+Leinfelden-Echterdingen%2C+Germany!5e0!3m2!1sen!2sin!4v1552114756034');

			// 	$('.office-add-box #state').text('Stuttgart, Germany');

			// 	$('.office-add-box #location').text('70629 Leinfelden-Echterdingen, Stuttgart, Germany');

		} else {

			$(this).addClass('active');

			$('#office-map-loc').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.10509238941935!2d77.20111511961662!3d28.519229461431273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fb59592023%3A0xb149a46d15b7a491!2s292%2C%20Lane%20Number%202%2C%20Saiyad%20ul%20Ajaib%2C%20Sainik%20Farm%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1614109575192!5m2!1sen!2sin');

			$('.office-add-box #state').text('Delhi, India');

			$('.office-add-box #location').text('E-1, Property No-292, Westend Marg, Lane no-2, Saidulajab, New Delhi-110030');

		}

	});

});



$(".milestones-section .milestones-dates .year-link").click(function () {

	$(".milestones-section .milestones-dates .year-link").removeClass('active');

	$(".milestones-section .milestones-box .milestones-content").removeClass('active');


	$(this).addClass('active');

	$('#m' + $(this).data('year')).addClass('active');

});



var a = 0;

$(window).scroll(function () {

	var numCounter = $('#numCounter');
	if (numCounter.length > 0) {
		var oTop = (numCounter.offset().top + 200) - window.innerHeight;
		var oBottom = numCounter.offset().top + numCounter.innerHeight();

		if (a == 0 && $(window).scrollTop() > oTop) {
			// if ($(window).scrollTop() > oTop && $(window).scrollTop() < oBottom) {
			$('.numCounter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count'),
					countFrom = $this.attr('data-countFrom');
				$({
					countNum: countFrom
					// countNum: $this.text()
				}).animate({
					countNum: countTo
				},
					{
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
			});

			a = 1;
		}
	}

});



$('.slow').on('click', function (e) {

	if (screen.width < 992) {

		e.preventDefault();

		e.stopPropagation();

		// console.log($(this).text());

		var parent = $(this).parent();

		if (!parent.hasClass('show')) {

			$('.dropdown').removeClass('show');

			$('.dropdown-menu').removeClass('show').slideUp($(this).data('speed'));

			parent.addClass('show');

			parent.find('.dropdown-menu').slideDown($(this).data('speed'));

		}

		else {

			parent.removeClass('show');

			parent.find('.dropdown-menu').slideUp($(this).data('speed'));

		}

	}

	else {

		location.href = $(this).attr('href');

	}

});



$('.platform-block .platform-link').on('click', function (e) {

	var tabLink = $(this);

	var tabPaneId = '#' + $(this).data('show');

	var tabPane = $(tabPaneId);

	if (!tabLink.hasClass('active')) {

		$('.platform-link').removeClass('active');

		$('.platform-tab-pane').removeClass('show active');

		tabLink.addClass('active');

		tabPane.addClass('show active');

	}

});



$('.module-block-tab .module-link').on('mouseover', function (e) {

	var moduleTab = $(this);

	var moduleTabContentId = $(this).attr('href');

	var moduleTabContent = $(moduleTabContentId);

	if (!moduleTab.hasClass('active')) {

		moduleTab.siblings().removeClass('active');

		moduleTabContent.siblings().removeClass('show active');

		moduleTab.addClass('active');

		moduleTabContent.addClass('show active');

	}

});



window.addEventListener('scroll', function (e) {

	var gmpBtn = document.querySelector('nav .navbar-others ul li:last-child a');

	if (gmpBtn) {
		if (window.scrollY > 200) {
			gmpBtn.style.transition = "1s ease all";
			gmpBtn.style.backgroundColor = "#3ecf8e";
			gmpBtn.style.color = "#ffffff";
		} else {
			gmpBtn.style.backgroundColor = "#ffffff";
			gmpBtn.style.color = "#3ecf8e";
		}
	}

});



$(".parking-operator-slider .slick-arrow").on('click', autoAnimateEarth);

setInterval(autoAnimateEarth, 100);



function autoAnimateEarth() {

	var activeSlide = $(".parking-operator-slider .slider.slick-current.slick-active")[0];

	var rotate = $(activeSlide).data('rotate');

	var earth = $('.parking-operator-section .earth')[0];

	$(earth).css({ "background-position": rotate });

}

function setTextAndImage({ text, img, bottom, right }, currentIndex, textElement, highlightImg, targetImg) {
	textElement.classList.add('text-fade');
	targetImg.classList.add('text-fade');

	textElement.innerHTML = text;
	highlightImg.src = img;
	highlightImg.parentElement.style.bottom = bottom;
	highlightImg.parentElement.style.right = right;
	
	if (currentIndex !== 0) {
		highlightImg.parentElement.style.display = 'inherit';
		targetImg.style.filter = "blur(2.5px)";
	} else {
		highlightImg.parentElement.style.display = 'none';
		fadeBlurEffect(targetImg);
	}
	fadeTextEffect(textElement);
};

function setTextToWrite({ text }, textElement) {
	textElement.classList.add('text-fade');
	textElement.innerHTML = text;
	fadeTextEffect(textElement);
};

function fadeBlurEffect(element) {
	let initialBlur = 2.5;
	let blurInterval = 0;
	const interval = setInterval(() => {
		initialBlur -= 0.05;
		if(blurInterval === 500){
			blurInterval = 0;
			clearInterval(interval)
		} else {
			blurInterval += 10;
			element.style.filter = `blur(${initialBlur}px)`;
		}
	}, 10);
};

function fadeTextEffect(element) {
	let fadeValue = 0;
	const interval = setInterval(() => {
		if (fadeValue >= 500) {
			fadeValue = 0;
			clearInterval(interval);
		} else {
			fadeValue += 10;
			element.style.opacity = fadeValue / 500;
		}
	}, 10);
};

function handleHomeTypeWritter() {
	const textElement = document.querySelector(".text-typewriter");
	const highlightImg = document.querySelector("#highlight-pic");
	const targetImg = document.querySelector("#hero-img");

	if (!textElement || !highlightImg || !targetImg) {
		// If any of the elements are not found, stop the script
		return;
	}

	const content = [
        { text: "can be controlled remotely", img: "", bottom: "0", right: "0" },
        { text: "with an AI support agent", img: "./src/product-features/circle-automate-your-gates.png", bottom: "20%", right: "45%" },
        { text: "supports app-free parking", img: "./src/product-features/circle-go-app-less-with-QR.png", bottom: "35%", right: "45%" },
        { text: "digitizes parking operations", img: "./src/product-features/circle-custom-branded-app.png", bottom: "28%", right: "52%" },
        { text: "with a white-labeled app", img: "./src/product-features/circle-control-it-remotely.png", bottom: "50%", right: "20%" },
        { text: "automates your gates", img: "./src/product-features/circle-with-touchless-payments.png", bottom: "35%", right: "45%" },
        { text: "gives you access control", img: "./src/product-features/circle-offer-EV-charging.png", bottom: "32%", right: "60%" },
        { text: "earns 25% more ROI", img: "./src/product-features/circle-sell-permits-online.png", bottom: "18%", right: "10%" }
    ];

    let currentIndex = 0;
    const cycleContent = () => {
		currentIndex = (currentIndex + 1) % content.length;
        setTextAndImage(content[currentIndex], currentIndex, textElement, highlightImg, targetImg);
    };

    setTextAndImage(content[currentIndex], currentIndex, textElement, highlightImg, targetImg);
    setInterval(cycleContent, 2000);
}
handleHomeTypeWritter()

function handleProductTypeWritter() {
	const textElement = document.querySelector(".product-typewriter .product-typewriter-area");

	if (!textElement) {
		// If any of the elements are not found, stop the script
		return;
	}
	
	const content = [
		{ text: "Digitizes and Automates Parking" },
		{ text: "Sets Up Fast, Ticketless Parking" },
		{ text: "Retrofits Any Gate with GMP AI" },
    ];

    let currentIndex = 0;
    const cycleContent = () => {
		currentIndex = (currentIndex + 1) % content.length;
        setTextToWrite(content[currentIndex], textElement);
    };

	setTextToWrite(content[currentIndex], textElement);
    setInterval(cycleContent, 5000);
}
handleProductTypeWritter()

function handleRegionSelection(selectedRegion) {
	const baseURL = window.location.origin;
	const path = window.location.pathname;

	if (selectedRegion === "usa") {
		if (!path.includes("/en-us/")) {
			const newPath = path.replace(/^\/|\/$/g, '');
			const newURL = `${baseURL}/en-us/${newPath}`;
			window.location.href = newURL;
		}
	} else if (selectedRegion === "global") {
		if (path.includes("/en-us/")) {
			const newPath = path.replace("/en-us/", "/");
			const newURL = `${baseURL}${newPath}`;
			window.location.href = newURL;
		}
	}
}

function handleRequest() {
	const VALID_ENDPOINTS = [
		'/gmp-app.php',
		'/tap-and-park.php',
		'/gmp-qr.php',
		'/express-lane.php',
		'/gmp-permit.php',
		'/partner-portal.php',
		'/gmp-access.php',
		'/gmp-iq.php',
		'/gmp-ev.php',
		'/gmp-validation.php',
		'/sectors/university.php'
	]

    // Get the current URL endpoint
    const currentUrl = window.location.pathname

    // Check if the current URL exists in the valid endpoints array
    if (VALID_ENDPOINTS.includes(currentUrl)) {
        console.log('Valid endpoint:', currentUrl)
        const newForm = document.querySelector('.products-form.contact-form form._form')
  
	  	if(newForm) {
		    const styles = {
				background: '#f6f9fc',
				border: 'unset',
				'border-radius': '20px'
		    }

		    for (const [property, value] of Object.entries(styles)) {
		      	newForm.style.setProperty(property, value, 'important')
		    }
  		}

	  	const newFormSubmitBtn = document.querySelector('.products-form.contact-form form._form ._button-wrapper > button')

	  	if (newFormSubmitBtn) {
		    newFormSubmitBtn.style.setProperty('padding', '8px 12px', 'important')
		    newFormSubmitBtn.style.setProperty('border-radius', '4px', 'important')
		    newFormSubmitBtn.style.setProperty('background-color', '#3ecf8e', 'important')
	  	}

    } else {
        return null
    }
}
handleRequest()

function handleZohoFormMarketingUrl() {
  const form = document.querySelector("#crmWebToEntityForm form");
  if (form) {
    const isContactPage = window.location.pathname === "/contact.php";
    const heading = document.createElement("h1");
    if (isContactPage) {
      heading.classList.add(
        "h2",
        "color-blue-2",
        "font-open",
        "font-weight-bold",
        "mb-4"
      );
    } else {
      heading.classList.add(
        "h3",
        "color-blue-2",
        "font-open",
        "font-weight-bold",
        "mb-3"
      );
    }
    heading.textContent = "Contact Us Now!";
    form.insertBefore(heading, form.firstChild);

    const inputBox = form.querySelector("#LEADCF8");
    if (inputBox) {
      inputBox.value = window.location.href;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateActivePage();
  window.addEventListener("popstate", updateActivePage);
  handleZohoFormMarketingUrl();
});

function updateActivePage() {
    const navLinks = document.querySelectorAll("nav .navbar-nav .nav-link");
    const currentPath = window.location.pathname;

    const productPages = [
      "/product.php",
      "/gmp-app.php",
      "/gmp-qr.php",
      "/express-lane.php",
      "/gmp-permit.php",
      "/partner-portal.php",
      "/gmp-access.php",
      "/gmp-iq.php",
      "/gmp-ev.php",
      "/tap-and-park.php",
    ];

    const sectorPages = [
      "/our-sectors.php",
      "/operators-sector.php",
      "/governments-sector.php",
      "/corporates-sector.php",
      "/auto-oems-sector.php",
    ];
  
    navLinks.forEach(function(link) {
      	const linkHref = link.getAttribute("href");
      	const underlineSpan = link.querySelector(".hvr-underline-from-left");
	    
      	if (!linkHref) return;
      	if (!underlineSpan) return;
	    underlineSpan.classList.remove("active-page");

      	const isProductPage = productPages.some(page => currentPath.includes(page));
      	const isSectorPage = sectorPages.some(page => currentPath.includes(page));

      	if (isProductPage && linkHref === "/product.php") {
			underlineSpan.classList.add("active-page");    
      	}
      	else if (isSectorPage && linkHref === "/our-sectors.php") {
			underlineSpan.classList.add("active-page");    
      	}
      	else if (currentPath === linkHref || (currentPath === "/" && linkHref === "/index.html")) {
	        underlineSpan.classList.add("active-page");
      	}
      	else {
      		console.log('No link match with the current path!')
      	}
    });
}
