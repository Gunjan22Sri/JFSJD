//Program for constructor,super and static

class abc {
    a = 10;
    constructor(num) {
        document.write("<br>parent=" + num * num);
    }
   static hi() {
        document.write("<br>static Hiii");
    }
}


class xyz extends abc {
    constructor() {
        super(2);
        document.write("<br>child");

    }
}

a1 = new xyz();
//a1.hi();
document.write(a1.a); 
xyz.hi();