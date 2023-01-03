import { chromium } from 'k6/x/browser';
import { check, sleep } from 'k6';

export default function () {
  const browser = chromium.launch({ headless: true, slowMo: '500ms'});
  //context=browser.newContext({screen: {width: 1920,height: 1080},viewport: {width: 1920,height: 1080},});
  const page = browser.newPage();
   page
   .goto('https://REPLACE_URL_HERE', { waitUntil: 'networkidle' })
     .then(() => {
       page.waitForLoadState('networkidle', {timeout:30000});
       //not working
       //page.waitForNavigation();
       page.waitForNavigation({waitUntil: 'load'});
       //sleep (10);
       //not working
       //page.waitForLoadState({ waitUntil: 'domcontentloaded' });
       page.screenshot({ path: 'screenshot1.png' });
       page.waitForSelector('#idp-discovery-username',{state:'attached'});
       page.waitForSelector('#idp-discovery-username',{state:'visible'});
       //check(page, { enabled: (p) => p.$('#idp-discovery-username').isEnabled(), });
       page.$('#idp-discovery-username').type('REPLACE_USER_HERE');
       page.screenshot({ path: 'screenshot2.png' });
       page.waitForSelector('#idp-discovery-submit',{state:'attached'});
       page.waitForSelector('#idp-discovery-submit',{state:'visible'});
       page.$('#idp-discovery-submit').click();
       page.waitForLoadState('networkidle');
       page.screenshot({ path: 'screenshot3.png' });
       page.$('#okta-signin-password', {state:'attached'});
       page.waitForSelector('#okta-signin-password',{state:'visible'});
       page.screenshot({ path: 'screenshot4.png' });
       page.$('#okta-signin-password').type('REPLACE_PASSWORD_HERE');
       page.screenshot({ path: 'screenshot5.png' });
       page.waitForLoadState('networkidle');
       //page.waitForSelector('#okta-signin-submit',{state:'attached'});
       //page.waitForSelector('#okta-signin-submit',{state:'visible'});
       page.waitForSelector('input[id="okta-signin-submit"]');
       page.waitForSelector('div.o-form-button-bar');
       page.locator('#okta-signin-submit').click();
       //page.locator('div.o-form-button-bar').click();    
       //page.locator('input[id="okta-signin-submit').click();     
       //page.$('input[id="okta-signin-submit').click();
       //page.$('input[id="okta-signin-submit').click();
       //page.$('input[id="okta-signin-submit').click();
       //page.$('//div[text()="Gaming"]').click(); 
       page.waitForLoadState('networkidle');
       //page.waitForNavigation();
       page.waitForTimeout(8000);
       page.waitForNavigation();
       page.screenshot({ path: 'screenshot6.png' });
     })
     .finally(() => {
       page.close();
       browser.close();
     });
}
