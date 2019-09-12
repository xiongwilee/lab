const { Readable } = require('stream'); 

const inStream = new Readable({
  read(size) {
	  this.flag = this.flag || 0;

	  this.flag++;
	  if(this.flag > 10) {
		  setImmediate(()=>{
			this.push(null);
		  })
	  }

	  setImmediate(()=>{
		this.push(this.flag.toString())
	  })
  }
});

inStream.pipe(process.stdout);

