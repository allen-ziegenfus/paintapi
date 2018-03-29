class PatternPainter {
	paint(ctx, geom, properties) {
		// Use `ctx` as if it was a normal canvas
		const colors = ['red', 'green', 'blue'];
		const size = 32;
		for (let y = 0; y < geom.height / size; y++) {
			for (let x = 0; x < geom.width / size; x++) {
				const color = colors[(x + y) % colors.length];
				ctx.beginPath();
				ctx.fillStyle = color;
				ctx.moveTo(x * x, y * y);
				ctx.lineTo(x, y * size);
				ctx.lineTo(x * size, y);
				ctx.fill();
			}
		}
	}
}

// Register our class under a specific name
registerPaint('pattern', PatternPainter);