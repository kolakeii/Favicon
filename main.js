function getNewRandomColor()
{
    //Change background color
    var myArray = ['red', 'green', 'blue'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("bg").style.backgroundColor = rand;

    //Change Page Name and Favicon
	newPageTitle = rand;
	$("#favicon").attr("href",rand+".png");
	document.title = newPageTitle;

}