(() => {
    const { href, port } = location;
    if (String(port) === '3000') {
        // dev server
        return;
    }
    if (!href.toLowerCase().startsWith('https')) {
        location.href = href.replace(/http/i, 'https');
    }
})()
