// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `Mass outage causes thousands of Australian identities to vanish 
How to hack your own brain
Scientists discover why cats purr, but they can't tell anyone because it's classified
The end of privacy as we know it
What AI Election Bot suits your personality?
Scientists: we need to stop the AI arms race before it starts
Elon Musk v3.0 declares war on Martian Republic
US Congress calls for a ban on autonomous weapons after mass hack of military drones
China to launch artificial moon to replace streetlights
Human organ market boom in Japan
Illegal vape distribution operation busted by AI police forces
Why is it so hard to make friends in space?
Unpacking the interstellar elite and what that means for late-term capitalism
The human brain has been hacked!
Into the future: plans for interplanetary highway under review
News Headlines: We're all living in a simulation, but you can't tell because it's a simulation within a simulation
`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");