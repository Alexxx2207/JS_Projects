function fromJSONToHTMLTable(input) {
    let table = JSON.parse(input);

    let result = "<table>\n\t<tr><th>" + Object.keys(table[0]).join('</th><th>') + "</th></tr>";
    table.forEach(row => {
        result += `\n\t<tr>`;
        Object.entries(row).forEach(prop => {
            prop[1] = prop[1].toString()
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");

            result += `<td>${prop[1]}</td>`
        });
        result += `</tr>`;
    });

    result += "\n</table>";

    console.log(result);

    //return result;
}
