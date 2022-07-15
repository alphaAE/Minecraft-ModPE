
var sdcard = android.os.Environment.getExternalStorageDirectory();
var sdcards = sdcard.getAbsolutePath() + "/games/com.mojang/galgame_data/";
var s = sdcards+"text"

function useItem(){
s2=read(s,1);
clientMessage(s2);
}

function read(path,line) {
try {
var file = new java.io.File(path);
if(file.exists()){
clientMessage("执行");
if(line == -1){

var data = new Array();
var bufferReaders = new java.io.BufferedReader(new java.io.FileReader(file));
var line = "";
while((line=bufferReaders.readLine())!=null){
data.push(line);}
bufferReaders.close();
return data;

}else if(line == 0){

var data = "";
var bufferReaders = new java.io.BufferedReader(new java.io.FileReader(file));
var line = "";
while((line=bufferReaders.readLine())!=null){
data = data + line + "\n";
}
bufferReaders.close();
return data;

}else{

var bufferReaders = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
var ssl = new Array;
for(var i = 0; i < line; i++){
ssl[i] = bufferReaders.readLine();
}
bufferReaders.close();
return ssl[line - 1];
}
}else{
print("文件不存在!");
return null;
}
}catch (err){
print(err);
return null;
}}