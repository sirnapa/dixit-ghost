/**
 * Script para Ubuntu Web App
 */

function unityReady() {
  // Integrate with Unity!
}
var Unity = external.getUnityObject(1.0); 
 
Unity.init({name: "Funnix",
            iconUrl: "http://funnix.net/content/images/2014/Apr/funnix.svg",
            onInit: unityReady});