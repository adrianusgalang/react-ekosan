//model/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var KosanSchema = new Schema({
 nama: String,
 lokasi: String,
 deskripsi: String,
 gambar: String,
 harga: String,
 fasilitas: String,
 kontak: String
},{collection: 'data_kosan'});
//export our module to use in server.js
module.exports = mongoose.model('data_kosan', KosanSchema);
