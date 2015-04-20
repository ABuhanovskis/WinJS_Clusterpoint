(function () {
    "use strict";
    var db_link;
    var usr;
    var pwd;

    WinJS.Namespace.define("WinJS_Clusterpoint", {
        insertData: insertData,
        updateData: updateData,
        deleteData: deleteData,
        getData: getData,
        setData: setData
    });

    function setData(p_link, p_user, p_passwd) {
        db_link = p_link;
        if (db_link.substr(db_link.length - 1, 1) != "/") db_link = db_link + "/";
        usr = p_user;
        pwd = p_passwd;

    }

    function insertData(p_data) {
        var retVal = "";
        var xhr_options = {
            url: db_link + ".json",
            type: 'post',
            user: usr,
            password: pwd,
            responseTyppe: 'document',
            headers: { "Content-type": "application/json" },
            data: p_data
        };
        WinJS.xhr(xhr_options)
            .done(function complete(result) {
                retVal = result.responseText;
                retVal = JSON.parse(retVal);
                // Successful processing/ veiksmīga apstrāde
                // MyAppCode.setData(retVal);
            }, function error(result) {
                // Handle error/ apstrādā kļūdu
                // MyAppCode.setDataErr(result);
            });
    }
    function updateData(p_id, p_data) {
        var retVal = "";
        var xhr_options = {
            url: db_link + p_id,
            type: 'put',
            user: usr,
            password: pwd,
            headers: { "Content-type": "application/json" },
            data: p_data
        };
        WinJS.xhr(xhr_options)
            .done(function complete(result) {
                retVal = result.responseText;
                retVal = JSON.parse(retVal);
                // Successful processing/ veiksmīga apstrāde
                // MyAppCode.setData(retVal);
            }, function error(result) {
                // Handle error/ apstrādā kļūdu
                // MyAppCode.setDataErr(result);
            });
    }
    function deleteData(p_id) {
        var retVal = "";
        var xhr_options = {
            url: db_link + p_id,
            type: 'delete',
            user: usr,
            password: pwd,
            responseTyppe: 'document',
            headers: { "Content-type": "application/json" },
        };
        WinJS.xhr(xhr_options)
            .done(function complete(result) {
                retVal = result.responseText;
                retVal = JSON.parse(retVal);
                // Successful processing/ veiksmīga apstrāde
                // MyAppCode.setData(retVal);
            }, function error(result) {
                // Handle error/ apstrādā kļūdu
                // MyAppCode.setDataErr(result);
            });
    }
    function getData(p_id) {
        var retVal = "";
        var xhr_options = {
            url: db_link + p_id,
            type: 'GET',
            user: usr,
            password: pwd,
            responseTyppe: 'document'
        };
        WinJS.xhr(xhr_options)
            .done(function complete(result) {
                retVal = result.responseText;
                retVal = JSON.parse(retVal);
                // Successful processing/ veiksmīga apstrāde
                // MyAppCode.setData(retVal);

            }, function error(result) {
                // Handle error/ apstrādā kļūdu
                // MyAppCode.setDataErr(result);
            });
    }

})();
