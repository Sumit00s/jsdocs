//Rotating Banner
var bannerHeading = document.getElementById('bannerHeading');
var counter = 0;
var heading = ['Basics of JavaScript Programming','Array,String and Functions','Form and Event Handling','Cookies and Browser Data','Regexp,Frame & Rollover','Menus, navigation and web page protection'];

function loadBanner()
{
    counter++;

    if(counter > heading.length-1){
        counter = 0;
    }

    bannerHeading.innerHTML = heading[counter];

    setTimeout(loadBanner,2000);
}