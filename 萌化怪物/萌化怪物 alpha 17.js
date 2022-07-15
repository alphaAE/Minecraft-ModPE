/*************
C17
alphaAE制作 @小ASD555 
made in CN
代码开源，请勿抄袭
*************/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var skinsd = "mob/villager/";
var 僵尸 = Renderer.createHumanoidRenderer();AE僵尸(僵尸);
var 末影人 = Renderer.createHumanoidRenderer();AE末影人(末影人);
var 蜘蛛 = Renderer.createHumanoidRenderer();AE蜘蛛(蜘蛛);
var 蠹虫 = Renderer.createHumanoidRenderer();AE蠹虫(蠹虫);
var 蘑菇牛 = Renderer.createHumanoidRenderer();AE蘑菇牛(蘑菇牛);
var 苦力怕 = Renderer.createHumanoidRenderer();AE苦力怕(苦力怕);
var 骷髅 = Renderer.createHumanoidRenderer();AE骷髅(骷髅);
var 猪人 = Renderer.createHumanoidRenderer();AE猪人(猪人);
var 恶魂 = Renderer.createHumanoidRenderer();AE恶魂(恶魂);
var 洞穴蜘蛛 = Renderer.createHumanoidRenderer();AE洞穴蜘蛛(洞穴蜘蛛);
var 村民A = Renderer.createHumanoidRenderer();AE村民A(村民A);
var 村民AB = Renderer.createHumanoidRenderer();AE村民AB(村民AB);
var 村民AS = Renderer.createHumanoidRenderer();AE村民AS(村民AS);
var 村民B = Renderer.createHumanoidRenderer();AE村民B(村民B);
var 村民V = Renderer.createHumanoidRenderer();AE村民V(村民V);
var 铁傀儡 = Renderer.createHumanoidRenderer();AE铁傀儡(铁傀儡);
var 雪傀儡 = Renderer.createHumanoidRenderer();AE雪傀儡(雪傀儡);
var 史莱姆4 = Renderer.createHumanoidRenderer();AE史莱姆4(史莱姆4);
var 岩浆怪4 = Renderer.createHumanoidRenderer();AE岩浆怪4(岩浆怪4);
var 女巫 = Renderer.createHumanoidRenderer();AE女巫(女巫);


function entityAddedHook(entity){
var entt=Entity.getEntityTypeId(entity);
ctx.runOnUiThread(new java.lang.Runnable(){
run:function(){
}});
if(entt==32){
Entity.setRenderType(entity,僵尸.renderType);
Entity.setMobSkin(entity,"mob/zombie.png");
Entity.setCarriedItem(entity,0,0,0);
}
if(entt==38){
Entity.setRenderType(entity,末影人.renderType);
//Entity.setMobSkin(entity,"mob/enderman.png");
}
if(entt==35){
Entity.setRenderType(entity,蜘蛛.renderType);
//Entity.setMobSkin(entity,"mob/蜘蛛.png");
Entity.setCollisionSize(entity,0.5,2);
}
if(entt==39){
Entity.setRenderType(entity,蠹虫.renderType);
Entity.setMobSkin(entity,"mob/silverfish.png");
Entity.setCollisionSize(entity,0.5,2);
}
if(entt==16){
Entity.setRenderType(entity,蘑菇牛.renderType);
Entity.setMobSkin(entity,"mob/mooshroom.png");
Entity.setCollisionSize(entity,0.5,2);
}
if(entt==33){
Entity.setRenderType(entity,苦力怕.renderType);
Entity.setMobSkin(entity,"mob/creeper.png");
}
if(entt==34){
Entity.setRenderType(entity,骷髅.renderType);
var Biome=Level.getBiome(Math.round(Player.getX()),Math.round(Player.getZ()));
if(Biome==8){
Entity.setMobSkin(entity,"mob/wither_skeleton.png"); 
}else{
Entity.setMobSkin(entity,"mob/skeleton.png"); 
//Entity.setCarriedItem(entity,261,1,0);
}}
if(entt==36){
Entity.setRenderType(entity,猪人.renderType);
Entity.setCarriedItem(entity,283,1,0);
Entity.setMobSkin(entity,"mob/pigzombie.png"); 
}
if(entt==41){
Entity.setRenderType(entity,恶魂.renderType);
Entity.setMobSkin(entity,"mob/ghast.png");
Entity.setCollisionSize(entity,0.5,2.1);
}
if(entt==40){
//Entity.setMobSkin(entity,"mob/CSpider.png");
Entity.setRenderType(entity,洞穴蜘蛛.renderType);
Entity.setCollisionSize(entity,0.5,2);
}
if(entt==15){
skin=Entity.getMobSkin(entity);
//print(skin);
if(skin==skinsd+"farmer.png"){
Entity.setMobSkin(entity,skinsd+"farmer.png");
Entity.setRenderType(entity,村民AB.renderType);
}
if(skin==skinsd+"librarian.png"){
Entity.setMobSkin(entity,skinsd+"librarian.png");
Entity.setRenderType(entity,村民A.renderType);
}
if(skin==skinsd+"priest.png"){
Entity.setRenderType(entity,村民AS.renderType);
Entity.setMobSkin(entity,skinsd+"priest.png");
}
if(skin==skinsd+"butcher.png"){
Entity.setRenderType(entity,村民B.renderType);
Entity.setMobSkin(entity,skinsd+"butcher.png");
}
if(skin==skinsd+"smith.png"){
Entity.setRenderType(entity,村民B.renderType);
Entity.setMobSkin(entity,skinsd+"smith.png");
}
if(skin==skinsd+"villager.png"){
Entity.setRenderType(entity,村民B.renderType);
Entity.setMobSkin(entity,skinsd+"villager.png");
}}
if(entt==44){
Entity.setMobSkin(entity,skinsd+"ZombieV.png");
Entity.setRenderType(entity,村民V.renderType);
}
if(entt==20){
Entity.setMobSkin(entity,"mob/iron_golem.png");
Entity.setRenderType(entity,铁傀儡.renderType);
Entity.setCollisionSize(entity,0.6,2.1);
if(Math.random()*100<50){
Entity.setCarriedItem(entity,272,1,0);
}}
if(entt==21){
Entity.setMobSkin(entity,"mob/snow_golem.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,雪傀儡.renderType);}
if(entt==37){
maxh=Entity.getMaxHealth(entity);
if(maxh!=160){
Entity.setMobSkin(entity,"mob/slime.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,史莱姆4.renderType);}}
if(entt==42){
maxh=Entity.getMaxHealth(entity);
if(maxh!=160){
Entity.setMobSkin(entity,"MCube4.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,岩浆怪4.renderType);
}}
if(entt==45){
var skin=Entity.getMobSkin(entity);
Entity.setMobSkin(entity,"Witch.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,女巫.renderType);
}
//结束
if(entt==38){
Entity.setMobSkin(entity,"mob/enderman.png");
}
if(entt==35){
Entity.setMobSkin(entity,"mob/蜘蛛.png");
}
if(entt==40){
Entity.setMobSkin(entity,"mob/CSpider.png");
}
}

function AE僵尸(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();
head.setTextureOffset(0,0,true);
head.addBox(-3.5, -7-1, -3.5, 7, 7, 6, 0); 
head.setTextureOffset(26,0,true);
head.addBox(-4, -7.5-1, -4, 8, 8, 7, 0); 
head.setTextureOffset(42,22,true);
head.addBox(-3, -8.5-1, -2.5, 6, 1, 5, 0); 
head.setTextureOffset(49,1,true);
head.addBox(-5, -6.5-1, -3, 1, 7, 6, 0);
head.setTextureOffset(49,1,true);
head.addBox( 4, -6.5-1, -3, 1, 7, 6, 0);
body.setTextureOffset(0,27,true);
body.addBox(-1.5, -1, -1.5, 3, 1, 3, 0);
body.setTextureOffset(12,15,true);
body.addBox(-3.5, 0, -1.5, 7, 5, 3, 0);
body.setTextureOffset(12,23,true);
body.addBox(-3, 5, -1.5, 6, 3, 3, 0);
body.setTextureOffset(44,15,true);
body.addBox(-3.5, 8, -1.5, 7, 4, 3, 0);
body.setTextureOffset(24,19);
body.addBox(-5.5, 0.1, -10, 2, 2, 11, 0); 
body.setTextureOffset(24,19);
body.addBox(3.5, 0.1, -10, 2, 2, 11, 0); 
/*
rArm.setTextureOffset(24,19);
rArm.addBox(-0.5, -2, -11, 2, 2, 11, 0); 
lArm.setTextureOffset(24,19);
lArm.addBox(-1.5, -2, -11, 2, 2, 11, 0); 
*/
rLeg.setTextureOffset(0,13,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(0,13,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
}
 
function AE末影人(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();
head.setTextureOffset(0,0,true);
head.addBox(-3.5, -8, -3, 7, 5, 6, 0); 
head.setTextureOffset(22,16,true);
head.addBox(-4, -11, -3.5, 8, 9, 7, 0); 
head.setTextureOffset(0,26,true);
head.addBox(-3, -12, -2.5, 6, 1, 5, 0); 
head.setTextureOffset(43,52,true);
head.addBox(-4, -3.5, 2.5, 8, 11,1, 0);
//头发
head.setTextureOffset(0,26,true);
head.addBox(-3, -3, -2.5, 6, 1, 5, 0);
body.setTextureOffset(44,11,true);
body.addBox(-3.5, -2.5, -1.5, 7, 5, 3, 0);
body.setTextureOffset(46,0,true);
body.addBox(-3, 2.5, -1.5, 6, 6, 3, 0);
body.setTextureOffset(0,20,true);
body.addBox(-3.5, 6.5, -2, 7, 3, 4, 0);
body.setTextureOffset(0,11,true);
body.addBox(-4, 9.5,-2.5, 8, 3, 5, 0);
rArm.setTextureOffset(38,0);
rArm.addBox(-0.5, -3, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(38,0);
lArm.addBox(-1.5, -3, -1, 2, 12, 2, 0); 
rLeg.setTextureOffset(26,0,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(26,0,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
}

function AE蜘蛛(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();
head.setTextureOffset(0,0,true);
head.addBox(-3.5, -8, -3, 7, 7, 6, 0); 
head.setTextureOffset(26,0,true);
head.addBox(-4, -8.5, -3.5, 8, 8, 7, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-3.5, -9.5, -3, 7, 1, 6, 0);
head.setTextureOffset(21,1,true);
head.addBox(-1.5, -2.5,-1.5, 3, 2, 3, 0); 
head.setTextureOffset(0,3,true);
head.addBox(1.5, -10.5, -2, 2, 1, 1, 0); 
head.setTextureOffset(0,1,true);
head.addBox(-3.5,-10.5, -2, 2, 1, 1, 0);
head.setTextureOffset(52,0,true);
head.addBox(-1.5,-10.5,3.5, 3, 21, 3, 0);
body.setTextureOffset(35,24,true);
body.addBox(-3.5, -0.5, -1.5, 7, 5, 3, 0);
body.setTextureOffset(34,15,true);
body.addBox(-3, 4.5, -1.5, 6, 6, 3, 0);
body.setTextureOffset(0,26,true);
body.addBox(-3.5, 8.5, -2, 7, 2, 4, 0);
body.setTextureOffset(0,26,true);
body.addBox(-3.5, 11.5, -2, 7,0.8, 4,1);
rArm.setTextureOffset(56,24);
rArm.addBox(-0.5, -2.5, -1, 2, 6, 2, 0); 
rArm.setTextureOffset(22,17);
rArm.addBox(-1, 2.5, -1.5, 3, 5, 3, 0); 
rArm.setTextureOffset(14,20);
rArm.addBox(-0.5, 7.5, -1, 2, 1, 2, 0); 
lArm.setTextureOffset(56,24);
lArm.addBox(-1.5, -2.5, -1, 2, 6, 2, 0); 
lArm.setTextureOffset(22,17);
lArm.addBox(-2, 2.5, -1.5, 3, 5, 3, 0); 
lArm.setTextureOffset(14,20);
lArm.addBox(-1.5, 7.5, -1, 2, 1, 2, 0); 
rLeg.setTextureOffset(22,17,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(22,17,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
}

function AE蠹虫(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();
head.setTextureOffset(30,3,true);
head.addBox(-3.5, -7, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,0,true);
head.addBox(-4, -7.5, -3.5, 8, 8, 7, 0); 
head.setTextureOffset(0,16,true);
head.addBox(-3.5, -8.5, -3, 7, 1, 6, 0);
head.setTextureOffset(50,0,true);
head.addBox(3.5,-10.5, -2.5, 3, 5, 4, 0); 
body.setTextureOffset(26,18,true);
body.addBox(-1.5, -0.5, -1.5, 3, 2, 3, 0);
body.setTextureOffset(38,16,true);
body.addBox(-3.5, 0.5, -1.5, 7, 5, 3, 0);
body.setTextureOffset(34,24,true);
body.addBox(-3, 5.5, -1.5, 6, 5, 3, 0);
body.setTextureOffset(23,0,true);
body.addBox(-3.5, 8.5, -2, 7, 3, 4, 0);
body.setTextureOffset(0,23,true);
body.addBox(-4.5, 11.5, -3, 9,3, 6,0);
body.setTextureOffset(0,23,true);
body.addBox(-4.5, 15.5, -3, 9,2.4, 6,1);
rArm.setTextureOffset(56,9);
rArm.addBox(-0.5, -1.5, -1, 2, 9, 2, 0); 
lArm.setTextureOffset(56,9);
lArm.addBox(-1.5, -1.5, -1, 2, 9, 2, 0); 
rLeg.setTextureOffset(52,19,true);
rLeg.addBox( -1.5, 2, -1.5, 3, 10, 3, 0); 
lLeg.setTextureOffset(52,19,true);
lLeg.addBox( -1.5, 2, -1.5, 3, 10, 3, 0); 
}

function AE蘑菇牛(renderer)
{
var model = renderer.getModel();

var head = model.getPart("head");
var head2 = model.getPart("head");
var head3 = model.getPart("head");
var head4 = model.getPart("head");
var head5 = model.getPart("head");
var head6 = model.getPart("head");
var head7 = model.getPart("head");
var head8 = model.getPart("head");

var body = model.getPart("body");
var body2 = model.getPart("body");
var body3 = model.getPart("body");
var body4 = model.getPart("body");
var body5 = model.getPart("body");

var body6 = model.getPart("body");
var body7 = model.getPart("body");

var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");

var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0,0,true);
head.addBox(-3.5, -7, -3, 7, 7, 6, 0); 
head2.setTextureOffset(26,0,true);
head2.addBox(-4, -7.5, -3.5, 8, 8, 7, 0); 
head3.setTextureOffset(0,25,true);
head3.addBox(-3.5, -8.5, -3, 7, 1, 6, 0);
head4.setTextureOffset(56,8,true);
head4.addBox( 4, -5.5, -2.5, 1, 3, 3, 0);
head5.setTextureOffset(56,8,true);
head5.addBox(-5,-5.5, -2.5, 1, 3, 3, 0);
head6.setTextureOffset(0,13,true);
head6.addBox( 4, -9.5, -1.5, 1, 4, 1, 0);
head7.setTextureOffset(0,13,true);
head7.addBox(-5, -9.5, -1.5, 1, 4, 1, 0);
 
body4.setTextureOffset(20,1,true);
body4.addBox(-1.5, -1.5, -1.5, 3, 2, 3, 0);
body.setTextureOffset(44,15,true);
body.addBox(-3.5, 0.5, -1.5, 7, 5, 3, 0);
body2.setTextureOffset(44,23,true);
body2.addBox(-3, 5.5, -1.5, 6, 6, 3, 0);
body3.setTextureOffset(0,17,true);
body3.addBox(-3.5, 10.5, -2, 7, 4, 4, 0);
//胸
body5.setTextureOffset(49,2,true);
body5.addBox(-3.05, 4.5, -3.6, 6.1,2,2,0);

for(var xx=3.5;xx<=4.5;xx=xx+0.05){
yy = -xx+1
body6.setTextureOffset(49,1,true);
body6.addBox(-3, xx,yy,6,1,2,0);
}
for(var xx=2.5;xx<=3.5;xx=xx+0.05){
yy = -xx+1
body7.setTextureOffset(50,0,true);
body7.addBox(-3, xx,yy,6,1,1,0);
}

rArm.setTextureOffset(24,16);
rArm.addBox(-0.5, -1.5, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(24,16);
lArm.addBox(-1.5, -1.5, -1, 2, 12, 2, 0); 

rLeg.setTextureOffset(32,15,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(32,15,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
}

function AE苦力怕(renderer)
{
var model = renderer.getModel();

var head = model.getPart("head");
var head2 = model.getPart("head");
var head3 = model.getPart("head");
var head4 = model.getPart("head");
var head5 = model.getPart("head");

var body = model.getPart("body");
var body2 = model.getPart("body");
var body3 = model.getPart("body");
var body4 = model.getPart("body");
var body5 = model.getPart("body");

var body6 = model.getPart("body");
var body7 = model.getPart("body");

var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");

var rArm2 = model.getPart("rightArm");
var lArm2 = model.getPart("leftArm");

var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();

head.setTextureOffset(30,0,true);
head.addBox(-3.5, -7, -3, 7, 7, 6, 0); 
head2.setTextureOffset(0,0,true);
head2.addBox(-4, -7.5, -3.5, 8, 8, 7, 0); 
head3.setTextureOffset(14,25,true);
head3.addBox(-3.5, -8.5, -3, 7, 1, 6, 0);
head4.setTextureOffset(0,20,true);
head4.addBox(4, -6.5, -2.5, 1, 6, 6, 0);
head5.setTextureOffset(0,20,true);
head5.addBox(-5, -6.5, -2.5, 1, 6, 6, 0);

body5.setTextureOffset(52,0,true);
body5.addBox(-1.5, -1.5, -1.5, 3, 2, 3, 0);
body.setTextureOffset(27,23,true);
body.addBox(-3.5, 0.5, -1.5, 7, 5, 3, 0);
body2.setTextureOffset(25,0,true);
body2.addBox(-3, 5.5, -1.5, 6, 3, 3, 0);
body3.setTextureOffset(25,0,true);
body3.addBox(-3, 8.5, -1.5, 6, 2, 3, 0.5);
body4.setTextureOffset(14,16,true);
body4.addBox(-4, 10.5,-2.5, 8, 2, 5, 0);
//胸
body6.setTextureOffset(25,0,true);
body6.addBox(-3, 3, -2.5, 6, 2, 3, 0);

for(var xx=2.05;xx<=3;xx=xx+0.05){
yy = -xx+0.5
body6.setTextureOffset(25,1,true);
body6.addBox(-3, xx,yy,6,2,3,0);
}
for(var xx=3;xx<=4.95;xx=xx+0.05){
yy = xx-5.5
body7.setTextureOffset(26,1,true);
body7.addBox(-3, xx,yy,6,2,2,0);
}

rArm.setTextureOffset(56,6);
rArm.addBox(-0.5, -1.5, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(56,6);
lArm.addBox(-1.5, -1.5, -1, 2, 12, 2, 0);
 
rArm2.setTextureOffset(1,15);
rArm2.addBox(-1, 1.5, -1.5, 3, 8, 3, 0); 
lArm2.setTextureOffset(1,15);
lArm2.addBox(-2, 1.5, -1.5, 3, 8, 3, 0); 

rLeg.setTextureOffset(47,17,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(47,17,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
}
 

function AE骷髅(renderer)
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
head.addBox(-4, -5.5, -3.5, 8, 7, 7, 0); 
head.setTextureOffset(0,26,true);
head.addBox(-4, -8.5, -3.5, 8, 3, 7, 0); 
head.setTextureOffset(38,37,true);
head.addBox(-3.5, -9.5, -3, 7, 1, 6, 0);
head.setTextureOffset(18,36,true);
head.addBox(1, -0.5, 2, 2, 10, 1, 0);
head.setTextureOffset(18,36,true);
head.addBox(-3, -0.5, 2, 2, 10, 1, 0);
body.setTextureOffset(52,47,true);
body.addBox(-1.5, -0.5, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 1.5, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 6.5, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 10.5, -2, 7, 3, 4, 0);
body.setTextureOffset(48,56,true);
body.addBox(-3, 4-0.8, -2, 6, 2, 2, 0);
for(var yy=3.55;yy<=4;yy=yy+0.05){
zz = -2*yy+5.5
body.setTextureOffset(48,52,true);
body.addBox(-3, yy-0.8,zz,6,2,2,0);
}
for(var yy=4;yy<=4.45;yy=yy+0.05){
zz = 2*yy-10.5
body.setTextureOffset(48,60,true);
body.addBox(-3, yy-0.8,zz,6,2,2,0);
}
rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 12, 2, 0);
rArm.setRotationPoint(0,2,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5, -0.5, -1, 2, 12, 2, 0);
lArm.setRotationPoint(0,2,1)
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 11, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 11, 3, 0);
}


function AE猪人(renderer)
{
var model = renderer.getModel();

var head = model.getPart("head");
var head2 = model.getPart("head");
var head3 = model.getPart("head");

var body = model.getPart("body");
var body2 = model.getPart("body");
var body3 = model.getPart("body");
var body4 = model.getPart("body");
var body5 = model.getPart("body");

var body6 = model.getPart("body");
var body7 = model.getPart("body");

var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");

var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
var lLeg2 = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();//右手
lArm.clear();//左手
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0,0,true);
head.addBox(-3.5, -6, -3, 7, 7, 6, 0); 
head2.setTextureOffset(26,0,true);
head2.addBox(-4, -6.5, -3.5, 8, 8, 7, 0); 
head3.setTextureOffset(12,17,true);
head3.addBox(-3.5, -7.5, -3, 7, 1, 6, 0);

body4.setTextureOffset(21,1,true);
body4.addBox(-1.5, 0, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,24,true);
body.addBox(-3.5, 2, -1.5, 7, 5, 3, 0);
body2.setTextureOffset(0,13,true);
body2.addBox(-3, 7, -1.5, 6, 6, 3, 0);
body3.setTextureOffset(34,25,true);
body3.addBox(-3.5, 11, -2, 7, 3, 4, 0);

//胸
body5.setTextureOffset(25,15,true);
body5.addBox(-3, 5, -3, 6, 2, 2, 0);

for(var yy=4.5;yy<=4.95;yy=yy+0.05){
zz = -yy+2
body6.setTextureOffset(21,27,true);
body6.addBox(-3, yy,zz,6,1,2,0);
}

for(var yy=3.55;yy<=4.5;yy=yy+0.05){
zz = -yy+2
body7.setTextureOffset(21,25,true);
body7.addBox(-3, yy,zz,6,1,2,0);
}


rArm.setTextureOffset(56,0);
rArm.addBox(-0.5, 0, -1, 2, 12, 2, 0)
rArm.setRotationPoint(0,2,0);

lArm.setTextureOffset(56,0);
lArm.addBox(-1.5, 0, -1, 2, 12, 2, 0);

rLeg.setTextureOffset(52,15,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 11, 3, 0); 
lLeg.setTextureOffset(52,15,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 11, 3, 0);

lLeg2.setTextureOffset(38,15);
lLeg2.addBox(-1.5, 0, -2, 3, 6, 4, 0.2);
}

function AE恶魂(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(64,64);
var body = model.getPart("body").setTextureSize(64,64) ;
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
head.addBox(-3.5, -8, -3, 7, 5, 6, 0); 
head.setTextureOffset(0,27,true);
head.addBox(-3.5, -13, -3, 7, 1, 6, 0); 
head.setTextureOffset(0,34,true);
head.addBox(-4.5, -12, -4, 9, 4, 8, 0); 
head.setTextureOffset(0,11,true);
head.addBox(-4, -8,-3.5, 8,9,7, 0);
//头发
head.setTextureOffset(20,46,true);
head.addBox(-4, -3.5, 2.5, 8, 12, 1, 0);
//脖子
body.setTextureOffset(18,59,true);
body.addBox(-1.5, -4, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,46,true);
body.addBox(-3.5, -2, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,54,true);
body.addBox(-3, 3, -1.5, 6, 4, 3, 0);
//裙子
body.setTextureOffset(42,37,true);
body.addBox(-3.5, 6,-2, 7, 4, 4, 0);
body.setTextureOffset(38,45,true);
body.addBox(-4, 9,-2.5, 8, 4, 5, 0);
body.setTextureOffset(34,54,true);
body.addBox(-4.5, 12,-3, 9, 4, 6, 0);
body.setTextureOffset(30,26,true);
body.addBox(-5, 15,-3.5, 10, 4, 7, 0);
//胸部
body.setTextureOffset(36,18,true);
body.addBox(-3, 0.5,-2.5, 6, 2, 2, 0);
for(var xx=0;xx<=0.4;xx=xx+0.05){
yy = -xx-2
body.setTextureOffset(36,15,true);
body.addBox(-3, xx,yy,6,1,2,0);
}
for(var xx=-0.45;xx<=0.05;xx=xx+0.05){
yy = -xx-2
body.setTextureOffset(36,13,true);
body.addBox(-3, xx,yy,6,1,2,0);
}
//手
body.setTextureOffset(36,0);
body.addBox(-5.5, -2, -1, 2, 12, 2, 0); 
body.setTextureOffset(44,0);
body.addBox(3.5, -2, -1, 2, 12, 2, 0); 
//脚
body.setTextureOffset(52,0,true);
body.addBox( -3.5, 12, -1.5, 3, 10, 3, 0); 
body.setTextureOffset(52,0,true);
body.addBox( 1.5, 12, -1.5, 3, 10, 3, 0); 
}


function AE洞穴蜘蛛(renderer)
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
head.addBox(-3.5, -4.5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,31,true);
head.addBox(-4, -4.5, -3.5, 8, 7, 7, 0); 
head.setTextureOffset(0,45,true);
head.addBox(-3, -5.5, -3, 6, 1, 6, 0); 
head.setTextureOffset(30,31,true);
head.addBox(-5, -3.5, -2, 2, 5, 4, 0); 
head.setTextureOffset(42,31,true);
head.addBox(3, -3.5, -2, 2, 5, 4, 0); 
head.setTextureOffset(30,40,true);
head.addBox(-6, -2.5, -1, 2, 2, 2, 0); 
head.setTextureOffset(38,40,true);
head.addBox(4, -2.5, -1, 2, 2, 2, 0); 
//头饰
head.setTextureOffset(26,0,true);
head.addBox(-5.2, -4.5, -2.5, 1, 2, 1, 0); 
head.setTextureOffset(26,0,true);
head.addBox(4.2, -4.5, -2.5, 1, 2, 1, 0); 
head.setTextureOffset(26,0,true);
head.addBox(-5, -4.5, -2.5, 1, 2, 1, 0); 
head.setTextureOffset(26,0,true);
head.addBox(4, -4.5, -2.5, 1, 2, 1, 0); 
body.setTextureOffset(20,13,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,15,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,23,true);
body.addBox(-3, 8, -1.5, 6, 5, 3, 0);
body.setTextureOffset(20,18,true);
body.addBox(-3.5, 11,-2, 7, 2, 4, 0);
body.setTextureOffset(18,24,true);
body.addBox(-4, 13,-2.5, 8, 2, 5, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 10, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 10, 2, 0); 
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.5, 2, -1.5, 3, 10, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.5, 2, -1.5, 3, 10, 3, 0); 
}


function AE村民A(renderer)
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
head.addBox(-3.5, -5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-4, -5, -3.5, 8, 10, 7, 0); 
head.setTextureOffset(0,30,true);
head.addBox(-3.5, -6, -3, 7, 1, 6, 0);
body.setTextureOffset(20,49,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 8, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 11,-2, 7, 4, 4, 0);
body.setTextureOffset(36,38,true);
body.addBox(-4, 15,-3, 8, 5, 6, 0);
body.setTextureOffset(30,49,true);
body.addBox(-4.5, 20,-4, 9, 5, 8, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 12, 2, 0); 
rArm.setTextureOffset(30,14,true);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-1, 3, -1.5, 3, 6, 3, 0); 
lArm.setTextureOffset(30,14,true);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-2, 3, -1.5, 3, 6, 3, 0); 
/*
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0);
*/
}


function AE村民AS(renderer)
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
head.addBox(-3.5, -5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-4, -5, -3.5, 8, 10, 7, 0); 
head.setTextureOffset(0,30,true);
head.addBox(-3.5, -6, -3, 7, 1, 6, 0);
body.setTextureOffset(20,49,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 8, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 11,-2, 7, 4, 4, 0);
body.setTextureOffset(36,38,true);
body.addBox(-4, 15,-3, 8, 5, 6, 0);
body.setTextureOffset(30,49,true);
body.addBox(-4.5, 20,-4, 9, 5, 8, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 12, 2, 0); 
/*
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0);
*/
}


function AE村民AB(renderer)
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
head.addBox(-3.5, -5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-4, -5, -3.5, 8, 10, 7, 0); 
head.setTextureOffset(0,30,true);
head.addBox(-3.5, -6, -3, 7, 1, 6, 0);
body.setTextureOffset(20,49,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 8, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 11,-2, 7, 4, 4, 0);
body.setTextureOffset(36,38,true);
body.addBox(-4, 15,-3, 8, 5, 6, 0);
body.setTextureOffset(30,49,true);
body.addBox(-4.5, 20,-4, 9, 5, 8, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 12, 2, 0); 
rArm.setTextureOffset(30,14,true);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-1, 3, -1.5, 3, 6, 3, 0); 
lArm.setTextureOffset(30,14,true);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-2, 3, -1.5, 3, 6, 3, 0); 
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.5, 2, -1.5, 3, 12, 3, 0);
}


function AE村民B(renderer)
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
head.addBox(-3.5, -5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-4, -5, -3.5, 8, 10, 7, 0); 
head.setTextureOffset(0,30,true);
head.addBox(-3.5, -6, -3, 7, 1, 6, 0);
body.setTextureOffset(20,49,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 8, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 11,-2, 7, 4, 4, 0);
body.setTextureOffset(41,43,true);
body.addBox(-4, 15,-3, 8, 2, 1, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 12, 2, 0); 
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.5, 0, -1.5, 3, 12, 3, 0);
}


function AE村民V(renderer)
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
head.addBox(-3.5, -5, -3, 7, 7, 6, 0); 
head.setTextureOffset(0,13,true);
head.addBox(-4, -5, -3.5, 8, 10, 7, 0); 
head.setTextureOffset(0,30,true);
head.addBox(-3, -6, -2.5, 6, 1, 5, 0);
body.setTextureOffset(0,42,true);
body.addBox(-1.5, 1, -1.5, 3, 2, 3, 0);
body.setTextureOffset(0,47,true);
body.addBox(-3.5, 3, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 8, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 11,-2, 7, 4, 4, 0);
body.setTextureOffset(36,38,true);
body.addBox(-4, 15,-3, 8, 5, 6, 0);
body.setTextureOffset(30,49,true);
body.addBox(-4.5, 20,-4, 9, 5, 8, 0);
rArm.setTextureOffset(36,0);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-0.5, -2, -1, 2, 12, 2, 0); 
lArm.setTextureOffset(36,0);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-1.5, -2, -1, 2, 12, 2, 0);
rArm.setTextureOffset(30,14,true);
rArm.setRotationPoint(0,5,0)
rArm.addBox(-1, 3, -1.5, 3, 6, 3, 0); 
lArm.setTextureOffset(30,14,true);
lArm.setRotationPoint(0,5,0)
lArm.addBox(-2, 3, -1.5, 3, 6, 3, 0); 
}


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


function AE雪傀儡(renderer)
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
head.addBox(-4,-5.5, -3.5, 8, 9, 7, 0);
head.setTextureOffset(0,28,true);
head.addBox(-4,-10.5, -3.5, 8, 5, 7, 0);
body.setTextureOffset(0,40,true);
body.addBox(-3.5, 0, -2.5, 7, 1, 5, 0);
body.setTextureOffset(0,46,true);
body.addBox(-3.5, 0, -1.5, 7, 6, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 6, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,37,true);
body.addBox(-3.5, 9, -2, 7, 3, 4, 0);
body.setTextureOffset(38,44,true);
body.addBox(-4, 12, -2.5, 8, 4, 5, 0);
body.setTextureOffset(34,53,true);
body.addBox(-4.5, 16, -3, 9, 5, 6, 0);
rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 12, 2, 0);
rArm.setTextureOffset(30,14);
rArm.addBox(-0.5, 3.5, -1.5, 3, 7, 3, 0);
rArm.setRotationPoint(0,2,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5, -0.5, -1, 2, 12, 2, 0);
lArm.setTextureOffset(30,14);
lArm.addBox(-2, 3.5, -1.5, 3, 7, 3, 0);
lArm.setRotationPoint(0,2,1)
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,0,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 12, 3, 0);
}


function AE史莱姆4(renderer)
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
body.addBox(-3.5, 1, -1.5, 7, 5, 3, 0);
body.setTextureOffset(0,55,true);
body.addBox(-3, 6, -1.5, 6, 6, 3, 0);
body.setTextureOffset(42,30,true);
body.addBox(-3.5, 9, -2, 7, 2, 4, 0);
body.setTextureOffset(38,37,true);
body.addBox(-4, 11, -2.5, 8, 3, 5, 0);
rArm.setTextureOffset(36,0);
rArm.addBox(0, -0.5, -1, 2, 12, 2, 0);
rArm.setRotationPoint(0,2,1)
lArm.setTextureOffset(36,0);
lArm.addBox(-1.5, -0.5, -1, 2, 12, 2, 0);
lArm.setRotationPoint(0,2,1)
rLeg.setTextureOffset(52,0,true);
rLeg.addBox( -1.4, 1, -1.5, 3, 12, 3, 0); 
lLeg.setTextureOffset(52,15,true);
lLeg.addBox( -1.6, 1, -1.5, 3, 12, 3, 0);
}


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
 

 

 


 


 



 















