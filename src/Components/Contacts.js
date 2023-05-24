import React from "react";
import { Link } from "react-router-dom";
import contactsData from "./ContactsData";

import "../assets/css/map.css";

const Contacts = () => {
  return (
    <section className='our-service-wrapper bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className=''>
                <h3>ХОЛБОО БАРИХ</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          {contactsData.slice(0, 1).map((data) => (
            <div className='col-xl-4 col-md-6 col-12' key={data.id}>
              <div className='single-service-card'>
                <div className='content'>
                  <div className='icon-title'>
                    <div className='icon'>
                      <img src={data.img} className='w-10' />
                    </div>
                    <div className='service-title'>
                      <h6>
                        <Link to='/servicesDetails'>{data.title}</Link>
                      </h6>
                    </div>
                  </div>
                  <p className='mt-10'>{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {contactsData.slice(1, 3).map((data) => (
            <div className='col-xl-4 col-md-6 col-12' key={data.id}>
              <div className='single-service-card'>
                <div className='content'>
                  <div className='icon-title'>
                    <div className='icon'>
                      <img src={data.img} className='w-10' />
                    </div>
                    <div className='service-title'>
                      <h6>
                        <Link to='/servicesDetails'>{data.title}</Link>
                      </h6>
                    </div>
                  </div>
                  <p className='mt-10'>{data.desc}</p>
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class='container section-padding px-2'>
        <div class=''>
          <iframe
            class='google-map'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=central tower&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
        </div>
        <style></style>
      </div>
    </section>
  );
};

export default Contacts;
