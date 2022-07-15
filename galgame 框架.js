/* alphaAE制作 项目开源 */
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Width,Height,PWidth;

var Widths=ctx.getWindowManager().getDefaultDisplay().getWidth();
var Heights=ctx.getWindowManager().getDefaultDisplay().getHeight();

var sdcard = android.os.Environment.getExternalStorageDirectory();
var sdcards = sdcard.getAbsolutePath() + "/games/com.mojang/galgame_data/";

var DataNameText = new Array;
var DataTheText = new Array;
var ButtonNO = new Array;
var DataTextButton1 = new Array;
var DataTextButton2 = new Array;
var DataTextButton3 = new Array;
var DataTextButton4 = new Array;
var DataTextButton5 = new Array;

var ButtonHeight;

var GUION = false;
var DataPlot = 0;

DATAvar=reads(sdcards+"var.data");
eval("try{"+DATAvar+"}finally{}");
DATAui=reads(sdcards+"ui.data");
eval("try{"+DATAui+"}finally{}");

read(sdcards+"script/default.script");


//////////////// 常规函数 /////////
function newLevel()
{
dpi();
ButtonHeight = Height*1/60;
}

function attackHook(attacker,victim)
{
var itemid=1;
var type=Entity.getEntityTypeId(victim);
if(type==33)
{
preventDefault();
UIone(CreeperSad,"","");
plot();
}}


//////////////// ModTick /////////
var f = 0;
function modTick(){
if(GUION){
if(f<300)f+=20;clientMessage(f);
ctx.runOnUiThread(new java.lang.Runnable(){
run:function(){
//eUI1.setAlpha(f);
}})
}
}


//////////////// plot /////////
function plot(){
ctx.runOnUiThread(new java.lang.Runnable(){
run:function(){
var PlotNames=DataNameText[DataPlot];
var PlotTexts=DataTheText[DataPlot];
var PlotBt1=DataTextButton1[DataPlot];
var PlotBt2=DataTextButton2[DataPlot];
var PlotBt3=DataTextButton3[DataPlot];
var PlotBt4=DataTextButton4[DataPlot];
var PlotBt5=DataTextButton5[DataPlot];

if(PlotTexts!=null){
ntext.setText(PlotNames);
text.setText(PlotTexts);

if(ButtonNO[DataPlot]!=null){
AddButton();
sUIlayoutP1.setMargins(((Width-PWidth)/2)+Width/4, 0, 0, 0);
if(PlotBt1!=null)button1.setText(PlotBt1);
if(PlotBt2!=null)button2.setText(PlotBt2);
if(PlotBt3!=null)button3.setText(PlotBt3);
if(PlotBt4!=null)button4.setText(PlotBt4);
if(PlotBt5!=null)button5.setText(PlotBt5);
}

DataPlot++;
}else{
DataPlot=0;
GUI.dismiss();
GUION=false;}
}});}


//////////////// UI /////////
var layout = new android.widget.RelativeLayout(ctx);
layout.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT));
var GUI;

function UIone(img,nametext,ztext){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var Buttons = android.widget.Button;
var ImageV = android.widget.ImageView;
var TextV = android.widget.TextView;

////////// 图片 /////
eUI1 = new ImageV(ctx);
sUIlayoutP1 = new UIlayout();
sUIlayoutP1.width = PWidth;
sUIlayoutP1.height = Height;
sUIlayoutP1.setMargins((Width-PWidth)/2, 0, 0, 0);
//eUI1.setAlpha(0);
eUI1.setLayoutParams(sUIlayoutP1);
eUI1.setBackgroundDrawable(img);

////////// 对话框 /////
bUI1 = new ImageV(ctx);
sUIlayoutUI1 = new UIlayout();
sUIlayoutUI1.width = Width;
sUIlayoutUI1.height = Height;
sUIlayoutUI1.setMargins(0, 0, 0, 0);
bUI1.setLayoutParams(sUIlayoutUI1);
bUI1.setBackgroundDrawable(UI1);

////////// 文字 /////
text = new TextV(ctx);
text.setTextSize(16);
text.setTextColor(android.graphics.Color.WHITE);
sUIlayout = new UIlayout();
sUIlayout.width = Width*17/22;
sUIlayout.height = Height*7/40;
sUIlayout.setMargins(Width*3/22,Height*33/40, 0, 0);
text.setLayoutParams(sUIlayout);
text.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
text.setText(ztext);

////////// 名字 /////
ntext = new TextV(ctx);
ntext.setTextSize(20);
ntext.setTextColor(android.graphics.Color.WHITE);
sUIlayout = new UIlayout();
sUIlayout.width = Width*10/22;
sUIlayout.height = Height*14/50;
sUIlayout.setMargins(Width*1.2/22,Height*30/40, 0, 0);
ntext.setLayoutParams(sUIlayout);
ntext.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
ntext.setText(nametext);

//// OnClick /////
onclick = new Buttons(ctx);
onclick.setWidth(Width);
onclick.setHeight(Height);
onclick.setAlpha(0);
onclick.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
plot();
}}));

//// Button1 /////
button1 = new Buttons(ctx);
sUIlayoutBt1 = new UIlayout();
sUIlayoutBt1.width = Width/2;
sUIlayoutBt1.height = Height*1.5/10;
sUIlayoutBt1.setMargins(Width*1/20,ButtonHeight , 0, 0);
button1.setLayoutParams(sUIlayoutBt1);
button1.setBackgroundDrawable(UIButton);
button1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
print("1");
}}));

//// Button2 /////
button2 = new Buttons(ctx);
sUIlayoutBt2 = new UIlayout();
sUIlayoutBt2.width = Width/2;
sUIlayoutBt2.height = Height*1.5/10;
sUIlayoutBt2.setMargins(Width*1/20,ButtonHeight + Height*1.5/10, 0, 0);
button2.setLayoutParams(sUIlayoutBt2);
button2.setBackgroundDrawable(UIButton);
button2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
print("2");
}}));

//// Button3 /////
button3 = new Buttons(ctx);
sUIlayoutBt3 = new UIlayout();
sUIlayoutBt3.width = Width/2;
sUIlayoutBt3.height = Height*1.5/10;
sUIlayoutBt3.setMargins(Width*1/20,ButtonHeight + (Height*1.5/10)*2, 0, 0);
button3.setLayoutParams(sUIlayoutBt3);
button3.setBackgroundDrawable(UIButton);
button3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
print("3");
}}));

//// Button4 /////
button4 = new Buttons(ctx);
sUIlayoutBt4 = new UIlayout();
sUIlayoutBt4.width = Width/2;
sUIlayoutBt4.height = Height*1.5/10;
sUIlayoutBt4.setMargins(Width*1/20,ButtonHeight + (Height*1.5/10)*3, 0, 0);
button4.setLayoutParams(sUIlayoutBt4);
button4.setBackgroundDrawable(UIButton);
button4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
print("4");
}}));

//// Button5 /////
button5 = new Buttons(ctx);
sUIlayoutBt5 = new UIlayout();
sUIlayoutBt5.width = Width/2;
sUIlayoutBt5.height = Height*1.5/10;
sUIlayoutBt5.setMargins(Width*1/20,ButtonHeight + (Height*1.5/10)*4, 0, 0);
button5.setLayoutParams(sUIlayoutBt5);
button5.setBackgroundDrawable(UIButton);
button5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(view){
print("5");
}}));

layout.addView(eUI1);
layout.addView(bUI1);
layout.addView(text);
layout.addView(ntext);
layout.addView(onclick);

GUI = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(Width);
GUI.setHeight(Height);
GUI.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER, 0, 0);
//GUION=true;
}catch(err){
clientMessage("UIErr: " + err);
}
}}));}

function UIlayout(){var ID = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
return ID}

function AddButton(){
ctx.runOnUiThread(new java.lang.Runnable(){
run:function(){
print(GUI.getParentView);
if(GUI!=null){
/*sUIlayoutBt1.dismiss();
sUIlayoutBt2.dismiss();
sUIlayoutBt3.dismiss();
sUIlayoutBt4.dismiss();
sUIlayoutBt5.dismiss();*/
if(ButtonNO[DataPlot]>=1&&sUIlayoutBt1!=null){
layout.addView(button1);}
if(ButtonNO[DataPlot]>=2&&sUIlayoutBt2!=null){
layout.addView(button2);}
if(ButtonNO[DataPlot]>=3&&sUIlayoutBt3!=null){
layout.addView(button3);}
if(ButtonNO[DataPlot]>=4&&sUIlayoutBt4!=null){
layout.addView(button4);}
if(ButtonNO[DataPlot]>=5&&sUIlayoutBt5!=null){
layout.addView(button5);}}
}});}


//////////////// dpi /////////
function dpi(){
var density;
Width=Math.max(Widths,Heights);
Height=Math.min(Widths,Heights);
if(Width>=1120&&Width<=1280)Width =1280;
PWidth=Width;
clientMessage("Width:"+Width+" Height:"+Height);
PWidth=750/(930/Height);}

function dip2px(dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);}


//////////////// read /////////
function read(path){
try{
var file = new java.io.File(path);
if(file.exists()){
Readers = new java.io.BufferedReader(new java.io.FileReader(file));
var DataText = "";
var DataButton = "";
while((ReadLine=Readers.readLine())!="#END"){
if(ReadLine=="#SET_NAME"){
DataText = Readers.readLine();
DataNameText.push(DataText);
DataText = Readers.readLine();
DataTheText.push(DataText);}
var MaxNO = DataNameText.length-1;

if(ReadLine=="#BUTTON1"){
ButtonNO[MaxNO] = 1;
DataButton = Readers.readLine();
DataTextButton1[MaxNO]=DataButton;
DataTextButton2[MaxNO]="null";
DataTextButton3[MaxNO]="null";
DataTextButton4[MaxNO]="null";
DataTextButton5[MaxNO]="null";
}else if(ReadLine=="#BUTTON2"){
ButtonNO[MaxNO] = 2;
DataButton = Readers.readLine();
DataTextButton1[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton2[MaxNO]=DataButton;
DataTextButton3[MaxNO]="null";
DataTextButton4[MaxNO]="null";
DataTextButton5[MaxNO]="null";
}else if(ReadLine=="#BUTTON3"){
ButtonNO[MaxNO] = 3;
DataButton = Readers.readLine();
DataTextButton1[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton2[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton3[MaxNO]=DataButton;
DataTextButton4[MaxNO]="null";
DataTextButton5[MaxNO]="null";
}else if(ReadLine=="#BUTTON4"){
ButtonNO[MaxNO] = 4;
DataButton = Readers.readLine();
DataTextButton1[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton2[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton3[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton4[MaxNO]=DataButton;
DataTextButton5[MaxNO]="null";
}else if(ReadLine=="#BUTTON5"){
ButtonNO[MaxNO] = 5;
DataButton = Readers.readLine();
DataTextButton1[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton2[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton3[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton4[MaxNO]=DataButton;
DataButton = Readers.readLine();
DataTextButton5[MaxNO]=DataButton;
}

}
Readers.close();
}else{
return ChatColor.RED+"错误:文件丢失";}
}catch(err){
print(err);}}

function reads(path){
try{
var file = new java.io.File(path);
if(file.exists()){
var DataS;
var Data = "";
var Readers = new java.io.BufferedReader(new java.io.FileReader(file));
while((DataS=Readers.readLine())!=null){Data=Data+DataS;}
Readers.close();
return Data;
}else{
return ChatColor.RED+"错误:文件丢失";
print("错误:文件丢失");}
}catch(err){
print(err);}}






















