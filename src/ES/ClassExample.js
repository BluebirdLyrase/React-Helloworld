import '../App.css';

function ClassExample() {
    const hello = new SayHello("Good Morning", "8 AM"); //การสร้าง object ของ class
    const show = hello.show(); //การเรียกใช้ method ของ object
    console.log(show);
    return (
        <div className="App">
            <h3>
                Class Example
            </h3>
        </div>
    );
}

class SaySomething { //การประกาศ Class | Class Declaration
    constructor(text) {
        this.text = text;
    }

    present() { //การสร้าง method
        return 'I said " ' + this.text + ' " '
    }
}

class SayHello extends SaySomething { //การสืบทอด | Inherit
    constructor(text, time) {
        super(text);
        this.time = time;
    }

    show() { //การสร้าง method
        return this.present() + ' at ' + this.time
    }
}

export default ClassExample;
