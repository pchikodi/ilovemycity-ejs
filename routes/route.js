exports.home=function(req,res){
	res.render('home',{
		title:'iLoveMyCity',
		headline:'Every city has something to say'
	});
}

exports.city = function(req,res){
	var cityName = req.params.city;
	var title, heading;
	var imageCount = 4;

	if(cityName === 'berlin'){
		title = "Berlin";
		heading = "Berlin: Where love is in the air";
	}else if(cityName === 'madrid'){
		title = 'Madrid';
		heading = "Madrid: Buzz, Beautiful";
	}

	res.render('city',{
		title : title,
		headline : heading,
		city : cityName,
		numberOfImages : imageCount
	});
}