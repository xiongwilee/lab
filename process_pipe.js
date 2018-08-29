process.stdin.on('data', (chunk)=>{
	console.log('~~~'+chunk.toString('utf-8'));
	process.stdout.write(chunk);
});


// process.stdin.pipe(process.stdout);
