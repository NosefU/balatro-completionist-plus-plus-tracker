var main,
	canvas,
	ctx,
	ww,
	idx = 0,
	toggle = true,
	frame;



// Generate CRT noise
function snow(ctx, alpha) {
	alpha = Math.min(255, Math.max(0, alpha));

	var w = ctx.canvas.width,
		h = ctx.canvas.height,
		d = ctx.createImageData(w, h),
		b = new Uint32Array(d.data.buffer),
		len = b.length;

	for (var i = 0; i < len; i++) {
		b[i] = (alpha << 24) | ((255 * Math.random()) | 0);
	}

	ctx.putImageData(d, 0, 0);
}

function animate() {
	snow(ctx, 32);
	frame = requestAnimationFrame(animate);
}

// Glitch

window.addEventListener('DOMContentLoaded', function(e) {
	main = document.querySelector('main')
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')
	ww = window.innerWidth

	// Set canvas size
	canvas.width = ww / 3;
	canvas.height = (ww * 0.5625) / 3;

	setTimeout(function() {
		main.classList.add('on');
		main.classList.remove('off');
		animate();
	}, 1000);
});


