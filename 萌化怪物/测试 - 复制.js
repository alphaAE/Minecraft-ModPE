var skinsd = "mob/";
var 女巫 = Renderer.createHumanoidRenderer();AE女巫(女巫);

function entityAddedHook(entity){
entt=Entity.getEntityTypeId(entity);
if(entt==39){//0
var skin=Entity.getMobSkin(entity);
Entity.setMobSkin(entity,"Witch.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,女巫.renderType);
}}

function AE女巫(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0,0,true);
head.addBox(-3.5, -6, -3, 7, 6, 6, 0); 
head.setTextureOffset(0,12,true);
head.addBox(-4,-6, -3.5, 8, 10, 7, 0);
head.setTextureOffset(0,32,true);
head.addBox(-4,1, 2.5, 8, 12, 1, 0);

head.setTextureOffset(64,0,true);
head.addBox(-7,-7, -6, 14, 1, 12, 0);
head.setTextureOffset(64,13,true);
head.addBox(-4,-12,-3.5, 8, 5, 7, 0);

for(var yy=-15;yy<=-12;yy=yy+0.05){
zz = -yy-15;
ss = (yy+15)/10;
head.setTextureOffset(64,25,true);
head.addBox(-3, yy,zz,6,5,6,-ss);
}

for(var yy=-14.5;yy<=-13;yy=yy+0.05){
zz = 2*yy+29;
ss = (yy+14.5)/10;
head.setTextureOffset(64,36,true);
head.addBox(-2, yy,zz,4,3,7,-ss);
}




body.setTextureOffset(96,57,true);
body.addBox(-1.5,-1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(108,46,true);
body.addBox(-3.5, 1, -1.5, 7, 5, 3, 0);
body.setTextureOffset(110,54,true);
body.addBox(-3, 6, -1.5, 6, 6, 3, 0);

body.setTextureOffset(106,13,true);
body.addBox(-3.5, 9, -2, 7, 4, 4, 0);
body.setTextureOffset(100,21,true);
body.addBox(-4, 13, -3, 8, 5, 6, 0);
body.setTextureOffset(94,32,true);
body.addBox(-4.5,18, -4, 9, 5, 8, 0);

rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 4, 2, 0);
rArm.setRotationPoint(0,1.6,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5,-0.5,-1, 2, 4, 2, 0);
lArm.setRotationPoint(0,1.6,1)

rArm.setTextureOffset(40,8);
rArm.addBox(-0.5,3.5,-1.5, 3, 8, 3, 0);
rArm.setRotationPoint(0,1.6,1)
lArm.setTextureOffset(40,8);
lArm.addBox(-2,3.5,-1.5, 3, 8, 3, 0);
lArm.setRotationPoint(0,1.6,1)

rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,15,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 12, 3, 0);

}
 
