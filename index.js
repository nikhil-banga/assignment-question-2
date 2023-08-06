
const html = `<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>`;

const positions = [
{
    start: 241,
    end: 247,
},
{
    start: 518,
    end: 526,
},
];
  
const plainText = html
.replace(/<\/?[^>]+(>|$)/g, ' ')  
.replace(/&nbsp;/g, ' ')
.replace(/\s+/g, ' ')              
.trim();

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
let output = htmlContent;
let count = 0;

plainTextPositions.forEach(position => {
    const textContent = plainText.substring(position.start, position.end);
    const startIndexInHTMLContent = htmlContent.indexOf(textContent, position.start);
    const diff = position.end - position.start;
    position.start = parseInt(startIndexInHTMLContent);
    position.end = position.start + diff;

    const adjustedStart = position.start + 13 * count;
    const adjustedEnd = position.end + 13 * count;

    output = output.substring(0, adjustedStart) + '<mark>' + output.substring(adjustedStart, adjustedEnd) + '</mark>' + output.substring(adjustedEnd);

    count++;
})
return output;
}
const text = highlightHTMLContent(html,plainText,positions)
console.log(text)