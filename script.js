/**
 * Created with pixelventure.
 * User: spacegeek224
 * Date: 2015-10-09
 * Time: 08:48 PM
 * To change this template use Tools | Templates.
 */
if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    console.log("Hash: " + hash);
    // hash found
} else {
    console.log("No hash found");
    // No hash found
}