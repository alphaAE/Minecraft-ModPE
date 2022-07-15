function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
    if (itemId == 345) {
        preventDefault();
        var eid = getTile(x, y-1, z);
		var data = Level.getData(x, y, z);
		var edata = Level.getData(x, y-1, z);
        clientMessage("X=" + x + " Y=" + y + " Z=" + z + " ID=" + blockId + " Data=" + data + " -1ID:" + eid + " -1Data=" + edata);
		return;
    }

}


