// 4a Skriv en funktion som gör samma sak som funktionen split.
// Exempel: function mySplit(string, separator)
function mySplit(string, separator) {
	let results = []

	// Index där nästa split ska börja
	let currentStart = 0

	// Loopa igenom hela strängen. Titta om vi hittar separator-strängen på varje position.
	for( let index=0; index<string.length; index++ ) {
		// Plocka ut en lika lång sträng som separator, för att jämföra dem
		let sub = string.substring(index, index + separator.length)
		if( sub === separator ) {
			// hittade en match
			results.push(string.substring(currentStart, index))
			currentStart = index + separator.length
		} else {
			// hittade ingen match
		}
	}
	// Lägg till eventuell rest på slutet
	if( currentStart < string.length-1 ) {
		results.push( string.substring(currentStart) )
	}
	return results
	// Algoritmen:
	// Loopa igenom strängen
	// Använd substring för att plocka ut en delsträng som är lika lång som separator
	//Om delsträng == separator: pusha det vi hittat hittills
}

console.log( mySplit('Quick brown fox ', ' ') )