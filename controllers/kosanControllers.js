var kosan = require('../model/data_kosan');

exports.select_kosan = function(req,res) {
  kosan.find({})//Sama kaya select di mySQL
    .exec(function (err, results) {
      if(err){
        res.send(err)
      }else{
        res.json(results)//response atau kembalian JSON
      }
    });
}

exports.kosan_byId = function(req,res) {
  var idKosan = req.body.idKosan
  kosan.find({'_id':idKosan})//Sama kaya select di mySQL
    .exec(function (err, results) {
      if(err){
        res.send(err)
      }else{
        res.json(results)//response atau kembalian JSON
      }
    });
}

exports.add_kosan = function(req,res) {
  var input_kosan = new kosan({
    nama: req.body.nama,
    lokasi: req.body.lokasi,
    deskripsi: req.body.deskripsi,
    gambar:  req.body.gambar,
    harga: req.body.harga,
    fasilitas: req.body.fasilitas,
    kontak:  req.body.kontak
  })

  input_kosan.save(function (err){
    if(err){
      res.json(err)
    }else{
      res.json({pesan:'komentar berhasil ditambahkan'})
    }
  })
}

exports.update_kosan = function(req,res) {
  kosan.update (
      { _id: req.body.id },
      { $set : {
        nama: req.body.nama,
        lokasi: req.body.lokasi,
        deskripsi: req.body.deskripsi
       } },
      function( err, result ) {
          if ( err ) {
            res.json(err)
          }else{
            res.json({pesan:'update berhasil'})
          };
      }
  );
}

exports.delete_byId = function(req,res) {
  kosan.remove (
      { _id: req.body.idKosan },
      function( err, result ) {
          if ( err ) {
            res.json(err)
          }else{
            res.json({pesan:'delete berhasil'})
          };
      }
  );
}
