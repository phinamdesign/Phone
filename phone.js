function Mobile(battery, draft, inbox, sent, status) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = status;
    document.getElementById("battery").value = battery+"%";
    document.getElementById("battery2").value = battery+"%";
    //Kiểm tra trạng thái pin
    this.getStatus = function () {
        document.getElementById("display").innerHTML = this.status;
    }

    //Sạc pin
    this.chargeBattery = function () {

        if (this.battery < 90)
            this.battery ++;
            document.getElementById("battery").innerHTML = this.battery;
    }
    // Viết tin nhắn , lưu nháp
    this.writeMessage = function (newMessage) {
        var newMessage = document.getElementById("message").value;
        if (this.status){
            this.draft.push(newMessage);
            this.battery --;
            document.getElementById("battery").value = this.battery+"%";
        }
    }

    this.writeMessage2 = function (newMessage) {
        var newMessage = document.getElementById("message2").value;
        if (this.status){
            this.draft.push(newMessage);
            this.battery --;
            document.getElementById("battery2").value = this.battery+"%";
        }
    }

    // Xem tin đã lưu
    this.getWriteMessage = function () {
        document.getElementById("display").innerHTML = this.draft;
        this.battery --;
        document.getElementById("battery").value = this.battery+"%";
    }

    this.getWriteMessage2 = function () {
        document.getElementById("display2").innerHTML = this.draft;
        this.battery --;
        document.getElementById("battery2").value = this.battery+"%";
    }


    // Gửi tin nhắn iphone
    this.sentMessage = function (phone, sentMess) {
        var sentMess = document.getElementById("message").value;
        this.draft = [];
        this.sent.push(sentMess);
        samSung.inbox.push(sentMess);
        this.battery --;
        samSung.battery --;
        document.getElementById("battery").value = this.battery+"%";
        document.getElementById("battery2").value = samSung.battery+"%";
    }

    // Gửi tin nhắn samsung
    this.sentMessage2 = function (phone, sentMess) {
        var sentMess = document.getElementById("message2").value;
        this.draft = [];
        this.sent.push(sentMess);
        iphone.inbox.push(sentMess);
        this.battery --;
        iphone.battery --;
        document.getElementById("battery").value = this.battery+"%";
        document.getElementById("battery2").value = samSung.battery+"%";
    }

    // Xem thư gửi đến
    this.getInbox = function () {
        document.getElementById("display").innerHTML = this.inbox;
        this.battery --;
        document.getElementById("battery").value = this.battery+"%";
    }

    this.getInbox2 = function () {
        document.getElementById("display2").innerHTML = this.inbox;
        this.battery --;
        document.getElementById("battery2").value = this.battery+"%";
    }

    // Xem tin đã gửi
    this.getSentMessgae = function () {
        document.getElementById("display").innerHTML = this.sent;
        this.battery --;
        document.getElementById("battery").value = this.battery+"%";
    }

    this.getSentMessgae2 = function () {
        document.getElementById("display2").innerHTML = this.sent;
        this.battery --;
        document.getElementById("battery2").value = this.battery+"%";
    }
}
var iphone = new Mobile(100,[],[],[],true);
var samSung = new Mobile(100,[],[],[],true);