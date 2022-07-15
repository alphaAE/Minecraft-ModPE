//==================全局变量===================
var list;
var cl;

//===================钩子==================
function useItem(x,y,z,item,block,s,id,bd){
	if (item==17){
		new java.lang.Thread(
			new java.lang.Runnable(){
				run:function(){
					A(x,y+10,z,block,bd);
				}
			}
		).start();
	}
}

//===================操作==================
function A(x,y,z,b,bd){
	list=[];
	cl=[]
  var ids=96;
	var pi=Math.PI/180;
	var l=0;
	var s1=[x,y+l,z]
	var o=5    //生成
	for(var m=0;m<50;m++){
		var a=Math.cos((Math.random()+m)*22.5*pi)*o
		var b=Math.sin(Math.random()*90*pi)*o
		var c=Math.sin((Math.random()+m)*22.5*pi)*o
		var s2=[x+a,y+l+b,z+c]
		lianxian(s1,s2,17,12+bd%4)
		shanmai(x+a,y+l+b,z+c,10,ids,bd%4);
	}
	for(var m=0;m<25;m++){
		var a=Math.cos((Math.random()+m)*45*pi)*o/2
		var b=Math.sin(Math.random()*90*pi)*o*1.5
		var c=Math.sin((Math.random()+m)*45*pi)*o/2
		var s2=[x+a,y+l+b,z+c]
		lianxian(s1,s2,17,12+bd%4)
		shanmai(x+a,y+l+b,z+c,10,ids,bd%4);
	}
	for (var i in cl){
		var bl=cl[i];
		var x=bl[0],y=bl[1],z=bl[2];
		if (getTile(1+x,y,z)==0){
			setTile(1+x,y,z,ids,bd%4);
		}
		if (getTile(x,1+y,z)==0){
			setTile(x,1+y,z,ids,bd%4);
		}
		if (getTile(x,y,1+z)==0){
			setTile(x,y,1+z,ids,bd%4);
		}
		if (getTile(x-1,y,z)==0){
			setTile(x-1,y,z,ids,bd%4);
		}
		if (getTile(x,y-1,z)==0){
			setTile(x,y-1,z,ids,bd%4);
		}
		if (getTile(x,y,z-1)==0){
			setTile(x,y,z-1,ids,bd%4);
		}
	}
}
/*
function yuanzhuy(x,y,z,r,b,bd,h){
	for(var i=-r;i<=r;i++){
		for(var j=-r;j<=r;j++){
			if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
				for(var m=h;m>=0;m--){
					setTile(x+i,y+m,z+j,b,bd)
				}
			}
		}
	}
}*/

function shanmai(x,y,z,l,id,bd){
	if(list[x+","+y+","+z]) return;
	list[x+","+y+","+z]=true
	if(getTile(x,y,z)==0){
		var i=id;
		if (Math.random()<0.16) {
			i=17;
			cl.push([x,y,z]);
		}
		setTile(x,y,z,i,bd);
	}
	if(l>=0){
		var sss
		var random=Math.random()
		var mz=ranz(5)//下
		for(sss in mz){
			switch(mz[sss]) {
				case 0:
					if(getTile(x-1,y,z)==0)shanmai(x-1,y,z,l-random,id,bd);break;
				case 1:
					if(getTile(x+1,y,z)==0)shanmai(x+1,y,z,l-random,id,bd);break; 
				case 2:
					if(getTile(x,y,z-1)==0)shanmai(x,y,z-1,l-random,id,bd);break;
				case 3:
					if(getTile(x,y,z+1)==0)shanmai(x,y,z+1,l-random,id,bd);break;
				case 4:
					if(getTile(x,y+1,z)==0&&y<128)shanmai(x,y+1,z,l-random,id,bd);break;
				case 5:
					if(getTile(x,y-1,z)==0&&y>0)shanmai(x,y-1,z,l-random,id,bd);break;
			}
		}
	}
}

function lianxian(s1,s2,i,id){
	if(s1!=false&&s2!=false){
		var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
		var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
		for(var m=0;m<=l;m++){
			setTile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),i,id);
		}
	}
}

function ranz(a){
	var n=[]
	var j=0
	for(var m=0;m<a;m++){
		n.push(Math.random()-1)
	}
	var q
	for(var m=0;m<a;m++){
		for(q in n){
			var min=Math.min.apply(Math,n)
			if(n[q]==min){
				n[q]=j;j++;
				break;
			}
		}
	}
	return n
}
