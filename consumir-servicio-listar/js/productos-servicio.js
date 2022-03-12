
let listar_productos = async() => {
    let productos;
    await axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character/?page=1',
            responseType: 'json'
        }).then(function(res) {
            productos = res.data;
        })
        .catch(function(err) {
            console.log(err);
        });

    return productos.results;
};