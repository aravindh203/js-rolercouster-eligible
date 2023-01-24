var age=parseInt(prompt("Enter your age"));

if(age<50){
	if(age>14){
		console.log("eligible for ride")
	}
	else{
		var permission=confirm("you have permision from your parent");
		if(permission==true){
			console.log("parent allowed so eligible to ride")
		}
		else{
			console.log("paternt not allowed so not eligble to ride")
		}
	}
}
else{
	console.log("not eligible to ride")
}
