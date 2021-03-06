import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import HoverLoader from '../components/HoverLoader';
import Layout from '../container/Layout'
import { AddHow } from '../store/action/hollyhouse.action';

export default function Addhow() {

  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  const [Data, setData] = useState({
    email: "",
    name: "",
    mobile: "",
    org_name: "",
    org_desc: ""
  });

  const [File, setFile] = useState(null);

  const handelImage = (e) => {
    let fileData = e.target.files[0];
    if (fileData.type === "image/jpg" || fileData.type === "image/jpeg" || fileData.type === "image/png" || fileData.type === "image/img") {
      setFile(fileData);
    } else {
      toast.warning("File format not allowd");
    }
  }


  const AddData = async (formData) => {
    const resp = await dispatch(AddHow(formData));
    if (resp) {
      setData({
        email: "",
        name: "",
        mobile: "",
        org_name: "",
        org_desc: ""
      })
      setFile(null)
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    if (!Data.email || !Data.name || !Data.mobile || !Data.org_name) {
      toast.success("All fields required");
      return;
    }

    form_data.append('email', Data.email);
    form_data.append('name', Data.name);
    form_data.append('mobile', Data.mobile);
    form_data.append('org_name', Data.org_name);
    form_data.append('org_desc', Data.org_desc);
    if (File) {
      form_data.append('file', File);
    }

    setLoading(true);
    AddData(form_data);
  }

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      {
        Loading ? <HoverLoader /> : ""
      }
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  {/* <h4 className="card-title">jquery-steps wizard</h4> */}
                  <form id="example-form" onSubmit={onSubmit}>
                    <h3 id="steps-uid-0-h-0" tabIndex={-1} className="title current">Create  How</h3>
                    <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" className="body current" aria-hidden="false">
                      <div className="form-group">
                        <label>Email address*</label>
                        <input type="email" value={Data.email} className="form-control" name="email" onChange={onChange} placeholder="John@example.com" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label>Name Of Admin*</label>
                        <input type="text" name="name" value={Data.name} className="form-control" onChange={onChange} placeholder="John" required />
                      </div>
                      <div className="form-group">
                        <label>Mobile Number*</label>
                        <input type="number" value={Data.mobile} name="mobile" className="form-control" onChange={onChange} placeholder="91+485818181" required />
                      </div>

                      <div className="form-group">
                        <label>Organization Name*</label>
                        <input type="text" value={Data.org_name} className="form-control" name="org_name" onChange={onChange} placeholder="emample" required />
                      </div>

                      <div className="form-group">
                        <label>Organization Of Admin*</label>
                        <textarea type="text" value={Data.org_desc} className="form-control" name="org_desc" onChange={onChange} placeholderstyle={{ resize: 'none' }} rows="4" placeholder="Organization description" />
                      </div>

                      <div className="form-group">
                        <label>Upload Organization Logo (jpg,img,png,jpeg)</label>
                        <input type="file" onChange={handelImage} className="form-control" name="file" placeholder="Upload Organization logo"  />
                      </div>
                    </section>
                    <button className="btn btn-primary btn-block">Create</button>
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
