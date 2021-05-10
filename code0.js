gdjs.startCode = {};
gdjs.startCode.GDStartObjects1= [];
gdjs.startCode.GDStartObjects2= [];
gdjs.startCode.GDNameObjects1= [];
gdjs.startCode.GDNameObjects2= [];
gdjs.startCode.GDOptionObjects1= [];
gdjs.startCode.GDOptionObjects2= [];
gdjs.startCode.GDQuitObjects1= [];
gdjs.startCode.GDQuitObjects2= [];
gdjs.startCode.GDMouseObjects1= [];
gdjs.startCode.GDMouseObjects2= [];

gdjs.startCode.conditionTrue_0 = {val:false};
gdjs.startCode.condition0IsTrue_0 = {val:false};
gdjs.startCode.condition1IsTrue_0 = {val:false};
gdjs.startCode.condition2IsTrue_0 = {val:false};
gdjs.startCode.condition3IsTrue_0 = {val:false};


gdjs.startCode.mapOfGDgdjs_46startCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.startCode.GDStartObjects1});gdjs.startCode.eventsList0 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


};gdjs.startCode.mapOfGDgdjs_46startCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.startCode.GDQuitObjects1});gdjs.startCode.eventsList1 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.startCode.mapOfGDgdjs_46startCode_46GDOptionObjects1Objects = Hashtable.newFrom({"Option": gdjs.startCode.GDOptionObjects1});gdjs.startCode.eventsList2 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Option");
}}

}


};gdjs.startCode.mapOfGDgdjs_46startCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.startCode.GDStartObjects1});gdjs.startCode.mapOfGDgdjs_46startCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.startCode.GDQuitObjects1});gdjs.startCode.mapOfGDgdjs_46startCode_46GDOptionObjects1Objects = Hashtable.newFrom({"Option": gdjs.startCode.GDOptionObjects1});gdjs.startCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.startCode.GDMouseObjects1);
{for(var i = 0, len = gdjs.startCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.startCode.GDMouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 50,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 50);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.startCode.GDStartObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.startCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.startCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.startCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.startCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.startCode.GDQuitObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.startCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.startCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.startCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.startCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option"), gdjs.startCode.GDOptionObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDOptionObjects1Objects, runtimeScene, true, false);
}if (gdjs.startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.startCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.startCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.startCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.startCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option"), gdjs.startCode.GDOptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.startCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.startCode.GDStartObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
gdjs.startCode.condition1IsTrue_0.val = false;
gdjs.startCode.condition2IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.startCode.condition0IsTrue_0.val ) {
{
gdjs.startCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if ( gdjs.startCode.condition1IsTrue_0.val ) {
{
gdjs.startCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDOptionObjects1Objects, runtimeScene, true, true);
}}
}
if (gdjs.startCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.startCode.GDMouseObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.startCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.startCode.GDMouseObjects1[i].hide();
}
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDStartObjects1.length = 0;
gdjs.startCode.GDStartObjects2.length = 0;
gdjs.startCode.GDNameObjects1.length = 0;
gdjs.startCode.GDNameObjects2.length = 0;
gdjs.startCode.GDOptionObjects1.length = 0;
gdjs.startCode.GDOptionObjects2.length = 0;
gdjs.startCode.GDQuitObjects1.length = 0;
gdjs.startCode.GDQuitObjects2.length = 0;
gdjs.startCode.GDMouseObjects1.length = 0;
gdjs.startCode.GDMouseObjects2.length = 0;

gdjs.startCode.eventsList3(runtimeScene);
return;

}

gdjs['startCode'] = gdjs.startCode;
