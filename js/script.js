// Event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	// Ambil isi href
	const tujuan = $(this).attr('href');
	// Tangkap elemen yang bersangkutan
	const elemenTujuan = $(tujuan);

	// Pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutCirc');
	e.preventDefault();
})


// Parallax

// About
$(window).on('load', function() {
	$('.pKiri, .pKanan').addClass('pMuncul');
})


$(window).scroll(function() {
	let wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/2.25 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/1.5+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll*1.15 +'%)'
	});


	// Thumbnail
	if ( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i + 1));
		})
	}
})