var containerEl = $(".container");
var dayEl = $("#currentDay");
var tasks = [];

function createBlocks() {
    var currentDay = moment().format("dddd, MMMM Do")
    var day = $("<p>" + currentDay + "</p>");
    dayEl.append(day);
    console.log(currentDay);
    for (i = 9; i < 18; i++) {
        if (i < 12) {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='past description col-sm-12 col-lg-10' id='text_" + i +"'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='present description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='future description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        } else if (i === 12) {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='past description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='present description col-sm-12 col-lg-10' id='text_" + i +"'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='future description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        } else {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='past description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='present description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='future description col-sm-12 col-lg-10' id='text_" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + i + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        }
    }
    if (moment().second() === 0) {
        containerEl.empty();
        createBlocks();
    }
}

function saving(x, y) {
    var taskSave = {name: "text" + x, content: y};
    tasks.push(taskSave);
    localStorage.setItem(taskSave.name, taskSave.content);
    
}

function savingBtns() {
    $("#save9").on("click", function(i) {
            var text = document.getElementById("text_9").value;
            saving("9", text);
    });
    $("#save10").on("click", function(i) {
        var text = document.getElementById("text_10").value;
        saving("10", text);
    });
    $("#save11").on("click", function(i) {
        var text = document.getElementById("text_11").value;
        saving("11", text);
    });
    $("#save12").on("click", function(i) {
        var text = document.getElementById("text_12").value;
        saving("12", text);
    });
    $("#save13").on("click", function(i) {
        var text = document.getElementById("text_13").value;
        saving("13", text);
    });
    $("#save14").on("click", function(i) {
        var text = document.getElementById("text_14").value;
        saving("14", text);
    });
    $("#save15").on("click", function(i) {
        var text = document.getElementById("text_15").value;
        saving("15", text);
    });
    $("#save16").on("click", function(i) {
        var text = document.getElementById("text_16").value;
        saving("16", text);
    });
    $("#save17").on("click", function(i) {
        var text = document.getElementById("text_17").value;
        saving("17", text);
    });
}

 function previousText() {
    for (i = 9; i < 18; i++) {
        var name = "text" + i;
        var content = localStorage.getItem(name);
        if(content) {
            $("#text_" + i).val(content);
        }
    }
}

function newDayReset() {
    if (moment().hour() === 0) {
        localStorage.clear();
    }
}


createBlocks();
previousText();
savingBtns();
newDayReset();
