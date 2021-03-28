

boost(["module3","module1","module2"],function(module3,module1,module2){

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
