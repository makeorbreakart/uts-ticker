// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `World's first artificial intelligence based news channel launched
What did your fox say? Neuralink now has the answers
AI veto power in UN overturns bill for more employee rights
Guns banned: that’s it
Nostalgic Drive: remember when we had countries? And money?
Govt upload of neural networks fail, ID theft and legal action ensues
Mars Fashion week: Neo-20s Camp
A new study has found that more than half of all news headlines are false
New research into cell decay leads academics to believe age will become ‘socio-economic’
US military in talks with Amazon over cloud contract worth $10 billion
Old archives filled with records of corporeal identities discovered to be missing after Nebula server transfer
Antique cafe with human barista - fake news?
Video game addiction spirals to 67% of Australian White Collar workers
South Korea joins US in ban on autonomous weapons after mass hack of military drones
New study: Does intelligence make you more attractive?
Politician steals identity from junior staffer`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");