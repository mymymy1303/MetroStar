// Import typescript files from lib
import '../../lib/header/h-1/index.ts';
import * as getPosObj from '../../lib/index/i-1/index'
import '../../lib/footer/f-1/index.ts';
let header = new getPosObj.Top;
// 
$(document).ready(() => {
	console.log('Everything is Ready');
	header.getPosTop($(window).scrollTop());
})

$(window).on('scroll', () => {
	let pos = $(window).scrollTop()
	header.getPosTop(pos)
})