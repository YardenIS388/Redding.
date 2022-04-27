window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "How Much Food Redding Helped You Save",


        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 78.91, label: "Consumed" },
                { y: 21.26, label: "Wasted" }
            ]
        }]
    });
    chart.render();

}
document.getElementById("add-list-btn").addEventListener("click", element => {

    let item = document.getElementById("new-item-input").value;
    console.log(item);

    let tableRow = ' <tr> <td> <div class="d-flex align-items-center"> <input type="checkbox" class="btn btn-outline-primary"> </i> <div class="ms-3"> <p class="fw-bold mb-1"> ' + item + '</p>  </div></div> </td><td><i class="fa-solid fa-xmark"></td></tr> ';
    document.getElementById("grocery-list-table").innerHTML += tableRow;
    // to make share input returns to be empty
    document.getElementById("new-item-input").value = "";

});


