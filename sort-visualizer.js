;(function(){ 

	var Visualizer = function(sortAlgorithm) {
		var self = this;
		var sortSequence = sortAlgorithm();
		this.data = sortSequence.data;
		this.script = sortSequence.script;
		this.count = 0;

		console.log(this.data);
		console.log(this.script);

		this.active = 0;

		var tick = function() {

			if (self.count === 0){
				self.draw(self.data, self.active);
			} else {
				self.update(self.data, self.script[self.count - 1]);
				self.draw(self.data, self.active);				
			}

			self.count ++

			if (self.count < self.script.length){
				setTimeout(function() {tick()}, 20);
			}
		}

		tick();
	}

	Visualizer.prototype = {

		update: function (data, move) {
			this.active = move.a;
			var first = data[move.a];
			var second = data[move.b];
			data[move.b] = first;
			data[move.a] = second;
		},

		draw: function(data, active){
				var count = 0;
				d3.select(".chart")
	  				.selectAll("div")
	  				.remove()

				var x = d3.scale.linear()
	    			.domain([0, d3.max(data)])
	    			.range([0, 420]);

	    		d3.select(".chart")
	  				.selectAll("div")
	    			.data(data)
	  				.enter().append("div")
	  				.style("background-color", function(d) {
	  					var color = (active === count) ? "red" : "blue";
	  					count ++
	  					return color;
	  				})
	    			.style("height", function(d) { 
	    				return x(d) + "px"; 
	    			})
	    			.text(function(d) { return d; })

   		}

	};

	window.addEventListener("load", function() {
		new Visualizer(publicSelectionSort);
	});
})()