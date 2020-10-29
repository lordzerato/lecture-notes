// REVIEW: ITERATION AND CONDITIONAL

/*
    3 elemen yang harus ada di dalam loop?
    statements, conditions, action/ execution/ proses
*/



/*
 * Diberikan sebuah input kalimat dengan tipe string.Buat sebuah program untuk mengubah kalimat tersebut ke dalam bentuk title case.
 * 
 * Contoh:
 *   Input: this is javascript
 *   Output: This Is Javascript
 */

var input = "this is javascript";
var output = "";

for (var i = 0; i < input.length; i++){
    if (i === 0) {
        output = output + input[i].toUpperCase();
    } else if (i != 0 && input[i-1] === " "){
        output = output + input[i].toUpperCase();
    } else {
        output = output + input[i].toLowerCase();
    }
}

console.log(output);
