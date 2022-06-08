// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `What is the future of news? 
Hyperlocal Headlines
How does language influence our world view, or reveal our biases? 
Will the future of news be hyperlocal or distributed? 
Who writes it, how is it accessed, and who controls it?
Hyperlocal Headlines takes place as a series of artist-facilitated creative conversations and collective storytelling and writing sessions that imagine the future of news. 
Become a citizen journalist for a day, learn to collaborate with AI technologies and explore how the ways we tell stories can impact collective futures.
There will be snacks.
Click for more info and bookings, running 11-14 June.
Your speculations will be broadcast as website interventions and on three public digital news tickers across Naarm/Melbourne.
Hyperlocal Headlines
Worksession 1 @Queen Victoria Women’s Centre (Sat 11 June, 1-4pm, book online)
Worksession 2 @Siteworks (Tues 14 June, 6-9pm, book online)
Drop-in session @Siteworks (Sun 12 June, anytime between 1-4pm, no booking required)`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");