import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const ActivateAccount = () => {
  const router = useRouter();

  const { tokenId } = router.query;
  useEffect(() => {
    const fetchUser = async () => {
      if (tokenId) {
        console.log("hola munso");
        const response = await fetch(
          `http://localhost:8080/auth/local/activate-account/${tokenId}`
        );
        if (response.ok) {
          const { token, profile } = await response.json();
          Cookies.set(
            "userSession",
            JSON.stringify({
              token,
              name: profile.firstName,
              email: profile.email,
            })
          );
        } else {
          alert("verify failed");
        }
      }
    };
    fetchUser();
  }, [tokenId]);

  const handleClick = () => {
    router.push("/books");
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center text-white">
          <h3>Your account has been activated!</h3>
          <p>You are also already logged in. Feel free to start using Booky!</p>
          <Button className="text-white" onClick={handleClick}>
            {" "}
            Explore more books <ArrowRight />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
