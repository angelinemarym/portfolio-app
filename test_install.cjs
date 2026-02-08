try {
    require('react');
    console.log('React is installed');
} catch (e) {
    console.error('React is NOT installed');
    process.exit(1);
}
