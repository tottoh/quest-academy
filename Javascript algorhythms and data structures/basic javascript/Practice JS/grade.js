
var student= {
name :[""],
score:[]
}




function menuGrade(menu,name,score){
    switch(menu){
case 1 :student["name"].push(name);
        student["score"].push(score);
break;
case 2 :

    if(score>100){
        console.log("Grade: "+"Error score")
    }
    else if(score <=60){ console.log(name+" Grade: "+"D")}
    else if(score <=70){ console.log(name+" Grade: "+"C")}
    else if(score <=80){ console.log(name+" Grade: "+"B")}
    else if(score<=100){ console.log(name+" Grade: "+"A")}
    else { console.log("Grade: "+"F")}
break;
case 3 :
break;
case 4 :
break;
case 5 :
break;
    }
}
menuGrade(1, "Totto", 71);
menuGrade(1, "David", 69);
menuGrade(1, "Brian", 72);
console.log(student.name);
menuGrade(2, "Totto", 71);
menuGrade(2, "David", 69);
menuGrade(2, "Brian", 72);