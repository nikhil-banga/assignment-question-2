const highlightHTMLContent = require('./index');

const testCases = [
  {
    htmlContent: `<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br>  <br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>`,
    plainText: 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------',
    plainTextPositions: [
      {
        start: 241,
        end: 247
      },
      {
        start: 518,
        end: 525,
      },
    ], 
    expectedResult: `<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br>  <br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>`,
  },
  {
    htmlContent: `<header><h1>Welcome to My Sample Page</h1></header><nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li></ul></nav><main><section><h2>About Us</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex ac urna tincidunt interdum.</p></section><section><h2>Our Services</h2><ul><li>Web Design</li><li>Graphic Design</li><li>SEO Optimization</li></ul></section></main><footer><p>&copy; 2023 Your Company. All rights reserved.</p></footer>`,
    plainText: 'Welcome to My Sample Page Home About Services Contact About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex ac urna tincidunt interdum. Our Services Web Design Graphic Design SEO Optimization &copy; 2023 Your Company. All rights reserved.',
    plainTextPositions: [
      {
        start: 20,
        end: 25
      },
      {
        start: 63,
        end: 70,
      },
    ], 
    expectedResult: `<header><h1>Welcome to My Sample<mark> Page</mark></h1></header><nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li></ul></nav><main><section><h2>About Us</h2><p><mark>Lorem i</mark>psum dolor sit amet, consectetur adipiscing elit. Nulla vel ex ac urna tincidunt interdum.</p></section><section><h2>Our Services</h2><ul><li>Web Design</li><li>Graphic Design</li><li>SEO Optimization</li></ul></section></main><footer><p>&copy; 2023 Your Company. All rights reserved.</p></footer>`,
  },
];

testCases.forEach((testCase, index) => {
  test(`test case ${index + 1}: checks if html content is highlighted correctly`, () => {
    const { htmlContent, plainText, plainTextPositions, expectedResult } = testCase;
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedResult);
  });
});