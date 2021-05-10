gdjs.WinCode = {};
gdjs.WinCode.GDNewObjectObjects1= [];
gdjs.WinCode.GDNewObjectObjects2= [];
gdjs.WinCode.GDNewObject2Objects1= [];
gdjs.WinCode.GDNewObject2Objects2= [];
gdjs.WinCode.GDNewObject3Objects1= [];
gdjs.WinCode.GDNewObject3Objects2= [];
gdjs.WinCode.GDNewObject4Objects1= [];
gdjs.WinCode.GDNewObject4Objects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.WinCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.WinCode.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.WinCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDNewObject3Objects1[i].setString("Death : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.WinCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDNewObject4Objects1[i].setString("Time Used : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewObjectObjects1.length = 0;
gdjs.WinCode.GDNewObjectObjects2.length = 0;
gdjs.WinCode.GDNewObject2Objects1.length = 0;
gdjs.WinCode.GDNewObject2Objects2.length = 0;
gdjs.WinCode.GDNewObject3Objects1.length = 0;
gdjs.WinCode.GDNewObject3Objects2.length = 0;
gdjs.WinCode.GDNewObject4Objects1.length = 0;
gdjs.WinCode.GDNewObject4Objects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;
