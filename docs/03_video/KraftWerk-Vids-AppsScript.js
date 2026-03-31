/**
 * KRAFTWERK — Google Vids Automation Scripts  v4.2 (CINEMATIC)
 *
 * v4.2 FIX: Dark backgrounds via Advanced Slides REST API
 * - SlidesApp.setSolidFill() silently fails for dark hex colors (#1A1A2E, #000000, #333333)
 * - Fix: create slides with SlidesApp, saveAndClose(), then batch-set backgrounds via REST API
 *
 * v4 UPGRADES:
 * - On-screen text: MAX 10 words (headline/hook style)
 * - Speaker Notes: Max 60 words, "Persuader" tone
 * - Stock keywords: Cinematic descriptors (camera angle, mood, 4K)
 * - Scene pacing: Every scene has a clear visual hook
 * - Slide layout: Dark cinematic background, large white headline
 *
 * SETUP:
 * 1. Paste into Apps Script → Save → Refresh Sheet
 * 2. Enable Advanced Service: Services → Google Slides API (identifier: Slides)
 * 3. Menu: KraftWerk Vids → Populate Storyboard Tabs
 * 4. Then: Create Partner Slides or Create Storyboard Slides
 *
 * Owner: rafaelwabisabi@gmail.com
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('\ud83c\udfac KraftWerk Vids')
    .addItem('\ud83d\udce5 Populate Storyboard Tabs (one-time)', 'populateStoryboards')
    .addSeparator()
    .addItem('\ud83c\udfac Create Partner Slides (from Sheet2)', 'createPartnerSlides')
    .addItem('\ud83c\udfac Create Storyboard Slides (active sheet)', 'createStoryboardSlides')
    .addSeparator()
    .addItem('\u2753 Help', 'showHelp')
    .addToUi();
}

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

function addTextBox(slide, left, top, width, height, text, fontSize, bold, color) {
  var tb = slide.insertTextBox(text, left, top, width, height);
  var ts = tb.getText().getTextStyle();
  ts.setFontSize(fontSize);
  ts.setBold(bold || false);
  if (color) ts.setForegroundColor(color);
  return tb;
}

function findHeaderRow(sheet) {
  var range = sheet.getRange(1, 1, Math.min(30, sheet.getLastRow()), 3).getValues();
  for (var r = 0; r < range.length; r++) {
    for (var c = 0; c < range[r].length; c++) {
      var val = String(range[r][c]).toLowerCase();
      if (val.indexOf('scene #') !== -1 || val.indexOf('scene number') !== -1 || val === 'scene') {
        return { row: r + 1, col: c + 1 };
      }
    }
  }
  return null;
}

/**
 * Apply dark backgrounds to ALL slides in a presentation using the Advanced Slides REST API.
 * Must be called AFTER presentation.saveAndClose() so the REST API can see the slides.
 *
 * @param {string} presentationId - The Google Slides presentation ID
 * @param {number} r - Red component 0-1 (default 0.102 = #1A)
 * @param {number} g - Green component 0-1 (default 0.102 = #1A)
 * @param {number} b - Blue component 0-1 (default 0.180 = #2E)
 */
function applyDarkBackgrounds(presentationId, r, g, b) {
  r = (r !== undefined) ? r : 0.102;
  g = (g !== undefined) ? g : 0.102;
  b = (b !== undefined) ? b : 0.180;

  // Get all slide IDs via REST API
  var pres = Slides.Presentations.get(presentationId);
  var slides = pres.slides;
  if (!slides || slides.length === 0) return;

  var requests = [];
  for (var i = 0; i < slides.length; i++) {
    requests.push({
      updatePageProperties: {
        objectId: slides[i].objectId,
        pageProperties: {
          pageBackgroundFill: {
            solidFill: {
              color: {
                rgbColor: { red: r, green: g, blue: b }
              }
            }
          }
        },
        fields: 'pageBackgroundFill.solidFill.color'
      }
    });
  }

  // Batch update all slides at once
  Slides.Presentations.batchUpdate({ requests: requests }, presentationId);
  Logger.log('Applied dark backgrounds to ' + slides.length + ' slides in presentation ' + presentationId);
}

// Build a cinematic slide: large white headline, small production ref, voiceover in notes
// NOTE: Background is NOT set here — it's applied in bulk after saveAndClose() via applyDarkBackgrounds()
function buildCinematicSlide(presentation, headline, productionRef, voiceover, sceneLabel) {
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);

  // Scene label (small, top-left)
  if (sceneLabel) {
    addTextBox(slide, 40, 15, 300, 30, sceneLabel, 12, false, '#888888');
  }

  // HEADLINE — large, centered, white (max 10 words)
  addTextBox(slide, 40, 120, 640, 140, headline, 32, true, '#FFFFFF');

  // Production reference — small, bottom (operator eyes only)
  if (productionRef) {
    addTextBox(slide, 40, 340, 640, 50, productionRef, 9, false, '#555555');
  }

  // Speaker Notes = voiceover (auto-synced in Vids)
  slide.getNotesPage().getSpeakerNotesShape().getText().setText(voiceover);

  return slide;
}


// ═══════════════════════════════════════════════════════════════
// POPULATE STORYBOARDS (one-time) — v4 cinematic content
// ═══════════════════════════════════════════════════════════════

function populateStoryboards() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var storyboards = {
    'ARS Electronica': {
      meta: [
        ['ARS Electronica \u2014 Partnership Video Storyboard'],
        ['"The Only Place in Linz Where You Sleep Inside the Festival"'],
        ['Target', 'Ars Electronica \u2014 Festival & Event Planning team'],
        ['Funding', '\u20ac17,500 / festival  |  3 festivals = \u20ac52,500  |  Multi-year = \u20ac150\u2013250k'],
        ['Duration', '90 sec \u2014 11 scenes \u00d7 8 sec'],
        ['Usage', 'Switch to this tab \u2192 \ud83c\udfac KraftWerk Vids \u2192 Create Storyboard Slides'],
        [''],
        ['\ud83c\udfac STOCK = Vids stock sidebar  |  \ud83e\udd16 VEO = Veo 3.1  |  \ud83d\udd00 HYBRID = stock + Veo  |  \ud83d\udcca GRAPHICS = text card']
      ],
      headers: ['Scene #', 'Scene Title', 'Asset Type', 'Stock Search Keywords\n(cinematic, specific)', 'Veo Visual Prompt\n(40+ words, camera + light + mood)', 'On-Screen Hook\n(MAX 10 words)', 'Voiceover Script\n(Max 60 words, Persuader tone)'],
      scenes: [
        ['1', 'The City Awakens', '\ud83c\udfac STOCK',
          'cinematic drone shot Linz Austria golden hour, aerial Tabakfabrik industrial architecture sunset, European city river aerial warm light, 4K establishing shot',
          '\u2014',
          '100,000 VISITORS.\n30 COUNTRIES.\nONE BUILDING.',
          'Every September, Linz transforms into the global capital of media art. One hundred thousand visitors descend on a single industrial building. This is not a conference. This is Ars Electronica.'],
        ['2', 'The Building as Canvas', '\ud83e\udd16 VEO',
          '\u2014',
          'Ground-level tracking shot, camera panning right along Tabakfabrik exterior at dusk, generative LED data-visualisations projected onto weathered industrial brick, deep indigo and cyan pulses, silhouetted figures in foreground, cinematic documentary, shallow depth of field, 4K',
          'THE FESTIVAL\nTAKES OVER.',
          'The festival spills beyond the Grand Hall. It covers the streets. It covers this building. And inside this building \u2014 a hostel where the artists sleep three minutes from their installations.'],
        ['3', 'The Exhibitor Arrives', '\ud83c\udfac STOCK',
          'boutique hotel check-in close-up warm light, hand placing keycard wooden surface, travel bag hostel lobby, creative professional arriving accommodation, 4K shallow depth of field',
          '\u2014',
          'TOKYO TO TABAKFABRIK.\nTHREE HOURS.',
          'An exhibitor from Tokyo. Checked in. Setup slot in three hours. No taxi. No logistics. Just walk downstairs.'],
        ['4', 'Three Minutes to the Grand Hall', '\ud83c\udfac STOCK',
          'POV walking industrial corridor modern architecture, first-person walkthrough creative hub, person walking through glass doorway reveal, architectural corridor tracking shot, 4K cinematic',
          '\u2014',
          'BED TO GRAND HALL.\nTHREE MINUTES.',
          'Bed to Grand Hall. Three minutes on foot. Zero transit. Zero delay. The shortest commute in the festival circuit.'],
        ['5', 'The Living Lab', '\ud83e\udd16 VEO',
          '\u2014',
          'Medium-close of ceiling-mounted sensor in industrial lounge, warm amber light gradually replacing cool white, researcher at wooden desk looks up at shifting light, soft bokeh background, cinematic documentary, 4K',
          'CIRCADIAN LIGHTING.\nBUILT WITH ARS.',
          'Our Circadian Lighting System \u2014 co-developed with Ars Electronica researchers \u2014 runs live in this space. Year-round. Guests sleep better. Science gets real-world data. Both sides win.'],
        ['6', 'Sleep Inside the Experiment', '\ud83d\udd00 HYBRID',
          'modern sleep pod hotel interior ambient light, capsule bed minimalist warm glow, person resting boutique hostel, 4K cinematic shallow focus',
          'Wall-mounted screen showing abstract audio-reactive Ars Electronica visualisation in slow motion, calm futuristic, warm amber tones \u2014 generate ONLY the screen element as overlay, 4K',
          'YOU SLEEP\nINSIDE THE EXPERIMENT.',
          "The experiment doesn't end at the festival gate. It follows you to your room. Art-tech installations embedded in the sleep experience itself."],
        ['7', 'Where Ideas Collide', '\ud83c\udfac STOCK',
          'diverse creative professionals conversation over coffee, startup meeting industrial coworking evening, collaborative discussion warm ambient light, community gathering modern space, 4K documentary',
          '\u2014',
          'GUESTS BECOME\nBUILDERS.',
          "Our guests don't just attend. They prototype. They collaborate. They leave with partnerships that outlast the festival."],
        ['8', 'Three Communities', '\ud83c\udfac STOCK',
          'outdoor festival crowd energy evening, street performers European city, local farmers market morning delivery, film festival premiere audience, 4K cinematic montage',
          '\u2014',
          'THREE FESTIVALS.\nONE BUILDING.',
          'Ars Electronica. Pflasterspektakel. Crossing Europe Film Festival. Three communities. Three revenue windows. One building that serves them all.'],
        ['9', 'The Deal in Numbers', '\ud83d\udcca GRAPHICS',
          '\u2014', '\u2014',
          '50 BEDS. 7 DAYS.\nONE PARTNERSHIP.',
          'Fifty beds. Seven days per festival. Guaranteed occupancy at premium rates. This is the deal that rewrites the funding equation.'],
        ['10', 'The Network Made Physical', '\ud83e\udd16 VEO',
          '\u2014',
          'Slow zoom out from extreme close-up of painted node on floor-to-ceiling community mural, nodes lighting up in sequence as camera pulls back revealing JKU, Ars, Sparkasse logos, warm directional spotlighting, cinematic reveal, 4K documentary',
          'A NETWORK\nMADE PHYSICAL.',
          'This is what interconnected infrastructure looks like. Not a business plan. Not a pitch deck. A building where every partnership has a physical address.'],
        ['11', 'Call to Action', '\ud83d\udcca GRAPHICS',
          '\u2014', '\u2014',
          'KRAFTWERK.\nINSIDE TABAKFABRIK LINZ.',
          'KraftWerk. Inside Tabakfabrik Linz. The coalition is forming. kraftwerk-linz.com']
      ]
    },

    'JKU International': {
      meta: [
        ['JKU International \u2014 Partnership Video Storyboard'],
        ['"30,000 Students. One Home Base in Linz."'],
        ['Target', 'JKU International \u2014 Student Lead / Dept. of Social Economics'],
        ['Funding', '\u20ac50,000 (subsidized housing + joint research + talent pipeline)'],
        ['Duration', '60 sec \u2014 7 scenes \u00d7 8 sec'],
        ['Usage', 'Switch to this tab \u2192 \ud83c\udfac KraftWerk Vids \u2192 Create Storyboard Slides'],
        [''],
        ['\ud83c\udfac STOCK = Vids stock sidebar  |  \ud83e\udd16 VEO = Veo 3.1  |  \ud83d\udd00 HYBRID = stock + Veo  |  \ud83d\udcca GRAPHICS = text card']
      ],
      headers: ['Scene #', 'Scene Title', 'Asset Type', 'Stock Search Keywords\n(cinematic, specific)', 'Veo Visual Prompt\n(40+ words, camera + light + mood)', 'On-Screen Hook\n(MAX 10 words)', 'Voiceover Script\n(Max 60 words, Persuader tone)'],
      scenes: [
        ['1', 'The Arrival', '\ud83c\udfac STOCK',
          'international student arriving European city suitcase, young person walking university campus entrance autumn, backpack luggage cobblestone street, 4K cinematic shallow focus',
          '\u2014',
          'FIRST DAY IN LINZ.',
          "A Master's student from the Netherlands. First day in Linz. Seminar in two hours. He doesn't need a hotel. He needs a home base."],
        ['2', 'Recognition', '\ud83e\udd16 VEO',
          '\u2014',
          "Close-up of floor-to-ceiling hand-painted mural on hostel lobby wall \u2014 illustrated map of Linz's institutional ecosystem, JKU logo prominently visible with Welcome Hub sign, warm directional spotlighting, rich colours, architectural photography, shallow depth of field, 4K",
          'HIS UNIVERSITY.\nON THE WALL.',
          "He walks in. Sees the mural. His university \u2014 right there on the wall. This isn't a hostel. This is JKU's satellite campus in the creative district."],
        ['3', 'The Welcome Hub', '\ud83c\udfac STOCK',
          'university welcome desk friendly staff warm light, student orientation information counter, campus services modern interior, helpful reception academic setting, 4K documentary',
          '\u2014',
          'NOT DECORATION.\nINFRASTRUCTURE.',
          'The Welcome Hub. First point of contact for every JKU arrival. Orientation. Housing support. City integration. Not decoration. Functioning infrastructure.'],
        ['4', 'The Working Community', '\ud83c\udfac STOCK',
          'diverse international students studying together modern coworking, multicultural group laptops natural light, young professionals collaborative workspace, university study lounge warm tones, 4K cinematic',
          '\u2014',
          'SUBSIDIZED.\nPRACTICAL.\nCONNECTED.',
          'Subsidized short-term housing. Real research environment. A working community where visiting students and local founders share the same table.'],
        ['5', 'The Pipeline', '\ud83c\udfac STOCK',
          'professional handshake startup networking event, business card exchange close-up, two young professionals meeting modern space, talent recruitment conversation, 4K shallow depth of field',
          '\u2014',
          'CLASSROOM TO STARTUP.\nDIRECT.',
          "Joint research projects. Talent placement. A direct pipeline from JKU's classrooms into Linz's startup ecosystem. No intermediary."],
        ['6', 'The Table', '\ud83c\udfac STOCK',
          'overhead shot group dinner modern communal table, diverse team evening conversation warm light, community meal shared space top-down, startup dinner event collaborative, 4K cinematic drone',
          '\u2014',
          '7PM.\nTHE MAP BECOMES PEOPLE.',
          'This is what the partnership looks like at 7pm. The institutions on the mural become the people around the table. Research meets reality.'],
        ['7', 'Zoom Out', '\ud83e\udd16 VEO',
          '\u2014',
          'Slow cinematic pull-back from extreme close-up of JKU logo on hostel mural, revealing busy warm lobby full of students and founders, camera continues pulling back through glass doors to exterior wide shot, fade to dark, 4K documentary',
          '30,000 STUDENTS.\nONE HOME IN LINZ.',
          'JKU International. Thirty thousand students. One home base in Linz. KraftWerk. kraftwerk-linz.com']
      ]
    },

    'Sparkasse OO': {
      meta: [
        ['Sparkasse OO \u2014 Partnership Video Storyboard'],
        ['"The Anchor Tenant That Changes Everything"'],
        ['Target', 'Sparkasse Ober\u00f6sterreich \u2014 Johannes (Main Lead)'],
        ['Funding', '\u20ac220,000 senior debt + conditional loan (KGG/UBG-backed)'],
        ['Duration', '60 sec \u2014 7 scenes \u00d7 8 sec'],
        ['Usage', 'Switch to this tab \u2192 \ud83c\udfac KraftWerk Vids \u2192 Create Storyboard Slides'],
        [''],
        ['\ud83c\udfac STOCK = Vids stock sidebar  |  \ud83e\udd16 VEO = Veo 3.1  |  \ud83d\udd00 HYBRID = stock + Veo  |  \ud83d\udcca GRAPHICS = text card']
      ],
      headers: ['Scene #', 'Scene Title', 'Asset Type', 'Stock Search Keywords\n(cinematic, specific)', 'Veo Visual Prompt\n(40+ words, camera + light + mood)', 'On-Screen Hook\n(MAX 10 words)', 'Voiceover Script\n(Max 60 words, Persuader tone)'],
      scenes: [
        ['1', 'The Vacant Shell', '\ud83c\udfac STOCK',
          'empty commercial loft interior raw concrete, vacant industrial warehouse dramatic light shaft, abandoned building sun beam dust particles, empty space potential transformation, 4K cinematic wide',
          '\u2014',
          '650 SQM.\nPRIME TABAKFABRIK.\nWAITING.',
          'Six hundred and fifty square metres. Prime Tabakfabrik real estate. Raw concrete. Cathedral ceilings. Sitting vacant. Waiting for the right operator.'],
        ['2', 'The Transformation', '\ud83e\udd16 VEO',
          '\u2014',
          'Smooth cinematic time-lapse, empty industrial shell with raw concrete transforming into fully furnished modern hostel lounge \u2014 furniture materialising, lighting warming to amber, plants growing in, people appearing \u2014 clean transition, warm tones, exposed timber ceiling, 4K',
          'THE RIGHT IDEA.\nFINALLY.',
          'Most properties sit empty while cities wait for permission. This space stopped waiting. The transformation is already engineered. Permits secured. Design finalised.'],
        ['3', 'The Anchor Signal', '\ud83c\udfac STOCK',
          'European bank branch exterior modern architecture, financial institution building facade city street, Sparkasse Austria office professional, banking partnership corporate, 4K establishing shot',
          '\u2014',
          'THE SIGNAL THAT\nCHANGES EVERYTHING.',
          'An anchor tenant from Sparkasse. The association that signals to every other funder in the region: this project is bankable. This project is serious.'],
        ['4', 'The 24/7 Community', '\ud83c\udfac STOCK',
          'bustling modern coworking space evening activity, hostel common area vibrant community, mixed-use building interior people working socialising, creative hub night life warm, 4K documentary',
          '\u2014',
          '24/7 COMMUNITY.\nREAL FOOT TRAFFIC.',
          'Not a dormant asset. A 24/7 community hub. Foot traffic. Economic activity. Social return for the city. Every night of the year.'],
        ['5', 'The Return', '\ud83d\udcca GRAPHICS',
          '\u2014', '\u2014',
          'SROI 1:4.5',
          'Every euro invested returns four euros fifty in measured social value. Validated methodology. Auditable impact. This is not charity. This is infrastructure with a return.'],
        ['6', 'The Partnership', '\ud83c\udfac STOCK',
          'confident business handshake close-up professional, partnership agreement signing modern office, two executives meeting warm natural light, deal closing moment corporate, 4K shallow depth of field',
          '\u2014',
          'LOW-RISK.\nKGG/UBG-BACKED.',
          'Fifty-five percent debt model. KGG and UBG guarantee-backed. Financial stability engineered into the structure from day one. Low risk. High signal.'],
        ['7', 'The City View', '\ud83c\udfac STOCK',
          'aerial drone Linz Austria Danube river golden hour, European city skyline sunset cinematic, Austrian urban landscape panoramic, city overview dramatic light, 4K establishing drone',
          '\u2014',
          'BUILT FOR LINZ.',
          'KraftWerk. Structured for financial sustainability. Built for Linz. The anchor is set. kraftwerk-linz.com']
      ]
    }
  };

  var tabsCreated = 0;

  for (var tabName in storyboards) {
    var sb = storyboards[tabName];
    var existing = ss.getSheetByName(tabName);
    if (existing) { existing.clear(); } else { existing = ss.insertSheet(tabName); }
    var sheet = existing;

    var allRows = [];
    var numCols = sb.headers.length;

    for (var m = 0; m < sb.meta.length; m++) {
      var metaRow = sb.meta[m].slice();
      while (metaRow.length < numCols) metaRow.push('');
      allRows.push(metaRow);
    }

    allRows.push(sb.headers);
    var headerIdx = allRows.length;

    for (var s = 0; s < sb.scenes.length; s++) {
      var sceneRow = sb.scenes[s].slice();
      while (sceneRow.length < numCols) sceneRow.push('');
      allRows.push(sceneRow);
    }

    sheet.getRange(1, 1, allRows.length, numCols).setValues(allRows);
    sheet.getRange(headerIdx, 1, 1, numCols).setFontWeight('bold').setBackground('#e8eaf6');

    var sceneStartRow = headerIdx + 1;
    var sceneCount = sb.scenes.length;
    for (var s2 = 0; s2 < sceneCount; s2++) {
      var assetVal = sb.scenes[s2][2];
      var bgColor = null;
      if (assetVal.indexOf('STOCK') !== -1 && assetVal.indexOf('HYBRID') === -1) bgColor = '#d9ead3';
      else if (assetVal.indexOf('VEO') !== -1 && assetVal.indexOf('HYBRID') === -1) bgColor = '#cfe2f3';
      else if (assetVal.indexOf('HYBRID') !== -1) bgColor = '#fce5cd';
      else if (assetVal.indexOf('GRAPHICS') !== -1) bgColor = '#d9d9d9';
      if (bgColor) sheet.getRange(sceneStartRow + s2, 3).setBackground(bgColor);
    }
    if (sceneCount > 0) {
      sheet.getRange(sceneStartRow, 6, sceneCount, 1).setFontWeight('bold');
    }

    sheet.setColumnWidth(1, 60);
    sheet.setColumnWidth(2, 160);
    sheet.setColumnWidth(3, 100);
    sheet.setColumnWidth(4, 300);
    sheet.setColumnWidth(5, 350);
    sheet.setColumnWidth(6, 200);
    sheet.setColumnWidth(7, 320);

    sheet.getRange(1, 1).setFontWeight('bold').setFontSize(14);
    sheet.getRange(2, 1).setFontStyle('italic');

    SpreadsheetApp.flush();
    tabsCreated++;
  }

  SpreadsheetApp.getUi().alert(
    '\u2705 ' + tabsCreated + ' cinematic storyboard tabs created!\n\n' +
    '\u2022 ARS Electronica (11 scenes)\n\u2022 JKU International (7 scenes)\n\u2022 Sparkasse OO (7 scenes)\n\n' +
    'v4.2: On-screen hooks (col F), polished voiceovers (col G), cinematic stock keywords (col D)\n\n' +
    'Next: Switch to any tab \u2192 \ud83c\udfac KraftWerk Vids \u2192 Create Storyboard Slides');
}


// ═══════════════════════════════════════════════════════════════
// CREATE PARTNER SLIDES — v4.2 cinematic (dark bg via REST API)
// ═══════════════════════════════════════════════════════════════

function createPartnerSlides() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet2');
  if (!sheet) { sheet = ss.getSheetByName('Partners Priority'); }
  if (!sheet) { SpreadsheetApp.getUi().alert('Sheet2 or Partners Priority not found!'); return; }

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) { SpreadsheetApp.getUi().alert('Sheet is empty.'); return; }
  var data = sheet.getRange(2, 1, lastRow - 1, 7).getValues();

  var presentation = SlidesApp.create('KraftWerk Partners \u2014 ' + new Date().toLocaleDateString());
  var presId = presentation.getId();
  var existingSlides = presentation.getSlides();
  if (existingSlides.length > 0) existingSlides[0].remove();

  // Title slide (no setSolidFill — backgrounds applied after saveAndClose)
  var titleSlide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  addTextBox(titleSlide, 40, 100, 640, 80, 'KRAFTWERK\nPARTNERSHIP STORIES', 36, true, '#FFFFFF');
  addTextBox(titleSlide, 40, 220, 640, 40, 'Inside Tabakfabrik Linz', 16, false, '#888888');
  titleSlide.getNotesPage().getSpeakerNotesShape().getText().setText(
    'Welcome to KraftWerk. Inside Tabakfabrik Linz. A coalition of institutions building infrastructure for the city. Each partner is a pillar. Each story is proof.');

  var count = 0;

  for (var i = 0; i < data.length; i++) {
    var score = data[i][0], partner = data[i][1], category = data[i][2];
    var synergy = data[i][3], marketingStory = data[i][6];

    if (!partner || String(partner).trim() === '') continue;

    var cleanPartner = String(partner).replace(/\*\*/g, '').trim();
    var cleanCategory = String(category).replace(/\*\*/g, '').trim();
    var cleanStory = String(marketingStory).replace(/\*\*/g, '').trim();

    var headline = cleanPartner.toUpperCase();
    var subtitle = cleanCategory.toUpperCase();

    var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);

    if (score) {
      addTextBox(slide, 580, 15, 100, 30, 'SCORE: ' + score, 10, true, '#888888');
    }
    addTextBox(slide, 40, 80, 640, 70, headline, 30, true, '#FFFFFF');
    addTextBox(slide, 40, 170, 640, 50, subtitle, 18, false, '#CCCCCC');

    var stockHint = '\ud83c\udfac ' + cleanCategory.toLowerCase() + ', partnership, collaboration, ' +
      'modern office meeting, professional team, warm light, 4K cinematic';
    addTextBox(slide, 40, 345, 640, 40, stockHint, 8, false, '#444444');

    var voiceover = cleanStory || 'Partnership story pending. Add to Sheet2 column G.';
    var words = voiceover.split(/\s+/);
    if (words.length > 65) {
      voiceover = words.slice(0, 60).join(' ') + '...';
    }
    slide.getNotesPage().getSpeakerNotesShape().getText().setText(voiceover);

    count++;
  }

  // Closing slide
  var closingSlide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  addTextBox(closingSlide, 40, 130, 640, 60, 'KRAFTWERK', 42, true, '#FFFFFF');
  addTextBox(closingSlide, 40, 210, 640, 40, 'INSIDE TABAKFABRIK LINZ', 16, false, '#888888');
  addTextBox(closingSlide, 40, 260, 640, 30, 'kraftwerk-linz.com', 14, false, '#CCCCCC');
  closingSlide.getNotesPage().getSpeakerNotesShape().getText().setText(
    'KraftWerk. Inside Tabakfabrik Linz. The coalition is forming. kraftwerk-linz.com');

  // v4.2: Save and apply dark backgrounds via REST API
  presentation.saveAndClose();
  applyDarkBackgrounds(presId);

  var url = 'https://docs.google.com/presentation/d/' + presId + '/edit';
  SpreadsheetApp.getUi().alert(
    '\u2705 ' + count + ' cinematic partner slides created!\n\n\ud83d\udd17 ' + url +
    '\n\nDark background. Clean headlines. Voiceover in Speaker Notes.\nNext: Vids \u2192 Convert Slides \u2192 Auto-fill');
}


// ═══════════════════════════════════════════════════════════════
// CREATE STORYBOARD SLIDES — v4.2 cinematic (dark bg via REST API)
// ═══════════════════════════════════════════════════════════════

function createStoryboardSlides() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetName = sheet.getName();
  var header = findHeaderRow(sheet);

  if (!header) {
    SpreadsheetApp.getUi().alert(
      'Not a storyboard sheet!\n\nCould not find "Scene #" header.\n' +
      'Switch to ARS Electronica, JKU International, or Sparkasse OO.\n\n' +
      "If those tabs don't exist, run: Populate Storyboard Tabs first.");
    return;
  }

  var startCol = header.col;
  var dataStartRow = header.row + 1;
  var lastRow = sheet.getLastRow();
  if (lastRow < dataStartRow) {
    SpreadsheetApp.getUi().alert('No data below header.'); return;
  }

  var headerRange = sheet.getRange(header.row, startCol, 1, 10).getValues()[0];
  var numCols = 0;
  for (var c = 0; c < headerRange.length; c++) {
    if (headerRange[c] && String(headerRange[c]).trim() !== '') numCols = c + 1;
  }
  numCols = Math.max(6, Math.min(numCols, 7));

  var data = sheet.getRange(dataStartRow, startCol, lastRow - dataStartRow + 1, numCols).getValues();

  var presentation = SlidesApp.create('KraftWerk \u2014 ' + sheetName + ' \u2014 ' + new Date().toLocaleDateString());
  var presId = presentation.getId();
  var existingSlides = presentation.getSlides();
  if (existingSlides.length > 0) existingSlides[0].remove();

  var sceneCount = 0;

  for (var i = 0; i < data.length; i++) {
    var sceneNum  = data[i][0];
    var title     = data[i][1];
    var assetType = data[i][2];
    var stockKw   = data[i][3];
    var veoPrompt = data[i][4];
    var hook, voiceover;
    if (numCols >= 7) {
      hook      = data[i][5];
      voiceover = data[i][6];
    } else {
      hook      = String(title).toUpperCase();
      voiceover = data[i][5];
    }

    if (!sceneNum && !title) continue;

    var assetStr = String(assetType);
    var sceneLabel = 'SCENE ' + sceneNum + ' \u2014 ' + String(title).toUpperCase();

    var prodRef = '';
    if (assetStr.indexOf('STOCK') !== -1 && assetStr.indexOf('HYBRID') === -1) {
      prodRef = '\ud83c\udfac STOCK: ' + String(stockKw);
    } else if (assetStr.indexOf('VEO') !== -1 && assetStr.indexOf('HYBRID') === -1) {
      prodRef = '\ud83e\udd16 VEO: ' + String(veoPrompt).substring(0, 120) + '...';
    } else if (assetStr.indexOf('HYBRID') !== -1) {
      prodRef = '\ud83d\udd00 HYBRID \u2014 Stock: ' + String(stockKw).substring(0, 60) + ' + Veo overlay';
    } else if (assetStr.indexOf('GRAPHICS') !== -1) {
      prodRef = '\ud83d\udcca GRAPHICS \u2014 build as text/motion card';
    }

    buildCinematicSlide(presentation, String(hook), prodRef, String(voiceover), sceneLabel);
    sceneCount++;
  }

  // Closing slide
  var closing = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  addTextBox(closing, 40, 150, 640, 50, 'KRAFTWERK', 42, true, '#FFFFFF');
  addTextBox(closing, 40, 220, 640, 30, 'kraftwerk-linz.com', 14, false, '#888888');

  // v4.2: Save and apply dark backgrounds via REST API
  presentation.saveAndClose();
  applyDarkBackgrounds(presId);

  var url = 'https://docs.google.com/presentation/d/' + presId + '/edit';
  SpreadsheetApp.getUi().alert(
    '\u2705 ' + sceneCount + ' cinematic slides from "' + sheetName + '"!\n\n\ud83d\udd17 ' + url +
    '\n\nDark slides. 10-word hooks. Voiceover in Speaker Notes.\n' +
    'Next: Vids \u2192 Convert Slides \u2192 Auto-fill for \ud83c\udfac STOCK scenes');
}


// ═══════════════════════════════════════════════════════════════
// HELP
// ═══════════════════════════════════════════════════════════════

function showHelp() {
  var html = HtmlService.createHtmlOutput(
    '<div style="font-family:Arial; padding:16px; line-height:1.6; background:#1A1A2E; color:#fff;">' +
    '<h2>\ud83c\udfac KraftWerk Vids v4.2 \u2014 Cinematic</h2><hr style="border-color:#333">' +
    '<h3 style="color:#ccc;">What\'s new in v4.2:</h3>' +
    '<ul>' +
    '<li><b>Dark cinematic slides</b> \u2014 dark bg via Advanced Slides API (fixes silent hex bug)</li>' +
    '<li><b>10-word hooks</b> \u2014 minimal on-screen text per scene</li>' +
    '<li><b>Cinematic stock keywords</b> \u2014 camera angles, mood, 4K descriptors</li>' +
    '<li><b>Persuader voiceovers</b> \u2014 max 60 words, punchy rhythm</li>' +
    '</ul>' +
    '<h3 style="color:#ccc;">Workflow:</h3>' +
    '<ol>' +
    '<li>\ud83d\udce5 Populate Storyboard Tabs (creates ARS, JKU, Sparkasse)</li>' +
    '<li>\ud83c\udfac Create slides (Partner or Storyboard)</li>' +
    '<li>Open Slides deck \u2192 review</li>' +
    '<li>Google Vids \u2192 Convert Slides \u2192 Auto-fill</li>' +
    '<li>Speaker Notes auto-sync as voiceover</li>' +
    '</ol>' +
    '<h3 style="color:#ccc;">Requirements:</h3>' +
    '<p>Advanced Service: Google Slides API must be enabled (Services \u2192 + \u2192 Google Slides API)</p>' +
    '<p style="color:#666; font-size:11px;">v4.2 Cinematic | Owner: rafaelwabisabi@gmail.com</p>' +
    '</div>'
  ).setWidth(480).setHeight(500);
  SpreadsheetApp.getUi().showModalDialog(html, '\ud83c\udfac KraftWerk Vids v4.2');
}
