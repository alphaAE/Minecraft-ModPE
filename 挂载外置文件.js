
var sdcard = android.os.Environment.getExternalStorageDirectory();
var sdcards = sdcard.getAbsolutePath() + "/games/com.mojang/galgame_data/";
var s = sdcards+"text";
var b = sdcards+"var.data";
var t = 0;
function useItem(){
t+=1;
s1=read(s,t);

s2=reads(b);
//clientMessage(s2);
eval("try{"+s2+"}finally{}");

}

function read(path,line){
try{
var file = new java.io.File(path);
if(file.exists()){
var Readers = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
var DataText = new Array;
for(var i=0;i<line;i++){
DataText[i] = Readers.readLine();}
Readers.close();
return DataText[line-1];
}else{
return ChatColor.RED+"错误:文件不存在";}
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
return ChatColor.RED+"错误:文件不存在";}
}catch(err){
print(err);}}
