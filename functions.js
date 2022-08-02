/*main page picture functionality */
let clubPicsArr = ["Pictures/clubPicture2022.jpeg",
"Pictures/clubPicture2019.jpeg", "Pictures/clubPicture2017.jpeg"];

let clubPicsArrDesc = ["Club Picture of the 2022 Year", "Club Picture of the 2019 Year", "Club Picture of the 2017 year"] ;
let picId=0;
function goprevious(){
    picId+=1;
    picId= picId%clubPicsArr.length;
    document.getElementById("clubPics").src=clubPicsArr[picId];
    document.getElementById("descp").innerHTML = clubPicsArrDesc[picId];
}

function goforward(){
    picId-=1;
    picId= picId%clubPicsArr.length;
    if(picId<0){
        picId += clubPicsArr.length
    }
    document.getElementById("clubPics").src=clubPicsArr[picId];
    document.getElementById("descp").innerHTML = clubPicsArrDesc[picId];
}
