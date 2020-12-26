// Takes and int or float and returns a price string (e.g. 2.5 -> "$2.50")
export default function(num) {
    return "$" + Number(num).toFixed(2).replace(/\.00$/, "");
}