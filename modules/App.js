import React from 'react'
import { Link } from 'react-router'
import axios from 'axios';

class Kosan extends React.Component {
  constructor(props) {
  super(props);
  this.state = { data: [] };
  this.loadKosanFromServer = this.loadKosanFromServer.bind(this);

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
    //alert('A name was submitted: ' + this.state.nama + this.state.lokasi + this.state.deskripsi + this.state.gambar + this.state.harga + this.state.fasilitas + this.state.kontak);
    axios.post('http://localhost:3001/api/add_kosan', {
        nama:  this.state.nama,
        lokasi: this.state.lokasi,
        deskripsi: this.state.deskripsi,
        gambar:  this.state.gambar,
        harga: this.state.harga,
        fasilitas: this.state.fasilitas,
        kontak:  this.state.kontak
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
  loadKosanFromServer() {
    axios.get('http://localhost:3001/api/kosan')
    .then(res => {
    this.setState({ data: res.data });
    })
  }

  componentDidMount() {
    this.loadKosanFromServer();
    setInterval(this.loadKosanFromServer, 2000);
  }

  render() {
    let kosanNodes = this.state.data.map(kosan => {
    return (
      <div>
        <div className="col-sm-4 portfolio-item">
          <div className="portfolio-link" href={"#portfolioModal"+kosan._id} data-toggle="modal">
            <div className="caption">
              <div className="caption-content">
                <i className="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={kosan.gambar} alt=""/>
            <div>
                 {kosan.nama}
            </div>
            <div>
                 {kosan.lokasi}
            </div>
          </div>
         </div>
         <Link to={"/edit/"+kosan._id} className="btn btn-success">Edit Kosan <span className="glyphicon glyphicon-chevron-right"></span></Link>
         <hr/>

      </div>
    )
    })

    let detailKosan = this.state.data.map(kosan => {
    return (
      <div>
        <div className="portfolio-modal modal fade" id={"portfolioModal"+kosan._id} tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2>{kosan.nama}</h2>
                      <hr className="star-primary"/>
                      <img className="img-fluid img-centered" src={kosan.gambar} alt=""/>
                      <p>{kosan.deskripsi}</p>
                      <ul className="list-inline item-details">
                        <li>Lokasi:
                          <strong>
                            {kosan.lokasi}
                          </strong>
                        </li>
                        <li>Harga:
                          <strong>
                            {kosan.harga}
                          </strong>
                        </li>
                        <li>Fasilitas:
                          <strong>
                            {kosan.fasilitas}
                          </strong>
                        </li>
                        <li>Kontak:
                          <strong>
                            {kosan.kontak}
                          </strong>
                        </li>
                      </ul>
                      <button className="btn btn-success" type="button" data-dismiss="modal">
                        <i className="fa fa-times"></i>
                        Close</button>
                        <Link to={"/delete/"+kosan._id} className="btn btn-success">Delete Kosan <span className="glyphicon glyphicon-chevron-right"></span></Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    })
    return (
      <div>
        <Header/>
        <header className="masthead">
          <div className="container">
            <img className="img-fluid" src="https://www.carajadikaya.com/wp-content/uploads/2016/07/tips-bisnis-kos-kosan.jpg" alt=""/>
            <div className="intro-text">
              <span className="name">E-Kosan</span>
              <hr className="star-light"/>
              <span className="skills">Cari kosan yang kamu inginkan</span>
            </div>
          </div>
        </header>

        <section id="portfolio">
          <div className="container">
            <h2 className="text-center">Daftar Kosan</h2>
            <hr className="star-primary"/>
            <div className="row">
            {kosanNodes}

            </div>
          </div>
        </section>

        <section id="tambah_kosan">
          <div className="container">
            <h2 className="text-center">Tambah Kosan</h2>
            <hr className="star-primary"/>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" novalidate onSubmit={this.handleSubmit}>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Nama</label>
                      <input className="form-control" name="nama" id="nama" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Nama kosan" required data-validation-required-message="Silahkan masukan nama kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Lokasi</label>
                      <input className="form-control" name="lokasi" id="lokasi" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Lokasi kosan" required data-validation-required-message="Silahkan masukan lokasi kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Deskripsi</label>
                      <input className="form-control" name="deskripsi" id="deskripsi" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Deskripsi kosan" required data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Gambar</label>
                      <input className="form-control" name="gambar" id="gambar" value={this.state.value} onChange={this.handleChange} type="text" placeholder="url gambar" required data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Harga</label>
                      <input className="form-control" name="harga" id="harga" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Harga kosan perbulan" required data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Fasilitas</label>
                      <input className="form-control" name="fasilitas" id="fasilitas" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Fasilitas kosan" required data-validation-required-message="Silahkan masukan deskripsi kosan."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Kontak</label>
                      <input className="form-control" name="kontak" id="kontak" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Kontak anda" required data-validation-required-message="Silahkan masukan deskripsi kosan."/>
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

        <section className="success" id="about">
          <div className="container">
            <h2 className="text-center">About</h2>
            <hr className="star-light"/>
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>


        <div className="scroll-top d-lg-none">
          <a className="btn btn-primary page-scroll" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
        {detailKosan}
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

export default Kosan;
