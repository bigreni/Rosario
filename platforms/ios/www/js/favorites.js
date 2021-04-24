var AleFavos = (function() {
    var self = {};
    var store = new Persist.Store("CuandoLlegaBus");
    var favos = $.parseJSON(store.get("favos"));

    self.max = 20;

    self.getList = function() {
        return favos;
    };

    self.getId = function(favo) {
        return favo.local + "|" + favo.calle + "|" + favo.cruce + "|" + favo.linea;
    };

    self.create = function(pnombre, plocal, plinea, pcalle, pcruce) {
        return {
            nombre: pnombre,
            local: plocal,
            linea: plinea,
            calle: pcalle,
            cruce: pcruce
        };
    };

    self.cmp = function(f1, f2) {
        return self.getId(f1) == self.getId(f2);
    };

    self.exists = function(favo) {
        var i;
        for (i = 0; i < favos.length; i++) {
            var favoX = favos[i];
            if (self.cmp(favo, favoX)) {
                return true;
            }
        }
        return false;
    };

    self.index = function(id) {
        var i;
        for (i = 0; i < favos.length; i++) {
            var idX = self.getId(favos[i]);
            if (idX == id) {
                return i;
            }
        }
        return -1;
    };

    self.remove = function(id) {
        var index = self.index(id);
        //console.log("el index es " + id);
        if (index !== -1) {
            favos.splice(index, 1);
            store.set("favos", JSON.stringify(favos));
        }
    };

    self.add = function(favo) {
        if (!self.exists(favo)) {
            favos.push(favo);
            store.set("favos", JSON.stringify(favos));
        }
    };

    if (favos == null) {
        favos = [];
        store.set("favos", JSON.stringify(favos));
    }

    return self;
} ());