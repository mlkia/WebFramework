let text = '';
for( let i=0; i<6; i++ ) {
    for( let j=0; j<8; j++ ) {
        if( (i + j) % 2 === 0)
            text += '#';
        else
            text += '.';
    }
    text += '\n';
}
console.log(text);
