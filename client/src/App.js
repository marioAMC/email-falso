import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: "",
      from: "",
      subject: "",
      content: "",
      error: false,
      isSending: false,
      isShowingMessage: false,
    };
  }

  handleChange = evt => {
    let { name, value } = evt.target;
    this.setState({ [name]: value, error: false });
  };

  sendEmail = e => {
    
    e.preventDefault();
    const { to, from, subject, content } = this.state;

    if (to === "" || from === "" || subject === "" || content === "") {
      this.setState({ error: true });
      return;
    }
    this.setState({ isSending: true });

    let body = {
      to,
      from,
      subject,
      content
    };

    fetch("/sendEmail", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(res => res.text())
    .then(text => {
      this.checkResponse(text);
      })
    .catch(e => console.log(e));


  };


  checkResponse = (response) => {
    if(response === "OK"){
      this.setState({ isSending: false, isShowingMessage: true }, () => {
        setTimeout( ()=> {
          this.setState({ isShowingMessage: false, to: "", from: "", subject: "", content: "" })
        }, 3000);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form>
        <Grid container justify="center" alignItems="center" alignContent="center" spacing={24}>
          <Grid item xs={12}>
            <p className="title">email-falso</p>
            <p className="disclaimer">no me hago responsable por el mal uso de esta herramienta. solo la desarrollé por diversión. no hice nada malo con esto.</p>
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="to">Para: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="to"
              name="to"
              value={this.state.to}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="from">De: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="from"
              name="from"
              value={this.state.from}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="subject">Asunto: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="subject"
              name="subject"
              value={this.state.subject}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea
              onChange={this.handleChange}
              id="content"
              name="content"
              value={this.state.content}
            />
          </Grid>
          <Grid item xs={12}>
            <button type="submit" disabled={this.state.isSending} onClick={this.sendEmail}>enviar</button>
          </Grid>
          <Grid item xs={12}>
            {this.state.error ?  <p className="error">debes rellenar todos los campos, no te pases de listo.</p> :
            this.state.isShowingMessage ? <p className="success">se envió correctamente</p> : null
          }
          </Grid>
        </Grid>
        </form>
      </div>
    );
  }
}

export default App;
