;(function(){ 

	var Visualizer = function(sortAlgorithm, array, chart) {
		var self = this;
		console.log(array);
		var sortSequence = sortAlgorithm(array);
		this.chart = chart;
		this.data = sortSequence.data;
		this.script = sortSequence.script;
		this.count = 0;

		//console.log(this.data);
		//console.log(this.script);

		this.active = 0;
		this.flag;

		var tick = function() {

			if (self.count === 0){
				self.draw(self.data, self.chart, self.active, self.flag);
			} else {
				self.update(self.data, self.script[self.count - 1]);
				self.draw(self.data, self.chart, self.active, self.flag);				
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
			this.flag = move.flag;
			var first = data[move.a];
			var second = data[move.b];
			data[move.b] = first;
			data[move.a] = second;
		},

		draw: function(data, chart, active, flag){

				var count = 0;
				d3.select(chart)
	  				.selectAll("div")
	  				.remove()

				var x = d3.scale.linear()
	    			.domain([0, d3.max(data)])
	    			.range([50, 200]);

	    		d3.select(chart)
	  				.selectAll("div")
	    			.data(data)
	  				.enter().append("div")
	  				.style("background-color", function(d) {
	  					var color = (active === count) ? "blue" : d3.rgb(255-d, 255-d/2, d);
	  					if (flag === count) {
	  						color = "yellow";
	  					}

	  					//color = d3.rgb(255 - d, 255-d , d);
	  					count ++
	  					return color;
	  				})
	    			.style("height", function(d) { 
	    				return x(d) + "px"; 
	    			})

   		}

	};

	window.addEventListener("load", function() {

		//generate array
  		var original_array = [];
  			for(var i = 0; i < 80; i++) {
    			original_array.push(Math.floor(Math.random() * 255));
  			}

  		console.log(original_array);

  		// new Visualizer(publicBubbleSort, [0, 4, 5, 2, 3 , 5 , 10, 30, 40, 30, 20, 10, 4, 5, 2, 10], ".bubble-sort-chart");
		new Visualizer(publicBubbleSort, original_array.slice(), ".bubble-sort-chart");

		// new Visualizer(publicSelectionSort, [0, 4, 5, 2, 3 , 5 , 10, 30, 40, 30, 20, 10, 4, 5, 2, 10], ".selection-sort-chart");
		new Visualizer(publicSelectionSort, original_array.slice(), ".selection-sort-chart");

		// new Visualizer(publicQuickSort, [0, 4, 5, 2, 3 , 5 , 10, 30, 40, 30, 20, 10, 4, 5, 2, 10], ".quick-sort-chart");
		new Visualizer(publicQuickSort, original_array.slice(), ".quick-sort-chart");
	});
})()