import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = ({ data }) => {
  return (
    <section className="mb-4">
      <div className="row d-flex justify-content-center text-white">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4">{data.title}</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0 ">{data.description}</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 text-white">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3 text-white">
            <i className="fas fa-quote-left pe-2 text-white"></i>Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quod eos id officiis
            hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star-half-alt fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 text-white">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3 text-white">
            <i className="fas fa-quote-left pe-2 text-white"></i>Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid commodi.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 text-white">John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3 text-white">
            <i className="fas fa-quote-left pe-2 text-white"></i>At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="far fa-star fa-sm text-warning "></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
