var AleUtil = (function($) {
    var obj = {};

    obj.addSelectOption = function(idSelector, valor, texto) {
        if (valor === undefined)
            valor = "";
        if (texto === undefined)
            texto = valor;
        $(idSelector).append(
            $("<option />")
                .val(valor)
                .text(texto));
    };

    obj.cargarSelectConAjax = function(params) {
        var opts = {
            data  : params.data,
            method: params.method,
            url   : params.url,
            cache : false
        };

        var donef = function(datos) {
            var arr = $.parseJSON(datos);
            if (arr.length > 0)
                obj.addSelectOption(params.selector, "...", "...");
            for (var i = 0; i < arr.length; i++) {
                obj.addSelectOption(
	                params.selector,
	                (params.valName === ".") ? arr[i] : arr[i][params.valName],
	                (params.txtName === ".") ? arr[i] : arr[i][params.txtName]
	            );
            }
        };

        $.ajax(opts)
            .done(donef)
            .error(params.errorf || function() { });
    }
    
    obj.localidades = [
        { nombre: "ALVEAR", grupos: ["TODAS"] },
        { nombre: "ANDINO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "AREQUITO", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "ARMSTRONG", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "ARROYO LEYES", grupos: ["TODAS", "STAFE"] },
        { nombre: "ARROYO SECO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "ARTEAGA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CAÑADA DE GOMEZ", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CAÑADA DE UCLE", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CAPITÁN BERMÚDEZ", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "CASILDA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CARCARAÑA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CHABAS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CHAÑAR", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CHOVET", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "CORREA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "DIVISA DE MAYO", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "ELORTONDO", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "EMPALME VILLA CONSTITUCIÓN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "FIGHIERA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "FIRMAT", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "FUNES", grupos: ["TODAS", "ROSARIO" ]},
        { nombre: "FRAY LUIS BELTRÁN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "GENERAL LAGOS", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "GODEKEN", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "GRANADERO BAIGORRIA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "IBARLUCEA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "LA CALIFORNIA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LA RIBERA", grupos: ["TODAS", "STAFE"] },
        { nombre: "LAS PAREJAS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LAS ROSAS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LOS MOLINOS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LOS NOGALES", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LOS QUIRQUINCHOS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "LOS ZAPALLOS", grupos: ["TODAS", "STAFE"] },
        { nombre: "MONTES DE OCA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "MURPHY", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "PAVON", grupos: ["TODAS"] },
        { nombre: "PILAR", grupos: ["TODAS", "BSAS"] },
        { nombre: "PEREZ", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "PUEBLO ESTHER", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "PUERTO GENERAL SAN MARTÍN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "PUJATO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "RAVIOLA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "RICARDONE", grupos: ["TODAS"] },
        { nombre: "RINCON", grupos: ["TODAS"] },
        { nombre: "ROLDAN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "ROSARIO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "SAN JERONIMO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "SAN JOSE DE LA ESQUINA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "SAN LORENZO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "SAN MIGUEL", grupos: ["TODAS", "BSAS"] },
        { nombre: "SAN NICOLÁS DE LOS ARROYOS", grupos: ["TODAS", "ROSARIO", "BSAS"] },
        { nombre: "SANFORD", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "SANTA FE", grupos: ["TODAS", "STAFE"] },
        { nombre: "SANTO TOME", grupos: ["TODAS", "STAFE"] },
        { nombre: "SAUCE VIEJO", grupos: ["TODAS", "STAFE"] },
        { nombre: "SOLDINI", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "TIMBÚES", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "TORTUGAS", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "VENADO", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "VILLA CONSTITUCIÓN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "VILLA GOBERNADOR GÁLVEZ", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "VILLADA", grupos: ["TODAS", "ROSARIO", "STAFE"] },
        { nombre: "ZAVALLA", grupos: ["TODAS", "ROSARIO"] }
    ];
    
    return obj;

} (jQuery));
