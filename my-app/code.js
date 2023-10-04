var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
var x = randomNumber(1, 4);
if (x===1){
  fill("yellow");
} else {
  if (x===2){
    fill("red");
} else{
  if (x===3){
    fill("green");
  } else{
  if (x===4){
    fill("blue");
}}}}
regularPolygon(200, 400, 3, 100);



var x = randomNumber(1, 4);
if (x===1){
  fill("yellow");
} else {
  if (x===2){
    fill("red");
} else{
  if (x===3){
    fill("green");
  } else{
  if (x===4){
    fill("blue");
}}}}
rect(75, 75, 250, 250);


var y = randomNumber(1, 4);
if (y===1){
  fill("brown");
} else {
  if (y===2){
    fill("purple");
} else{
  if (y===3){
    fill("turquoise");
  } else{
  if (y===4){
    fill("black");
  }}}}
regularPolygon(250, 150, 5, 25);

var a = randomNumber(1, 4);
if (a===1){
  fill("brown");
} else {
  if (a===2){
    fill("purple");
} else{
  if (a===3){
    fill("turquoise");
  } else{
  if (a===4){
    fill("black");
  }}}}
ellipse(150, 150, 25, 50);


var z = randomNumber(1, 4);
if (z===1){
  fill("gold");
} else {
  if (z===2){
    fill("tan");
} else{
  if (z===3){
    fill("white");
  } else{
  if (z===4){
    fill("silver");
  }}}}
rect(125,267.5, 150, 25);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
