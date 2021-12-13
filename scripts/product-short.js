// ************* All imports for index.html ************* //
import customCursor  from './modules/custom-cursor.js';
import clickableCursor  from './modules/clickable-cursor.js';
import magneticBtn from './modules/magnetic-btn.js';
import imageReveal  from './modules/image-reveal.js';




// ************* Calling the imports ************* //
customCursor();
clickableCursor();
magneticBtn();
imageReveal()



// ************* Exporting for Barba ************* //
export default function productShortCalls() {
    customCursor();
    clickableCursor();
    magneticBtn();
    imageReveal();
}
