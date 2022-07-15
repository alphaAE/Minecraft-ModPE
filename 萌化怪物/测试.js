var skinsd = "mob/";
var 铁傀儡 = Renderer.createHumanoidRenderer();AE铁傀儡(铁傀儡);

function entityAddedHook(entity){
entt=Entity.getEntityTypeId(entity);
if(entt==20){
var skin=Entity.getMobSkin(entity);
Entity.setMobSkin(entity,"mob/IGolem.png");
Entity.setRenderType(entity,铁傀儡.renderType);
//Entity.setCarriedItem(entity,272,1,0);
}}

function AE铁傀儡(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(64,64);
var body = model.getPart("body").setTextureSize(64,64);
var rArm = model.getPart("rightArm").setTextureSize(64,64);
var lArm = model.getPart("leftArm").setTextureSize(64,64);
var rLeg = model.getPart("rightLeg").setTextureSize(64,64);
var lLeg = model.getPart("leftLeg").setTextureSize(64,64);
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();
head.setTextureOffset(0,0,true);
head.addBox(-3.5, -8, -3, 7, 6, 6, 0); 
head.setTextureOffset(0,12,true);
head.addBox(-4, -7.5, -3.5, 8, 7, 7, 0); 
head.setTextureOffset(0,26,true);
head.addBox(-4, -10.5, -3.5, 8, 3, 7, 0); 
head.setTextureOffset(32,0,true);
head.addBox(4, -9.5, -0.5, 1, 4, 1, 0);
body.setTextureOffset(0,42,true);
body.addBox(-1.5, -2.5, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, -0.5, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 4.5, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,32,true);
body.addBox(-3.5, 8.5, -2, 7, 3, 4, 0);
body.setTextureOffset(38,39,true);
body.addBox(-4, 11.5, -2.5, 8, 4, 5, 0);
//胸
body.setTextureOffset(48,56,true);
body.addBox(-3, 4-2.8, -2, 6, 2, 2, 0);
for(var yy=3.55;yy<=4;yy=yy+0.05){
zz = -2*yy+5.5
body.setTextureOffset(48,52,true);
body.addBox(-3, yy-2.8,zz,6,2,2,0);
}
for(var yy=4;yy<=4.45;yy=yy+0.05){
zz = 2*yy-10.5
body.setTextureOffset(48,60,true);
body.addBox(-3, yy-2.8,zz,6,2,2,0);
}
rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 13, 2, 0);
rArm.setRotationPoint(0,0,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5, -0.5, -1, 2, 13, 2, 0);
lArm.setRotationPoint(0,0,1)
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, -1, -1.5, 3, 13, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.6, -1, -1.5, 3, 13, 3, 0);
}
 
