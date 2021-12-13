
// ************* All imports for index.html ************* //
import textWrapper from './modules/wrapped-text.js';
import customCursor  from './modules/custom-cursor.js';
import clickableCursor  from './modules/clickable-cursor.js';
import imageReveal  from './modules/image-reveal.js';
import cursorText  from './modules/cursor-text.js';
import magneticBtn from './modules/magnetic-btn.js';
import copyToClipboard from './modules/clipboard.js';
import mainChoreo from './choreos/main-choreo.js';
import swupTransition from './modules/swup.js'



// ************* Calling the imports ************* //
customCursor();
clickableCursor();
imageReveal();
cursorText(); 
magneticBtn();
textWrapper();
copyToClipboard();
mainChoreo();
swupTransition();

// ************* Exporting for Barba ************* //
export default function homeCalls() {
    customCursor();
    clickableCursor();
    imageReveal();
    cursorText(); 
    magneticBtn();
    textWrapper();
    copyToClipboard();
}















