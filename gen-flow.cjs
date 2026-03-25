const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const IMG_DIR = path.join(__dirname, 'src', 'assets', 'generated');

async function run() {
  fs.mkdirSync(IMG_DIR, { recursive: true });
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9333');
  const context = browser.contexts()[0];
  const pages = context.pages();
  let page = pages.find(p => p.url().includes('labs.google/flow'));
  if (!page) page = pages[0];

  // Try navigating directly to the Flow app
  const tryUrls = [
    'https://labs.google/flow/edit',
    'https://labs.google/flow/create', 
    'https://labs.google/flow/studio',
    'https://labs.google/flow/app',
    'https://labs.google/flow/',
  ];
  
  for (const url of tryUrls) {
    console.log(`\nTrying: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(e => console.log('  Nav error:', e.message));
    await page.waitForTimeout(3000);
    const finalUrl = page.url();
    console.log(`  Landed on: ${finalUrl}`);
    
    if (finalUrl !== 'https://labs.google/flow/about' && !finalUrl.includes('/about')) {
      console.log('  Found non-about page!');
      await page.screenshot({ path: path.join(IMG_DIR, `_try-${url.split('/').pop()}.png`) });
      
      // Explore this page
      const textareas = await page.locator('textarea:visible').count();
      const editables = await page.locator('div[contenteditable="true"]:visible').count();
      const textboxes = await page.locator('div[role="textbox"]:visible').count();
      console.log(`  Textareas: ${textareas}, Editables: ${editables}, Textboxes: ${textboxes}`);
      
      const btns = page.locator('button:visible');
      const btnCount = await btns.count();
      console.log(`  Buttons (${btnCount}):`);
      for (let i = 0; i < Math.min(btnCount, 20); i++) {
        const text = await btns.nth(i).textContent().catch(() => '');
        if (text.trim()) console.log(`    "${text.trim().substring(0, 60)}"`);
      }
      break;
    }
  }

  // If we're still on about, click the "Create" button and check links/hrefs
  if (page.url().includes('/about')) {
    console.log('\nStill on about page. Checking all links...');
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    for (let i = 0; i < Math.min(linkCount, 30); i++) {
      const href = await links.nth(i).getAttribute('href').catch(() => '');
      const text = await links.nth(i).textContent().catch(() => '');
      if (href && !href.startsWith('#') && text.trim()) {
        console.log(`  Link: "${text.trim().substring(0, 40)}" -> ${href}`);
      }
    }
    
    // Try clicking the visible "Create" button
    console.log('\nClicking Create button...');
    try {
      const createBtn = page.locator('button:has-text("Create"), a:has-text("Create")').first();
      await createBtn.click();
      await page.waitForTimeout(5000);
      console.log('After Create click, URL:', page.url());
      await page.screenshot({ path: path.join(IMG_DIR, '_after-create-click.png') });
      
      // Check page content
      const text = await page.textContent('body');
      console.log('Page snippet:', text.substring(0, 300));
    } catch(e) {
      console.log('Create click error:', e.message);
    }
  }
}

run().catch(e => console.error('Error:', e.message));
