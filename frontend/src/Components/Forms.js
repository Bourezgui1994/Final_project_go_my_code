import React from 'react'

const Forms = () => {
    return (
        <div>
        <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center text-center mt-5">
          <h1 className="titre3">
            Si vous avez des question n'hésiter pas à nous contacter
          </h1>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label for="exampleInputFirstName"> Prénom </label>
                <input type="text" className="form-control" id="exampleInputFirstName"/>
              </div>
              <div className="form-group">
                <label for="exampleInputLasttName"> Nom </label>
                <input type="text" className="form-control" id="exampleInputLastName"/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1"> Adresse email</label>
                <input type="email" className="form-control" id="exampleInputEmail1"aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Mot de passe </label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">
                  Regarde moi
                </label>
              </div>
              <button type="submit" className="btn btn-warning">Envoyer</button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
        </div>
    )
}

export default Forms;
