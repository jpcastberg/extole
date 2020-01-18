setTimeout(() => {
    console.log('PROGRAM DOMAIN:', extole.PROGRAM.programDomain);
    throw new Error('test error from john');
}, 2000);