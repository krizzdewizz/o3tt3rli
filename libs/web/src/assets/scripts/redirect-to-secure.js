(() => {
    const { href } = location;
    if (!href.toLowerCase().startsWith('https')) {
        location.href = href.replace(/http/i, 'https');
    }
})()
