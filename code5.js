gdjs.pauseCode = {};
gdjs.pauseCode.GDContinueObjects1= [];
gdjs.pauseCode.GDContinueObjects2= [];
gdjs.pauseCode.GDNameObjects1= [];
gdjs.pauseCode.GDNameObjects2= [];
gdjs.pauseCode.GDMenuObjects1= [];
gdjs.pauseCode.GDMenuObjects2= [];
gdjs.pauseCode.GDQuitObjects1= [];
gdjs.pauseCode.GDQuitObjects2= [];
gdjs.pauseCode.GDMouseObjects1= [];
gdjs.pauseCode.GDMouseObjects2= [];
gdjs.pauseCode.GDcheatObjects1= [];
gdjs.pauseCode.GDcheatObjects2= [];
gdjs.pauseCode.GDoffonObjects1= [];
gdjs.pauseCode.GDoffonObjects2= [];
gdjs.pauseCode.GDvolume_95valueObjects1= [];
gdjs.pauseCode.GDvolume_95valueObjects2= [];
gdjs.pauseCode.GDOptionObjects1= [];
gdjs.pauseCode.GDOptionObjects2= [];
gdjs.pauseCode.GDvolumeObjects1= [];
gdjs.pauseCode.GDvolumeObjects2= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};
gdjs.pauseCode.condition2IsTrue_0 = {val:false};
gdjs.pauseCode.condition3IsTrue_0 = {val:false};
gdjs.pauseCode.condition4IsTrue_0 = {val:false};


gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.pauseCode.GDContinueObjects1});gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.pauseCode.GDMenuObjects1});gdjs.pauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.pauseCode.GDQuitObjects1});gdjs.pauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDOptionObjects1Objects = Hashtable.newFrom({"Option": gdjs.pauseCode.GDOptionObjects1});gdjs.pauseCode.eventsList3 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Option");
}}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.pauseCode.GDContinueObjects1});gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.pauseCode.GDMenuObjects1});gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.pauseCode.GDQuitObjects1});gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDOptionObjects1Objects = Hashtable.newFrom({"Option": gdjs.pauseCode.GDOptionObjects1});gdjs.pauseCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 50,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 50);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.pauseCode.GDContinueObjects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDContinueObjects1Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.pauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.pauseCode.GDMenuObjects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.pauseCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.pauseCode.GDQuitObjects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.pauseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option"), gdjs.pauseCode.GDOptionObjects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDOptionObjects1Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.pauseCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.pauseCode.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.pauseCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Option"), gdjs.pauseCode.GDOptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.pauseCode.GDQuitObjects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
gdjs.pauseCode.condition2IsTrue_0.val = false;
gdjs.pauseCode.condition3IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDContinueObjects1Objects, runtimeScene, true, true);
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDMenuObjects1Objects, runtimeScene, true, true);
}if ( gdjs.pauseCode.condition1IsTrue_0.val ) {
{
gdjs.pauseCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if ( gdjs.pauseCode.condition2IsTrue_0.val ) {
{
gdjs.pauseCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDOptionObjects1Objects, runtimeScene, true, true);
}}
}
}
if (gdjs.pauseCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.pauseCode.GDMouseObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.pauseCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDMouseObjects1[i].hide();
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.pauseCode.GDoffonObjects1);
{for(var i = 0, len = gdjs.pauseCode.GDoffonObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDoffonObjects1[i].setString("off");
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.pauseCode.GDoffonObjects1);
{for(var i = 0, len = gdjs.pauseCode.GDoffonObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDoffonObjects1[i].setString("on");
}
}}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDContinueObjects1.length = 0;
gdjs.pauseCode.GDContinueObjects2.length = 0;
gdjs.pauseCode.GDNameObjects1.length = 0;
gdjs.pauseCode.GDNameObjects2.length = 0;
gdjs.pauseCode.GDMenuObjects1.length = 0;
gdjs.pauseCode.GDMenuObjects2.length = 0;
gdjs.pauseCode.GDQuitObjects1.length = 0;
gdjs.pauseCode.GDQuitObjects2.length = 0;
gdjs.pauseCode.GDMouseObjects1.length = 0;
gdjs.pauseCode.GDMouseObjects2.length = 0;
gdjs.pauseCode.GDcheatObjects1.length = 0;
gdjs.pauseCode.GDcheatObjects2.length = 0;
gdjs.pauseCode.GDoffonObjects1.length = 0;
gdjs.pauseCode.GDoffonObjects2.length = 0;
gdjs.pauseCode.GDvolume_95valueObjects1.length = 0;
gdjs.pauseCode.GDvolume_95valueObjects2.length = 0;
gdjs.pauseCode.GDOptionObjects1.length = 0;
gdjs.pauseCode.GDOptionObjects2.length = 0;
gdjs.pauseCode.GDvolumeObjects1.length = 0;
gdjs.pauseCode.GDvolumeObjects2.length = 0;

gdjs.pauseCode.eventsList4(runtimeScene);
return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
