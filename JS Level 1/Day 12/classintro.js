

/*


class ? blueprint (logical), 

class syntax

class Human{

name;
age;
salary;
address;
functional;

constructor(){

}
}

new Human("vikas","chaudhayr"m3i393);







*/

class Human{
    // nooflegs;
    // noofhands;
    // noofears;
    // doiwalk;
    // doirun;
    // doieat;
    // doilove;
    constructor(taang,haath,kaan,doiwalk,doirun,doieat,doilove){
        this.nooflegs=taang;
        this.noofhands=haath;
        this.noofears=kaan;
        this.doiwalk=doiwalk;
        this.doirun=doirun;
        this.doieat=doieat;
        this.doilove=doilove;
    }

}

let human1=new Human(2,2,2,true,function run(){console.log("i run");},function eat(){
    console.log(
        "i eat"
    );
},function(){
    console.log(" i do");
})





console.log(human1);
human1.doilove();




// let human2=new Human(4,4,4,4,4,4,4,4,4);
// console.log(human2);
