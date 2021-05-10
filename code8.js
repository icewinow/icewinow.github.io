gdjs.DeathCode = {};
gdjs.DeathCode.GDNewObjectObjects1= [];
gdjs.DeathCode.GDNewObjectObjects2= [];
gdjs.DeathCode.GDNewObject2Objects1= [];
gdjs.DeathCode.GDNewObject2Objects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDNewObjectObjects1.length = 0;
gdjs.DeathCode.GDNewObjectObjects2.length = 0;
gdjs.DeathCode.GDNewObject2Objects1.length = 0;
gdjs.DeathCode.GDNewObject2Objects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
