var containerEl = $(".container");

var hour = moment().format("hA");

console.log(moment.duration().get('hours'));

console.log(moment().hour(9));

function createBlocks() {
    for (i = 9; i < 18; i++) {
        if (i < 12) {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='past description col-sm-12 col-lg-10' name='text" + i +"'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='present description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "AM</p> </div> <textarea class='future description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        } else if (i === 12) {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='past description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='present description col-sm-12 col-lg-10' name='text" + i +"'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + i + "PM</p> </div> <textarea class='future description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        } else {
            if(i < moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='past description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else if(i === moment().hour()) {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='present description col-sm-12 col-lg-10' name='text" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            } else {
                var container = $("    <div class='row time-block'> <div class='hour col-sm-12 col-lg-1'> <p>" + (i - 12) + "PM</p> </div> <textarea class='future description col-sm-12 col-lg-10' name='text'" + i + "'> </textarea> <button class='d-flex justify-content-center align-items-center saveBtn col-sm-12 col-lg-1' id='save" + (i - 9) + "'> <i class='bi bi-save2-fill'></i> </button> </div>");
                containerEl.append(container);
            }
        }
        console.log($("text" + i))
    }
    if (moment().second() === 0) {
        containerEl.empty();
        createBlocks();
    }
}

function saving() {
    for (i = 0; i < 9; i ++) {
        $("#save" + i).on("click", function() {
            location.reload();
        })
    }
}

createBlocks();
saving();