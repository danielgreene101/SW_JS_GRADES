var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var ordered = scores.sort();
console.log("Highest score " + ordered[11]);
console.log("Lowest Score " + ordered[0]);

var F = [];
var D = [];
var C = [];
var B = [];
var A = [];

var result = " ";
for ( i = 0; i < scores.length; i++){



if (scores[i] <= 60) {
    scores[i] = "F"; 
    F.push("F");
    }else if (scores[i] <= 70) {
    scores[i] = "D";
    D.push("D");
    }else if (scores[i] <= 80) {
    scores[i] = "C";
    C.push("C");
    }else if (scores[i] <= 90){
    scores[i] = "B";
    B.push("B");
    }else{
    scores[i] = "A";
    A.push("A");
    } 
result += scores[i] + " ";
}
console.log(result);
console.log(F);
console.log(D);
console.log(C);
console.log(B);
console.log(A);


