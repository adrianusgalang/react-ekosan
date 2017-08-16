import React from 'react'
import { Link } from 'react-router'
import axios from 'axios';

class Kos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadCommentsFromServer() {
    axios.post('http://localhost:3001/api/kosan_byId', {idKosan: this.props.params.id_kosan})
    .then(res => {
      this.setState({ data: res.data });
      })
    }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const gambar = event.target;
    const harga = target.name;
    const fasilitas = target.value;
    const kontak = event.target;
    this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
    var lnama = document.getElementById("lnama").value;
    var llokasi = document.getElementById("llokasi").value;
    var ldeskripsi = document.getElementById("ldeskripsi").value;
    var lgambar = document.getElementById("lgambar").value;
    var lharga = document.getElementById("lharga").value;
    var lfasilitas = document.getElementById("lfasilitas").value;
    var lkontak = document.getElementById("lkontak").value;


    if(this.state.nama!=null){
      lnama = this.state.nama;
    }
    if(this.state.lokasi!=null){
      llokasi = this.state.lokasi;
    }
    if(this.state.deskripsi!=null){
      ldeskripsi = this.state.deskripsi;
    }
    if(this.state.gambar!=null){
      lgambar = this.state.gambar;
    }
    if(this.state.harga!=null){
      lharga = this.state.harga;
    }
    if(this.state.fasilitas!=null){
      lfasilitas = this.state.fasilitas;
    }
    if(this.state.kontak!=null){
      lkontak = this.state.kontak;
    }

    //alert('A name was submitted: ' + lnama + llokasi + ldeskripsi + this.props.params.id_kosan);
    axios.post('http://localhost:3001/api/update_kosan', {
        id:  this.props.params.id_kosan,
        nama:  lnama,
        lokasi: llokasi,
        deskripsi: ldeskripsi,
        gambar:  lgambar,
        harga: lharga,
        fasilitas: lfasilitas,
        kontak:  lkontak
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
      window.location = "http://localhost:8080";
  }
  render() {
    let kosanNodes = this.state.data.map(kosan => {
    return (
      <div>
      <section id="tambah_kosan">
        <div className="container">
          <h2 className="text-center">Edit Kosan</h2>
          <hr className="star-primary"/>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form name="sentMessage" id="contactForm" novalidate onSubmit={this.handleSubmit}>
              <input type="hidden" id="lnama" value = {kosan.nama}/>
              <input type="hidden" id="llokasi" value = {kosan.lokasi}/>
              <input type="hidden" id="ldeskripsi" value = {kosan.deskripsi}/>
              <input type="hidden" id="lgambar" value = {kosan.gambar}/>
              <input type="hidden" id="lharga" value = {kosan.harga}/>
              <input type="hidden" id="lfasilitas" value = {kosan.fasilitas}/>
              <input type="hidden" id="lkontak" value = {kosan.kontak}/>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Nama</label>
                    <input className="form-control" name="nama" id="nama" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.nama}  data-validation-required-message="Silahkan masukan nama kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Lokasi</label>
                    <input className="form-control" name="lokasi" id="lokasi" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.lokasi}  data-validation-required-message="Silahkan masukan lokasi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Deskripsi</label>
                    <input className="form-control" name="deskripsi" id="deskripsi" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.deskripsi}  data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Gambar</label>
                    <input className="form-control" name="gambar" id="gambar" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.gambar}  data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Harga</label>
                    <input className="form-control" name="harga" id="harga" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.harga}  data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Fasilitas</label>
                    <input className="form-control" name="fasilitas" id="fasilitas" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.fasilitas}  data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Kontak</label>
                    <input className="form-control" name="kontak" id="kontak" value={this.state.value} onChange={this.handleChange} type="text" placeholder={kosan.kontak}  data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br/>
                <div id="success"></div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success btn-lg">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
    })

    return (
      <div>
        <Header/>
        {kosanNodes}
      </div>
    )
  }
}

class Header extends React.Component {
   render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <a className="navbar-brand" href="#page-top">E-Kosan</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Daftar Kosan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tambah_kosan">Tambah Kosan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      );
   }
}

export default Kos;
