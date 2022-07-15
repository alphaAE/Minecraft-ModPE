var skinsd = "mob/";
var 岩浆怪4 = Renderer.createHumanoidRenderer();AE岩浆怪4(岩浆怪4);

function entityAddedHook(entity){
entt=Entity.getEntityTypeId(entity);
if(entt==39){//21
var skin=Entity.getMobSkin(entity);
Entity.setMobSkin(entity,"MCube4.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,岩浆怪4.renderType);
}}

function AE岩浆怪4(renderer)
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
head.addBox(-3.5, -6, -3, 7, 6, 6, 0); 
head.setTextureOffset(0,12,true);
head.addBox(-4,-5.5, -3.5, 8, 7, 7, 0);
head.setTextureOffset(0,26,true);
head.addBox(-4,-9.5, -3.5, 8, 4, 7, 0); 

head.setTextureOffset(30,14,true);
head.addBox(-4,0.5, 2.5, 8, 5, 1, 0);
head.setTextureOffset(30,20,true);
head.addBox(-4,5.5, 2.5, 8, 5, 1, 0);

body.setTextureOffset(52,47,true);
body.addBox(-1.5,-1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 1, -1.5, 7, 6, 3, 0);
body.setTextureOffset(0,56,true);
body.addBox(-3, 7, -1.5, 6, 5, 3, 0);

body.setTextureOffset(40,30,true);
body.addBox(-4, 11, -2, 8, 3, 4, 0);

rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 12, 2, 0);
rArm.setRotationPoint(0,1.6,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5, -0.5, -1, 2, 12, 2, 0);
lArm.setRotationPoint(0,1.6,1)

rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,15,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 12, 3, 0);
}
 
