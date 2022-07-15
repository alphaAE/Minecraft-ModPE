var k=10;var l=1.2;var x2=0

var 女巫 = Renderer.createHumanoidRenderer();AE女巫(女巫);



function addRenderType(DUN,e,a,b,c){
var model = DUN.getModel();
var rA = model.getPart("rightArm").clear()

var lA = model.getPart("leftArm").clear()
var h = model.getPart("head").clear()
h.addBox(-4,-8,-4,8,8,8)
lA.setTextureOffset(40,0);
lA.addBox(-1,-2,-1,4,12,4)

rA.setTextureOffset(40,16);
rA.addBox(-4,-3,-2,4,4,4,1)
rA.setTextureOffset(40,20);
rA.addBox(-3,2,-2,4,2,4,c)
rA.setTextureOffset(40,22);
rA.addBox(-3,4,-2,4,2,4,-c)
rA.setTextureOffset(40,24);
rA.addBox(-3,6,-2,4,2,4,c)
rA.setTextureOffset(40,26);
rA.addBox(-3,8,-2,4,2,4,-c)
rA.setTextureOffset(0,0);
rA.addBox(-1.5+a,3,-0.5+b,1,1,1)
rA.setTextureOffset(0,2);
rA.addBox(-1.5-a,5,-0.5-b,1,1,1)
rA.setTextureOffset(0,4);
rA.addBox(-1.5+a,7,-0.5-b,1,1,1)
rA.setTextureOffset(0,6)
rA.addBox(-1.5-a,9,-0.5+b,1,1,1)
Entity.setRenderType(e,DUN.renderType)
}
var Steve= Renderer.createHumanoidRenderer()


function entityAddedHook(entity){
entt=Entity.getEntityTypeId(entity);
if(entt==39){//0
var skin=Entity.getMobSkin(entity);
Entity.setMobSkin(entity,"Witch.png");
Entity.setCollisionSize(entity,0.5,2);
Entity.setRenderType(entity,女巫.renderType);
}}


function modTick()
{x2++
var Sin=Math.sin(x2*Math.PI/180*k)
var Cos=Math.cos(x2*Math.PI/180*k)
var Ma=(Math.sin(x2)+1)*0.05
var Px=Player.getX()
var Py=Player.getY()-0.5
var Pz=Player.getZ()
addRenderType(Steve,getPlayerEnt(),Cos*3.5,Sin*3.5,0)
}