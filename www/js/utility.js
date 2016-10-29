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
        { nombre: "ARROYO LEYES", grupos: ["TODAS", "STAFE"] },
        { nombre: "ARROYO SECO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "CAPITÁN BERMÚDEZ", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "EMPALME VILLA CONSTITUCIÓN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "FIGHIERA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "FRAY LUIS BELTRÁN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "GENERAL LAGOS", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "GRANADERO BAIGORRIA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "IBARLUCEA", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "LA RIBERA", grupos: ["TODAS", "STAFE"] },
        { nombre: "LOS ZAPALLOS", grupos: ["TODAS", "STAFE"] },
        { nombre: "PAVON", grupos: ["TODAS"] },
        { nombre: "PEREZ", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "PUEBLO ESTHER", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "PUERTO GENERAL SAN MARTÍN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "RICARDONE", grupos: ["TODAS"] },
        { nombre: "RINCON", grupos: ["TODAS"] },
        { nombre: "ROSARIO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "SAN LORENZO", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "SAN MIGUEL", grupos: ["TODAS", "BSAS"] },
        { nombre: "SAN NICOLÁS DE LOS ARROYOS", grupos: ["TODAS", "ROSARIO", "BSAS"] },
        { nombre: "SANTA FE", grupos: ["TODAS", "STAFE"] },
        { nombre: "SANTO TOME", grupos: ["TODAS", "STAFE"] },
        { nombre: "SAUCE VIEJO", grupos: ["TODAS", "STAFE"] },
        { nombre: "SOLDINI", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "TIMBÚES", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "VILLA CONSTITUCIÓN", grupos: ["TODAS", "ROSARIO"] },
        { nombre: "VILLA GOBERNADOR GÁLVEZ", grupos: ["TODAS", "ROSARIO"] }
    ];
    
    return obj;

} (jQuery));