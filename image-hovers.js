/*----------------------------------------------------------------------*\
---------------- #IMAGE-HOVER-FUNCTIONS ------------------
\*----------------------------------------------------------------------*/

/* *
 * Mouse enter/leave to switch image src, for changing images on mouse
 * hover/exit.
 *
 * The filenames need to named accordingly (-static at the end for normal
 * icons, -hover at the end for icons that should be shown when the icon is
 * being hovered) so that the delimiters can properly break the name down and
 * input the new filename.
 */

function imgHover(evt) {

	'use strict';

	var e = evt || window.event, imgSource, imgState, nameSplit, target;

	// Initialize any variables that will be needed for the function
	target = e.target;  // Find which img has been hovered/exited/etc... according the event triggered
	imgSource = target.src;  // Grab the img elements source name
	nameSplit = imgSource.split("-");  // Use the "-" as delimiters in the filename;  This is IMPORTANT - the filenames must have these special characters and names in them for this to work (-static for normal images, and -hover for hovered images)
	imgState = nameSplit[nameSplit.length - 1];  // Grabs the end of the file name for determining which state the image is in, so that it can switch in the proper image.  It should be either static.png or hover.png (they must be .pngs or more code will need to be added to strip out the .png part)

	// Conditionals for deciding which image to swap in
	if (imgState === "static.png") {

		target.src= imgSource.replace("static", "hover");  // The static, or normal, image is being displayed, so switch in the hover image

	} else if (imgState === "hover.png") {

		target.src = imgSource.replace("hover", "static");  // The hovered image is being displayed, so switch in the static, or normal, image

	}

}
