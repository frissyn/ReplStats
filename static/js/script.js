function isValid(s) {
    var hasDot = false;
    var hasSpace = false;
    var hasSlash = false;

    for (var i = 0; i < s.length; i++) {
        char = s[i];

        if (char == " ") {
            hasSpace = true;
        } else if (char == ".") {
            hasDot = true;
        } else if (char == "/") {
            hasSlash = true;
        }
    }

    return (hasDot && !hasSpace && !hasSlash);
}


function search(e) {
    if (e.keyCode == 13) {
        var value = e.currentTarget.value;
        var test = isValid(value);

        if (test) {
            window.location.replace(`/stats/${value}`);
        } else {
            alert("The URL you entered is invalid.");
        }
    }
}

