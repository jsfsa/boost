
_load_={
	"baseon":"[\"resources/javascript\",\"resources/javascript2\"]"
};
importScripts("boost.js");


boost(["module3","module1","module2","module6"],function(module3,module1,module2,module6){
	console.log("WebWorker module6",module6.World);
	
	console.log("hi",module1.Hello,module2.World);
	boost(["module1","module2"],function(module1,module2){
	console.log("hi2",module1.Hello,module2.World);
	boost(["module1","module2"],function(module1,module2){
	console.log("hi3",module1.Hello,module2.World);

	boost(["module3"],function(module3){
	console.log("hi3",module3.World);
});
});
});

});
