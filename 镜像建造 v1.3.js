//by alphaAE @小ASD555
var alpha = "1.3";

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var simpleGUI = null;

var s1 = true;
var s2 = true;
var s3 = true;
var DATA = []
var JX = 0;
var XJX = 0;
var YJX = 0;
var ZJX = 0;
//镜像
var fxs = ["←", "↙", "↓", "↘", "→", "↗", "↑", "↖"]
var FXshow = false;
//方向显示
var sk = 0;
var FXBL = false;
//开关变量
var time = 0;
//降低频率
var filter = "0";
var filters;
//过滤

function newLevel() {
   gui();
   filters = filter.split(",");
}
function leaveGame() {
   guioff();
   FXguioff();
}

function dip2px(ctx, dips) {
   return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function prints(string) {
   var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
   ctx.runOnUiThread(new java.lang.Runnable({ run: function () { android.widget.Toast.makeText(ctx, string, 0).show() } }))
}

function gui() {
   ctx.runOnUiThread(new java.lang.Runnable({
      run: function () {
         try {
            var layout = new android.widget.LinearLayout(ctx);
            var B_we = new android.widget.Button(ctx);
            B_we.setBackgroundColor(android.graphics.Color.argb(30, 255, 255, 255));
            B_we.setText("α");
            B_we.setOnClickListener(new android.view.View.OnClickListener() {
               onClick: function (v) {
                  menu()
               }
            });
            layout.addView(B_we);
            w1 = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));

            w1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight() * 0.3 + 70);
         } catch (err) { prints("错误!\n" + err); }
      }
   }));
}

function guioff() {
   ctx.runOnUiThread(new java.lang.Runnable({
      run: function () {
         if (w1 != null) {
            w1.dismiss(); w1 = null;
         }
      }
   }));
}

function menu() {
   var layout = new android.widget.LinearLayout(ctx)
   try {
      var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 85), dip2px(ctx, 35));
      menu.setFocusable(true)
      mainMenu = menu
      var layout = new android.widget.LinearLayout(ctx)
      layout.setOrientation(1)

      var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
      textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
      /*var title=new android.widget.TextView(ctx);
   title.setTextSize(24)
   title.setTextColor(android.graphics.Color.rgb(255,255,255));
      title.setText("镜像菜单")
      title.setLayoutParams(textParams)
      layout.addView(title)*/

      var button = new android.widget.Button(ctx)
      button.setText("用法介绍")
      //button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor('#CA77E6')))
      button.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            Introduce();
         }
      }))
      layout.addView(button)

      var buttonk = new android.widget.Button(ctx)
      if (sk == 1) { buttonk.setText("方位显示(开)") }
      else if (sk == 0) { buttonk.setText("方位显示(关)") }
      buttonk.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            if (sk == 0) {
               buttonk.setText("方位显示(开)");
               sk = 1; FXgui(); FXBL = true;
            }
            else if (sk == 1) {
               buttonk.setText("方位显示(关)");
               sk = 0; FXguioff(); FXshow = false;
               FXBL = false;
            }
         }
      }))
      layout.addView(buttonk)

      var button = new android.widget.Button(ctx)
      button.setText("X轴镜像")
      button.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            JX = 1
            s1 = false
            s2 = false
            s3 = false
            prints("已选择为X镜像");
         }
      }))
      layout.addView(button)

      var button = new android.widget.Button(ctx)
      button.setText("Y轴镜像")
      button.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            JX = 2
            s1 = false
            s2 = false
            s3 = false
            prints("已选择为Y镜像");
         }
      }))
      layout.addView(button)

      var button = new android.widget.Button(ctx)
      button.setText("Z轴镜像")
      button.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            JX = 3
            s1 = false
            s2 = false
            s3 = false
            prints("已选择为Z镜像");
         }
      }))
      layout.addView(button)

      var stitle = new android.widget.TextView(ctx)
      stitle.setTextSize(13)
      stitle.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      stitle.setText("ID过滤:")
      stitle.setLayoutParams(textParams)
      layout.addView(stitle)

      var cd = new android.widget.EditText(ctx)
      cd.setText(String(filter))
      cd.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_SIGNED)
      layout.addView(cd)

      var button = new android.widget.Button(ctx)
      button.setText("保存过滤")
      button.setOnClickListener(new android.view.View.OnClickListener({
         onClick: function (viewarg) {
            filter = cd.getText().toString();
            filters = filter.split(",");
            //a=filterText();
            prints("保存成功");
            //clientMessage(a)
         }
      }))
      layout.addView(button)


      var stitle = new android.widget.TextView(ctx)
      stitle.setTextSize(13)
      stitle.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      stitle.setText("输入ID即可，多个ID用英文逗号隔开\n\n" + "镜像建造 v" + alpha + "\nBy alphaAE")
      stitle.setLayoutParams(textParams)
      layout.addView(stitle)

      var mlayout = makeMenu(ctx, menu, layout)
      menu.setContentView(mlayout)
      menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
      menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())

      menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor('#8C53BF')))
      menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0)
   } catch (err) { prints("错误: " + err + ".") }
}

function makeMenu(ctx, menu, layout) {
   var mlayout = new android.widget.RelativeLayout(ctx)
   var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
   var scrollview = new android.widget.ScrollView(ctx)
   var pad = dip2px(ctx, 5)
   scrollview.setPadding(pad, pad, pad, pad)
   scrollview.setLayoutParams(svParams)
   scrollview.addView(layout)
   mlayout.addView(scrollview)
   return mlayout
}

function Introduce() {
   var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
   var ad = android.app.AlertDialog.Builder
   ctx.runOnUiThread(new java.lang.Runnable({
      run: function () {
         try {
            var duce = new ad(ctx)
            duce.setNegativeButton("返回", new android.content.DialogInterface.OnClickListener(){
               onClick: function (dia, w) {
                  //无执行
               }
            })
            duce.setTitle("用法介绍")
            duce.setMessage("使用方法:在激活按钮功能的情况下，先用钻石选择基准点，再用铁剑选择选择需要镜像区域的两个对点\n\n基准点:是指生成部分与原区域距离最近的点(面)，而不是两区域的中点，这点请特别注意\n\n镜像重叠:生成区域不可与原区域重合，也就是基准点不能在原区域中，如果满足条件还是提示区域重合，请考虑是否选错镜像轴\n\n指南针:与快速建造指南针作用相同，可用为区分X/Z轴\n")
            duce.show()
         } catch (e) { prints(e) }
      }
   }))
}

function useItem(x, y, z, i, b, s, id, bd) {
   if (i == 345) {
      datas = Level.getData(x, y, z)
      type = Block.getRenderType(b);
      clientMessage("X=" + x + " Y=" + y + " Z=" + z + " S=" + s + " ID=" + b + " DATA=" + datas + " Type=" + type)
   }

   if (i == 264) {
      XJXS = x; YJX = y; ZJXS = z;
      if (XJXS >= 0) {
         XJX = XJXS + 1
      }
      if (ZJXS >= 0) {
         ZJX = ZJXS + 1
      }
      if (XJXS < 0) {
         XJX = XJXS + 1
      }
      if (ZJXS < 0) {
         ZJX = ZJXS + 1
      }
      clientMessage("设置镜像点成功");
   }

   if (JX != 0) {
      if (XJX == 0 && YJX == 0 && ZJX == 0 && i == 267) { clientMessage("请先选择镜像点") } else if (i == 267) {
         if (s1 == false) {
            preventDefault();
            s1 = [x, y, z];
            prints("设置点一");
         }
         else if (s2 == false) {
            preventDefault();
            s2 = [x, y, z];
            prints("设置点二");
            image(s1, s2, i, id)
         }
      }
   }
}

function modTick() {
   if (FXBL) {
      time++
      if (time <= 10) {
         if (FXshow == true) {
            ctx.runOnUiThread(new java.lang.Runnable()
	{
                  run: function () {
                     textPosition.setText("XYZ: " + Math.round(Player.getX()) + " / " + Math.round(Player.getY()) + " / " + Math.round(Player.getZ()));

                     var yaw = Math.abs(Math.round(getYaw() % 360));
                     if (yaw > 337.5 || yaw <= 22.5) { xfx = fxs[0]; zfx = fxs[6]; }
                     else if (yaw > 22.5 && yaw <= 76.5) { xfx = fxs[1]; zfx = fxs[7]; }
                     else if (yaw > 67.5 && yaw <= 112.5) { xfx = fxs[2]; zfx = fxs[0]; }
                     else if (yaw > 112.5 && yaw <= 157.5) { xfx = fxs[3]; zfx = fxs[1]; }
                     else if (yaw > 157.5 && yaw <= 202.5) { xfx = fxs[4]; zfx = fxs[2]; }
                     else if (yaw > 202.5 && yaw <= 247.5) { xfx = fxs[5]; zfx = fxs[3]; }
                     else if (yaw > 247.5 && yaw <= 292.5) { xfx = fxs[6]; zfx = fxs[4]; }
                     else if (yaw > 292.5 && yaw <= 337.5) { xfx = fxs[7]; zfx = fxs[5]; }
                     yaws.setText("+X:" + xfx + "+Z:" + zfx);
                  }
               })
            time = 0
         }
      }
   }
}

function filterText() {
   var filterT = ""
   for (GL = 0; GL < filters.length; GL++) {
      if (filterT == "") {
         filterT = filterT + "auid!=filters[" + GL + "]";
      } else { filterT = filterT + "&&auid!=filters[" + GL + "]"; }
   } return filterT
}

function image(s1, s2, i, id) {
   var xs = s1[0], ys = s1[1], zs = s1[2], xs2 = s2[0], ys2 = s2[1], zs2 = s2[2]
   xb = Math.max(xs, xs2)
   yb = Math.max(ys, ys2)
   zb = Math.max(zs, zs2)
   xb2 = Math.min(xs, xs2)
   yb2 = Math.min(ys, ys2)
   zb2 = Math.min(zs, zs2)
   filterTexts = filterText();
   xbs2 = xb2

   ybs = yb + 1
   ybs2 = yb2

   zbs2 = zb2

   if (xb >= 0) {
      xbs = xb + 1
   }
   if (zb >= 0) {
      zbs = zb + 1
   }
   if (xb < 0) {
      xbs = xb + 1
   }
   if (zb < 0) {
      zbs = zb + 1
   }
   ima: for (var WX = xb2; WX < xbs; WX++)
      for (var WY = ybs2; WY < ybs; WY++)
         for (var WZ = zb2; WZ < zbs; WZ++) {
            var auid = Level.getTile(WX, WY, WZ);
            if (eval(filterTexts)) {
               id = Level.getTile(WX, WY, WZ);
               idata = Level.getData(WX, WY, WZ);
               itype = Block.getRenderType(id);

               ///////////Z镜像
               if (JX == 3) {
                  if (itype == 10 && idata == 0) { idata = 1 }
                  else if (itype == 10 && idata == 1) { idata = 0 }
                  if (itype == 10 && idata == 4) { idata = 5 }
                  else if (itype == 10 && idata == 5) { idata = 4 }
                  //楼梯修复
                  if (itype == 2 && idata == 1) { idata = 2 }
                  else if (itype == 2 && idata == 2) { idata = 1 }
                  //火把修复
                  if (itype == 8 && idata == 4) { idata = 5 }
                  else if (itype == 8 && idata == 5) { idata = 4 }
                  //梯子修复
                  if (itype == 20 && idata == 2) { idata = 8 }
                  else if (itype == 20 && idata == 8) { idata = 2 }
                  //藤蔓修复
                  if (id == 96 && idata == 2) { idata = 3 }
                  else if (id == 96 && idata == 3) { idata = 2 }
                  if (id == 96 && idata == 6) { idata = 7 }
                  else if (id == 96 && idata == 7) { idata = 6 }
                  //门板修复
                  if (XJX > xbs) {
                     setTile(-WX + 2 * xbs2 + (xbs - xbs2) + (XJX - xbs2) - 2, WY, WZ, id, idata)
                  }

                  if (XJX < xbs2 + 1) {
                     setTile(-WX + 2 * xbs2 + (xbs - xbs2) + (XJX - xbs) - 1, WY, WZ, id, idata)
                  }
                  if (XJX > xbs2 && XJX <= xbs) {
                     clientMessage("错误:镜像重叠");
                     break ima;
                  }
               }

               ///////////Y镜像
               if (JX == 2) {
                  if (itype == 10 && idata == 0) { idata = 4 }
                  else if (itype == 10 && idata == 4) { idata = 0 }
                  if (itype == 10 && idata == 1) { idata = 5 }
                  else if (itype == 10 && idata == 5) { idata = 1 }
                  if (itype == 10 && idata == 2) { idata = 6 }
                  else if (itype == 10 && idata == 6) { idata = 2 }
                  if (itype == 10 && idata == 3) { idata = 7 }
                  else if (itype == 10 && idata == 7) { idata = 3 }
                  //楼梯修复
                  if (itype == 67 && idata == 0) { idata = 8 }
                  else if (itype == 67 && idata == 8) { idata = 0 }
                  //半砖修复
                  if (YJX > ybs - 1) {
                     setTile(WX, -WY + 2 * ybs2 + (ybs - ybs2) + (YJX - ybs2) - 1, WZ, id, idata)
                  }

                  if (YJX < ybs2) {
                     setTile(WX, -WY + 2 * ybs2 + (ybs - ybs2) + (YJX - ybs), WZ, id, idata)
                  }
                  if (YJX >= ybs2 && YJX < ybs) {
                     clientMessage("错误:镜像重叠");
                     break ima;
                  }
               }

               ///////////X镜像
               if (JX == 1) {
                  if (itype == 10 && idata == 2) { idata = 3 }
                  else if (itype == 10 && idata == 3) { idata = 2 }
                  if (itype == 10 && idata == 6) { idata = 7 }
                  else if (itype == 10 && idata == 7) { idata = 6 }
                  //楼梯修复
                  if (itype == 2 && idata == 3) { idata = 4 }
                  else if (itype == 2 && idata == 4) { idata = 3 }
                  //火把修复
                  if (itype == 8 && idata == 2) { idata = 3 }
                  else if (itype == 8 && idata == 3) { idata = 2 }
                  //梯子修复
                  if (itype == 20 && idata == 1) { idata = 4 }
                  else if (itype == 20 && idata == 4) { idata = 1 }
                  //藤蔓修复
                  if (id == 96 && idata == 0) { idata = 1 }
                  else if (id == 96 && idata == 1) { idata = 0 }
                  if (id == 96 && idata == 4) { idata = 5 }
                  else if (id == 96 && idata == 5) { idata = 4 }
                  //门板修复

                  if (ZJX > zbs) {
                     setTile(WX, WY, -WZ + 2 * zbs2 + (zbs - zbs2) + (ZJX - zbs2) - 2, id, idata)
                  }
                  if (ZJX < zbs2 + 1) {
                     setTile(WX, WY, -WZ + 2 * zbs2 + (zbs - zbs2) + (ZJX - zbs) - 1, id, idata)
                  }
                  if (ZJX > zbs2 && ZJX <= zbs) {
                     clientMessage("错误:镜像重叠");
                     break ima;
                  }
               }
            }
         }
}

function FXgui() {
   ctx.runOnUiThread(new java.lang.Runnable()
	{
         run: function () {
            if (FXshow == false) {
               var metrics = new android.util.DisplayMetrics();
               ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
               var displayHeight = metrics.heightPixels;
               var displayWidth = metrics.widthPixels;

               simpleGUI = new android.widget.PopupWindow(ctx);
               var layout = new android.widget.LinearLayout(ctx);

               textPosition = new android.widget.TextView(ctx);
               textPosition.setText("");
               textPosition.setTextSize(10);
               textPosition.setTextColor(android.graphics.Color.WHITE);

               yaws = new android.widget.TextView(ctx);
               yaws.setText("");
               yaws.setTextSize(15);
               yaws.setTextColor(android.graphics.Color.WHITE);

               layout.setOrientation(1);
               layout.addView(textPosition);
               layout.addView(yaws);

               simpleGUI.setContentView(layout);
               simpleGUI.setWidth(displayWidth / 2);
               simpleGUI.setHeight(displayHeight);
               simpleGUI.setBackgroundDrawable(null);
               simpleGUI.setTouchable(false);
               simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, displayWidth / 384, 0);
               FXshow = true;
            }
         }
      })
}


function FXguioff() {
   ctx.runOnUiThread(new java.lang.Runnable({
      run: function () {
         if (FXshow == true) { simpleGUI.dismiss(); FXshow = false; }
      }
   }));
}





