proto = window.location.href.substring(0, 7);

if (proto == 'http://' ) {
	window.location.href = window.location.href.replace(proto,'https://')
} else {
    // Secured!
}
