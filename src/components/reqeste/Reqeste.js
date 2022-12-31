export const Reqeste =()=>{
    return (
        <div id="contact" className="reqeste">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Reqeste A call back</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form id="cochang" className="form_main">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Name"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Phone number"
                      type="text"
                      name="Phone number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Message"
                      type="text"
                      name="Message"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}