String.prototype.filter=function (...param){
    let text = this.split(" ");
    let banned = param;
const result=[];
    for(let i=0; i<text.length;i++){
        if(!banned.includes(text[i])) result.push(text[i]);
    }
    console.log(result);
};
Array.prototype.bubbleSort = function(){
    let arr = this;
    let swapped;
    do{
         swapped=false;
        for(let i=1; i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                swap(i-1,i);
                swapped=true;
            }
        }
    }while(swapped);

    function swap(param1,param2) {
        let temp=arr[param1];
        arr[param1]=arr[param2];
        arr[param2]=temp;
    }
    console.log(arr);
}


window.onload=function(){
    params = ['not'];
    param1=[6,4,0,3,-2,1];
    "This house is not nice!".filter(...params);
    param1.bubbleSort();


    function Person(name){
        this.name = name;
    }

    Person.prototype.teach=function(subject){
        console.log(this.name+" is now teaching "+subject);
    }

    const a = {
        name : 'Default',
        teach : function(arg){
            return this.name + ' is now teaching ' + arg;
        }

    }
    const teacher = new Person("TINA");
    teacher.teach('WAP');


    const teacher2 = Object.create(a);
    teacher2.name='Lester';
    console.log(teacher2.teach('Parallel Programming'));



    /*
     const PersonObj ={
        name : "Unknown",
        age: null,
        salute(){
            console.log("Good morning!, and in case i don't see you, good afternoon, good evening and good night!");

        },
        greeting(){
            console.log("Greeting, my name is", this.name+ " and i am "+ this.age+ " years old");
        }
    };
    //Using Object.create method
    const Student = Object.create(PersonObj);
    Student.name="Christophe"
    Student.age=25;
    Student.major = "CS";
    Student.greeting= function(){
        console.log("Hey, my name is "+this.name+" and i am studying "+this.major);
    }


    const Professor = Object.create(PersonObj);
    Professor.name="Guthrie"
    Professor.age=55;
    Professor.Department = "CS";
    Professor.greeting= function(){
        console.log("Good day, my name is "+this.name+" and i am in the "+this.Department+" Department");
    }

    Student.salute();
    Student.greeting();

    Professor.salute();
    Professor.greeting();

*/
    //Using function constructor and prototype property;
    const PersonObj = function(name,age){
        this.name=name;
        this.age=age;

        this.greeting=function(){
            console.log("Greeting, my name is", this.name+ " and i am "+ this.age+ " years old");
        };
    }
    PersonObj.prototype.salute =  function(){
        console.log("Good morning!, and in case i don't see you, good afternoon, good evening and good night!");
    };

    const Student = function(name,age){
        PersonObj.call(this,name,age);
    }
    Student.__proto__ = PersonObj.prototype;
    Student.major = "CS";
    Student.greeting = function(){

        console.log("Hey, my name is "+this.name+" and i am studying "+this.major);
    }
    const Professor = function(name,age){
        PersonObj.call(this,name,age);
    }
    Professor.Department = "CS";
    Professor.__proto__ = PersonObj.prototype;
    Professor.greeting = function(){
        console.log("Good day, my name is "+this.name+" and i am in the "+this.Department+" Department");
    }
    Student.salute();
    Student.greeting();

    Professor.salute();
    Professor.greeting();

}

