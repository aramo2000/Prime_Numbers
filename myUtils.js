module.exports = {
	isPrime: function(x) {
		if(x <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(x)) {
			if(x % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	}
}
