

function useItem(x,y,z,i,b,s,id,bd){
	if(i==264){
		datas=Level.getData(x,y,z);
		for(var i = 0; i <400; i++){
			setTile( x+i, y, z, i, 0);
		}
		clientMessage("get");
	}

}