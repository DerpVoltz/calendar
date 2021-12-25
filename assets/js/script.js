//var hours = ["9am", "10am", "11am", "12pm", ];
var containerEl = $(".container");

var hour = moment().format("hA");

console.log(moment.duration().get('hours'));

function createBlocks() {
    for (i = 0; i < 9; i++) {
        var container = $("<div class='timeBlock'> <div class='hour'>9PM</div> <div class='description'>dsafsaf</div> <div class'saveBtn'></div>");
        containerEl.append(container);
    }
}

//createBlocks();