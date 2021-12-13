// ************* All imports for index.html ************* //
import customCursor  from './modules/custom-cursor.js';
import clickableCursor  from './modules/clickable-cursor.js';
import cursorText  from './modules/cursor-text.js';
import magneticBtn from './modules/magnetic-btn.js';
import swupTransition from './modules/swup.js'



// ************* Calling the imports ************* //
customCursor();
clickableCursor();
cursorText(); 
magneticBtn();
swupTransition();



// ************* Exporting for Barba ************* //
export default function aboutMeCalls() {
    customCursor();
    clickableCursor();
    cursorText(); 
    magneticBtn();
}
