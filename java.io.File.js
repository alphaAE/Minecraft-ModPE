function File(){
    /*----------------------------------------------------------------------*/
    /* ● 方法：创建文件夹                                                  */
    /*----------------------------------------------------------------------*/
    this.mkdir = function(path){
        var file = new java.io.File(path);
        if(!file.exists()){
            file.mkdirs();
        }
    };
    /*----------------------------------------------------------------------*/
    /* ● 方法：检测文件的存在性                                            */
    /*----------------------------------------------------------------------*/
    this.test = function(path){
        return java.io.File(path).exists();
    };
    /*----------------------------------------------------------------------*/
    /* ● 方法：删除文件                                                    */
    /*----------------------------------------------------------------------*/
    this.del = function(file){
        return java.io.File(file).delete();
    };
    /*----------------------------------------------------------------------*/
    /* ● 方法：读取文本文档                                                */
    /*----------------------------------------------------------------------*/
this.read = function(path,line) {
try {
var file = new java.io.File(path);
if (file.exists()) {
                if (line == -1) {
                    var data = new Array();
                    var bufferReaders = new java.io.BufferedReader(new java.io.FileReader(file));
                    var line = "";
                    while ((line = bufferReaders.readLine()) != null) {
                        data.push(line);
                    }
                    bufferReaders.close();
return data;
} else if (line == 0) {
                    var data = "";
                    var bufferReaders = new java.io.BufferedReader(new java.io.FileReader(file));
                    var line = "";
                    while ((line = bufferReaders.readLine()) != null) {
                        data = data + line + "\n";
                    }
                    bufferReaders.close();
                    return data;
                } else {
                    var bufferReaders = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
                    var ssl = new Array;
                    for (var i = 0; i < line; i++) {
                        ssl[i] = bufferReaders.readLine();
                    }
                    bufferReaders.close();
                    return ssl[line - 1];
                }
            } else {
                toast(path + "不存在！");
                return null;
            }
        } catch (err) {
            outputerror(err,"com.XY.RPGReader.class[File.read]");
            return null;
        }
    };
    /*----------------------------------------------------------------------*/
    /* ● 方法：写入文本文档                                                */
    /*----------------------------------------------------------------------*/
    this.write = function(file,text){
        var output = new java.io.FileOutputStream(file);
        output.write(new java.lang.String(text).getBytes());
    };
    /*----------------------------------------------------------------------*/
    /* ● 方法：获取文件列表                                                */
    /*----------------------------------------------------------------------*/
    this.list = function(path){
        var file = new java.io.File(path);
        if (file.isDirectory()) {
            return file.list();
        }else{
            return null;
        }
    };
}
/*保存文件的类*/
var FilePE = new File();