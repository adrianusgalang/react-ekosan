import React from 'react'
import { Link } from 'react-router'
import axios from 'axios';

class Kos extends React.Component {

  constructor(props) {
    super(props);
    this.loadCommentsFromServer();

  }

  loadCommentsFromServer() {
    axios.post('http://localhost:3001/api/delete_byId', {idKosan: this.props.params.id_kosan})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location = "http://localhost:8080";
  }
  render() {


    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">E-Kosan
                      <small> Tambah Kosan</small>
                  </h1>
              </div>
          </div>
          Data berhasil di hapus
          <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p>Copyright &copy; E-KosanKu</p>
                  </div>
              </div>
          </footer>
          </div>
         </div>
    )
  }
}

class Header extends React.Component {
   render() {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">E-Kosan</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li className="active"><Link to="/kosan" activeClassName="active">Daftar Kosan<span className="sr-only">(current)</span></Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                  </ul>
              </div>
            </div>
        </nav>
      );
   }
}

export default Kos;
