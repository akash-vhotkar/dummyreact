import React from 'react'
import Layout from '../container/Layout'

export default function Addhow() {
    return (
        <React.Fragment>
        <Layout>
            <div className="content-wrapper">
                
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">jquery-steps wizard</h4>
              <form id="example-form" action="#">
                <div role="application" className="wizard clearfix" id="steps-uid-0"><div className="steps clearfix"><ul role="tablist"><li role="tab" className="first current" aria-disabled="false" aria-selected="true"><a id="steps-uid-0-t-0" href="#steps-uid-0-h-0" aria-controls="steps-uid-0-p-0"><span className="current-info audible">current step: </span><span className="number">1.</span> Account</a></li><li role="tab" className="disabled" aria-disabled="true"><a id="steps-uid-0-t-1" href="#steps-uid-0-h-1" aria-controls="steps-uid-0-p-1"><span className="number">2.</span> Profile</a></li><li role="tab" className="disabled" aria-disabled="true"><a id="steps-uid-0-t-2" href="#steps-uid-0-h-2" aria-controls="steps-uid-0-p-2"><span className="number">3.</span> Bank Info</a></li><li role="tab" className="disabled last" aria-disabled="true"><a id="steps-uid-0-t-3" href="#steps-uid-0-h-3" aria-controls="steps-uid-0-p-3"><span className="number">4.</span> Finish</a></li></ul></div><div className="content clearfix">
                    <h3 id="steps-uid-0-h-0" tabIndex={-1} className="title current">Account</h3>
                    <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" className="body current" aria-hidden="false">
                      <h3>Account</h3>
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto'}} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto'}} />
                      </div>
                    </section>
                    <h3 id="steps-uid-0-h-1" tabIndex={-1} className="title">Profile</h3>
                    <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1" className="body" aria-hidden="true" style={{display: 'none'}}>
                      <h3>Profile</h3>
                      <div className="form-group">
                        <label>First name</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter first name" />
                      </div>
                      <div className="form-group">
                        <label>Last name</label>
                        <input type="password" className="form-control" placeholder="Last name" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
                      </div>
                      <div className="form-group">
                        <label>Profession</label>
                        <input type="password" className="form-control" placeholder="Profession" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
                      </div>
                    </section>
                    <h3 id="steps-uid-0-h-2" tabIndex={-1} className="title">Comments</h3>
                    <section id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2" className="body" aria-hidden="true" style={{display: 'none'}}>
                      <h3>Comments</h3>
                      <div className="form-group">
                        <label>Comments</label>
                        <textarea className="form-control" rows={3} defaultValue={""} />
                      </div>
                    </section>
                    <h3 id="steps-uid-0-h-3" tabIndex={-1} className="title">Finish</h3>
                    <section id="steps-uid-0-p-3" role="tabpanel" aria-labelledby="steps-uid-0-h-3" className="body" aria-hidden="true" style={{display: 'none'}}>
                      <h3>Finish</h3>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          I agree with the Terms and Conditions.
                          <i className="input-helper" /></label>
                      </div>
                    </section>
                  </div><div className="actions clearfix"><ul role="menu" aria-label="Pagination"><li className="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Previous</a></li><li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem">Next</a></li><li aria-hidden="true" style={{display: 'none'}}><a href="#finish" role="menuitem">Finish</a></li></ul></div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
            </div>
        </Layout>
    </React.Fragment>
    )
}
