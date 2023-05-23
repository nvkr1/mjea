import React from "react";
import { Link } from "react-router-dom";
import contactsData from "./ContactsData";

const Contacts = () => {
  return (
    <section className='our-service-wrapper mb-80 bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className=''>
                <h3>Lorem ipsum</h3>
                <span className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at libero <br />
                  vel ligula efficitur dignissim. Sed vitae hendrerit tortor.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          {contactsData.map((data) => (
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
        </div>
      </div>
    </section>
  );
};

export default Contacts;
