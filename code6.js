gdjs.OptionCode = {};
gdjs.OptionCode.GDNameObjects1= [];
gdjs.OptionCode.GDNameObjects2= [];
gdjs.OptionCode.GDNameObjects3= [];
gdjs.OptionCode.GDBackObjects1= [];
gdjs.OptionCode.GDBackObjects2= [];
gdjs.OptionCode.GDBackObjects3= [];
gdjs.OptionCode.GDMouseObjects1= [];
gdjs.OptionCode.GDMouseObjects2= [];
gdjs.OptionCode.GDMouseObjects3= [];
gdjs.OptionCode.GDcheatObjects1= [];
gdjs.OptionCode.GDcheatObjects2= [];
gdjs.OptionCode.GDcheatObjects3= [];
gdjs.OptionCode.GDoffonObjects1= [];
gdjs.OptionCode.GDoffonObjects2= [];
gdjs.OptionCode.GDoffonObjects3= [];
gdjs.OptionCode.GDvolume_95valueObjects1= [];
gdjs.OptionCode.GDvolume_95valueObjects2= [];
gdjs.OptionCode.GDvolume_95valueObjects3= [];
gdjs.OptionCode.GDopeartionObjects1= [];
gdjs.OptionCode.GDopeartionObjects2= [];
gdjs.OptionCode.GDopeartionObjects3= [];
gdjs.OptionCode.GDvolumeObjects1= [];
gdjs.OptionCode.GDvolumeObjects2= [];
gdjs.OptionCode.GDvolumeObjects3= [];

gdjs.OptionCode.conditionTrue_0 = {val:false};
gdjs.OptionCode.condition0IsTrue_0 = {val:false};
gdjs.OptionCode.condition1IsTrue_0 = {val:false};
gdjs.OptionCode.condition2IsTrue_0 = {val:false};


gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.OptionCode.GDBackObjects1});gdjs.OptionCode.eventsList0 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.OptionCode.GDBackObjects1});gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDcheatObjects1Objects = Hashtable.newFrom({"cheat": gdjs.OptionCode.GDcheatObjects1});gdjs.OptionCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.OptionCode.GDoffonObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
gdjs.OptionCode.condition1IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OptionCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionCode.GDoffonObjects2.length;i<l;++i) {
    if ( gdjs.OptionCode.GDoffonObjects2[i].getString() == "off" ) {
        gdjs.OptionCode.condition1IsTrue_0.val = true;
        gdjs.OptionCode.GDoffonObjects2[k] = gdjs.OptionCode.GDoffonObjects2[i];
        ++k;
    }
}
gdjs.OptionCode.GDoffonObjects2.length = k;}}
if (gdjs.OptionCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.OptionCode.GDoffonObjects1);

gdjs.OptionCode.condition0IsTrue_0.val = false;
gdjs.OptionCode.condition1IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OptionCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionCode.GDoffonObjects1.length;i<l;++i) {
    if ( gdjs.OptionCode.GDoffonObjects1[i].getString() == "on" ) {
        gdjs.OptionCode.condition1IsTrue_0.val = true;
        gdjs.OptionCode.GDoffonObjects1[k] = gdjs.OptionCode.GDoffonObjects1[i];
        ++k;
    }
}
gdjs.OptionCode.GDoffonObjects1.length = k;}}
if (gdjs.OptionCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


};gdjs.OptionCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volume_value"), gdjs.OptionCode.GDvolume_95valueObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDvolume_95valueObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDvolume_95valueObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("volume_value"), gdjs.OptionCode.GDvolume_95valueObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((( gdjs.OptionCode.GDvolume_95valueObjects1.length === 0 ) ? 0 :gdjs.OptionCode.GDvolume_95valueObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionCode.GDMouseObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 50,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 50);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.OptionCode.GDBackObjects1);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.OptionCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.OptionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.OptionCode.GDBackObjects1);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBackObjects1Objects, runtimeScene, true, true);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionCode.GDMouseObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.OptionCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMouseObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheat"), gdjs.OptionCode.GDcheatObjects1);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDcheatObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.OptionCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMouseObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.OptionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.OptionCode.GDoffonObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDoffonObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDoffonObjects1[i].setString("off");
}
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("offon"), gdjs.OptionCode.GDoffonObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDoffonObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDoffonObjects1[i].setString("on");
}
}}

}


};

gdjs.OptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionCode.GDNameObjects1.length = 0;
gdjs.OptionCode.GDNameObjects2.length = 0;
gdjs.OptionCode.GDNameObjects3.length = 0;
gdjs.OptionCode.GDBackObjects1.length = 0;
gdjs.OptionCode.GDBackObjects2.length = 0;
gdjs.OptionCode.GDBackObjects3.length = 0;
gdjs.OptionCode.GDMouseObjects1.length = 0;
gdjs.OptionCode.GDMouseObjects2.length = 0;
gdjs.OptionCode.GDMouseObjects3.length = 0;
gdjs.OptionCode.GDcheatObjects1.length = 0;
gdjs.OptionCode.GDcheatObjects2.length = 0;
gdjs.OptionCode.GDcheatObjects3.length = 0;
gdjs.OptionCode.GDoffonObjects1.length = 0;
gdjs.OptionCode.GDoffonObjects2.length = 0;
gdjs.OptionCode.GDoffonObjects3.length = 0;
gdjs.OptionCode.GDvolume_95valueObjects1.length = 0;
gdjs.OptionCode.GDvolume_95valueObjects2.length = 0;
gdjs.OptionCode.GDvolume_95valueObjects3.length = 0;
gdjs.OptionCode.GDopeartionObjects1.length = 0;
gdjs.OptionCode.GDopeartionObjects2.length = 0;
gdjs.OptionCode.GDopeartionObjects3.length = 0;
gdjs.OptionCode.GDvolumeObjects1.length = 0;
gdjs.OptionCode.GDvolumeObjects2.length = 0;
gdjs.OptionCode.GDvolumeObjects3.length = 0;

gdjs.OptionCode.eventsList2(runtimeScene);
return;

}

gdjs['OptionCode'] = gdjs.OptionCode;
