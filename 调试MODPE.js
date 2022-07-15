/*alphaAE制作 获取测试MODPE*/
//该MODPE用于对MCPE进行调试 测试
// 2016/1/12 修改
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var simpleGUI = null;

var fxs=["←","↙","↓","↘","→","↗","↑","↖"]
var FXshow = false;
//方向显示
var FXBL=false;
//开关变量
var time=0;
//降低频率

function newLevel()
{
FXgui();
FXBL=true;
}
function leaveGame()
{
//FXshow=false;

FXBL=false;
FXguioff();
}

///////////////// useItem ////////

function useItem(x,y,z,itemid,blockid,side,itemDamage,blockDamage){
if(itemid==272){
clientMessage("X:"+x+" Y:"+y+" Z:"+z+" Block:"+blockid+"\nData:"+blockDamage+" Side:"+side);

//clientMessage("fxbl:"+FXBL+" FX:"+FXshow+" time:"+time);
}}

//////////////// attackHook //////

function attackHook(player,entity){
if(getCarriedItem()==272){
var entid=Entity.getEntityTypeId(entity);
var skin=Entity.getMobSkin(entity);
//var item=Entity.getItemEntityId(entity);
var maxh=Entity.getMaxHealth(entity);
var namet=Entity.getPitch(entity);

clientMessage("Entity:"+entity+" ID:"+entid+" Skin:"+skin+" MaxH:"+maxh+" namet"+namet);
}}

///////////////// entityAdded /////

function entityAddedHook(entity){
if(getCarriedItem()==383){
var entid=Entity.getEntityTypeId(entity);
var skin=Entity.getMobSkin(entity);

clientMessage("ID:"+entid+" Skin:"+skin+" Item:");
}}



function modTick(){
if(FXBL){
time++
if(time<=15){
time=0;
	if(FXshow==true)
	{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
	run: function()
	{

	getw.setText("XYZ: " + Math.round(Player.getX()) + " / " + Math.round(Player.getY()) + " / " + Math.round(Player.getZ()));

var yaw=Math.abs(Math.round(getYaw()%360));

if(yaw>337.5||yaw<=22.5){xfx=fxs[0];zfx=fxs[6];}
else if(yaw>22.5&&yaw<=76.5){xfx=fxs[1];zfx=fxs[7];}
else if(yaw>67.5&&yaw<=112.5){xfx=fxs[2];zfx=fxs[0]; }
else if(yaw>112.5&&yaw<=157.5){xfx=fxs[3];zfx=fxs[1];}
else if(yaw>157.5&&yaw<=202.5){xfx=fxs[4];zfx=fxs[2];}
else if(yaw>202.5&&yaw<=247.5){xfx=fxs[5];zfx=fxs[3];}
else if(yaw>247.5&&yaw<=292.5){xfx=fxs[6];zfx=fxs[4];}
else if(yaw>292.5&&yaw<=337.5){xfx=fxs[7];zfx=fxs[5];}
yaws.setText("+X:"+xfx+"+Z:"+zfx);

biome.setText("Biome:" + Level.getBiome(Math.round(Player.getX()),Math.round(Player.getZ())));

times.setText("time:"+Level.getTime());
items.setText("item:"+getCarriedItem()+","+Player.getCarriedItemData());
	}
})
/*time=0*/}
}
}
}

function FXgui()
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
	run: function()
	{
	if(FXshow==false)
	{
	var metrics = new android.util.DisplayMetrics();
	ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
	var displayHeight = metrics.heightPixels;
	var displayWidth = metrics.widthPixels;
	
	simpleGUI=new android.widget.PopupWindow(ctx);
	var layout=new android.widget.LinearLayout(ctx);

var gamemode=Level.getGameMode();
var gamemodes;
if(gamemode==1){gamemodes="创造";}
else{gamemodes="生存";}

name = new android.widget.TextView(ctx);
name.setText("");
name.setTextSize(10);
name.setTextColor(android.graphics.Color.WHITE);
name.setText(Level.getWorldDir()+"/"+Level.getWorldName()+"  "+gamemodes+"  "+ModPE.getMinecraftVersion());

getw = new android.widget.TextView(ctx);
getw.setText("");
getw.setTextSize(10);
getw.setTextColor(android.graphics.Color.WHITE);

yaws = new android.widget.TextView(ctx);
	yaws.setText("");
yaws.setTextSize(12);
yaws.setTextColor(android.graphics.Color.WHITE);

biome = new android.widget.TextView(ctx);
biome.setText("");
biome.setTextSize(10);
biome.setTextColor(android.graphics.Color.WHITE);

times = new android.widget.TextView(ctx);
	times.setText("");
times.setTextSize(10);
times.setTextColor(android.graphics.Color.WHITE);

items = new android.widget.TextView(ctx);
	items.setText("");
items.setTextSize(10);
items.setTextColor(android.graphics.Color.WHITE);

layout.setOrientation(1);
layout.addView(name);
layout.addView(getw);
layout.addView(yaws);
layout.addView(biome);
layout.addView(times);
layout.addView(items);

	simpleGUI.setContentView(layout);
	simpleGUI.setWidth(displayWidth/2);
	simpleGUI.setHeight(displayHeight);
	simpleGUI.setBackgroundDrawable(null);
	simpleGUI.setTouchable(false);
	simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,displayWidth/384,0);
	FXshow=true;
	}
	}
	})
}


function FXguioff(){
ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
if(FXshow==true)
	{
	simpleGUI.dismiss();
	FXshow=false;
	}
		}
	}));}


