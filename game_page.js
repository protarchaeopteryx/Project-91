var player1 = localStorage.getItem("p1");
var player2 = localStorage.getItem("p2");

var p1_sc = 0;
var p2_sc = 0;

document.getElementById("p1_name").innerHTML = player1;
document.getElementById("p1_score").innerHTML = p1_sc;
document.getElementById("p2_name").innerHTML = player2;
document.getElementById("p2_score").innerHTML = p2_sc;
document.getElementById("q_turner").innerHTML = player1;
document.getElementById("a_turner").innerHTML = player2;
function sent() {
    num1 = document.getElementById("inputn_1").value;
    num2 = document.getElementById("inputn_2").value;
    ans = parseInt(num1) * parseInt(num2);
    ques = "<h3 id='end_holder'>" + num1 + "x" + num2 + "</h3>";
    input = "<br><input id='get_end_txt'>";
    btn = "<br><br><button onclick='check()'>Check</button>";
    rows = ques + input + btn;
    document.getElementById("output_holder").innerHTML = rows;
    document.getElementById("inputn_1").innerHTML = "";
    document.getElementById("inputn_2").innerHTML = "";
}